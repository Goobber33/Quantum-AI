import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
    return (
        <div>
            <div className="h-full">
                <LandingNavbar />
                <LandingHero />
            </div>
        </div>
    );
}

export default LandingPage;