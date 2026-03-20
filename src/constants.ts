import { Term, DailyUpdate, PlatformUpdate, SourceCode } from './types';

export const TERMS: Term[] = [
  {
    id: 'json',
    title: 'JSON',
    subtitle: '数据格式',
    category: '核心概念',
    metaphor: '像清单一样的存钱罐。它不装钱，装的是名字和对应的内容。',
    aiRelevance: 'AI 给工具下指令或读取信息时，几乎都在用这个格式。',
    codeExample: '{\n  "姓名": "张三",\n  "年龄": 25\n}',
    description: '结构化的小猪储蓄罐',
    whatIsIt: {
      analogy: '把 JSON 想象成一个数字标签机。',
      keys: '抽屉上的标签。它告诉你里面是什么（例如：“用户名”）。',
      values: '抽屉里的实际物品（例如：“Stitch”）。',
    },
    whyAiLovesIt: [
      '与工具直接通信 (MCP)',
      '数据解释零歧义',
      '可扩展处理复杂指令',
    ],
    howToRead: [
      {
        title: '花括号',
        description: '这些定义了“储蓄罐”的边界。里面的所有内容都是一个对象。',
        icon: 'braces',
      },
      {
        title: '忽略引号',
        description: '引号只是文本的标记。阅读引号*内部*的内容来寻找含义。',
        icon: 'quote',
      },
      {
        title: '跟随缩进',
        description: '缩进可以帮助你查看哪些数据片段在层级结构中属于同一部分。',
        icon: 'indent',
      },
    ],
  },
  {
    id: 'api',
    title: 'API',
    subtitle: '应用程序接口',
    category: '核心概念',
    metaphor: '就像餐厅的服务员，你告诉他要什么，他去厨房（服务器）取来给你。',
    aiRelevance: 'AI 通过 API 与外部世界交互，比如查询天气或发送邮件。',
    codeExample: 'GET /api/weather?city=Shanghai',
    description: '数字服务员',
    whatIsIt: {
      analogy: '把 API 想象成连接两座岛屿的桥梁。',
      keys: '请求：你想要什么。',
      values: '响应：你得到的回报。',
    },
    whyAiLovesIt: [
      '标准化交互',
      '安全访问数据',
      '模块化架构',
    ],
    howToRead: [
      {
        title: '端点',
        description: '服务所在的特定 URL。',
        icon: 'map-pin',
      },
      {
        title: '方法',
        description: 'GET, POST, PUT, DELETE - 要采取的操作。',
        icon: 'activity',
      },
      {
        title: '标头',
        description: '额外信息，如身份验证密钥。',
        icon: 'key',
      },
    ],
  },
  {
    id: 'token',
    title: 'Token',
    subtitle: '文本单位',
    category: '核心概念',
    metaphor: 'AI 阅读时的“单词碎片”，类似于乐高积木里的最小零件。',
    aiRelevance: 'AI 的处理能力通常以 Token 数量来衡量，它是 AI 理解语言的基础。',
    codeExample: '"Hello world" -> ["Hello", " world"]',
    description: '语言的乐高积木',
    whatIsIt: {
      analogy: '把 Token 想象成句子的原子。',
      keys: '上下文窗口：AI 能记住多少 Token。',
      values: '成本：通常按 1k 或 1M Token 衡量。',
    },
    whyAiLovesIt: [
      '高效处理',
      '文本的数学表示',
      '通用语言处理',
    ],
    howToRead: [
      {
        title: '子词',
        description: 'Token 并不总是完整的单词；它们可以是单词的一部分。',
        icon: 'scissors',
      },
      {
        title: '上下文限制',
        description: 'AI 在单次对话中拥有的最大“记忆”。',
        icon: 'brain',
      },
      {
        title: '编码',
        description: '文本如何转化为 AI 使用的数字。',
        icon: 'binary',
      },
    ],
  },
];

export const DAILY_UPDATES: DailyUpdate[] = [
  {
    id: 'mcp',
    date: '2025年2月27日',
    title: '今日一点',
    subtitle: '每日一事。一个关于技术、未来与生活的小窗。',
    category: '新技术',
    insight: 'AI 的通用接口，让 AI 可以更方便地读取你的笔记、文件和网页，而不仅仅是对话。',
    whyItMatters: [
      '如果你想让 AI 帮你处理个人文件或管理任务，它是未来的必经之路。',
      '它打破了孤岛，让大模型真正理解你的数字世界，不再局限于单一的聊天框。',
    ],
    tags: ['协议演进', '核心概念', '系统脉搏'],
    imageUrl: 'https://picsum.photos/seed/mcp/800/450',
  },
];

export const PLATFORM_UPDATES: PlatformUpdate[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    updatedAt: '2小时前',
    quickTake: '重点：高级推理模型和 API 定价变更。',
    interpretations: [
      { name: 'o1 Models', status: 'NEW', icon: 'brain' },
      { name: 'Capabilities', status: 'STABLE', icon: 'zap' },
      { name: 'Prompt Guide', status: 'UPDATED', icon: 'file-text' },
    ],
    whyItMatters: [
      '推理模型的上线意味着传统的提示词工程正向逻辑链条设计转型。',
      '定价模型趋于稳定；个人项目可以忽略企业级旧文档。',
    ],
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    updatedAt: '5小时前',
    quickTake: '重点：200万 Token 上下文窗口和 Workspace 自动化。',
    interpretations: [
      { name: 'Gemini 1.5 Pro', status: 'STABLE', icon: 'sparkles' },
      { name: 'Context Window', status: 'NEW', icon: 'maximize' },
    ],
    whyItMatters: [
      '突破性的长文本处理能力，是整理海量个人资料的首选工具。',
    ],
  },
  {
    id: 'anthropic-claude',
    name: 'Anthropic Claude',
    updatedAt: '1天前',
    quickTake: '重点：Artifacts UI 和 Computer Use 测试版。',
    interpretations: [
      { name: 'Claude 3.5 Sonnet', status: 'STABLE', icon: 'shield' },
      { name: 'Computer Use', status: 'NEW', icon: 'monitor' },
    ],
    whyItMatters: [
      '这里的文档是理解“人工智能宪法”和安全边界的最佳范本。',
    ],
  },
];

export const SOURCE_CODE_SAMPLES: SourceCode[] = [
  {
    id: 'mcp-server',
    title: 'MCP Server 基础结构',
    description: 'Model Context Protocol 的核心服务实现，让 AI 能够调用本地工具。',
    language: 'typescript',
    code: `import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "我的工具服务",
  version: "1.0.0",
}, {
  capabilities: {
    tools: {},
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [{
      name: "get_weather",
      description: "获取当前天气",
      inputSchema: { type: "object", properties: { city: { type: "string" } } }
    }]
  };
});`,
    explanation: '这段代码展示了如何初始化一个 MCP 服务。核心在于 `capabilities` 的定义，它告诉 AI 这个服务能做什么（比如提供哪些工具）。',
    tags: ['MCP', 'SDK', '基础设施']
  },
  {
    id: 'prompt-template',
    title: '结构化提示词模板',
    description: '一种基于 XML 标签的结构化提示词设计，提高 AI 输出的稳定性。',
    language: 'markdown',
    code: `<system_instruction>
  你是一个得力的编程助手。
  遵循以下规则：
  - 使用 TypeScript
  - 优先使用函数式组件
</system_instruction>

<user_query>
  创建一个按钮组件。
</user_query>`,
    explanation: '使用 XML 标签可以帮助大模型（如 Claude）更好地识别指令、背景和用户输入，减少指令漂移。',
    tags: ['提示词工程', '最佳实践']
  }
];
