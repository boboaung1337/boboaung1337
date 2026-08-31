"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="about" className="min-h-[70vh] flex items-center justify-center pt-16">
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-mono"
          style={{ textShadow: "0 0 20px rgba(0, 255, 204, 0.3)" }}
        >
          <span className="text-[#00ffcc]">Khaing</span>
          <span className="text-[#ffcc00]"> Myo </span>
          <span className="text-[#00ffcc]">Lin</span>
          <span className="text-[#00ffcc]/30 ml-1 inline-block animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#00ffcc]/70 font-mono text-sm md:text-base"
        >
          <span className="text-[#ffcc00]">⚡</span> Penetration Tester &nbsp;·&nbsp; Red Team Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {["OSCP+", "OSCP", "CPTS", "CRTA", "AD-RTS"].map((badge, idx) => (
            <span
              key={idx}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border ${
                idx < 2
                  ? "border-[#ffcc00]/30 text-[#ffcc00] bg-[#ffcc00]/5"
                  : "border-[#00ffcc]/20 text-[#00ffcc] bg-[#00ffcc]/5"
              }`}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[#00ffcc]/40 font-mono text-sm"
        >
          <span>📍 Singapore</span>
          <span className="mx-2">·</span>
          <span>🎓 Coventry University</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;