import LoginForm from "@/components/custom/auth/login-form";
import MarketingCarousel from "@/components/custom/auth/marketing-carousel";
import { handleLogin } from "./actions";

export default function Page() {
  return (
    <div className="flex min-h-svh">
      <div className="flex-1 flex flex-col bg-gray-100">
        <h1 className="text-2xl font-bold mx-10 mt-10 mb-2">TradeU</h1>
        <MarketingCarousel />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <LoginForm login={true} onSubmit={handleLogin} />
      </div>
    </div>
  );
}
