"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Code2, Rocket, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Fintech Entrepreneur",
  "Full-Stack Developer",
  "Software Engineer",
  "System Architect",
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Multi-tenant Architecture", value: "2+" },
  { label: "Liquidity Systems", value: "3+" },
];

function TypewriterRole() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(role.slice(0, displayed.length + 1));
          if (displayed.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayed(role.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="text-[#2563EB]">
      {displayed}
      <span className="animate-pulse text-[#F97316]">|</span>
    </span>
  );
}

// Add this after your roles array
type Role = "Fintech Entrepreneur" | "Full-Stack Developer" | "Software Engineer" | "System Architect";

const getRoleEmoji = (roleName: string): string => {
  const emojiMap: Record<string, string> = {
    "Fintech Entrepreneur": "🏦⚡",
    "Full-Stack Developer": "💻🚀",
    "Software Engineer": "🔧✨",
    "System Architect": "🏗️🎯",
  };
  return emojiMap[roleName] || "💻";
};
// Simple Sparkle Effect Component
function SparkleEffect() {
  return (
    <div className="absolute -top-4 -right-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            top: `${Math.random() * 40 - 20}px`,
            left: `${Math.random() * 40 - 20}px`,
          }}
        />
      ))}
    </div>
  );
}

// Enhanced Creative Typewriter with all features
function CreativeTypewriter() {
  const [state, setState] = useState({
    currentRole: 0,
    displayed: "",
    isDeleting: false,
    isGlitching: false,
    showSparkle: false,
    typoMode: false,
    originalText: ""
  });
  
  const role = roles[state.currentRole];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!state.isDeleting && !state.typoMode) {
        // Add random typo (5% chance)
        if (Math.random() < 0.05 && state.displayed.length < role.length - 1) {
          const typoChar = "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
          setState(prev => ({
            ...prev,
            displayed: prev.displayed + typoChar,
            typoMode: true,
            originalText: role.slice(0, prev.displayed.length + 1)
          }));
          
          // Fix the typo after 200ms
          setTimeout(() => {
            setState(prev => ({
              ...prev,
              displayed: prev.displayed.slice(0, -1),
              typoMode: false
            }));
          }, 200);
          return;
        }
        
        // Normal typing
        setState(prev => ({
          ...prev,
          displayed: role.slice(0, prev.displayed.length + 1)
        }));
        
        // When complete
        if (state.displayed.length + 1 === role.length) {
          setState(prev => ({ ...prev, showSparkle: true }));
          setTimeout(() => setState(prev => ({ ...prev, showSparkle: false })), 1000);
          setTimeout(() => setState(prev => ({ ...prev, isDeleting: true, isGlitching: true })), 2000);
          
          // Stop glitching after animation
          setTimeout(() => setState(prev => ({ ...prev, isGlitching: false })), 2200);
        }
      } 
      else if (state.isDeleting) {
        setState(prev => ({
          ...prev,
          displayed: role.slice(0, prev.displayed.length - 1)
        }));
        
        if (state.displayed.length === 0) {
          setState(prev => ({
            ...prev,
            isDeleting: false,
            currentRole: (prev.currentRole + 1) % roles.length
          }));
        }
      }
    }, state.isDeleting ? 40 : 80);
    
    return () => clearTimeout(timeout);
  }, [state.displayed, state.isDeleting, state.currentRole, role, state.typoMode]);
  
  return (
    <div className="group relative inline-block">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative flex items-center gap-3 text-2xl font-mono">
        <motion.span 
          className="text-4xl transition-transform group-hover:scale-110 inline-block"
          animate={{ rotate: state.isGlitching ? [0, -5, 5, 0] : 0 }}
          transition={{ duration: 0.1 }}
        >
          {getRoleEmoji(role) || "💻"}
        </motion.span>
        <motion.span 
          className={`text-[#2563EB] ${state.isGlitching ? 'animate-glitch' : ''}`}
          animate={{ 
            x: state.isGlitching ? [-2, 2, -1, 1, 0] : 0,
            textShadow: state.isGlitching ? [
              '2px 0 red',
              '-2px 0 blue',
              '2px 0 red',
              '0px 0 transparent'
            ] : 'none'
          }}
          transition={{ duration: 0.2 }}
        >
          {state.displayed}
          <motion.span 
            className="inline-block w-0.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 ml-0.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.span>
      </div>
      {state.showSparkle && <SparkleEffect />}
    </div>
  );
}

function CreativeProfile() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex justify-center lg:justify-end"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Multi-layer glow effect */}
        <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-[#2563EB]/20 via-[#F97316]/20 to-[#10B981]/20 blur-2xl animate-pulse" />
        
        {/* Rotating gradient ring */}
        <div className="absolute inset-[-8px] rounded-full">
          <div className="w-full h-full rounded-full border-4 border-transparent border-t-[#2563EB] border-r-[#F97316] animate-spin-slow" />
        </div>
        
        {/* Second ring - opposite direction */}
        <div className="absolute inset-[-15px] rounded-full">
          <div className="w-full h-full rounded-full border-2 border-transparent border-b-[#10B981] border-l-[#8B5CF6] animate-spin-slower" />
        </div>

        {/* Profile container */}
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#161822] to-[#1a1f2e] border-2 border-[rgba(37,99,235,0.3)] cursor-pointer"
          animate={{ 
            scale: isHovered ? 1.02 : 1,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/image.png"
            alt="Amos Kipkirui Ngeno"
            width={320}
            height={320}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            priority
          />
          
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/50 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.5 : 0 }}
          />
        </motion.div>

        {/* Enhanced floating badges */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 glass-card px-4 py-2 flex items-center gap-2 rounded-2xl shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
        >
          <Rocket className="w-4 h-4 text-[#F97316]" />
          <span className="text-xs font-bold bg-gradient-to-r from-[#F97316] to-[#FFA500] bg-clip-text text-transparent">
            Fintech Builder
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 glass-card px-4 py-2 flex items-center gap-2 rounded-2xl shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
        >
          <Code2 className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
            Full-Stack Dev
          </span>
        </motion.div>
        
        {/* New badge - bottom right */}
        <motion.div
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 -right-4 glass-card px-3 py-1.5 flex items-center gap-1.5 rounded-xl shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm">🇰🇪</span>
          <span className="text-xs text-[#F1F5F9] font-medium">Nairobi</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState("idle");

  async function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubState("loading");

    try {
      // We send the email to your Telegram bot bridge
      const response = await fetch("/api/contact", { // Reusing your existing API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: "New Subscriber", 
          email: email, 
          message: "Requesting access to Cathedral Intelligence" 
        }),
      });

      if (response.ok) {
        setSubState("success");
        setEmail("");
      }
    } catch (err) {
      setSubState("idle");
    }
  }
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[calc(100dvh-6rem)] flex items-center">
        <div className="section-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <MapPin className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span className="text-xs text-[#94A3B8] tracking-widest uppercase">Nairobi, Kenya</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-[#F1F5F9]">Amos Kipkirui</span>
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">Ngeno</span>
              </h1>

              <div className="mt-4 text-lg sm:text-xl h-8">
                <CreativeTypewriter />
              </div>

              <p className="mt-6 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-lg">
                Architecting high-frequency surveillance and liquidity bridges for the Kenyan fintech ecosystem. Turning market microstructure into scalable code.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/projects" className="px-6 py-3 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-blue-600 transition-all">
                  View Projects
                </Link>
                
                <a 
                  href="https://x.com/AmosNge66936758" 
                  target="_blank" 
                  className="px-6 py-3 border border-[rgba(37,99,235,0.3)] text-[#F1F5F9] rounded-xl font-bold flex items-center gap-2 hover:bg-[rgba(37,99,235,0.05)] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(37,99,235,0.3)] text-[#F1F5F9] text-sm font-semibold rounded-xl hover:bg-[rgba(37,99,235,0.08)] hover:border-[rgba(37,99,235,0.5)] cursor-pointer transition-all duration-300 active:scale-[0.98] min-h-[44px]"
                >
                  Contact Me
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#64748B] mt-1 tracking-wide">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Profile Image / Visual */}
            <CreativeProfile />
            
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden lg:flex justify-center mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#475569]"
            >
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Engineering",
                description: "Python, C#, TypeScript, React, Django, .NET \u2014 building robust systems across the full stack.",
                color: "#2563EB",
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Entrepreneurship",
                description: "Founded a Private Limited Company in Kenya. Building fintech solutions that serve real communities.",
                color: "#F97316",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Agriculture",
                description: "Strategic farming on 5 acres \u2014 Hass avocados, high-value crops, and integrated livestock systems.",
                color: "#10B981",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 cursor-pointer group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* The target section for the Navbar link */}
      <section id="subscribe" className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 md:p-12 border border-[rgba(37,99,235,0.2)] bg-[#0A0A0F]/50 backdrop-blur-sm rounded-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mb-4">
              Join The Cathedral Intelligence
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
              Get real-time updates on DeFi infrastructure, M-Pesa bridges, and system architecture deep-dives.
            </p>
            
            {/* The actual subscription input */}
            <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-xl bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.1)] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button 
                disabled={subState === "loading"}
                className="px-8 py-3 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {subState === "loading" ? "Syncing..." : subState === "success" ? "Done!" : "Subscribe"}
              </button>
            </form>

            {/* Success Message */}
            {subState === "success" && (
              <p className="mt-4 text-[#10B981] text-sm font-medium">
                Connection established. Welcome to The Cathedral.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
