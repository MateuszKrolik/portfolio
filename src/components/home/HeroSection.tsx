"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "./animations";
import { basePath } from "@/lib/basePath";

export function HeroSection() {
  return (
    <section className="space-y-5">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="relative w-64 h-64 mx-auto lg:mx-0"
      >
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-500 via-cyan-400 to-blue-500 animate-spin animation-duration-[4s]" />
        <div className="absolute inset-0.5 rounded-full bg-[#09090b]" />
        <div className="absolute inset-0.75 rounded-full overflow-hidden">
          <Image
            src={`${basePath}/avatar.webp`}
            alt="Mateusz Krolik"
            width={80}
            height={80}
            loading="eager"
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="text-sm font-mono text-cyan-400 tracking-widest uppercase"
      >
        Software Engineer → AI/ML
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="text-5xl font-semibold tracking-tight leading-tight"
      >
        Mateusz Królik
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="text-zinc-400 text-lg max-w-xl leading-relaxed"
      >
        Software engineer with a background in distributed systems and cloud infrastructure,
        now specialising in AI/ML. Currently building financial systems for hospitality industry
        while completing a Masters Degree in AI and Machine Learning.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="flex gap-3 pt-2"
      >
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
        >
          View work
        </a>
        <a
          href="mailto:mateuszkrolik87@gmail.com"
          className="px-5 py-2.5 rounded-lg glass hover:bg-white/10 text-zinc-300 text-sm font-medium transition-colors"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="flex gap-4 pt-1"
      >
        <a
          href="https://www.linkedin.com/in/mateusz-królik-8b1862262"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <Image
            src={`${basePath}/linkedin.svg`}
            alt="LinkedIn"
            width={20}
            height={20}
            className="invert opacity-50 hover:opacity-100 transition-opacity"
          />
        </a>
        <a
          href="https://github.com/MateuszKrolik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <Image
            src={`${basePath}/github.svg`}
            alt="GitHub"
            width={20}
            height={20}
            className="invert opacity-50 hover:opacity-100 transition-opacity"
          />
        </a>
      </motion.div>
    </section>
  );
}
