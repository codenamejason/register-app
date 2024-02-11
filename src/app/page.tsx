import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="relative flex place-items-center border-4 mt-32 lg:mt-0 border-white p-8 z-[-1] lg:animate-moveAround">
        <span className="text-3xl">Frame Grant</span>
      </div>
      <Link href={"/home"} className="mb-32 grid text-center">
        ENTER
      </Link>
    </div>
  );
}
