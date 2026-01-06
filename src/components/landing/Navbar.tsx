import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Nexus AI", href: "#nexus" },
    { label: "How it works", href: "#how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src="/favicon.ico" alt="BiteVue Logo" className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-foreground">BiteVue</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" className="group">
              <Download className="w-4 h-4" />
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-border">
            <div className="container px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-4">
                <Download className="w-4 h-4" />
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;