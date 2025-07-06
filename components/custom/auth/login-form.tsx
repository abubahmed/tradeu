"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Facebook } from "lucide-react";
import { useActionState } from "react";

const LoginForm = ({ login = true, onSubmit }: { login: boolean; onSubmit: any }) => {
  const [state, action] = useActionState(onSubmit, { error: undefined });
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className={cn("shadow-none border-none text-center w-[420px]")}>
        <CardHeader>
          <CardTitle className="text-2xl mb-2">{login ? "Login" : "Register"}</CardTitle>
          <CardDescription className="text-sm text-black">
            Enter your email below to {login ? "login to your account" : "register for an account"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={action}>
            <div>
              <Input type="email" placeholder="Email" className="shadow-sm" name="email" />
              <Input type="password" placeholder="Password" className="mt-2 shadow-sm" name="password" />
              {!login && (
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="mt-2 shadow-sm"
                  name="confirm-password"
                />
              )}
            </div>

            <Button type="submit" className="w-full mt-4">
              {login ? "Login" : "Register"} with Email
            </Button>
            {state.error && <p className="text-sm text-red-500 mt-2">{state.error}</p>}
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div>
            <Button className="w-full shadow-sm" variant="outline">
              <Facebook className="mr-2 h-4 w-4" /> Continue with Facebook
            </Button>
            <Button className="w-full mt-2 shadow-sm" variant="outline">
              <Github className="mr-2 h-4 w-4" /> Continue with GitHub
            </Button>
          </div>

          <div className="text-center text-sm">
            <p className="mt-6">
              {login ? "Don't" : "Already"} have an account?{" "}
              <a href={login ? "/auth/register" : "/auth/login"} className="underline">
                {login ? "Register" : "Login"} here
              </a>
            </p>

            {!login && (
              <p className="mt-2">
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
