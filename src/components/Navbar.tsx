import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Link
        href={"/"}
        className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-6 lg:static lg:w-auto  "
      >
        Frame Grant
        {/* <Image
          src="/FG-logo.webp"
          alt="Next.js Logo"
          width={64}
          height={64}
          priority
        /> */}
      </Link>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <span>Wallet Here</span>
      </div>
    </div>
  );
};
