"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "./animations";
import { projects } from "./homeData";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="text-xs font-mono text-zinc-500 tracking-widest uppercase"
      >
        Work
      </motion.h2>

      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="glass rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-white/6 transition-colors group"
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-zinc-100">{p.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-violet-500/10 text-violet-400">
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="text-xs border-white/10 text-zinc-500"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
