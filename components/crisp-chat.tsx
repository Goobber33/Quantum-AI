"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("49ed8e09-1ed8-4fe4-90ad-491bb683f95f");
    }, [])

    return null;

}