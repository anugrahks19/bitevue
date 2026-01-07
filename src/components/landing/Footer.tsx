import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Nexus AI", href: "#nexus" },
      { label: "Download", href: "/bitevue-release.apk", download: true },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <img src="/favicon.ico" alt="BiteVue Logo" className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20" />
              <span className="text-2xl font-bold text-foreground tracking-tight">BiteVue</span>
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm text-lg leading-relaxed">
              AI-Native Food Co-Pilot. Making smarter food choices simple, personal, and intelligent.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Coming Soon",
                      description: "We are currently updating our social media pages. Stay tuned!",
                    });
                  }}
                  className="w-12 h-12 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground text-lg mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.download ? { download: true } : {})}
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © 2026 BiteVue. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <span className="text-primary animate-pulse">💚</span> for healthier eating
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;