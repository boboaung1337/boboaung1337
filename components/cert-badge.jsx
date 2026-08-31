"use client";

import { motion } from "framer-motion";

const CertBadge = ({ name, issuer, icon, index }) => {
  const isGold = index < 2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`p-4 rounded-lg border text-center transition-all duration-300 hover:scale-105 ${
        isGold
          ? "border-[#ffcc00]/30 bg-[#ffcc00]/5 hover:border-[#ffcc00]/60"
          : "border-[#00ffcc]/10 bg-[#00ffcc]/5 hover:border-[#00ffcc]/30"
      }`}
    >
      <div className="text-2xl mb-2">{icon || "🏆"}</div>
      <div className={`font-mono text-sm ${isGold ? "text-[#ffcc00]" : "text-[#00ffcc]"}`}>
        {name}
      </div>
      <div className="text-[#00ffcc]/40 text-xs font-mono mt-1">{issuer}</div>
    </motion.div>
  );
};

export default CertBadge;