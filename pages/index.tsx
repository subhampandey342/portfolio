import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(35,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 scroollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#EAB308]/80">
      <Head>
        <title>Subham's Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center scrollbar-hide">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
          <ArrowUpCircleIcon className="h-5 w-10 animate-bounce text-[#EAB308]  hover:rounded-full hover:text-[#EA4E15]" />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
