"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Loader2, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("sending");

    // Create the message format for Telegram
    const botMessage = `
  🚀 *New Portfolio Message*
  👤 *From:* ${name}
  📧 *Email:* ${email}
  📝 *Message:* ${message}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '8606379484:AAFP5ojiZJcjvuHcOPiE9wdv3wM3992OEGs'}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "6019370915",
            text: botMessage,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        setFormState("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Telegram Error:", error);
      setFormState("idle");
      alert("System error. Please use the email link instead.");
    }

    // Return to idle after a delay
    setTimeout(() => setFormState("idle"), 4000);
  }

  return (
    <div className="pb-24">
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs text-[#F97316] tracking-widest uppercase font-semibold mb-3 font-[family-name:var(--font-heading)]">Get in Touch</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F9] leading-tight">
              Let's <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="mt-4 text-base text-[#94A3B8] max-w-2xl leading-relaxed">
              Want to collaborate, have a project idea, or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <a href="mailto:ngenoamos502@gmail.com" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(37,99,235,0.1)] flex items-center justify-center text-[#2563EB] shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#64748B] uppercase tracking-wider">Email</p>
                      <p className="text-sm text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors">ngenoamos502@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone / WhatsApp */}
                <a href="tel:+254 726-096-183" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(16,185,129,0.1)] flex items-center justify-center text-[#10B981] shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] uppercase tracking-wider">Phone</p>
                    <p className="text-sm text-[#F1F5F9] group-hover:text-[#10B981] transition-colors">+254 726-096-183</p>
                  </div>
                </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] flex items-center justify-center text-[#F97316] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#64748B] uppercase tracking-wider">Location</p>
                      <p className="text-sm text-[#F1F5F9]">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-4">Social</h3>
                <div className="space-y-3">
                  <a href="https://github.com/ngenoamos" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.3)] hover:bg-[rgba(37,99,235,0.05)] cursor-pointer transition-all group">
                    <Github className="w-5 h-5 text-[#94A3B8] group-hover:text-[#F1F5F9] transition-colors" />
                    <span className="text-sm text-[#94A3B8] group-hover:text-[#F1F5F9] transition-colors">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/amosngeno" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.3)] hover:bg-[rgba(37,99,235,0.05)] cursor-pointer transition-all group">
                    <Linkedin className="w-5 h-5 text-[#94A3B8] group-hover:text-[#2563EB] transition-colors" />
                    <span className="text-sm text-[#94A3B8] group-hover:text-[#F1F5F9] transition-colors">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-6">Send a Message</h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-2 font-medium">
                      Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input id="name" type="text" required autoComplete="name" value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.15)] text-[#F1F5F9] text-sm placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all min-h-[44px]"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-2 font-medium">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input id="email" type="email" required autoComplete="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.15)] text-[#F1F5F9] text-sm placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all min-h-[44px]"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-2 font-medium">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea id="message" required rows={5} value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.15)] text-[#F1F5F9] text-sm placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                      placeholder="What would you like to discuss?" />
                  </div>
                  <button type="submit" disabled={formState === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[rgba(37,99,235,0.3)] cursor-pointer transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]">
                    {formState === "sending" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending...</>
                    ) : formState === "sent" ? (
                      "Message Sent!"
                    ) : (
                      <><Send className="w-4 h-4" aria-hidden="true" /> Send Message</>
                    )}
                  </button>
                  {formState === "sent" && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-[#10B981] text-center" role="alert">
                      Thanks for reaching out! I'll get back to you soon.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}