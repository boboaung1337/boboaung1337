"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "$ whoami", href: "#about" },
    { label: "$ tools", href: "#tools" },
    { label: "$ certs", href: "#certs" },
    { label: "$ activity", href: "#activity" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e0f]/90 backdrop-blur-md border-b border-[#00ffcc]/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="text-[#00ffcc] font-mono text-sm">
            <span className="text-[#ffcc00]">root@b0b0aung</span>
            <span className="text-[#00ffcc]/40">:~$</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#00ffcc]/60 hover:text-[#00ffcc] transition-colors font-mono text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/b0b0aung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ffcc]/40 hover:text-[#00ffcc] transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/khaingmyolin1337"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ffcc]/40 hover:text-[#00ffcc] transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-[#00ffcc]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#0a0e0f]/95 border-t border-[#00ffcc]/10 p-4"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[#00ffcc]/60 hover:text-[#00ffcc] transition-colors font-mono"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 border-t border-[#00ffcc]/10">
              <a
                href="https://github.com/b0b0aung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffcc]/40 hover:text-[#00ffcc]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/khaingmyolin1337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffcc]/40 hover:text-[#00ffcc]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;