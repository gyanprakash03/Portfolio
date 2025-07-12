// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 py-12 lg:my-16 relative text-center md:text-left">
      <div className="hidden lg:flex flex-col items-center absolute top-28 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-48 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="font-bold mb-5 text-[#92961b] text-2xl uppercase">
            Who I am?
          </p>
          <p className="text-base lg:text-lg leading-relaxed tracking-wide whitespace-pre-line font-medium mb-4 animate-text-fade">
            {personalData.description}
          </p>
        </div>
        <div className="order-1 lg:order-2 w-fit p-1 overflow-hidden rounded-md mx-auto">
          <div className="relative flex items-center justify-center">
            {/* Glowing rotating border */}
            <div
              className="absolute w-[180%] h-[180%] rounded-md animate-spin-slow pointer-events-none"
              style={{
                backgroundSize: "100% 100%",
                backgroundPosition: "0px 0px",
                backgroundImage:
                  "conic-gradient(from 3deg at 50% 50%, #FFFFFFFF 1%, #B5B2ECFF 13%, #4E64B8FF 25%, #1F2C5AFF 38%, #0D1224 50%, #1F2C5AFF 63%, #4E64B8FF 75%, #B5B2ECFF 88%, #FFFFFFFF 98%)",
              }}
            ></div>
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Gyan Prakash"
              className="rounded-md transition-all duration-500 cursor-pointer object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
