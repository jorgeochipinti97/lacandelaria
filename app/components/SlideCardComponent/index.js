import Image from "next/image";
import React from "react";

export const SlideCardComponent = ({ titulo, subtitulo, imagen, body }) => {
  return (
    <div className="w-full flex">
      <div className="flex justify-center items-center 	  ">
        <Image
          src={imagen}
          alt=""
          className="  rounded-lg "
          width={500}
          height={700}
        />
      </div>
      <div className=" items-center  md:flex hidden	 ">
        <div className="flex-col h-fit ">
          <p className="font-bold text-center text-4xl">{titulo}</p>
          <p className="font-extralight text-center text-md mt-2">{subtitulo}</p>
          <p className="font-light text-center md:text-2xl mt-2 mx-5">{body}</p>
        </div>
      </div>
    </div>
  );
};
