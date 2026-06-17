import { useState } from "react";
import { experiences } from "../data";
import { Briefcase, Calendar, MapPin, Users2, ShieldAlert, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="trajetoria" className="py-24 bg-[#EBE7E0]/15 select-none border-b border-ink/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 border border-ink/25 text-ink px-4 py-1.5 rounded-none text-[10px] font-bold tracking-[0.25em] uppercase font-mono bg-transparent">
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            <span>Trajetória Executiva Dedicada</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            Histórico e Projetos Reais
          </h2>
          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-sans italic border-l-2 border-accent pl-4 max-w-xl mx-auto">
            Experiências práticas consolidadas em multinacionais e startups do setor logístico e comercial. Clique em cada cargo para abrir os KPI's de performance e o framework estratégico D-A-R.
          </p>
        </div>

        {/* Timeline Core Layout */}
        <div className="relative border-l border-ink/20 ml-4 sm:ml-6 space-y-12 text-left">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-8 sm:pl-10">
                
                {/* Timeline Node Icon (Floating square) */}
                <span className={`absolute -left-3.5 top-1.5 w-7 h-7 rounded-none border border-ink flex items-center justify-center transition-all duration-300 ${
                  isExpanded ? "bg-accent text-paper scale-110" : "bg-[#fdfcfb] text-ink/50"
                }`}>
                  <Briefcase className="w-3" style={{ height: "12px" }} />
                </span>

                {/* Experience Wrapper Card */}
                <div 
                  className={`bg-[#fdfcfb] rounded-none border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? "shadow-sm border-ink" 
                      : "border-ink/15 hover:border-ink/40 cursor-pointer"
                  }`}
                  onClick={() => !isExpanded && toggleExpand(exp.id)}
                >
                  {/* Card Header (Visible initially) */}
                  <div className="p-6 flex flex-wrap justify-between items-start gap-4 cursor-pointer" onClick={() => isExpanded && toggleExpand(exp.id)}>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <h3 className="text-xl font-serif font-bold text-ink leading-tight">{exp.role}</h3>
                        <span className="text-[10px] bg-ink text-paper px-2.5 py-0.5 rounded-none font-bold font-mono uppercase tracking-wider">
                          {exp.company}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/60 font-medium">
                        <span className="flex items-center space-x-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center space-x-1 font-sans">
                          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{exp.location}</span>
                        </span>
                        <span className="flex items-center space-x-1 font-sans">
                          <Users2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{exp.teamSize}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                      {/* Active KPI Badges preview on closed state */}
                      {!isExpanded && exp.kpis && (
                        <div className="hidden md:flex items-center space-x-1.5">
                          {exp.kpis.slice(0, 2).map((kpi, kIdx) => (
                            <span key={kIdx} className="text-[9px] font-mono bg-[#f5f2ed] text-accent border border-ink/10 font-bold px-2 py-0.5 rounded-none">
                              {kpi.label}: {kpi.value}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <button 
                        className={`p-1.5 rounded-none border border-ink/15 text-ink/40 hover:text-ink hover:bg-ink/5 transition-colors focus:outline-none`}
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-accent" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Section (Toggle Details) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-stone-100 overflow-hidden"
                      >
                        <div className="p-6 pt-5 space-y-6 text-left">
                                               {/* Role scope text Description */}
                          <div className="space-y-2">
                            <span className="text-[9px] font-mono text-ink/40 uppercase tracking-widest block font-bold">Escopo de Atuação</span>
                            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">{exp.description}</p>
                          </div>

                          {/* Achievements list checklist */}
                          <div className="space-y-3">
                            <span className="text-[9px] font-mono text-ink/40 uppercase tracking-widest block font-bold">Entregas de Margem e OPEX</span>
                            <div className="space-y-2.5">
                              {exp.achievements.map((achievement, aIdx) => (
                                <div key={aIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                  <span className="text-ink/85 leading-normal font-sans">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Problem Solver Briefing: Case D-A-R (Highlight Box) */}
                          <div className="bg-paper text-ink rounded-none p-5 border border-ink space-y-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)]">
                            <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-2">
                              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-accent" />
                                Resolução de Problemas: Framework D-A-R
                              </span>
                              <span className="text-[9px] font-mono text-ink/50">Modelo Executivo</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                              
                              {/* Desafio Box */}
                              <div className="space-y-2">
                                <div className="inline-flex items-center space-x-1.5 bg-ink text-paper px-2 py-0.5 rounded-none font-mono text-[9px] font-bold">
                                  <AlertCircle className="w-3 h-3 text-accent" />
                                  <span>DESAFIO CRÍTICO</span>
                                </div>
                                <p className="text-[11px] text-ink/80 leading-relaxed font-sans italic">{exp.briefing.desafio}</p>
                              </div>

                              {/* Ação Box */}
                              <div className="space-y-2">
                                <div className="inline-flex items-center space-x-1.5 bg-ink text-paper px-2 py-0.5 rounded-none font-mono text-[9px] font-bold">
                                  <Sparkles className="w-3 h-3 text-accent" />
                                  <span>AÇÃO MITIGADORA</span>
                                </div>
                                <p className="text-[11px] text-ink/80 leading-relaxed font-sans italic">{exp.briefing.acao}</p>
                              </div>

                              {/* Resultado Box */}
                              <div className="space-y-2">
                                <div className="inline-flex items-center space-x-1.5 bg-accent text-[#fdfcfb] px-2 py-0.5 rounded-none font-mono text-[9px] font-bold">
                                  <CheckCircle2 className="w-3 h-3 text-paper" />
                                  <span>IMPACTO COM METAS</span>
                                </div>
                                <p className="text-[11px] text-ink leading-relaxed font-semibold font-sans">{exp.briefing.resultado}</p>
                              </div>

                            </div>
                          </div>

                          {/* KPIs numerical targets visualization */}
                          <div className="space-y-3">
                            <span className="text-[9px] font-mono text-ink/40 uppercase tracking-widest block font-bold">Métricas Atingidas de Sucesso</span>
                            <div className="grid grid-cols-3 gap-4">
                              {exp.kpis.map((kpi, kIdx) => (
                                <div key={kIdx} className="bg-[#fcfbf9] p-3.5 rounded-none border border-ink/10 hover:border-ink transition-colors text-center">
                                  <div className="text-xl sm:text-2xl font-serif font-bold text-ink">{kpi.value}</div>
                                  <div className="text-[9px] font-mono text-ink/60 uppercase tracking-widest font-semibold mt-1">{kpi.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
