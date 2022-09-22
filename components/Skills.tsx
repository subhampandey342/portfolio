import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  // const data:string = "./c.svg";
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left justify-center xl:space-y-0 items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill data="./c.svg" knowledge="60" name="C" />
        <Skill data="./c++.svg" knowledge="60" name="C++" />
        <Skill data="./html.svg" knowledge="70" name="HTML" />
        <Skill data="./css.svg" knowledge="65" name="CSS" />
        <Skill data="./java.svg" knowledge="65" name="JAVA" />
        <Skill data="./javascript.svg" knowledge="60" name="JAVASCRIPT" />
        <Skill data="./mysql.svg" knowledge="65" name="MYSQL" />
        <Skill data="./nextjs.svg" knowledge="65" name="NEXTJS" />
        <Skill data="./php.svg" knowledge="70" name="PHP" />
        <Skill data="./powerbi.svg" knowledge="75" name="POWER BI" />
        <Skill data="./python.svg" knowledge="60" name="PYTHON" />
        <Skill data="./react.svg" knowledge="65" name="REACT" />
      </div>
    </div>
  );
}

export default Skills;
