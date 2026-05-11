import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(37,99,235,0.1)] bg-[#0A0A0F]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#F1F5F9] tracking-wider">
              AMOS<span className="text-[#F97316]">.</span>DEV
            </h3>
            <p className="mt-3 text-sm text-[#64748B] leading-relaxed max-w-xs">
              Software Engineer & Entrepreneur building fintech solutions from Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold tracking-widest text-[#94A3B8] uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
            {["Home", "About", "Projects", "Skills", "Contact", "Subscribe"].map((item) => {
              // 1. Handle X (Twitter) specifically
              if (item === "X (Twitter)") {
                return (
                  <li key={item}>
                    <a
                      href="https://x.com/AmosNge66936758"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#64748B] hover:text-[#2563EB] cursor-pointer transition-colors duration-200 flex items-center gap-2"
                    >
                      {item}
                    </a>
                  </li>
                );
              }

              // 2. Handle Subscribe as an anchor jump
              const isSubscribe = item === "Subscribe";
              const href = item === "Home" ? "/" : isSubscribe ? "/#subscribe" : `/${item.toLowerCase()}`;

              return (
                <li key={item}>
                  <a
                    href={href}
                    className={`text-sm transition-colors duration-200 cursor-pointer ${
                      isSubscribe 
                        ? "text-[#2563EB] font-semibold hover:text-blue-400" // Special styling for Subscribe
                        : "text-[#64748B] hover:text-[#2563EB]"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold tracking-widest text-[#94A3B8] uppercase mb-4">Connect</h4>
            <div className="flex gap-3">
              {/* GitHub */}
              <a href="https://github.com/ngenoamos" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-[#64748B] hover:text-[#2563EB] hover:border-[rgba(37,99,235,0.4)] cursor-pointer transition-all duration-200"
                aria-label="GitHub profile">
                <Github className="w-4 h-4" />
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/ngenoamos" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-[#64748B] hover:text-[#2563EB] hover:border-[rgba(37,99,235,0.4)] cursor-pointer transition-all duration-200"
                aria-label="LinkedIn profile">
                <Linkedin className="w-4 h-4" />
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/AmosNge66936758" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-[#64748B] hover:text-[#F1F5F9] hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.05)] cursor-pointer transition-all duration-200"
                aria-label="X (Twitter) profile">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:ngenoamos502@gmail.com"
                className="w-10 h-10 rounded-lg border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-[#64748B] hover:text-[#F97316] hover:border-[rgba(249,115,22,0.4)] cursor-pointer transition-all duration-200"
                aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(37,99,235,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            © {currentYear} Amos Kipkirui Ngeno. All rights reserved.
          </p>
          <p className="text-xs text-[#475569] flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-[#F97316]" aria-hidden="true" /> from Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}