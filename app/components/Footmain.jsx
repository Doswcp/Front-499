import React from "react";
import Link from "next/link";

export default function Footmain() {
  return (
    <div>
      <footer>
        <hr className="bg-[#757575] w-[95%] mt-12 mx-auto" />
        <div className="flex max-md:justify-center md:justify-end items-center">
          <ul className="max-md:grid max-lg:grid-cols-2 max-md:gap-5 md:flex md:gap-4 md:pr-5 py-12 text-sm text-[#757575]">
            <li>
              <Link href="#">
                <span className="hover:underline">Help</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Status</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Writers</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Blog</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Careers</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Privacy</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Terms</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="hover:underline">Knowable</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
