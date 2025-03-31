// import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex items-center h-screen relative bg-cover"
      style={{ backgroundImage: "url('/assets/bg-explosion.png')" }}
    >
      {/* <div className="absolute right-10 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div> */}
      <div className="absolute right-10 md:right-50 bottom-0 z-[10]">
        <Image
          src="/assets/girl-dev-Photoroom.png"
          alt="bg-black"
          width={660}
          height={660}
          className="w-[300px] h-[300px] z-[1] md:h-[790px] md:w-[790px] drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
        />
      </div>
      <div className="flex flex-col gap-3 z-[10] pl-60 pt-20">
        <h1 className="text-[70px] text-white max-w-[600px]">
          Tranforming ideas into
          <span className="text-red-500"> Digital Reality</span>
          <p className="text-[26px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[550px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            nihil adipisci ab obcaecati nemo expedita culpa amet, consectetur,
            voluptate, incidunt odit provident velit itaque minima alias
            repellat dicta hic corporis?
          </p>
        </h1>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="rouded"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
