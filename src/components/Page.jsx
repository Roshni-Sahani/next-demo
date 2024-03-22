"use client";
import Image from "next/image";
// import beesimg from "../components/assets/images/beesimg.webp";
import React from "react";
import Button from "./Button";
import Link from "next/link";

// import img1 from "./public/assets/image/beesimg.webp";

const Page = () => {
  const data = [
    {
      text: "Roshni sahani",
    },
    {
      text: "Pooja singh",
    },
    {
      text: "Mohini jaat",
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center h-screen items-center">
      <div className=" flex items-center justify-center  gap-3 ">
        {data.map((mydata, index) => (
          <div
            key={index}
            className=" bg-[white] justify-center rounded-[10px] flex items-center h-[250px]  w-[250px] text-[#000] card font-bold"
          >
            <p>{mydata.text}</p>
          </div>
        ))}
      </div>
      <Link href={"/Contact"} className="text-white">
        <Button text="map btn" />
      </Link>
    </div>
  );
};

export default Page;
