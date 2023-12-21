"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard">
                    <div className="flex items-center pl-3 mb-14">
                        <div className="relative w-20 h-20 mr-4">
                            <Image
                                fill
                                alt="Logo"
                                src="/logo.png"
                            />
                        </div>
                        <h1 className={cn ("text-2xl font-bold", montserrat.className)}>Genius</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
