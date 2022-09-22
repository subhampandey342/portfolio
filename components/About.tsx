import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col md:flex-row   relative h-screen text-center md:text-left md:flex-auto max-w-5xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="./full.png"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] mt-20 md:mt-0"
      />
      <div className="spacr-y-10 px-o md:px-10">
        <h4 className="text-3xl  px-0 md:px-10">
          Here is a{" "}
          <span className="underline decoration-[#f7ABBA]/50">little</span>{" "}
          background
        </h4>
        <motion.p
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-4xl text-justify text-base"
        >
          Hi, my name is subham pandey. I am fresher Looking job in IT Feald. My
          aim is to become full stack developer.I have completed my B.Tech in
          year 2020.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default About;
