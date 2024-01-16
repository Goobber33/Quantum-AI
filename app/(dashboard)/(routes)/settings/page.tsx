import { Heading } from "@/components/heading"
import { checkSubscription } from "@/lib/subscription"
import { Settings } from "lucide-react"

const SettingsPage = async () => {

    const isPro = await checkSubscription();

    return (
        <div>
            <Heading
                title="Settings"
                description="Manage your account settings."
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro ? "You are subscribed to the Pro plan." : "You are not subscribed to the Pro plan."}
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;