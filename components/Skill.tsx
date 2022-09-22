import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

function Skill(props: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="group relative flex cursor-pointer">
        <img
          src={props.data}
          alt=""
          className="rounded-full border border-gray-500 object-cover w-10 h-10 xl:w-16 xl:h-16 filter group-hover:grayscal transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-400 w-10 h-10 xl:w-16 xl:h-16 rounded-full">
          <div className="flex items-center justify-center h-full">
            <p className="sm:text-base   md:text-xl  font-bold text-black opacity-100">
              {props.knowledge}%
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#EAB308] mt-2">{props.name}</p>
    </div>
  );
}

export default Skill;
