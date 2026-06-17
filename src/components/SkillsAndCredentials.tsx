import { useState, useEffect } from "react";
import { skills } from "../data";
import { Award, BookOpen, Globe, Shield, Sparkles, Check } from "lucide-react";
import { motion } from "motion/react";

export default function SkillsAndCredentials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Operações", "Estratégia", "Liderança", "Tecnologia & Processos"];

  const filteredSkills = selectedCategory === "Todos"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="habilidades" className="py-24 bg-[#EBE7E0]/15 select-none border-b border-ink/10 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/3 filter blur-3xl rounded-none pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-ink/3 filter blur-3xl rounded-none pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 border border-ink/25 text-ink px-4 py-1.5 rounded-none text-[10px] font-bold tracking-[0.25em] uppercase font-mono bg-transparent">
            <Award className="w-3.5 h-3.5 text-accent" />
            <span>Capacidades e Credenciais</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            Competências e Formação
          </h2>
          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-sans italic border-l-2 border-accent pl-4 max-w-xl mx-auto">
            Abordagem técnica para reestruturação, expansão estratégica e auditoria de processos de filiais, combinada com qualificação acadêmica e idiomas.
          </p>
        </div>

        {/* Categories selector menu */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border text-xs font-mono uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer focus:outline-none ${
                selectedCategory === cat
                  ? "bg-ink border-ink text-paper font-bold"
                  : "bg-paper/40 border-ink/10 text-ink/65 hover:border-ink/40 hover:bg-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Board: Left Side Skills, Right Side Academic + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Column: Interactive Skills List (7 Columns wide on desktop) */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="border bg-paper border-ink/15 p-6 sm:p-8 rounded-none h-full shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)] text-left">
              <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-6">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest block">
                  Matriz de Competências ({filteredSkills.length})
                </span>
                <span className="text-[9px] font-mono text-ink/50 uppercase">Auto-avaliação Operacional</span>
              </div>

              {/* Skills cards stack */}
              <div className="space-y-5 w-full">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <div>
                        <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider mr-2">
                          [{skill.category}]
                        </span>
                        <span className="font-serif font-bold text-sm text-ink group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-ink">{skill.level}%</span>
                    </div>

                    {/* Progress Bar with glow node */}
                    <div className="w-full h-2 bg-ink/5 rounded-none overflow-hidden relative border border-ink/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-ink relative"
                      />
                    </div>
                    
                    <p className="text-[11px] text-ink/60 font-sans mt-1 leading-normal">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Credentials (5 Columns wide on desktop) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
            
            {/* Academic Credentials Box */}
            <div className="bg-paper p-6 rounded-none border border-ink/15 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)] text-left">
              <h3 className="text-lg font-serif font-bold text-ink border-b border-ink/10 pb-3 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-accent shrink-0" />
                <span>Formação Acadêmica</span>
              </h3>
              
              <div className="mt-5 space-y-6">
                <div className="relative pl-5 border-l-2 border-accent">
                  <span className="text-[9px] font-mono text-accent font-bold tracking-wider uppercase block">2023 | João Pessoa</span>
                  <h4 className="font-bold text-sm text-ink font-serif leading-snug mt-1">Tecnólogo em Administração</h4>
                  <p className="text-xs text-ink/65 font-sans mt-0.5">FASPEC (Faculdade de Educação)</p>
                </div>

                <div className="relative pl-5 border-l-2 border-ink/20">
                  <span className="text-[9px] font-mono text-ink/50 font-bold tracking-wider uppercase block">2013 | Porto Velho</span>
                  <h4 className="font-bold text-sm text-ink font-serif leading-snug mt-1">Ensino Médio</h4>
                  <p className="text-xs text-ink/65 font-sans mt-0.5">IFRO (Instituto Federal de Rondônia)</p>
                </div>
              </div>
            </div>

            {/* Interactive Languages Box */}
            <div className="bg-paper p-6 rounded-none border border-ink/15 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)] text-left">
              <h3 className="text-lg font-serif font-bold text-ink border-b border-ink/10 pb-3 flex items-center space-x-2">
                <Globe className="w-4 h-4 text-accent shrink-0" />
                <span>Idiomas Interativos</span>
              </h3>

              <div className="mt-5 space-y-4 font-sans">
                {/* Português Block */}
                <div className="flex items-center justify-between p-3 border border-ink/5 bg-paper/50 hover:bg-[#fcfbf9] hover:border-ink/15 transition-all">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-ink">Português</h4>
                    <p className="text-[10px] text-ink/50 font-mono uppercase font-bold tracking-wider">Língua Materna / Nativo</p>
                  </div>
                  {/* Flashing Pulse dots */}
                  <div className="flex space-x-2 px-2 items-center">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span
                        key={dot}
                        className="w-2.5 h-2.5 rounded-full bg-ink relative flex items-center justify-center"
                      >
                        <span className="absolute inline-flex h-full w-full rounded-full bg-ink opacity-40 animate-ping" />
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inglês Block */}
                <div className="flex items-center justify-between p-3 border border-ink/5 bg-paper/50 hover:bg-[#fcfbf9] hover:border-ink/15 transition-all">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-ink">Inglês</h4>
                    <p className="text-[10px] text-accent font-mono uppercase font-bold tracking-wider">Proficiência Avançada</p>
                  </div>
                  {/* Flashing pulse dots custom ratings */}
                  <div className="flex space-x-2 px-2 items-center">
                    {[1, 2, 3, 4].map((dot) => (
                      <span
                        key={dot}
                        className="w-2.5 h-2.5 rounded-full bg-accent relative flex items-center justify-center"
                      >
                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" />
                      </span>
                    ))}
                    <span className="w-2.5 h-2.5 rounded-full bg-ink/10 border border-ink/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Certifications List */}
            <div className="bg-paper p-6 rounded-none border border-ink/15 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)] text-left">
              <h3 className="text-lg font-serif font-bold text-ink border-b border-ink/10 pb-3 flex items-center space-x-2">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                <span>Certificações Complementares</span>
              </h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-start space-x-2.5 p-2 hover:bg-ink/5 transition-colors border-l border-accent">
                  <div className="w-4 h-4 bg-accent/25 text-accent rounded-none flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-ink leading-tight font-serif">Domínio Pacote Office</h4>
                    <p className="text-[9px] text-accent font-mono font-bold mt-0.5 uppercase tracking-wider">Fundação Bradesco</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 p-2 hover:bg-ink/5 transition-colors border-l border-accent">
                  <div className="w-4 h-4 bg-accent/25 text-accent rounded-none flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-ink leading-tight font-serif">Imagem e Postura Profissional</h4>
                    <p className="text-[9px] text-accent font-mono font-bold mt-0.5 uppercase tracking-wider">Fundação Bradesco</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
