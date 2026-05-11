"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TrendingUp, Leaf, Users, Target } from "lucide-react";

const timeline = [
  {
    year: "2021",
    title: "Craft Certificate in ICT",
    org: "Nairobi Polytechnic",
    description: "Built the foundation in information technology and systems administration.",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "#2563EB",
  },
  {
    year: "2023",
    title: "Started Software Engineering Journey",
    org: "Self-taught & KCA University",
    description: "Began mastering Python, C#, JavaScript, and full-stack development. Enrolled in Diploma in Information Technology at KCA University.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "#3B82F6",
  },
  {
    year: "2025",
    title: "Launched Fintech Ventures",
    org: "Private Limited Company, Kenya",
    description: "Registered a company and started building Synapse Systems for SACCO management and The Cathedral for market surveillance.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "#F97316",
  },
  {
    year: "2026",
    title: "Expanding Horizons",
    org: "Multi-disciplinary Builder",
    description: "Architecting 'The Cathedral' for real-time market surveillance, engineering high-performance M-Pesa to Crypto bridges, and hardening decentralized finance infrastructure.",
    icon: <Target className="w-5 h-5" />,
    color: "#10B981",
  },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Purpose-Driven",
    description: "Every project solves a real problem. From financial inclusion through SACCOs to making crypto accessible via M-Pesa.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community First",
    description: "A parent, a mentor to siblings, and a builder for Kenyan communities. Technology should lift everyone.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Diversified Thinking",
    description: "From high-performance vehicles to strategic agriculture — understanding systems across industries fuels better engineering.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs text-[#F97316] tracking-widest uppercase font-semibold mb-3 font-[family-name:var(--font-heading)]">About Me</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F9] leading-tight">
              Engineer. Entrepreneur.
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">Builder.</span>
            </h1>
            <p className="mt-6 text-base text-[#94A3B8] leading-relaxed">
              I am a Software Engineer and Entrepreneur focused on the intersection of <b>automated finance</b> and <b>decentralized infrastructure</b>. Operating exclusively within a Linux ecosystem, I architect systems designed for massive scalability—from multi-tenant SACCO platforms to institutional-grade market surveillance.
            </p>

            <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
              My work is driven by a deep conviction in <b>DeFi and trustless protocols</b>. I am currently scaling <span className="text-[#F1F5F9] font-medium">The Cathedral</span>, an advanced surveillance and liquidity bridge project, alongside a specialized M-Pesa to Crypto gateway. By bridging the gap between traditional ledger logic and the decentralized world, I build the systems that define the next generation of financial sovereignty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-12"
          >
            My Journey
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#F97316] to-transparent" aria-hidden="true" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6"
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2"
                    style={{
                      borderColor: item.color,
                      background: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="glass-card p-5 flex-1">
                    <span className="text-xs font-bold tracking-widest" style={{ color: item.color }}>
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-[#F1F5F9]">{item.title}</h3>
                    <p className="text-xs text-[#64748B] mt-1">{item.org}</p>
                    <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-12"
          >
            What Drives Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(37,99,235,0.1)] flex items-center justify-center text-[#2563EB] mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F1F5F9]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal interests */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 max-w-3xl"
          >
            <h2 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-4">Beyond Code</h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              When I am not engineering software, I am deeply immersed in the world of Decentralized Finance (DeFi) and Blockchain Microstructure. My focus lies in analyzing the mechanics of trustless systems and tracking the evolution of liquidity bridges in the crypto world.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

