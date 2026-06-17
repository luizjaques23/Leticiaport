import React, { useState, useEffect } from "react";
import { Mail, CheckCircle, Navigation, Phone, Linkedin, Calendar, Lock, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  // Contact Form States (Clean dynamically populated from inputs)
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    cargo: "",
    email: "",
    mensagem: "",
    colaboracao: "Entrevista de Cargo Executivo"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isMessageManual, setIsMessageManual] = useState(false);

  // Template generators based on selection - dynamically populated based ONLY on the entered/typed name
  const getTemplateMessage = (colab: string, nome: string) => {
    const finalNome = nome.trim() || "[Nome da Pessoa]";

    switch (colab) {
      case "Entrevista de Cargo Executivo":
        return `Olá, sou ${finalNome} e gostaria de convidá-la para participar de uma entrevista em nossa empresa.`;
      case "Contratação de Consultoria":
        return `Olá, sou ${finalNome} e gostaria de propor uma oportunidade para contratação de consultoria logística.`;
      case "Conversa Inicial de Networking":
        return `Olá, sou ${finalNome} e gostaria de nos conectar para trocar contatos e referências de mercado.`;
      case "Mapeamento de Demanda":
        return `Olá, sou ${finalNome} e gostaria de agendar uma conversa para receber seus insights operacionais.`;
      default:
        return "";
    }
  };

  // Safe and distinct primitives to update the message dynamically as the user types or toggles selections
  const depNome = formData.nome;
  const depColab = formData.colaboracao;

  useEffect(() => {
    if (!isMessageManual) {
      setFormData(prev => ({
        ...prev,
        mensagem: getTemplateMessage(depColab, depNome)
      }));
    }
  }, [depNome, depColab, isMessageManual]);

  const getSubject = () => `[Avaliando Portfólio] Contato de ${formData.nome} - ${formData.colaboracao}`;
  const getBodyText = () => `Olá Letícia,

Segue mensagem enviada através de seu Portfólio Executivo:

"${formData.mensagem}"

Atenciosamente,
${formData.nome}
${formData.cargo ? `${formData.cargo} ` : ""}${formData.empresa ? `na ${formData.empresa}` : ""}
E-mail de contato: ${formData.email}`;

  const getMailtoLink = () => {
    return `mailto:leticia.almds@gmail.com?subject=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getBodyText())}`;
  };

  const getGmailLink = () => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=leticia.almds@gmail.com&su=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getBodyText())}`;
  };

  // Scheduler Booking States
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const days = [
    { id: "hoje", label: "Amanhã", date: "18 Junho" },
    { id: "amanha", label: "Sexta-Feira", date: "19 Junho" },
    { id: "segunda", label: "Segunda-Feira", date: "22 Junho" }
  ];

  const timeSlots = ["10:00", "14:30", "16:00", "17:35"];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.nome.trim()) tempErrors.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Insira um endereço de email válido.";
    }
    if (!formData.mensagem.trim()) tempErrors.mensagem = "Por favor, digite uma mensagem curta.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Instantly open the mail client with composed headers and body
      try {
        const mailtoUrl = getMailtoLink();
        window.open(mailtoUrl, "_blank");
      } catch (err) {
        console.error("Falha ao abrir mailto automaticamente:", err);
      }
    }, 1200);
  };

  const handleBookingSubmit = () => {
    if (!selectedDay || !selectedTimeSlot) return;
    setBooked(true);
  };

  return (
    <section id="contato" className="py-24 bg-paper text-left relative overflow-hidden select-none border-b border-ink/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 filter blur-3xl rounded-none pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 border border-ink/25 text-ink px-4 py-1.5 rounded-none text-[10px] font-bold tracking-[0.25em] uppercase font-mono bg-transparent">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>Alinhamento Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            Iniciar Conexão Executiva
          </h2>
          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-sans italic border-l-2 border-accent pl-4 max-w-xl mx-auto">
            Seja para estruturar uma regional, agendar uma entrevista de contratação técnica ou calibrar orçamentos de expansão, use os canais abaixo para agendar um contato oficial em menos de 2 minutos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-12 w-full">
          
          {/* Centered Direct Form */}
          <div className="bg-[#fdfcfb] p-6 sm:p-8 rounded-none border border-ink/15 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.03)] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form-key"
                  className="space-y-5"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border-b border-ink/10 pb-3 mb-3 text-left">
                    <span className="font-serif font-bold text-ink block text-lg">Formulário de Contato Direto</span>
                    <span className="text-xs text-ink/50 block">Mensagens enviadas diretamente para a caixa de Letícia Silva</span>
                  </div>

                  {/* Nome Completo field */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono font-bold text-ink/50 uppercase tracking-widest block font-bold">Seu Nome*</label>
                      <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: João Silva"
                        className={`w-full bg-[#fdfcfb] border px-4 py-3 rounded-none text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.nome ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-ink/40 focus:border-accent"
                        }`}
                      />
                      {errors.nome && <span className="text-[10px] text-red-500 font-mono font-semibold block">{errors.nome}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono font-bold text-ink/50 uppercase tracking-widest block font-bold">Empresa / Instituição</label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ex: Nexum S/A"
                        className="w-full bg-[#fdfcfb] border border-ink/40 focus:border-accent px-4 py-3 rounded-none text-xs sm:text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {/* Cargo executivo */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono font-bold text-ink/50 uppercase tracking-widest block font-bold">Seu Cargo</label>
                      <input
                        type="text"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        placeholder="Ex: Diretor de RH"
                        className="w-full bg-[#fdfcfb] border border-ink/40 focus:border-accent px-4 py-3 rounded-none text-xs sm:text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Corporativo */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono font-bold text-ink/50 uppercase tracking-widest block font-bold">Seu Email Comercial*</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: joao@empresa.com"
                        className={`w-full bg-[#fdfcfb] border px-4 py-3 rounded-none text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.email ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-ink/40 focus:border-accent"
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-mono font-semibold block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Colaboration Purpose Selector */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] font-mono font-bold text-ink/50 uppercase tracking-widest block font-bold">Objetivo do Contato</label>
                    <select
                      value={formData.colaboracao}
                      onChange={(e) => {
                        setIsMessageManual(false); // Reset lock so selection updates template
                        setFormData({ ...formData, colaboracao: e.target.value });
                      }}
                      className="w-full bg-[#fdfcfb] border border-ink/40 focus:border-accent px-4 py-3 rounded-none text-xs sm:text-sm font-semibold focus:outline-none transition-colors"
                    >
                      <option value="Entrevista de Cargo Executivo">Entrevista de Recrutador / Cargo Executivo</option>
                      <option value="Contratação de Consultoria">Proposta de Consultoria de Expansão Metropolitana</option>
                      <option value="Conversa Inicial de Networking">Apenas trocar contatos de mercado (Networking)</option>
                      <option value="Mapeamento de Demanda">Entender viabilidade técnica de nova praça logística</option>
                    </select>
                  </div>

                  {/* Mensagem body */}
                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono font-bold text-ink/50 uppercase tracking-widest block font-bold">Breve Resumo da Proposta/Mensagem*</label>
                    <textarea
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => {
                        setIsMessageManual(true); // Lock auto-generator as they edit manually
                        setFormData({ ...formData, mensagem: e.target.value });
                      }}
                      placeholder="Olá Letícia, gostaria de agendar uma reunião técnica para analisar..."
                      className={`w-full bg-[#fdfcfb] border px-4 py-3 rounded-none text-xs sm:text-sm focus:outline-none transition-colors resize-none ${
                        errors.mensagem ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-ink/40 focus:border-accent"
                      }`}
                    />
                    {errors.mensagem && <span className="text-[10px] text-red-500 font-mono font-semibold block">{errors.mensagem}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ink text-paper font-serif font-bold uppercase tracking-widest border border-ink hover:bg-accent hover:border-accent hover:text-paper transition-all duration-350 py-4 rounded-none text-[11px] disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#fdfcfb] border-t-transparent rounded-full animate-spin inline-block" />
                        <span>Preparando Mensagem...</span>
                      </>
                    ) : (
                      <>
                        <span>Preparar e Enviar E-mail</span>
                        <ArrowUpRight className="w-4 h-4 text-accent" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form-panel"
                  className="py-12 px-6 text-center space-y-6 max-w-md mx-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-[#f5f2ed] text-accent rounded-none border border-ink/15 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-ink">E-mail Pronto para Envio!</h3>
                    <p className="text-xs text-ink/75 mt-2 leading-relaxed">
                      Obrigado, <span className="font-semibold text-ink">{formData.nome}</span>! Caso o seu aplicativo de e-mail padrão ou navegador não tenha aberto automaticamente com a mensagem, use os botões abaixo para enviar com um único clique:
                    </p>
                  </div>

                  {/* Gmail and native mail client action triggers */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <a
                      href={getGmailLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-ink text-[#fdfcfb] hover:bg-accent border border-ink hover:border-accent font-mono py-3.5 px-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#EA4335] animate-pulse" />
                      <span>Enviar com Gmail Web (Navegador)</span>
                    </a>

                    <a
                      href={getMailtoLink()}
                      className="w-full bg-transparent text-ink border border-ink/40 hover:border-ink font-mono py-3 px-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2.5 text-center"
                    >
                      <Mail className="w-3.5 h-3.5 text-accent" />
                      <span>Abrir no Cliente de E-mail Padrão</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-ink/10 text-[10px] text-ink/50 flex items-center justify-center space-x-2 font-mono">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Conexão direta mapeada para leticia.almds@gmail.com</span>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsMessageManual(false); // Reset lock so new inputs generate template
                      setFormData({
                        nome: "",
                        empresa: "",
                        cargo: "",
                        email: "",
                        mensagem: "",
                        colaboracao: "Entrevista de Cargo Executivo"
                      });
                    }}
                    className="text-accent hover:text-ink font-mono font-bold transition-all text-xs uppercase tracking-wider"
                  >
                    [ Redefinir Formulário ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer legalities branding signature */}
        <div className="mt-24 pt-8 border-t border-ink/10 flex flex-wrap gap-6 items-center justify-between text-left">
          <div className="space-y-1">
            <span className="font-serif font-bold text-sm text-ink block">Letícia Silva | Portfólio</span>
            <span className="text-[10px] text-ink/50 font-mono block">© 2026 Letícia - Todos os direitos reservados</span>
          </div>

          <div className="flex space-x-4 text-xs font-mono text-ink/50">
            <a href="#inicio" className="hover:text-accent transition-colors font-bold">Início</a>
            <span className="text-ink/15">|</span>
            <a href="#trajetoria" className="hover:text-accent transition-colors">Histórico</a>
            <span className="text-ink/15">|</span>
            <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-accent transition-colors cursor-pointer">Voltar ao Topo ↑</a>
          </div>
        </div>

      </div>
    </section>
  );
}
