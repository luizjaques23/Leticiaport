import { X, Printer, Download, Mail, Phone, MapPin, Copy, Calendar, Award, FileText, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("leticia.almds@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    try {
      window.focus();
      window.print();
    } catch (error) {
      console.error("Erro ao abrir janela de impressão:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] overflow-y-auto bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Container wrapper */}
      <div className="relative w-full max-w-4xl bg-[#fefdfb] border border-ink/35 shadow-2xl rounded-none overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:bg-white select-none">
        
        {/* Top Control Header - Hidden during print */}
        <div className="bg-paper flex items-center justify-between px-6 py-4 border-b border-ink/20 print:hidden shrink-0">
          <div className="flex items-center space-x-2.5">
            <FileText className="w-5 h-5 text-accent" />
            <span className="font-serif font-bold text-ink text-sm sm:text-base">Dossiê Curricular Oficial</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-ink/15 hover:border-ink hover:bg-ink hover:text-paper font-mono text-[10px] font-bold uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
              title="Imprimir ou salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 px-1.5 border border-ink/10 hover:border-red-600 hover:bg-red-50 text-ink/40 hover:text-red-600 transition-all rounded-none cursor-pointer focus:outline-none"
              aria-label="Save and close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Portfolio Body */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-12 md:p-16 text-left selection:bg-accent/20 print:overflow-visible print:p-0">
          <div className="max-w-3xl mx-auto" id="curriculum-printable-area">
            
            {/* Printable Branding Header */}
            <div className="border-b-2 border-ink pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-2">
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-accent block font-bold leading-none">CURRICULUM VITAE</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ink tracking-tight leading-none">Letícia Silva</h1>
                <p className="text-sm font-serif italic text-accent font-semibold leading-relaxed">
                  Líder de Expansão, Desenvolvimento & Operações Regionais
                </p>
              </div>

              {/* Professional contact indicators */}
              <div className="space-y-1.5 text-xs font-sans text-ink/80 md:text-right w-full md:w-auto">
                <div className="flex items-center md:justify-end space-x-2">
                  <span className="text-[9px] font-mono text-ink/40 uppercase">E-mail:</span>
                  <a href="mailto:leticia.almds@gmail.com" className="font-semibold underline hover:text-accent">leticia.almds@gmail.com</a>
                </div>
                <div className="flex items-center md:justify-end space-x-2">
                  <span className="text-[9px] font-mono text-ink/40 uppercase">Telefone:</span>
                  <a href="tel:5583982121182" className="font-semibold">{`(83) 98212-1182`}</a>
                </div>
                <div className="flex items-center md:justify-end space-x-2">
                  <span className="text-[9px] font-mono text-ink/40 uppercase">Território:</span>
                  <span className="font-bold text-ink">Porto Velho (RO) / São Paulo (SP)</span>
                </div>
              </div>
            </div>

            {/* Resume Summary section */}
            <div className="mb-10 space-y-2.5">
              <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase pb-1.5 border-b border-ink/10">
                Resumo de Carreira
              </h2>
              <p className="text-xs sm:text-sm text-ink/80 font-sans leading-relaxed">
                Gestora sênior orientada a resultados e mitigação de custos operacionais na AIST Brazil Software. Vasta bagagem na reestruturação de filiais nacionais e regionais, auditorias de processos e padronização operacional (P&L e CAPEX). Expertise em coordenar equipes distribuídas remotamente em múltiplos territórios pelo Brasil e consolidar relatórios estatísticos sob o framework ágil de controle (Jira/Trello), garantindo consistência e rampa de metas acelerada.
              </p>
            </div>

            {/* Split layout: Experience (Left) vs Skills & Academic (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column - Experience (7 Cols) */}
              <div className="md:col-span-8 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase pb-1.5 border-b border-ink/10">
                    Trajetória Profissional
                  </h2>
                  
                  {/* Job 1 */}
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-serif font-bold text-base text-ink leading-snug">
                        Líder de Expansão e Desenvolvimento
                      </h3>
                      <span className="text-[10px] font-mono text-accent font-bold shrink-0">
                        2023 - Atualmente
                      </span>
                    </div>
                    <div className="text-xs font-sans text-ink/60 font-semibold uppercase tracking-wider flex justify-between">
                      <span>AIST BRAZIL SOFTWARE</span>
                      <span>São Paulo, SP</span>
                    </div>
                    <p className="text-xs text-ink/85 leading-relaxed font-sans">
                      Responsável por gerenciar toda a esfera operacional nacional e auditorias regionais de filiais remotas. Estabeleceu planos de mapeamento preventivo, mitigando riscos de OPEX em novas praças logísticas.
                    </p>
                    <ul className="list-disc list-inside text-xs text-ink/75 font-sans pl-2 space-y-1">
                      <li>Auditoria integrada e controle de 100% das orçamentações regionais no Brasil.</li>
                      <li>Sincronização de equipes distribuídas e implementação de rotinas corporativas de SLA.</li>
                      <li>Criação de estudos locacionais preditivos para abertura de novas franquias e subsidiárias.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="space-y-2 pt-4 text-left">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-serif font-bold text-base text-ink leading-snug">
                        Especialista em Expansão e Desenvolvimento
                      </h3>
                      <span className="text-[10px] font-mono text-ink/50 shrink-0">
                        08/2022 - 01/2023
                      </span>
                    </div>
                    <div className="text-xs font-sans text-ink/60 font-semibold uppercase tracking-wider flex justify-between">
                      <span>AIST BRAZIL SOFTWARE</span>
                      <span>João Pessoa, PB</span>
                    </div>
                    <p className="text-xs text-ink/85 leading-relaxed font-sans">
                      Supervisão e auditoria de gerentes regionais. Gestão do onboarding ágil de equipes multidisciplinares e campanhas de conversão de leads de campo.
                    </p>
                    <ul className="list-disc list-inside text-xs text-ink/75 font-sans pl-2 space-y-1">
                      <li>Contratação, treinamento e aceleração de rampeamento de funcionários seniores locais.</li>
                      <li>Preparação e ativação operacional do ecossistema de filiais brasileiras.</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div className="space-y-2 pt-4 text-left">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-serif font-bold text-base text-ink leading-snug">
                        Gerente de Subdivisão Regional
                      </h3>
                      <span className="text-[10px] font-mono text-ink/50 shrink-0">
                        03/2022 - 08/2022
                      </span>
                    </div>
                    <div className="text-xs font-sans text-ink/60 font-semibold uppercase tracking-wider flex justify-between">
                      <span>AIST BRAZIL SOFTWARE</span>
                      <span>João Pessoa, PB</span>
                    </div>
                    <p className="text-xs text-ink/85 leading-relaxed font-sans">
                      Garantia da aderência aos procedimentos regulatórios da filial. Execução de planos locais de marketing de mídia exterior e programas de fidelização para motoristas parceiros de aplicativo de mobilidade regional.
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Column - Skills & Education (4 Cols) */}
              <div className="md:col-span-4 space-y-10">
                
                {/* Academic credentials */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase pb-1.5 border-b border-ink/10">
                    Formação Acadêmica
                  </h2>
                  <div className="space-y-4">
                    <div className="text-left">
                      <span className="text-[9px] font-mono text-accent uppercase font-bold block">FASPEC | 2023</span>
                      <h4 className="font-serif font-bold text-xs text-ink mt-0.5 leading-snug">Tecnólogo em Administração</h4>
                      <p className="text-[10px] text-ink/60 font-sans">Faculdade de Administração de Empresas</p>
                    </div>

                    <div className="text-left">
                      <span className="text-[9px] font-mono text-ink/50 uppercase block font-medium">IFRO | 2013</span>
                      <h4 className="font-serif font-bold text-xs text-ink mt-0.5 leading-snug">Ensino Médio Convencional</h4>
                      <p className="text-[10px] text-ink/60 font-sans">Instituto Federal de Rondônia</p>
                    </div>
                  </div>
                </div>

                {/* Key competencies checklist */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase pb-1.5 border-b border-ink/10">
                    Hard & Soft Skills
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">Gestão de OPEX</span>
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">Auditoria de Processos</span>
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">onboarding Ágil</span>
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">Painéis Trello/Jira</span>
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">KPIs de Performance</span>
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">Liderança de Times</span>
                    <span className="text-[9px] font-mono border border-ink/15 px-2 py-0.5 bg-paper/30 font-semibold">Estudos de Viabilidade</span>
                  </div>
                </div>

                {/* Idiomas check */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase pb-1.5 border-b border-ink/10">
                    Idiomas
                  </h2>
                  <div className="space-y-1 text-xs text-ink/80 font-sans">
                    <div className="flex justify-between font-semibold">
                      <span>Português:</span>
                      <span className="text-accent">Nativo / Materno</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Inglês:</span>
                      <span className="text-ink/60 font-semibold">Proficiência Avançada</span>
                    </div>
                  </div>
                </div>

                {/* Complementary courses certs summary */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase pb-1.5 border-b border-ink/10">
                    Cursos Extras
                  </h2>
                  <div className="text-[10px] text-ink/75 font-sans space-y-1 pl-1">
                    <p className="leading-snug">· Domínio de Pacote Office Avançado <span className="text-accent/80 font-mono">(Fundação Bradesco)</span></p>
                    <p className="leading-snug">· Imagem e Postura Executiva de Sucesso <span className="text-accent/80 font-mono">(Fundação Bradesco)</span></p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom separation line */}
            <div className="mt-16 border-t-2 border-ink"></div>

          </div>
        </div>

        {/* Bottom Actions footer for screen view - Hidden during print */}
        <div className="border-t border-ink/15 bg-paper px-6 py-4 flex items-center justify-end shrink-0 print:hidden">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="text-[10px] font-mono font-bold uppercase transition-colors px-3 py-1.5 border border-ink/10 hover:border-ink cursor-pointer focus:outline-none"
            >
              {copied ? "COPIADO! ✅" : "COPIAR E-MAIL CONTATO"}
            </button>
            <button
              onClick={onClose}
              className="bg-ink text-paper hover:bg-accent text-[10px] font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-none transition-all cursor-pointer focus:outline-none"
            >
              Fechar Visualização
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
