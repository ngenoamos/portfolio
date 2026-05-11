"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Terminal, Globe, Cpu, Layers, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "C#", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: "Django", level: 88 },
      { name: "Flask", level: 82 },
      { name: ".NET", level: 80 },
      { name: "React", level: 78 },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 70 },
      { name: "SQLite", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Docker", level: 82 },
      { name: "Podman", level: 75 },
      { name: "CI/CD", level: 78 },
      { name: "Linux/Kali", level: 90 },
    ],
  },
];

const techStack = [
  { name: "Python", icon: <Terminal className="w-8 h-8" />, color: "#3776AB" },
  { name: "C#", icon: <Code2 className="w-8 h-8" />, color: "#68217A" },
  { name: "TypeScript", icon: <Code2 className="w-8 h-8" />, color: "#3178C6" },
  { name: "React", icon: <Globe className="w-8 h-8" />, color: "#61DAFB" },
  { name: "Django", icon: <Layers className="w-8 h-8" />, color: "#092E20" },
  { name: ".NET", icon: <Cpu className="w-8 h-8" />, color: "#512BD4" },
  { name: "Docker", icon: <Cloud className="w-8 h-8" />, color: "#2496ED" },
  { name: "Git", icon: <GitBranch className="w-8 h-8" />, color: "#F05032" },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#F1F5F9] font-medium">{name}</span>
        <span className="text-xs text-[#64748B]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[rgba(37,99,235,0.1)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#F97316]"
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="pb-24">
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs text-[#F97316] tracking-widest uppercase font-semibold mb-3 font-[family-name:var(--font-heading)]">Expertise</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F9] leading-tight">
              Technical <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="mt-4 text-base text-[#94A3B8] max-w-2xl leading-relaxed">
              A full-stack engineer with deep experience across backend systems, frontend interfaces, and DevOps infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="section-container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8, scale: 1.05 }}
                className="glass-card w-24 h-24 flex flex-col items-center justify-center gap-2 cursor-pointer">
                <div style={{ color: tech.color }}>{tech.icon}</div>
                <span className="text-[10px] text-[#94A3B8] font-medium tracking-wider">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: catIndex * 0.1 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(37,99,235,0.1)] flex items-center justify-center text-[#2563EB]">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={catIndex * 0.1 + skillIndex * 0.05} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-8">
            Also Exploring
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {["Blockchain", "DeFi", "Market Analysis", "Agritech", "Mobile Development", "System Architecture", "API Design",
              "Database Optimization", "Security", "Cloud Infrastructure"].map((topic, i) => (
              <motion.span key={topic} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                className="px-4 py-2 rounded-xl text-sm text-[#94A3B8] border border-[rgba(37,99,235,0.15)] hover:border-[rgba(37,99,235,0.4)] hover:text-[#F1F5F9] cursor-pointer transition-all duration-200 min-h-[44px] flex items-center">
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}