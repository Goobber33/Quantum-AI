import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai"

import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
};

async function openAiCallWithRetry(
    apiCall: () => Promise<any>,
    maxAttempts: number = 3,
    delay: number = 10000
): Promise<any> {
    let attempts = 0;
    let error: Error | null = null;

    while (attempts < maxAttempts) {
        try {
            return await apiCall();
        } catch (e) {
            if (e instanceof Error) {
                error = e;
            }
            attempts++;
            if (attempts >= maxAttempts) break;
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
        }
    }

    throw error;
}


export async function POST(request: Request) {
    try {
        const { userId } = auth();
        const body = await request.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial limit reached", { status: 403 });
        }

        const apiCall = () => openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });

        const response = await openAiCallWithRetry(apiCall);

        if (!isPro) {
            await increaseApiLimit();
        }

        return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
