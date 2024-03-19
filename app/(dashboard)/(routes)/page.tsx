import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
