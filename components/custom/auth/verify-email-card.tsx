import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const VerifyEmailCard = ({ email }: { email: string }) => {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className={cn("shadow-none border-none text-center w-[420px]")}>
        <CardHeader>
          <CardTitle className="text-2xl">Verify your Email Address</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-2">
            {" "}
            We sent a verification link to <span className="font-bold">{email}</span>
          </p>
          <p className="text-sm">
            Click on the link to complete the verification process, you might have to check your spam folder
          </p>
          <p className="mt-2 text-sm">
            <a href="/auth/login" className="underline">
              Return to Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmailCard;
