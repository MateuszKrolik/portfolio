"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "./animations";
import { skills } from "./homeData";

export function SkillsSection() {
  return (
    <section className="space-y-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="text-xs font-mono text-zinc-500 tracking-widest uppercase"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="glass rounded-xl p-5 space-y-3"
          >
            <p className="text-sm font-medium text-zinc-300">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Badge
                  key={s}
                  variant="secondary"
                  className="bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
