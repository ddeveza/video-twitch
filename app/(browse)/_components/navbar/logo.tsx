/** @format */

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex border-red-500 border-2 items-center gap-x-4">
        <div className="bg-white rounded-full p-1">
          <Image
            src="/spooky.svg"
            alt="gamehubg"
            height={32}
            width={32}
          />
        </div>
        <div className={cn(font.className)}>
          <p className="text-lg font-semibold">DevGamehub</p>
          <p className="text-xs text-muted-foreground">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};