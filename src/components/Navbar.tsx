import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-row">
      <Link
        href={"/"}
        className="flex px-2 pb-6 pt-6 lg:static lg:w-auto  "
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
      <div className="flex px-2 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <span>Connect</span>
      </div>
    </div>
  );
};
