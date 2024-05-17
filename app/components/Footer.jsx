import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex md:justify-between max-sm:justify-center max-sm:flex-wrap max-sm:py-4 items-center bg-[#FFFFFF]">
      <div>
        <Link href="/">
          <Image
            src="/Logo/medium-logo.png"
            width={176}
            height={44}
            alt="mediumlogo"
          />
        </Link>
      </div>
      <div className="flex gap-2 text-xs underline text-black max-sm:py-2 md:p-8">
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Terms</span>
        <span className="cursor-pointer">Privacy</span>
        <span className="cursor-pointer">Help</span>
        <span className="cursor-pointer">Teams</span>
        <span className="cursor-pointer">Press</span>
      </div>
    </footer>
  );
}
