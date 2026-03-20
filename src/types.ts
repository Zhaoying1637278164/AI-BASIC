export interface Term {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  metaphor: string;
  aiRelevance: string;
  codeExample: string;
  description: string;
  whatIsIt: {
    analogy: string;
    keys: string;
    values: string;
  };
  whyAiLovesIt: string[];
  howToRead: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface DailyUpdate {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  category: string;
  insight: string;
  whyItMatters: string[];
  tags: string[];
  imageUrl: string;
}

export interface PlatformUpdate {
  id: string;
  name: string;
  updatedAt: string;
  quickTake: string;
  interpretations: {
    name: string;
    status: 'NEW' | 'STABLE' | 'UPDATED';
    icon: string;
  }[];
  whyItMatters: string[];
}

export interface SourceCode {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  explanation: string;
  tags: string[];
}
