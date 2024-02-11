import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Navbar />
      <div className="relative flex place-items-center border-4 border-white p-8 z-[-1] animate-moveAround">
        <span className="text-3xl">Frame Grant</span>
      </div>
      <div className="mb-4 grid text-center">ENTER</div>
    </main>
  );
}
