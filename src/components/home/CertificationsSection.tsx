"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import { certs } from "./homeData";

export function CertificationsSection() {
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
        Certifications
      </motion.h2>

      {Object.entries(certs).map(([provider, items]) => (
        <div key={provider} className="space-y-3">
          <p className="text-sm font-medium text-zinc-300">{provider}</p>
          <div className="flex flex-col gap-3">
            {items.map((c, i) => (
              <motion.a
                key={c.code}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                custom={i}
                className="glass rounded-xl px-5 py-4 flex items-center gap-4 cursor-pointer transition-colors hover:bg-white/8"
              >
                <span className="font-mono text-xs text-violet-400 min-w-20">{c.code}</span>
                <span className="text-sm text-zinc-300">{c.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
