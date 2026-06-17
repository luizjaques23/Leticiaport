import React, { useState } from "react";
import { ArrowRight, ChevronDown, Award, Play, CheckCircle2, FileText, Calendar, Camera, Upload, Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { motion } from "motion/react";

import profileImgSrc from "@/assets/perfil.jpg";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [profileImg, setProfileImg] = useState<string>(() => {
    const saved = localStorage.getItem("leticia_profile_img");
    if (saved && !saved.includes("unsplash.com")) {
      return saved;
    }
    return profileImgSrc;
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const resultStr = reader.result as string;
        setProfileImg(resultStr);
        localStorage.setItem("leticia_profile_img", resultStr);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("leticia.almds@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-paper text-ink">
      {/* Architectural vertical right column accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-ink/[0.015] border-l border-ink/[0.03] -z-10 hidden md:block" />
      <div className="absolute top-12 left-12 w-24 h-24 border border-ink/[0.05] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Copy / Texts */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 border border-ink/20 text-ink px-4 py-1.5 rounded-none text-[10px] font-bold tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse mr-1" />
              <span>Apresentação de Perfil Curricular</span>
            </div>

            {/* Display Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-serif font-bold text-ink tracking-tight leading-[0.95]">
                Letícia Silva
              </h1>
              <div className="text-xl sm:text-2xl font-serif italic text-accent font-light leading-[1.1] pb-1">
                Líder em Desenvolvimento, Expansão & Gestão de Operações Regionais
              </div>
              
              <p className="text-xs sm:text-sm text-ink/85 max-w-2xl font-sans leading-relaxed border-l-2 border-accent pl-6 select-text">
                Com sólida experiência no gerenciamento de operações regionais, abertura de novos territórios e expansão de negócios em múltiplas regiões. Especialista na coordenação de equipes multidisciplinares distribuídas em diferentes cidades, com foco em engajamento, alta performance e superação de metas. Expertise em planejamento estratégico, mapeamento e otimização de processos operacionais e implementação de ferramentas de controle de projetos para garantir a eficiência e a produtividade dos times.
              </p>
            </div>

            {/* Bullet Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pb-2 border-t border-b border-ink/10 py-4">
              {[
                "Operações escaláveis de P&L",
                "Estruturação de comitês regionais",
                "Metodologias ágeis e OKRs",
                "Negociações e SLAs robustos em campo"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <span className="font-serif italic font-semibold text-accent text-sm">0{idx+1}</span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-ink/85">{bullet}</span>
                </div>
              ))}
            </div>
            {/* Redesigned Premium Quick Contacts Matrix */}
            <div className="pt-6 border-t border-ink/20 w-full">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-accent block mb-3 text-left">
                Informações de Contato Direto
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                
                {/* Email Interactive Card */}
                <button
                  onClick={handleCopy}
                  type="button"
                  className="group relative bg-[#fdfcfb] hover:bg-ink hover:text-paper p-3.5 border border-ink/15 hover:border-ink transition-all duration-300 rounded-none text-left focus:outline-none flex flex-col justify-between w-full shadow-[2px_2px_0px_0px_rgba(26,26,26,0.02)] cursor-pointer"
                  title="Clique para copiar o email institucional"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="p-1 px-1.5 bg-accent/10 group-hover:bg-accent/20 text-accent font-bold rounded-none">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    {copiedEmail ? (
                      <span className="text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 uppercase tracking-wider">Copiado</span>
                    ) : (
                      <Copy className="w-3 h-3 text-ink/30 group-hover:text-paper/60 transition-colors" />
                    )}
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-ink/40 group-hover:text-paper/40 block">E-mail Corporativo</span>
                    <span className="text-xs font-bold text-ink group-hover:text-paper transition-colors font-sans truncate block mt-0.5 break-all max-w-full">
                      leticia.almds@gmail.com
                    </span>
                  </div>
                </button>

                {/* Telephone Interactive Card */}
                <a
                  href="tel:5583982121182"
                  className="group bg-[#fdfcfb] hover:bg-ink hover:text-paper p-3.5 border border-ink/15 hover:border-ink transition-all duration-300 rounded-none text-left flex flex-col justify-between w-full shadow-[2px_2px_0px_0px_rgba(26,26,26,0.02)]"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="p-1 px-1.5 bg-accent/10 group-hover:bg-accent/20 text-accent font-bold rounded-none">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-ink/40 group-hover:text-paper/40 block">Contato Telefônico</span>
                    <span className="text-xs font-bold text-ink group-hover:text-paper transition-colors font-sans block mt-0.5">
                      (83) 98212-1182
                    </span>
                  </div>
                </a>

                {/* Location / Focus Card */}
                <div
                  className="bg-[#fdfcfb] p-3.5 border border-ink/15 rounded-none text-left flex flex-col justify-between w-full shadow-[2px_2px_0px_0px_rgba(26,26,26,0.02)]"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="p-1 px-1.5 bg-accent/10 text-accent font-bold rounded-none">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-ink/40 block">Territórios Disponíveis</span>
                    <span className="text-xs font-bold text-ink font-sans block mt-0.5">
                      Porto Velho & São Paulo
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Decorative Visual Card Frame with Upload Photo and live KPI metric */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Outer layout offset container - crisp straight borders */}
              <div className="absolute inset-4 border border-ink/10 translate-x-3 translate-y-3 pointer-events-none" />

              {/* Main Photo Card Container */}
              <label className="relative overflow-hidden border border-ink bg-paper shadow-lg z-10 block transition-transform duration-500 hover:scale-[1.01] cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <img
                  src={profileImg}
                  alt="Letícia Silva - Executive Portrait"
                  className="w-full h-auto object-cover aspect-[4/5] grayscale contrast-[105%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Profile Upload Overlay */}
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-paper pb-16">
                  <div className="bg-paper/20 backdrop-blur-md p-3.5 rounded-full border border-paper/10 mb-2">
                    <Camera className="w-6 h-6 text-paper" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Trocar Foto Oficial</span>
                  <span className="text-[8px] text-paper/70 mt-1 uppercase font-semibold">Salva no Navegador</span>
                </div>

                {/* Floating overlay card at the bottom of the photo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/90 to-transparent p-6 pt-16 text-left z-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping shrink-0" />
                    <span className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">Ativa para Novos Desafios</span>
                  </div>
                  <p className="text-paper/85 text-xs mt-2 leading-relaxed italic font-serif">
                    "Operações eficientes começam na ponta, descobrindo o que trava o dia a dia e automatizando o core para que as filiais operem sozinhas."
                  </p>
                </div>
              </label>

              {/* Side Floating Medal Badges (Extra micro-interaction delight) */}
              <div className="absolute -top-4 -right-4 bg-accent text-ink border border-ink px-4 py-2 text-center shadow-md transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                <span className="block font-serif font-bold text-lg leading-tight">6+</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold block leading-none">Anos Líder</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll down indicator arrow */}
        <div className="mt-16 flex justify-center border-t border-ink/10 pt-10">
          <button 
            onClick={() => scrollToSection("trajetoria")}
            className="flex flex-col items-center space-y-1.5 focus:outline-none group opacity-70 hover:opacity-100 transition-opacity text-ink"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-ink/70">Ver Linha do Tempo</span>
            <ChevronDown className="w-4 h-4 text-ink/80 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
