"use client";

import { motion } from "framer-motion";

const TerminalCard = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-[#00ffcc]/10 rounded-lg p-6 bg-[#00ffcc]/5 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#ffcc00] font-mono text-sm">$</span>
        <span className="text-[#00ffcc]/70 font-mono text-sm">{title}</span>
      </div>
      <p className="text-[#00ffcc]/80 font-mono text-sm leading-relaxed whitespace-pre-wrap">
        {content}
      </p>
    </motion.div>
  );
};

export default TerminalCard;