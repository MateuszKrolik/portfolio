"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "./animations";
import { workplaces } from "./homeData";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10">
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

      {workplaces.map((w) => (
        <div key={w.company} className="space-y-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <h3 className="text-xl font-semibold text-zinc-100">
              {w.url ? (
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors"
                >
                  {w.company}
                </a>
              ) : (
                w.company
              )}
            </h3>
            {w.role && <span className="text-sm text-zinc-400">{w.role}</span>}
            {w.period && (
              <span className="text-xs font-mono text-violet-400">{w.period}</span>
            )}
          </motion.div>

          {w.projects.map((p, i) => (
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
                <h4 className="font-medium text-zinc-100">{p.title}</h4>
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
      ))}
    </section>
  );
}
