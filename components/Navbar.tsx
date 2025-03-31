import { Socials } from "@/constants";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white text-[45px]">
        Natalia <span className="font-thin">Parkhomenko</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-grov gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={30}
            height={30}
            className="invert brightness-[1000%] w-[30px] h-[30px] mt-[20px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
