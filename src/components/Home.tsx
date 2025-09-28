"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I’m <span className="text-blue-500">Bryan Santosa</span>
      </motion.h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-600">
        3rd-year Computer Science student at Binus University. Passionate about
        <span className="font-semibold"> AI</span> &{" "}
        <span className="font-semibold">Full-Stack Development</span>.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
