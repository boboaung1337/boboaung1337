"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ToolsGrid from "@/components/tools-grid";
import CertBadge from "@/components/cert-badge";
import ActivityTimeline from "@/components/activity-timeline";
import TerminalCard from "@/components/terminal-card";
import { tools, certs, activities, socialLinks, aboutText } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <Navbar />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <Hero />

        {/* About / Terminal */}
        <section id="about">
          <TerminalCard title="whoami" content={aboutText} />
        </section>

        {/* Certifications - ADDED id="certs" */}
        <section id="certs">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#00ffcc] text-xl">$</span>
            <h2 className="text-2xl font-mono text-[#ffcc00]">certifications</h2>
            <span className="text-[#00ffcc]/30 text-sm">#credentials</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certs.map((cert, idx) => (
              <CertBadge key={idx} {...cert} index={idx} />
            ))}
          </div>
        </section>

        {/* Tools / Arsenal - This component already has its own section with id="tools" */}
        <ToolsGrid tools={tools} />

        {/* Recent Activities - This component already has its own section with id="activity" */}
        <ActivityTimeline activities={activities} />

        {/* Social / Connect */}
        <section className="pt-4 border-t border-[#00ffcc]/10">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="px-6 py-3 border border-[#00ffcc]/20 rounded-lg text-[#00ffcc] hover:bg-[#00ffcc]/10 hover:border-[#00ffcc] transition-all duration-300 flex items-center gap-2"
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer Quote */}
        <footer className="text-center text-[#00ffcc]/30 text-sm py-6 border-t border-[#00ffcc]/5">
          <span className="text-[#ffcc00]/40">“</span> Hacking is not a hobby but a way of life <span className="text-[#ffcc00]/40">”</span>
          <br />
          <span className="text-[#00ffcc]/20 text-xs">$ SYSTEM: ONLINE &nbsp;·&nbsp; PENTEST MODE: ACTIVE &nbsp;·&nbsp; 0x1337</span>
        </footer>
      </div>
    </main>
  );
}