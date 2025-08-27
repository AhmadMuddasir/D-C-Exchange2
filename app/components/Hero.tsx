"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { SecondaryButton } from "./Button";
// router is imported from nextNavigation
import { useRouter } from "next/navigation";

const Hero = () => {
     const router = useRouter();
  const session = useSession();
  return (
    <div className="text-6xl font-medium">
      <span className="">The Indian Cryptocurrency</span>
      <span className="text-blue-500 pl-4">Revolution</span>
      <div className="flex justify-center pt-4 text-2xl">
        create a frictionless wallet from india with just a goggle Account
        <br />
      </div>
      <div className="flex justify-center pt-2 text-2xl text-slate-500">
        Convert your inr into Crytocurrency
      </div>
      <div className="pt-8 flex justify-center">
        {session.data?.user ? (
          <SecondaryButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to dashboard
          </SecondaryButton>
        ) : (
          <SecondaryButton
            onClick={() => {
              signIn("google");
            }}
          >
            Login with Google
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};

export default Hero;
