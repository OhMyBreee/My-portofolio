"use client";

import { motion , AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
// Assuming Magic UI + Aceternity UI components are installed
import { Card } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
// import { RippleButton } from "@/components/ui/ripple-button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FlipWords } from "@/components/ui/flip-words";
// import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
// import profilePic from '@/app/profile.jpg'; 
import { useOutsideClick } from "@/hooks/use-outside-click";
import React, { useEffect, useId, useRef, useState } from "react";
import  ProgrammingSkills  from "@/components/ProgrammingSkills"
import  ToolsSkills  from "@/components/Tool"
import myPicture from '../../public/me.png';
import Image from 'next/image';
export default function Home() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();
  
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
 
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
 
  useOutsideClick(ref, () => setActive(null));
  return (
    <main className="bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a0a] min-h-screen text-gray-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-auto backdrop-blur-lg bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-orange-500">Bryan Santosa</h1>
          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div> */}
      {/* Hero */}
      <WavyBackground
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center h-screen px-6 w-screen 
                bg-aurora bg-[length:200%_200%] "
      colors = {["#141414","#FF6C00","#333333","#FFA500","#6B2400"]}
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-6 relative z-10 p-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-orange-500">Bryan Santosa</span>
        </h2>
        <p className="max-w-2xl text-lg">
          A Computer Science student passionate about
          <FlipWords words={["AI development.","Full-Stack development.", "Web 3.", "Competitive programming."]} className="text-white font-semibold" duration={1000}/>
          {/* <span className="font-semibold"> AI development</span> and
          <span className="font-semibold"> Full-Stack development</span>. */}
        </p>
        <a href="#skills"><ShimmerButton className=" bg-orange-500 text-white shadow-lg" >
          View my skills
        </ShimmerButton></a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-8 md:mt-0 relative z-10"
      >
        <Card className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-4 w-64 h-64 overflow-hidden relative ">
          <Image
            src={myPicture}
            alt="" // Alt text is required!
            className="object-cover rounded-full p-4"
            fill
          />
        </Card>
      </motion.div>

      {/* Optional glassy overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    </WavyBackground>

      {/* Skills */}
      <section
        id="about"
        className="py-24 px-6 w-full mx-auto bg-gradient-to-b from-[#000000] to-[#20160e] ">
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 px-6 w-full mx-auto bg-gradient-to-b from-[#20160e] to-[#9e6031] ">
        <ProgrammingSkills></ProgrammingSkills>
        <ToolsSkills></ToolsSkills>
      </section>


      {/* Projects */}
      <section
        id="projects"
        className="w-full mx-auto bg-gradient-to-b from-[#1d1612] to-[#060409] "
      >
        <div className="relative flex h-[50rem] w-full items-center justify-center overflow-hidden rounded-xl">
    {/* Background grid */}
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        // Subtle grid lines (gray on black)
        "[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] w-full p-0",
        "bg-gradient-to-b from-[#2a1b11] to-[#000000]"
      )}
    />

    {/* Dotted overlay */}
    {/* <div
      className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#3a3a3a_0.7px,transparent_0.7px)]",
        "opacity-60"
      )}
    /> */}

    {/* Radial gradient fade */}
    {/* <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black"></div> */}

    {/* Center text */}
    <section className="relative z-20 w-full">
      <h3 className=" bg-gradient-to-b from-orange-200 to-orange-500 bg-clip-text text-transparent py-8 text-4xl font-bold sm:text-7xl text-center mb-5">Projects</h3>
      <div className="w-full"> 
        {/* <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 "
          />
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            {/* <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button> */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[80%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
 
              <div className="overflow-y-scroll">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="group p-4 flex flex-col md:flex-row justify-between items-center 
                      rounded-xl cursor-pointer
                      bg-transparent hover:bg-white text-white hover:text-neutral-800"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white group-hover:text-neutral-800 text-center md:text-left transition-colors duration-300"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 group-hover:text-neutral-600 text-center md:text-left transition-colors duration-300"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>

      </div> 
    </section>
  </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 w-full mx-auto text-center bg-black">
        <h3 className="text-3xl font-bold mb-8 text-orange-400">Contact Me</h3>
        <p className="mb-6">Aspiring programmer based in Jakarta and Tangerang Selatan.</p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:bryan98market@gmail.com" className="hover:text-orange-400"><Mail /></a>
          <a href="https://instagram.com/breee.avi" target="_blank" className="hover:text-orange-400"><Instagram /></a>
          <a href="https://github.com/OhMyBreee" target="_blank" className="hover:text-orange-400"><Github /></a>
          <a href="https://www.linkedin.com/in/bryansantosa/" target="_blank" className="hover:text-orange-400"><Linkedin /></a>
          <a href="https://www.linkedin.com/in/bryansantosa/" target="_blank" className="hover:text-orange-400"><Linkedin /></a>
        </div>
        <ShimmerButton className=" bg-orange-500 text-white shadow-lg hover:bg-orange-600">
          Let’s Work Together
        </ShimmerButton>
      </section>
    </main>
  );
}

const cards = [
  {
    description: "React, Supabase, ShadCN, typescript, machine learning",
    title: "Water Conservation Platform",
    src: "./jernihLogo.svg",
    ctaText: "View",
    ctaLink: "https://jernih.vercel.app",
    content: () => {
      return (
        <>
          <p>
            This web-based application serves as a digital platform that enables users to quickly and easily report water pollution incidents through an intuitive reporting feature. Beyond reporting, it also provides credible, real-time information on water pollution cases — displayed in interactive maps — to raise public awareness and encourage environmental action.
          </p><br/>
          <p>
            In this project, i worked mainly on the original figma MVP, conservation feature, predictive model, and the prediction page.
          </p><br/>
        </>
      );
    },
  },
  {
    description: "Python , TensorFlow, Machine Learning",
    title: "Guitar Chord Recognizer",
    src: "./audio-lines.svg",
    ctaText: "View",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Have you ever wished your computer could understand music the way you do? This project brings that idea to life. Our AI-powered Guitar Chord Recognition system listens to audio recordings and identifies guitar chords in real time — from major and minor harmonies to complex 7th variations.

          Built with a Convolutional Recurrent Neural Network (CRNN), the system merges the strengths of CNNs for spatial pattern detection and LSTMs for temporal understanding, enabling it to analyze intricate sound patterns over time. The result is an intelligent model capable of distinguishing subtle differences between chords — even across electric and acoustic instruments.

          What sets this project apart is not just the accuracy of its predictions (over 94% test accuracy after hyperparameter tuning), but its potential impact. By transforming raw sound into structured musical knowledge, it opens a new way for beginners to learn, musicians to analyze, and researchers to innovate in the field of Music Information Retrieval.

          Seamlessly integrated with a Next.js frontend and a Flask-based backend, this app bridges human creativity with artificial intelligence — making musical learning more interactive, intuitive, and inspiring.
        </p>
      );
    },
  },
 
  {
    description: "Machine Learning, NLP, Mistral-7B",
    title: "Judol Promotion Detector",
    src: "/judol.jpeg",
    ctaText: "View",
    ctaLink: "",
    content: () => {
      return (
        <p>
          This is a research project conducted to see if large language model are able to recognize online gambling promotions within Trending Youtube Shorts comments during May of 2025. We did this by scraping the top 50 trending Youtube shorts in Indonesia for 1 week and trained several machine learning models like random forest, naive bayes, indoBERT and RoBERTa to see how they perform. I mainly contributed on the scraping, preprocessing like automatic labeling using Mistral-7B, training and evaluation. 
        </p>
      );
    },
  },
  {
    description: "yolo-v5, pytorch, python",
    title: "Computer Vision based thief alert",
    src: "/malingmotor.png",
    ctaText: "View",
    ctaLink: "",
    content: () => {
      return (
        <p>
          My team created this concept because we understand the unresting amount of motorcycle thief every year in Indonesia without the proper treatment or punishment. Our assumption is that many urban parts of Indonesia are an easy target due to the low trustability score of the surrounding police officer or security guards. This projects tries to modify the output from Yolo-v5 to send an alert whenever a person class object tramples over an area in the image, working like an alarm.
        </p>
      );
    },
  },
  {
    description: "HTML, CSS, JS",
    title: "DiamondCut Motors",
    src: "/DiamondCut Motors.png",
    ctaText: "View",
    ctaLink: "",
    content: () => {
      return (
        <p>
          This is my first vanilla HTML, CSS, JS project with the main goal of creating a fictional company called DiamondCut Motors website which promotes the cars they sell and all information needed for an amazing company website. This is only a frontend, so there are no real backend .
        </p>
      );
    },
  },
  {
    description: "HTML, CSS, JavaScript",
    title: "BitHub learning prototype",
    src: "/BitHub.jpg",
    ctaText: "View",
    ctaLink: "",
    content: () => {
      return (
        <p>
          This is my first vanilla HTML, CSS, JS project with a group of friends with the main goal of creating a prototype of a learning platform that is designed for computer science learning like algorithms and data structures. This is only a frontend, so there are no real backend .
        </p>
      );
    },
  },
];