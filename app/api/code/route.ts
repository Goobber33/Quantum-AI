import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
};

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Request timed out"));
        }, ms);

        promise.then(
            (response: T) => {
                clearTimeout(timer);
                resolve(response);
            },
            (error: any) => {
                clearTimeout(timer);
                reject(error);
            }
        );
    });
}

async function retryWithTimeout<T>(apiCall: () => Promise<T>, maxAttempts: number, delay: number, timeout: number): Promise<T> {
    let attempts = 0;
    let error;

    while (attempts < maxAttempts) {
        try {
            return await withTimeout(apiCall(), timeout);
        } catch (e) {
            error = e;
            attempts++;
            if (attempts >= maxAttempts) break;
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Exponential backoff
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

        const response = await retryWithTimeout(apiCall, 3, 1000, 5000); // 3 retries, 1-second initial delay, 5-second timeout

        if (!isPro) {
            await increaseApiLimit();
        }

        return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
