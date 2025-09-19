import React, { useState } from "react";
import { useToast } from "../components/ui/use-toast";

const Login: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    toast({
      title: "Login Attempt",
      description: `Email: ${email}`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0D] px-4">
      <div className="w-full max-w-md bg-[#1C1B29] rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gradient mb-6 text-center">
          Login to AgentForce
        </h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0A0A0D] border border-[#7C3AED] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0A0A0D] border border-[#7C3AED] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#0EA5E9] font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
