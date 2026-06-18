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

      <div className="flex flex-col gap-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.code}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="glass rounded-xl px-5 py-4 flex items-center gap-4"
          >
            <span className="font-mono text-xs text-violet-400 min-w-20">{c.code}</span>
            <span className="text-sm text-zinc-300">{c.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
