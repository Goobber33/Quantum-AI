import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    const userApiLimit = await prismadb.userApiLimit

}
