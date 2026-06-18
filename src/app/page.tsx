"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const skills: Record<string, string[]> = {
  Backend: ["Python", "FastAPI", "PostgreSQL", "Redis", "Go"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Fly.io"],
  "AI / ML": ["PyTorch", "LangChain", "HuggingFace", "RAG", "MLflow"],
};

const projects = [
  {
    title: "RAG Pipeline",
    desc: "Production retrieval-augmented generation over internal docs. FastAPI + pgvector + OpenAI.",
    tags: ["Python", "FastAPI", "pgvector"],
    status: "Live",
  },
  {
    title: "ML Platform",
    desc: "Self-hosted model registry and serving layer with canary deployments via Kubernetes.",
    tags: ["K8s", "MLflow", "Docker"],
    status: "Live",
  },
  {
    title: "LLM Evals",
    desc: "Lightweight eval harness for comparing prompt strategies across model versions.",
    tags: ["Python", "LangChain", "CI/CD"],
    status: "WIP",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="aurora-bg" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 space-y-28">

        {/* Hero */}
        <section className="space-y-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-sm font-mono text-cyan-400 tracking-widest uppercase"
          >
            Backend &#8594; AI/ML Engineer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl font-semibold tracking-tight leading-tight"
          >
            Building systems that
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              learn and scale.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-zinc-400 text-lg max-w-xl leading-relaxed"
          >
            5 years in backend and infrastructure. Now applying that foundation
            to production AI systems — from RAG pipelines to model serving.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex gap-3 pt-2"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              View projects
            </a>
            <a
              href="mailto:you@example.com"
              className="px-5 py-2.5 rounded-lg glass hover:bg-white/10 text-zinc-300 text-sm font-medium transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </section>

        {/* Skills */}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="text-xs font-mono text-zinc-500 tracking-widest uppercase"
          >
            Projects
          </motion.h2>

          <div className="space-y-4">
            {projects.map((p, i) => {
              const statusClass =
                p.status === "Live"
                  ? "text-xs px-2 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-400"
                  : "text-xs px-2 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-400";

              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="glass rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-white/[0.06] transition-colors cursor-pointer group"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-zinc-100">{p.title}</h3>
                      <span className={statusClass}>{p.status}</span>
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
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-lg self-center">
                    &#8594;
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}