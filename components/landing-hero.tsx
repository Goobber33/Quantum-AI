"use client";

import { useAuth } from "@clerk/nextjs";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl scpace-y-5 font-extrabold">
        <h1>
            The Best AI Tool for
        </h1>
      </div>
    </div>
  );
};