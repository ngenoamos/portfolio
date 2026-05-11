"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, BarChart3, ArrowLeftRight, Tractor, Shield, Smartphone } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Fintech", "DevOps", "Agriculture", "Other"];

const projects = [
  {
    title: "Synapse Systems",
    description:
      "A multi-tenant SACCO management system handling member registration, loan processing, savings tracking, and financial reporting for cooperative societies across Kenya.",
    longDescription:
      "Built to serve multiple SACCOs from a single platform, Synapse Systems streamlines operations from member onboarding to dividend calculation.",
    tags: ["Python", "Django", "PostgreSQL", "Multi-tenant", "REST API"],
    category: "Fintech",
    icon: <Database className="w-6 h-6" />,
    status: "In Development",
    color: "#2563EB",
    featured: true,
  },
  {
    title: "The Cathedral",
    description:
      "A sophisticated market surveillance project tracking 'whale' movements and analyzing market microstructure to identify strategic opportunities in financial markets.",
    longDescription:
      "Monitors large-volume transactions, order flow imbalances, and market anomalies in real-time.",
    tags: ["C#", ".NET", "Data Analysis", "Market Microstructure"],
    category: "Fintech",
    icon: <BarChart3 className="w-6 h-6" />,
    status: "In Development",
    color: "#F97316",
    featured: true,
  },
  {
    title: "M-Pesa to Crypto Bridge",
    description:
      "A bridge connecting Kenya's M-Pesa mobile money platform with cryptocurrency exchanges, enabling seamless fiat-to-crypto conversions for the Kenyan market.",
    longDescription:
      "Localizing decentralized finance by integrating with Safaricom's Daraja API and crypto exchange APIs.",
    tags: ["Python", "REST API", "Blockchain", "M-Pesa Daraja"],
    category: "Fintech",
    icon: <ArrowLeftRight className="w-6 h-6" />,
    status: "Research Phase",
    color: "#10B981",
    featured: true,
  },
  {
    title: "Agri-Analytics Platform",
    description:
      "Profitability analysis tools for strategic agriculture — tracking yields, costs, and market prices for Hass avocados, peas, potatoes, and livestock operations.",
    longDescription:
      "Data-driven decisions for 5-acre integrated farming including urea treatment optimization for feed.",
    tags: ["Python", "Data Analysis", "Flask", "Charts"],
    category: "Agriculture",
    icon: <Tractor className="w-6 h-6" />,
    status: "Planning",
    color: "#84CC16",
    featured: false,
  },
  {
    title: "DevOps Pipeline",
    description:
      "Custom CI/CD pipelines using Docker, Podman, and containerization strategies for deploying multi-service architectures on Linux infrastructure.",
    longDescription:
      "Kali Linux-based development environment with automated testing, building, and deployment.",
    tags: ["Docker", "Podman", "CI/CD", "Linux", "Kali"],
    category: "DevOps",
    icon: <Shield className="w-6 h-6" />,
    status: "Ongoing",
    color: "#8B5CF6",
    featured: false,
  },
  {
    title: "Mobile Finance App",
    description:
      "React Native application providing real-time IPO tracking, market analysis, and portfolio management for the Kenyan stock market.",
    longDescription:
      "Focused on the Kenya Pipeline Company IPO and Nairobi Securities Exchange liquidity data.",
    tags: ["React", "TypeScript", "REST API", "Financial Data"],
    category: "Fintech",
    icon: <Smartphone className="w-6 h-6" />,
    status: "Planning",
    color: "#EC4899",
    featured: false,
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[#F97316] tracking-widest uppercase font-semibold mb-3 font-[family-name:var(--font-heading)]">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F9] leading-tight">
              Featured <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="mt-4 text-base text-[#94A3B8] max-w-2xl leading-relaxed">
              From enterprise fintech platforms to decentralized finance bridges —
              each project tackles real-world challenges with scalable solutions.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wider uppercase cursor-pointer transition-all duration-200 min-h-[44px] ${
                  activeCategory === cat
                    ? "bg-[#2563EB] text-white shadow-lg shadow-[rgba(37,99,235,0.3)]"
                    : "bg-[rgba(37,99,235,0.08)] text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.1)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                layout
                className={`glass-card overflow-hidden group cursor-pointer ${
                  project.featured ? "md:col-span-1 row-span-1" : ""
                }`}
              >
                {/* Color accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      {project.icon}
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-1 rounded-md bg-[rgba(37,99,235,0.08)] text-[#64748B] border border-[rgba(37,99,235,0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-[rgba(37,99,235,0.08)] flex gap-3">
                    <button className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#2563EB] cursor-pointer transition-colors min-h-[44px]">
                      <Github className="w-4 h-4" aria-hidden="true" /> Code
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#F97316] cursor-pointer transition-colors min-h-[44px]">
                      <ExternalLink className="w-4 h-4" aria-hidden="true" /> Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

