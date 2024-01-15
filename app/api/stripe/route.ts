import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings")

export async function GET() {
    try {

    } catch (error) {
        console.log("STRIPE_ERROR", error);
        return new NextResponse("Internal error,", { status: 500 });
    }
}