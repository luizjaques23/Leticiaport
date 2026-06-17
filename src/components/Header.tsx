import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Award, Briefcase, BarChart3, Star, Compass, Cpu, Mail, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenResume?: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current section active
      const sections = ["inicio", "trajetoria", "consultoria", "contato"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Início", icon: Compass },
    { id: "trajetoria", label: "Trajetória", icon: Briefcase },
    { id: "contato", label: "Contato", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-accent z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-paper/95 text-ink shadow-sm border-b border-ink/15 backdrop-blur-md py-3" 
            : "bg-paper/70 text-ink backdrop-blur-xs py-4 border-b border-ink/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brandmark */}
            <button 
              onClick={() => scrollToSection("inicio")} 
              className="group flex items-center space-x-3 text-left focus:outline-none"
            >
              <div className={`px-2.5 py-1 border border-ink/30 rounded transition-colors duration-300 ${
                scrolled ? "bg-ink text-paper" : "bg-transparent text-ink"
              }`}>
                <span className="font-serif font-bold text-sm tracking-wide">LS</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg tracking-tight block text-ink">Letícia Silva</span>
                <span className="text-[9px] uppercase tracking-[0.25em] font-semibold block text-ink/75">
                  Expansão & Op. Regionais
                </span>
              </div>
            </button>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-ink text-paper font-semibold shadow-xs"
                        : "text-ink/70 hover:text-ink hover:bg-ink/5"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Language and CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-1.5 px-3.5 py-2 border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
              >
                <FileText className="w-3.5 h-3.5 text-accent group-hover:text-paper" />
                <span>Ver Dossiê CV</span>
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className={`flex items-center space-x-1.5 px-4.5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer ${
                  scrolled 
                    ? "bg-ink text-paper hover:bg-ink/90" 
                    : "bg-accent text-ink hover:bg-accent/90"
                }`}
              >
                <span>Agendar Conversa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Open Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <span className="text-[10px] font-mono border border-ink/20 px-1.5 py-0.5 rounded text-ink/70">
                PT
              </span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded transition-colors cursor-pointer hover:bg-ink/5 text-ink"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 w-full bg-paper text-ink z-[49] shadow-lg border-b border-ink/15 lg:hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-2.5 rounded text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                      isActive 
                        ? "bg-ink text-paper font-semibold" 
                        : "text-ink/80 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-ink/10 flex flex-col space-y-3">
                <div className="flex justify-between items-center px-4">
                  <span className="text-[10px] text-ink/60 font-mono uppercase tracking-wider font-bold">Dossiê e Contato</span>
                  <span className="text-xs text-accent font-semibold tracking-wider">Painel</span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="w-full bg-paper border border-ink text-ink font-semibold text-center py-3 rounded text-xs uppercase tracking-widest hover:bg-ink/5 transition-colors shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Ver Dossiê CV</span>
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-ink text-paper font-semibold text-center py-3 rounded text-xs uppercase tracking-widest hover:bg-ink/95 transition-colors shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Agendar Conversa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
