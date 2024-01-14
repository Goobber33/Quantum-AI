"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const ProModal = () => {
    return (
        <Dialog open>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        Upgrade to Genius
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}