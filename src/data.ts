import { Experience, Skill, CaseStudy, FrameworkStep, Recommendation } from "./types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Líder de Expansão e Desenvolvimento",
    company: "AIST BRAZIL SOFTWARE",
    period: "02/2023 - Atual",
    location: "São Paulo, SP",
    description: "Líder em Desenvolvimento e Expansão com sólida experiência no gerenciamento de operações regionais, abertura de novos territórios e expansão de negócios em múltiplas regiões. Especialista na coordenação de equipes multidisciplinares distribuídas em diferentes cidades, com foco em engajamento, alta performance e superação de metas. Expertise em planejamento estratégico, mapeamento e otimização de processos operacionais e implementação de ferramentas de controle de projetos para garantir a eficiência e a produtividade dos times.",
    teamSize: "Equipes Multifuncionais",
    achievements: [
      "Gestão e controle de demandas operacionais em todas as filiais do Brasil.",
      "Planejamento estratégico de operações focado em expansão e eficiência.",
      "Auditoria e revisão de processos internos em cada unidade operacional.",
      "Implementação de melhorias contínuas nos fluxos de trabalho da empresa.",
      "Coordenação de relatórios gerenciais mensais e comunicação direta com diretores.",
      "Gestão de equipes multifuncionais distribuídas em diferentes cidades.",
      "Prospecção, estudo e abertura de novas filiais em novos territórios.",
      "Desenvolvimento de estratégias de expansão para identificar novas oportunidades.",
      "Gestão do budget de projetos e alocação de recursos financeiros."
    ],
    briefing: {
      desafio: "Garantir a homogeneidade operacional e o alinhamento de processos de P&L financeiros em dezenas de filiais distribuídas por múltiplos territórios nacionais.",
      acao: "Desenvolvi táticas de auditoria interna contínua de processos, prospectei novos territórios com estudos de mercado preditivos e criei relatórios gerenciais mensais de controle.",
      resultado: "Controle integrado de 100% das demandas operacionais de todas as filiais do Brasil, resultando em precisão na alocação orçamentária e eficiência dos times de campo."
    },
    kpis: [
      { label: "Controle Operacional", value: "100%" },
      { label: "Abrangência", value: "Filiais BR" },
      { label: "Gestão de Custos", value: "Orçamentos" }
    ]
  },
  {
    id: "exp-2",
    role: "Especialista em Expansão e Desenvolvimento",
    company: "AIST BRAZIL SOFTWARE",
    period: "08/2022 - 01/2023",
    location: "João Pessoa, PB",
    description: "Foco no planejamento operacional conjunto com os gerentes das filiais sob supervisão e no onboarding ágil de novas regiões de atuação do ecossistema corporativo.",
    teamSize: "Líderes de Filiais",
    achievements: [
      "Contratação e treinamento de novos funcionários para as equipes operacionais.",
      "Preparação e início de novas filiais em novas regiões de atuação.",
      "Acompanhamento remoto de demandas e entregas diárias de cada unidade.",
      "Planejamento operacional conjunto com os gerentes das filiais sob supervisão.",
      "Análise de resultados e métricas de campanhas de marketing local.",
      "Elaboração de relatórios mensais de desempenho e performance regional."
    ],
    briefing: {
      desafio: "Estabelecer novas filiais operacionais do zero e treinar equipes regionais garantindo alta performance imediata.",
      acao: "Criei playbooks de onboarding estruturados, treinei colaboradores locais seniores e implantei acompanhamento diário remoto de entregas e KPIs de marketing.",
      resultado: "Lançamento ágil de filiais com times altamente produtivos de campo e acompanhamento remoto de metas sem fricção."
    },
    kpis: [
      { label: "Contratações", value: "Saneadas" },
      { label: "Acompanhamento", value: "24/7 Remoto" },
      { label: "Desempenho", value: "Metas OK" }
    ]
  },
  {
    id: "exp-3",
    role: "Gerente de Subdivisão",
    company: "AIST BRAZIL SOFTWARE",
    period: "03/2022 - 08/2022",
    location: "João Pessoa, PB",
    description: "Coordenação de atividades diárias e garantia dos procedimentos operacionais da filial. Atuação forte na retenção e fidelização de motoristas parceiros e suporte administrativo de excelência.",
    teamSize: "Times Administrativos",
    achievements: [
      "Execução de estratégias de fidelização voltadas para motoristas de plataforma.",
      "Planejamento publicitário mensal para aumento de visibilidade da marca e campanhas locais.",
      "Gestão de equipe e suporte administrativo focado no atendimento aos motoristas.",
      "Supervisão do atendimento ao cliente para garantia de excelência e satisfação.",
      "Coordenação de atividades diárias e garantia dos procedimentos operacionais da filial.",
      "Elaboração de relatórios gerenciais e análise de dados para suporte em expansão.",
      "Mapeamento de fluxos de trabalho e reestruturação para aumento de produtividade."
    ],
    briefing: {
      desafio: "Garantir a retenção de prestadores de serviços (motoristas parceiros) em ambiente competitivo e reestruturar rituais internos ineficientes.",
      acao: "Mapeei e otimizei todos os fluxos de trabalho, pilotei programas locais de incentivo e fidelidade e estruturei suporte de atendimento em tempo integral.",
      resultado: "Aumento de produtividade, satisfação de clientes assegurada e consolidação das normas operacionais básicas com processos 100% desenhados."
    },
    kpis: [
      { label: "Fidelização", value: "Alta Taxa" },
      { label: "Atendimento", value: "Excelente" },
      { label: "Processos", value: "Mapeados" }
    ]
  }
];

export const skills: Skill[] = [
  {
    name: "Gestão de Operações",
    level: 96,
    category: "Operações",
    description: "Gerenciamento estratégico de rotinas locais, eficiência de praças e padronização operacional de todas as filiais do Brasil."
  },
  {
    name: "Ferramentas de Gestão (Trello/Jira)",
    level: 92,
    category: "Tecnologia & Processos",
    description: "Gestão ágil de demandas remotas de campo, controle integrado de quadros de tarefas e acompanhamento de cronogramas."
  },
  {
    name: "Auditoria Operacional",
    level: 95,
    category: "Operações",
    description: "Auditoria e revisão minuciosa de processos internos para garantir a integridade operacional de cada unidade satélite."
  },
  {
    name: "KPIs e Métricas",
    level: 94,
    category: "Tecnologia & Processos",
    description: "Definição, monitoramento e análise profunda de indicadores-chave de desempenho para subsidiar decisões baseadas em dados."
  },
  {
    name: "Resolução de Problemas",
    level: 96,
    category: "Estratégia",
    description: "Identificação rápida de atritos, eliminação de gargalos operacionais e implementação imediata de planos de mitigação eficientes."
  },
  {
    name: "Liderança de Equipes Multifuncionais",
    level: 95,
    category: "Liderança",
    description: "Coordenação e engajamento de equipes multidisciplinares com foco em alta performance e superação de metas corporativas."
  },
  {
    name: "Comunicação Executiva",
    level: 93,
    category: "Liderança",
    description: "Elaboração de relatórios gerenciais consolidados e interface assertiva com diretores e o conselho de acionistas."
  },
  {
    name: "Tomada de Decisão Estratégica",
    level: 95,
    category: "Estratégia",
    description: "Estudos locacionais para expansão regional e estudos de viabilidade técnica de novas praças mercadológicas."
  },
  {
    name: "Capacidade Multitarefa",
    level: 92,
    category: "Operações",
    description: "Gestão integrada de budget de projetos, onboarding presencial e monitoramento simultâneo de demandas distribuídas no país."
  }
];

export const frameworkSteps: FrameworkStep[] = [
  {
    step: 1,
    title: "Prospecção & Estudo de Território",
    subtitle: "Mapeamento Locacional Inicial",
    description: "Análise profunda de viabilidade para novos territórios operacionais, mapeamento de demandas de rotas logísticas urbanas e estudo de atratividade de praças locais.",
    deliverables: [
      "Relatório comparativo de atratividade de regiões",
      "Projeção macro de alocação de capites (Capex)",
      "Estudos de viabilidade regulatória locacional"
    ],
    kpis: [
      "Target de orçamentos aprovados",
      "Definição clara da região focal secundária"
    ]
  },
  {
    step: 2,
    title: "Onboarding & Ativação de Filial",
    subtitle: "Contratação, Treinamento & Sistemas",
    description: "Ativação locacional física, contratação seletiva de novos colaboradores para as equipes locais e onboarding intensivo baseado em rituais do core business.",
    deliverables: [
      "Comitês de filiais locais contratados",
      "Playbook operacional básico integrado ao time",
      "Sistemas de controle de demandas e Jira/Trello rodando"
    ],
    kpis: [
      "Tempo de rampa operacional de funcionários",
      "Satisfação no onboarding local (NPS interno)"
    ]
  },
  {
    step: 3,
    title: "Auditoria & Melhoria Contínua",
    subtitle: "Calibração e Otimização de Processos",
    description: "Acompanhamento remoto de demandas diárias, auditoria interna rigorosa dos processos administrativos/comerciais e refinamento de fluxos de trabalho.",
    deliverables: [
      "Checklists consolidados de auditorias",
      "Plataforma de demandas diárias monitorada",
      "Mapeamento e reestruturação de atritos identificados"
    ],
    kpis: [
      "Eliminação de desperdício financeiro operacional",
      "Aceleração de tempos de repasse operacional"
    ]
  },
  {
    step: 4,
    title: "Autonomia & Reporte Executivo",
    subtitle: "Rituais consolidados & Autonomia Local",
    description: "Entrega completa do fluxo de negócios para os gerentes locais supervisionados, atuando sob painéis de controle integrados (Relatórios Mensais).",
    deliverables: [
      "Dashboards ativos com dados diários",
      "Mensuração de performance de campanhas locais",
      "Relatórios mensais emitidos consolidados para a diretoria"
    ],
    kpis: [
      "Unidade operando sem supervisão física local",
      "Alcance do break-even e margem operacional estável"
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Estruturação Nacional e Unificação de Filiais",
    category: "Expansão Nacional & Gestão de Processos",
    period: "2023 - Atual",
    summary: "Como padronizamos as demandas operacionais das filiais brasileiras da AIST BRAZIL SOFTWARE sob painéis analíticos unificados.",
    challenge: "Filiais com processos administrativos fragmentados, falta de controle centralizado de orçamentos regionais e baixo engajamento interno das praças satélites.",
    strategy: "Implementei rituais consistentes de auditorias de processos internos, introduzi ferramentas integradas de controle (Jira/Trello) e estabeleci agendas mensais de reporte direto corporativo.",
    impact: [
      "Unificação de 100% dos fluxos operacionais de todas as filiais sob regras homogêneas.",
      "Redução acentuada na disparidade técnica e financeira entre as unidades regionais do país.",
      "Garantia de tomada de decisões assertivas com reports analíticos dinâmicos de alta confiabilidade."
    ],
    metrics: [
      { label: "Mapeamento Total", value: "100%", trend: "Fluxos de P&L em todas as filiais" },
      { label: "Otimização de Custos", value: "+18%", trend: "Economia do budget das unidades" },
      { label: "Desempenho Geral", value: "SLA OK", trend: "Relatórios de viabilidade mensais" }
    ]
  },
  {
    id: "case-2",
    title: "Fidelização e Reestruturação de Time em João Pessoa",
    category: "Operações Voltadas ao Cliente",
    period: "2022",
    summary: "Transformação da produtividade local e elevação da fidelidade de parceiros executores de transporte autônomo na regional Nordeste.",
    challenge: "Alto desengajamento de motoristas parceiros, lentidão na resposta administrativa e falta de mapeamento de atritos logísticos diários no escritório local.",
    strategy: "Mapeei todos os fluxos de trabalho administrativos de campo, capacitei o time local presencialmente para resoluções imediatas e criei campanhas publicitárias focadas no mercado regional.",
    impact: [
      "Aumento imediato de produtividade e rapidez no suporte administrativo ao parceiro presencial.",
      "Consolidação de fluxos de trabalho reformulados e menor turnover voluntário de motoristas da plataforma.",
      "Satisfação no suporte de atendimento ao cliente sintonizado em padrões de excelência."
    ],
    metrics: [
      { label: "Retenção Motoristas", value: "92%", trend: "Elevada taxa de lealdade atingida" },
      { label: "Mapeamento Processos", value: "Completo", trend: "Todos os gargalos solucionados" },
      { label: "NPS de Atendimento", value: "Excelente", trend: "Usuários finais e colaboradores em sintonia" }
    ]
  }
];

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    name: "Alexandre Pontes",
    role: "Diretor Geral de Engenharia Operacional",
    company: "AIST BRAZIL SOFTWARE",
    text: "Letícia é brilhante quando se trata de estruturar operações e fazer várias unidades regionais funcionarem sob as mesmas métricas rígidas. Seu dinamismo em capacitar pessoas e fazer auditorias limpas transformou o nosso controle gerencial.",
    relationship: "Liderou Letícia na AIST BRAZIL SOFTWARE",
    avatarSeed: "alexandre"
  },
  {
    id: "rec-2",
    name: "Juliana Medeiros",
    role: "Gerente Operacional da Regional João Pessoa",
    company: "AIST BRAZIL SOFTWARE",
    text: "Trabalhar com a Letícia na expansão de João Pessoa foi uma grande escola. Ela nos ensinou a olhar os processos de ponta a ponta e a resolver os problemas no momento em que acontecem, sempre orientada a dados e metas de satisfação.",
    relationship: "Parceira de projeto em expansões do Nordeste",
    avatarSeed: "juliana"
  }
];

export const simulatorPresets = {
  regioes: [
    { name: "São Paulo Metropolitana (Grande SP)", multiplicadorCusto: 1.3, complexidade: "Alta", recomendacaoTime: "Líder regional, 3 supervisores e 15 analistas", tempoEstimado: "90 a 120 dias" },
    { name: "Interior Paulista (Campinas/Ribeirão/Sorocaba)", multiplicadorCusto: 1.0, complexidade: "Média", recomendacaoTime: "Líder local, 2 supervisores e 8 analistas", tempoEstimado: "60 a 90 dias" },
    { name: "Região Sul (Curitiba/Porto Alegre/Joinville)", multiplicadorCusto: 1.1, complexidade: "Média-Alta", recomendacaoTime: "Líder local, 2 supervisores e 10 analistas", tempoEstimado: "75 a 100 dias" },
    { name: "Nordeste Capitais (Salvador/Recife/Fortaleza)", multiplicadorCusto: 0.9, complexidade: "Média", recomendacaoTime: "Líder local, 1 supervisor e 6 operadores", tempoEstimado: "90 a 110 dias" }
  ],
  focados: [
    { name: "Rapidez Extrema (Aceleração rápida do onboarding)", impactoCusto: 1.25, riscoEstima: "Baixo (alto foco em alocação intensiva)", taxaSucesso: "98%" },
    { name: "Custo Controlado (Ocupação racional de orçamentos)", impactoCusto: 0.85, riscoEstima: "Médio (timeline esticada em até 15%)", taxaSucesso: "92%" },
    { name: "Segurança Total (Rígida auditoria e rituais)", impactoCusto: 1.05, riscoEstima: "Mínimo (máxima resiliência integrada)", taxaSucesso: "99%" }
  ]
};

export const consultingQA = [
  {
    id: "qa-1",
    pergunta: "Qual seu princípio nº 1 ao estruturar ou herdar demandas de filiais descentralizadas?",
    resposta: "Auditoria e mapeamento imediato de processos. Antes de propor mudanças operacionais brutas, eu analiso em detalhe os fluxos atuais com supervisores e motoristas para entender gargalos práticos e falhas cotidianas de suporte administrativo."
  },
  {
    id: "qa-2",
    pergunta: "Como você gerencia equipes multidisciplinares distribuídas geograficamente?",
    resposta: "Equilíbrio entre controle unificado e autonomia nos fluxos diários. Estabeleço painéis analíticos transparentes semanais no Jira/Trello e organizo rituais mensais de relatórios para manter todos focados nas mesmas metas de expansão."
  },
  {
    id: "qa-3",
    pergunta: "Qual a melhor estratégia para fidelizar motoristas e profissionais de plataforma?",
    resposta: "Lançar suporte presencial e administrativo ágil aliado a planejamento promocional local. Quando o motorista ou operador de rua sente que tem apoio de suporte sem burocracias e processos claros de P&L, a rotatividade cai exponencialmente."
  },
  {
    id: "qa-4",
    pergunta: "Como planejar e decidir a expansão física para novos territórios?",
    resposta: "Se baseando inteiramente em estudos criteriosos de concorrência local, dados demográficos macro do território e metas rígidas de CAPEX. Atuar por dados afasta suposições subjetivas de viabilidade técnica das praças."
  }
];
