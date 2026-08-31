"use client";

import { motion } from "framer-motion";

const ToolsGrid = ({ tools }) => {
  return (
    <section id="tools">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#00ffcc] text-xl">$</span>
        <h2 className="text-2xl font-mono text-[#ffcc00]">arsenal</h2>
        <span className="text-[#00ffcc]/30 text-sm">#tools</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-[#00ffcc]/10 rounded-lg p-6 bg-[#00ffcc]/5"
          >
            <h3 className="text-[#00ffcc] font-mono text-sm mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-[#00ffcc]/20 rounded text-[#00ffcc]/70 text-xs font-mono hover:border-[#00ffcc]/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsGrid;