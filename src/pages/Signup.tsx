// import React, { useState } from "react";
// import { useToast } from "../components/ui/use-toast";

// const Signup: React.FC = () => {
//   const { toast } = useToast();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add your signup logic here
//     toast({
//       title: "Signup Attempt",
//       description: `Email: ${email}`,
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0A0A0D] px-4">
//       <div className="w-full max-w-md bg-[#1C1B29] rounded-xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-gradient mb-6 text-center">
//           Create Account
//         </h1>
//         <form className="space-y-4" onSubmit={handleSignup}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-[#0A0A0D] border border-[#7C3AED] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-[#0A0A0D] border border-[#7C3AED] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white font-bold rounded-lg hover:scale-105 transition-transform"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-400">
//           Already have an account?{" "}
//           <a href="/login" className="text-[#0EA5E9] font-semibold">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0D]">
      <div className="w-full max-w-md p-8 bg-[#1C1B29] rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gradient mb-6">Create Account</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Your Name" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter password" />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Re-enter password" />
          </div>

          <div>
            <Label htmlFor="role">Your Role / Interest</Label>
            <select id="role" className="w-full p-2 rounded-md bg-[#0A0A0D] text-white">
              <option value="">Select role</option>
              <option value="creator">AI Agent Creator</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="analyst">Data Analyst</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">I agree to the Terms & Conditions</Label>
          </div>

          <Button type="submit" className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
