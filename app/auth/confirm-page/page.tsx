"use client";

import MarketingCarousel from "@/components/custom/auth/marketing-carousel";
import { useSearchParams } from "next/navigation";
import VerifyEmailCard from "@/components/custom/auth/verify-email-card";

export default function Page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  return (
    <div className="flex min-h-svh">
      <div className="flex-1 flex flex-col bg-gray-100">
        <h1 className="text-2xl font-bold mx-10 mt-10 mb-2">TradeU</h1>
        <MarketingCarousel />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <VerifyEmailCard email={email} />
      </div>
    </div>
  );
}
