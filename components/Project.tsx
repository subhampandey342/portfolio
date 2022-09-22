import React from "react";
import { motion } from "framer-motion";

export default function Project(props: any) {
  return (
    <div>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={props.img}
          alt=""
          className="w-80 h-80 xl:w-80 xl:h-80 filter "
        />
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
          <h4 className="text-4xl font-semibold text-center">
            <span className="underline decoration-[#F7ABBA)/50 ">
              {props.number} of {props.total}
              {"  "}:
            </span>
            {"  "}
            {props.name}
          </h4>
          <p className="text-lg text-justify md:text-left">
            <p>{props.about}</p>
            <p>{props.tech} </p>
            <p>{props.link}</p>
          </p>
        </div>
      </div>
    </div>
  );
}
