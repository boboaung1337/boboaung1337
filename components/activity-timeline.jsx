"use client";

import { motion } from "framer-motion";

const ActivityTimeline = ({ activities }) => {
  return (
    <section id="activity">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#00ffcc] text-xl">$</span>
        <h2 className="text-2xl font-mono text-[#ffcc00]">recent_ops</h2>
        <span className="text-[#00ffcc]/30 text-sm">#activity</span>
      </div>

      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4 border-l-2 border-[#00ffcc]/20 pl-4 hover:border-[#00ffcc]/60 transition-colors"
          >
            <span className="text-[#00ffcc]/30 text-xs font-mono mt-0.5">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="text-[#00ffcc]/70 font-mono text-sm">
              {activity}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivityTimeline;