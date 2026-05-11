"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Bell } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  // Added with a special flag for styling
  { href: "/#subscribe", label: "Subscribe", isCTA: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-40 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0F]/90 backdrop-blur-xl border border-[rgba(37,99,235,0.2)] shadow-lg shadow-[rgba(37,99,235,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group" aria-label="Home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#F97316] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/20">
              <Terminal className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-wider text-[#F1F5F9] hidden sm:block">
              AMOS<span className="text-[#F97316]">.</span>DEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              // Render CTA Button differently
              if (link.isCTA) {
                return (
                  <Link key={link.href} href={link.href}
                    className="ml-4 flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 border border-blue-400/20">
                    <Bell className="w-3 h-3" />
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link key={link.href} href={link.href}
                  className={`relative px-4 py-2 text-[10px] font-bold tracking-widest uppercase cursor-pointer transition-colors duration-200 ${
                    isActive ? "text-[#2563EB]" : "text-[#94A3B8] hover:text-[#F1F5F9]"
                  }`}>
                  {link.label}
                  {isActive && (
                    <motion.div layoutId="activeTab"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#F97316]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              );
            })}
          </div>

          <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-[rgba(37,99,235,0.2)] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[rgba(37,99,235,0.4)] cursor-pointer transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-[rgba(37,99,235,0.1)] bg-[#0A0A0F]/95 backdrop-blur-xl">
              <div className="px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href} initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link href={link.href} onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-xs font-bold tracking-widest uppercase cursor-pointer transition-colors ${
                          link.isCTA 
                            ? "bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-center mt-2 shadow-lg shadow-blue-500/20" 
                            : isActive
                              ? "bg-[rgba(37,99,235,0.1)] text-[#2563EB] border-l-2 border-[#2563EB]"
                              : "text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[rgba(37,99,235,0.05)]"
                        }`}>
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}