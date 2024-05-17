import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import Navmain from "./components/Navmain";
import Footmain from "./components/Footmain";

export default function Page() {
  return (
    <div>
      <div className="lg:mx-80">
        <Navmain />
        {/*กล่อง Medium*/}
        <div className="bg-[#FFC017] rounded-2xl">
          <div className="flex justify-between items-center py-6">
            <div className="pl-14">
              <h1 className="text-6xl md:7xl ma-w-xl font-serif w-11/12 sm:w-9/12 mb-6">
                <span className="mr-4 underline decoration-black decoration-4">
                  Medium
                </span>
                <span>
                  <br /> is a place to write, read and connect.
                </span>
              </h1>
              <h2 className="max-sm:hidden md:w-9/12 lg:w-9/12 mb-6">
                It's easy and free to post your thinking on any topic and
                connect with millons readers.
              </h2>
              <button className="border border-black bg-white px-4 py-2 rounded-full font-medium active:scale-90 hover:bg-black hover:text-white duration-200">
                Start Writing
              </button>
            </div>
            <div className="max-sm:hidden drop-shadow-2xl ">
              <Image src="/M.png" width={500} height={500} alt="M-right" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Card />
        </div>
        <Footmain />
      </div>
    </div>
  );
}
