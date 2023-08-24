import Image from "next/image";
import { Youtube_logo, capa, hamburger } from "../public/assets/index";

export default function Home() {
  return (
    <main className="flex flex-row  justify-between bg-[#181818]">
      {/* ====================side bar =========================== */}
      <section className="bg-[#212121] h-screen  w-fit flex flex-col overflow-auto">
        <div className="p-5 flex gap-5  ">
          <Image src={hamburger} alt="menu" className="w-[24] h-[24]" />
          <Image src={Youtube_logo} alt="menu" className="w-[24] h-[24]" />
        </div>
        <div className=" p-5 ">
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Home</h3>
          </div>
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Explores</h3>
          </div>
          <div className="flex mt-5 ">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Shorts</h3>
          </div>
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Subscriptions</h3>
          </div>
        </div>
        <div className=" border border-1 mr-5 border-gray-600" />

        <div className=" p-5 ">
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Library</h3>
          </div>
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">History</h3>
          </div>
          <div className="flex mt-5 ">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Your videos</h3>
          </div>
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Watch later</h3>
          </div>
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Liked Videos</h3>
          </div>
          <div className="flex mt-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <h3 className=" text-white font-light text-lg ">Show more</h3>
          </div>
        </div>

        <div className=" border border-1 mr-5 border-gray-600" />

        <div className=" p-5 ">
          <h2 className="font-bold text-gray-600 text-xs"> SUBSCRIPTIONS</h2>
          <div className="flex mt-5">
            <Image
              src={capa}
              alt="menu"
              width={24}
              height={24}
              className=" rounded-full"
            />
            <h3 className=" text-white font-light text-lg  ml-3 ">
              Matheus Alexandre Dev
            </h3>
          </div>
        </div>
      </section>
      {/* ================================================= */}
      <div className="top-0 z-30 flex w-full items-start justify-between  ">
        <div className="border border-1 border-[#323232] mt-5 w-full ml-20 ">
          {" "}
          <div className="flex  justify-between">
            {" "}
            <h2 className="p-3 text-gray-600">Search</h2>
            <div className="bg-[#323232]  justify-center gap-2 p-2  ">
              <Image
                src={hamburger}
                alt="menu"
                className="w-5 h-5 mt-2 gap-3"
              />
            </div>
          </div>
        </div>
        <div className=" flex w-full  justify-end mt-5">
          <div className="flex gap-5 justify-center items-center mr-5">
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <Image src={hamburger} alt="menu" className="w-[24] h-[24] " />
            <Image
              src={capa}
              alt="menu"
              width={30}
              height={30}
              className=" rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
