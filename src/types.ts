export interface Briefing {
  desafio: string;
  acao: string;
  resultado: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  teamSize: string;
  achievements: string[];
  briefing: Briefing;
  kpis: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "Estratégia" | "Operações" | "Liderança" | "Tecnologia & Processos";
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  challenge: string;
  strategy: string;
  impact: string[];
  metrics: { label: string; value: string; trend: string }[];
}

export interface FrameworkStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpis: string[];
}

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  relationship: string;
  avatarSeed: string;
}
