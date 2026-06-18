"use client";

import { CertificationsSection } from "@/components/home/CertificationsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="aurora-bg" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-28">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />

        <footer className="pt-4 pb-2 border-t border-white/5">
          <p className="text-xs font-mono text-zinc-600">
            Built with Next.js &#183; TypeScript &#183; TailwindCSS &#183; Framer Motion &#183; shadcn/ui
          </p>
        </footer>
      </div>
    </main>
  );
}
