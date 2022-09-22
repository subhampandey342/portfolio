import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

function Projects(props: any) {
  const project = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen flex relative flex-col overflow-hidden text-center md:text-left justify-center xl:space-y-0 items-center scrollbar-hide">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#EAB308]/80 ">
        <Project
          img="./projectpic/airbnb.jpeg"
          number="1"
          total="3"
          name="Airbnb-clone"
          about="It is Airbnb simple frontend clone"
          tech="Techonology used Nextjs Tailwindcss"
          link="Link: github"
        />

        <Project
          img="./projectpic/tesla.jpeg"
          number="2"
          total="3"
          name="Tesla-clone"
          about="It is Airbnb simple frontend clone"
          tech="Techonology used Nextjs Tailwindcss"
          link="Link: github"
        />
        <Project
          img="./projectpic/powerbidashboard.jpeg"
          number="3"
          total="3"
          name="Power-bi"
          about="It is Airbnb simple frontend clone"
          tech="Techonology used Nextjs Tailwindcss"
          link="Link: github"
        />
      </div>
      <div className="w-full absolute  top-[38%] bg-[#F7ABBA]/10 left-0 h-[300px] -skew-y-12" />
    </div>
  );
}

export default Projects;
