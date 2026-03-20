import { useState, useEffect } from 'react';
import { 
  Search, 
  History, 
  Bookmark, 
  Volume2, 
  ArrowUpRight, 
  Calendar, 
  BookOpen, 
  Compass, 
  Settings, 
  ChevronRight, 
  Code, 
  Zap, 
  Shield, 
  Brain, 
  FileText, 
  Maximize, 
  Monitor, 
  Sparkles, 
  ArrowLeft, 
  Share2, 
  MoreVertical,
  Tag,
  Package,
  CheckCircle2,
  Network,
  Braces,
  Quote,
  Indent,
  MapPin,
  Activity,
  Key,
  Scissors,
  Binary,
  Download,
  ExternalLink,
  RefreshCw,
  LayoutGrid,
  MessageSquare,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TERMS, DAILY_UPDATES, PLATFORM_UPDATES, SOURCE_CODE_SAMPLES } from './constants';
import { Term, DailyUpdate, PlatformUpdate, SourceCode } from './types';

// --- Components ---

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'today', icon: Calendar, label: '今日' },
    { id: 'glossary', icon: BookOpen, label: '词典' },
    { id: 'source', icon: Terminal, label: '源码' },
    { id: 'explore', icon: Compass, label: '探索' },
    { id: 'settings', icon: Settings, label: '设置' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 backdrop-blur-xl shadow-[0_-4px_40px_rgba(47,51,48,0.06)] rounded-t-[3rem]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300 active:scale-90 ${
            activeTab === tab.id 
              ? 'bg-primary-container text-on-primary-container' 
              : 'text-on-surface/40 hover:bg-surface-container-low'
          }`}
        >
          <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'fill-current' : ''}`} />
          <span className="text-[10px] uppercase tracking-widest mt-1 font-bold">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

const Header = ({ title, showSearch = false, onBack }: { title: string, showSearch?: boolean, onBack?: () => void }) => (
  <header className="bg-surface flex justify-between items-center w-full px-8 py-4 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      {onBack ? (
        <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
      ) : (
        <Sparkles className="w-6 h-6 text-primary" />
      )}
      <h1 className="font-headline text-2xl font-medium tracking-tight text-primary">{title}</h1>
    </div>
    <div className="flex items-center gap-4">
      {showSearch && (
        <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
          <Search className="w-6 h-6 text-on-surface/60" />
        </button>
      )}
      <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
        <History className="w-6 h-6 text-primary" />
      </button>
      <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
        <Bookmark className="w-6 h-6 text-primary" />
      </button>
    </div>
  </header>
);

// --- Views ---

const TodayView = () => {
  const update = DAILY_UPDATES[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 pt-4 pb-32 space-y-8"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant/10">
        <div className="flex items-center gap-2">
          <div className="growth-pulse">
            <span className="growth-pulse-ring"></span>
            <span className="growth-pulse-dot"></span>
          </div>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest">每日更新</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-on-surface-variant/60">
            <RefreshCw className="w-3 h-3" />
            <span className="text-[10px] font-medium">同步版本 v1.0</span>
          </div>
          <div className="h-3 w-[1px] bg-outline-variant/30"></div>
          <span className="text-[10px] text-on-surface-variant font-medium">{update.date}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
          {update.title}
        </h1>
        <p className="text-on-surface-variant font-body text-lg opacity-80">
          {update.subtitle}
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_40px_0_rgba(47,51,48,0.06)] overflow-hidden border border-outline-variant/10">
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Network className="w-8 h-8 text-surface" />
              </div>
              <div>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold text-[10px] uppercase">{update.category}</span>
                <h3 className="font-headline text-2xl font-bold mt-1">MCP</h3>
              </div>
            </div>
            <div className="p-4 bg-primary-container/30 rounded-xl border-l-4 border-primary">
              <h4 className="text-[10px] text-primary font-bold uppercase mb-1">核心洞察</h4>
              <p className="text-sm text-on-primary-container font-medium leading-snug">
                {update.insight}
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
                深入探索 <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-8 py-3 rounded-full font-bold transition-colors text-sm text-center">
                稍后阅读
              </button>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 gap-6 bg-surface-container-low/50 rounded-lg p-6 md:p-8">
            <div className="space-y-4">
              <h4 className="text-[11px] text-on-surface font-bold tracking-widest flex items-center gap-2 opacity-60">
                <History className="w-4 h-4" />
                为什么现在很重要
              </h4>
              <div className="space-y-3">
                {update.whyItMatters.map((item, i) => (
                  <div key={i} className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {update.tags.map(tag => (
                <span key={tag} className="text-[9px] bg-primary/10 text-primary px-2 py-1 rounded-full font-bold uppercase">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low rounded-xl p-6 space-y-4 border border-outline-variant/10">
          <div className="aspect-[16/9] bg-surface-container-lowest rounded-lg overflow-hidden grayscale group hover:grayscale-0 transition-all duration-700">
            <img 
              alt="协议" 
              className="w-full h-full object-cover" 
              src={update.imageUrl}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-2">
            <p className="text-on-surface-variant text-xs italic leading-relaxed opacity-70">
              “信息的连接是智能的基础。”
            </p>
          </div>
        </div>
        <div className="bg-primary/5 rounded-xl p-8 flex flex-col justify-center border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              <Sparkles className="w-6 h-6 text-primary relative z-10" />
            </div>
            <h4 className="font-headline text-lg font-bold text-primary">系统脉动</h4>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            我们正在策划明天的洞察... 敬请期待个人计算的下一次进化。
          </p>
        </div>
      </section>
    </motion.div>
  );
};

const GlossaryView = ({ onSelectTerm }: { onSelectTerm: (term: Term) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = TERMS.filter(term => 
    term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 pt-12 space-y-12 pb-32"
    >
      <section className="space-y-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="w-6 h-6 text-outline" />
          </div>
          <input 
            className="w-full bg-surface-container-high h-20 pl-16 pr-8 rounded-xl border-none focus:ring-4 focus:ring-primary-fixed-dim/30 text-xl font-headline transition-all placeholder:text-outline/60" 
            placeholder="搜索任何术语..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
              查找
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 ml-2">
          <span className="text-xs text-on-surface-variant uppercase tracking-widest mr-2">常用词汇:</span>
          {TERMS.map(term => (
            <button 
              key={term.id}
              onClick={() => onSelectTerm(term)}
              className="bg-surface-container-lowest text-secondary px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors"
            >
              {term.title}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map(term => (
          <div 
            key={term.id}
            onClick={() => onSelectTerm(term)}
            className="bg-surface-container-low rounded-lg p-8 hover:bg-surface-container-high transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="space-y-1">
                <h4 className="font-headline text-2xl font-bold">{term.title}</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">{term.subtitle}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="text-on-surface-variant line-clamp-2 text-sm leading-relaxed">{term.metaphor}</p>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

const TermDetailView = ({ term, onBack }: { term: Term, onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6 py-12 md:px-12 lg:px-24 space-y-20 pb-32"
    >
      <section className="relative grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">{term.category}</span>
          </div>
          <h2 className="font-headline text-5xl font-extrabold text-on-surface leading-tight tracking-tight">{term.description}</h2>
          <p className="font-headline text-xl text-on-surface-variant font-medium opacity-80">{term.metaphor}</p>
          <p className="text-on-surface-variant leading-relaxed max-w-md">
            {term.aiRelevance}
          </p>
        </div>
        <div className="relative flex justify-center items-center h-[400px]">
          <div className="absolute inset-0 bg-tertiary/5 rounded-full animate-pulse"></div>
          <div className="relative z-10 w-64 h-64 bg-surface-container-lowest rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="p-8 space-y-4 w-full">
              <div className="h-4 w-3/4 bg-primary-container rounded-full"></div>
              <div className="h-4 w-full bg-secondary-container rounded-full"></div>
              <div className="h-4 w-1/2 bg-tertiary-container rounded-full"></div>
              <div className="flex justify-center pt-4">
                <Code className="w-20 h-20 text-primary opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <h3 className="font-headline text-2xl font-bold text-primary">这是什么？</h3>
          <p className="text-sm text-on-surface-variant/60 font-bold uppercase tracking-widest">人话翻译</p>
        </div>
        <div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed font-medium">
              {term.whatIsIt.analogy}
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Tag className="w-5 h-5" />
                  <span className="font-bold">键 (标签)</span>
                </div>
                <p className="text-sm text-on-surface-variant">{term.whatIsIt.keys}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-tertiary">
                  <Package className="w-5 h-5" />
                  <span className="font-bold">值 (内容)</span>
                </div>
                <p className="text-sm text-on-surface-variant">{term.whatIsIt.values}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <h3 className="font-headline text-3xl font-extrabold tracking-tight">视觉拆解</h3>
          <span className="text-on-surface-variant text-xs uppercase tracking-widest bg-surface-container-high px-3 py-1 rounded-full">蓝图</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bg-surface-container-highest p-8 rounded-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
              </div>
              <span className="text-xs font-mono opacity-40 uppercase tracking-tighter">example.json</span>
            </div>
            <pre className="font-mono text-lg md:text-2xl leading-relaxed text-on-surface-variant">
              {term.codeExample}
            </pre>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            {term.whyAiLovesIt.map((item, i) => (
              <div key={i} className="bg-primary-container/30 p-6 rounded-lg flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="font-bold">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-primary-fixed">{item.split(' (')[0]}</h4>
                  <p className="text-sm opacity-70">{item.includes('(') ? item.split('(')[1].replace(')', '') : '现代 AI 工作流的基础。'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm space-y-6">
          <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8">
            <Zap className="w-8 h-8 text-primary fill-current" />
          </div>
          <h3 className="font-headline text-3xl font-bold">为什么 AI 喜欢它</h3>
          <p className="text-on-surface-variant leading-relaxed">
            人工智能很聪明，但需要清晰度。虽然人类可以从杂乱的笔记中猜测含义，但 AI 更喜欢<span className="font-bold text-primary italic">精准</span>。
          </p>
          <ul className="space-y-4 pt-4">
            {term.whyAiLovesIt.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-tertiary/20 to-primary/10 flex items-center justify-center p-12">
          <div className="text-center space-y-4">
            <Network className="w-20 h-20 text-tertiary/40" />
            <p className="font-headline text-lg font-bold text-tertiary-dim">交互的语言</p>
            <p className="text-sm max-w-xs mx-auto text-tertiary-dim/70">这是你的 AI 伙伴与你的日历、文件和网页对话的方式。</p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center space-y-2">
          <h3 className="font-headline text-3xl font-bold">如何像专家一样阅读</h3>
          <p className="text-on-surface-variant">快速识别模式的小贴士</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {term.howToRead.map((item, i) => (
            <div key={i} className="bg-surface-container-low p-8 rounded-xl text-center hover:bg-white transition-all duration-300 hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container transition-colors">
                {item.icon === 'braces' && <Braces className="w-6 h-6 text-primary" />}
                {item.icon === 'quote' && <Quote className="w-6 h-6 text-primary" />}
                {item.icon === 'indent' && <Indent className="w-6 h-6 text-primary" />}
                {item.icon === 'map-pin' && <MapPin className="w-6 h-6 text-primary" />}
                {item.icon === 'activity' && <Activity className="w-6 h-6 text-primary" />}
                {item.icon === 'key' && <Key className="w-6 h-6 text-primary" />}
                {item.icon === 'scissors' && <Scissors className="w-6 h-6 text-primary" />}
                {item.icon === 'brain' && <Brain className="w-6 h-6 text-primary" />}
                {item.icon === 'binary' && <Binary className="w-6 h-6 text-primary" />}
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const ExploreView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 pt-4 pb-32 space-y-12"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant/10">
        <div className="flex items-center gap-2">
          <div className="growth-pulse">
            <span className="growth-pulse-ring"></span>
            <span className="growth-pulse-dot"></span>
          </div>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest">实时同步</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-on-surface-variant/60">
            <RefreshCw className="w-3 h-3" />
            <span className="text-[10px] font-medium">解析器 v2.4</span>
          </div>
          <div className="h-3 w-[1px] bg-outline-variant/30"></div>
          <span className="text-[10px] text-on-surface-variant font-medium">最后更新：2025年2月26日</span>
        </div>
      </div>

      <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-10 space-y-6">
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">官方站点解析器</span>
          </div>
          <h2 className="font-headline text-5xl leading-tight text-on-surface">实时解构 AI<br/>官方动态</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
            在这个瞬息万变的 AI 时代，我们不仅为你导航，更实时解构官方文档背后的核心意图。
          </p>
        </div>
        <div className="absolute right-[-50px] top-[-20px] w-64 h-64 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-tertiary-container rounded-full blur-3xl animate-pulse"></div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6">
        {PLATFORM_UPDATES.map(platform => (
          <div key={platform.id} className="bg-surface-container-lowest rounded-xl shadow-[0_4px_40px_0_rgba(47,51,48,0.06)] overflow-hidden border border-outline-variant/10">
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-on-surface rounded-2xl flex items-center justify-center">
                    {platform.id === 'openai' && <Zap className="w-8 h-8 text-surface" />}
                    {platform.id === 'google-gemini' && <Sparkles className="w-8 h-8 text-surface" />}
                    {platform.id === 'anthropic-claude' && <Shield className="w-8 h-8 text-surface" />}
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold">{platform.name}</h3>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">已更新 {platform.updatedAt}</span>
                  </div>
                </div>
                <div className="p-4 bg-primary-container/30 rounded-xl border-l-4 border-primary">
                  <h4 className="text-[10px] text-primary font-bold uppercase mb-1">核心摘要</h4>
                  <p className="text-sm text-on-primary-container leading-snug">{platform.quickTake}</p>
                </div>
                <div className="pt-4">
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold tracking-wide flex items-center gap-2 hover:opacity-90 transition-all">
                    访问官网 <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low/50 rounded-lg p-6 md:p-8">
                <div className="space-y-4">
                  <h4 className="text-xs text-primary font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    实时解读
                  </h4>
                  <ul className="space-y-3">
                    {platform.interpretations.map(item => (
                      <li key={item.name} className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg group">
                        <div className="flex items-center gap-3">
                          {item.icon === 'brain' && <Brain className="w-4 h-4 text-primary" />}
                          {item.icon === 'zap' && <Zap className="w-4 h-4 text-primary" />}
                          {item.icon === 'file-text' && <FileText className="w-4 h-4 text-primary" />}
                          {item.icon === 'sparkles' && <Sparkles className="w-4 h-4 text-primary" />}
                          {item.icon === 'maximize' && <Maximize className="w-4 h-4 text-primary" />}
                          {item.icon === 'shield' && <Shield className="w-4 h-4 text-primary" />}
                          {item.icon === 'monitor' && <Monitor className="w-4 h-4 text-primary" />}
                          <span className="text-sm text-on-surface">{item.name}</span>
                        </div>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                          item.status === 'NEW' ? 'bg-error-container/20 text-error' : 
                          item.status === 'UPDATED' ? 'bg-tertiary-container text-on-tertiary-container' : 
                          'bg-primary/10 text-primary'
                        }`}>{item.status === 'NEW' ? '新' : item.status === 'UPDATED' ? '已更新' : '稳定'}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs text-on-surface-variant font-bold flex items-center gap-2">
                    <History className="w-4 h-4" />
                    为什么现在很重要
                  </h4>
                  <div className="space-y-3">
                    {platform.whyItMatters.map((item, i) => (
                      <div key={i} className="p-3 border border-outline-variant/10 rounded-lg">
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-primary/5 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 border-l-4 border-primary">
        <div className="flex-1">
          <h4 className="font-headline text-2xl text-primary mb-2">获取动态解读报告</h4>
          <p className="text-on-surface-variant">我们的 AI 专家每周整理一份“官方文档解读报告”，包含未公开的 API 变更与实测对比。</p>
        </div>
        <button className="bg-surface-container-lowest text-primary border border-primary/20 px-8 py-3 rounded-full font-bold tracking-wide whitespace-nowrap hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          下载最新报告
        </button>
      </section>
    </motion.div>
  );
};

const SettingsView = ({ onOpenFeedback }: { onOpenFeedback: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 pt-12 space-y-12 pb-32"
    >
      <div className="space-y-4">
        <h2 className="font-headline text-4xl font-bold">设置</h2>
        <p className="text-on-surface-variant">管理你的偏好与账户信息。</p>
      </div>

      <div className="bg-surface-container-low rounded-xl overflow-hidden divide-y divide-outline-variant/10">
        {[
          { icon: Shield, label: '隐私与安全', desc: '管理你的数据与权限' },
          { icon: Zap, label: '性能优化', desc: '调整 AI 响应速度与质量' },
          { icon: LayoutGrid, label: '界面布局', desc: '自定义你的主页视图' },
          { icon: MessageSquare, label: '意见反馈', desc: '告诉我们你的想法', onClick: onOpenFeedback },
          { icon: ExternalLink, label: '关于 Lumina', desc: '版本信息与开发者支持' },
        ].map((item, i) => (
          <button 
            key={i} 
            onClick={item.onClick}
            className="w-full flex items-center justify-between p-6 hover:bg-surface-container-high transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">{item.label}</h4>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-outline" />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

const SourceCodeView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 pt-12 space-y-12 pb-32"
    >
      <div className="space-y-4">
        <h2 className="font-headline text-4xl font-bold">源码初探</h2>
        <p className="text-on-surface-variant">窥探 AI 的底层逻辑，从代码中寻找灵感。</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {SOURCE_CODE_SAMPLES.map(sample => (
          <div key={sample.id} className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_40px_0_rgba(47,51,48,0.06)] overflow-hidden border border-outline-variant/10">
            <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold">{sample.title}</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">{sample.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {sample.language}
                </span>
              </div>
            </div>
            <div className="p-8 bg-on-surface/5 font-mono text-sm overflow-x-auto">
              <pre className="text-on-surface/90 leading-relaxed">
                <code>{sample.code}</code>
              </pre>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-start gap-4 p-4 bg-primary-container/20 rounded-xl border-l-4 border-primary">
                <Sparkles className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest">逻辑解读</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {sample.explanation}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {sample.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FeedbackModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden p-10"
      >
        {!submitted ? (
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 bg-primary-container rounded-3xl flex items-center justify-center mx-auto mb-4 rotate-3">
                <MessageSquare className="w-10 h-10 text-primary -rotate-3" />
              </div>
              <h2 className="font-headline text-3xl font-bold">意见反馈</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">你的每一份建议，都是 Lumina 成长的养分。</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">我想反馈...</label>
                <div className="grid grid-cols-2 gap-3">
                  {['功能建议', '内容纠错', '界面美化', '其他'].map(type => (
                    <button key={type} className="py-3 px-4 bg-surface-container-low rounded-xl text-xs font-bold text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20">
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">详细描述</label>
                <textarea 
                  rows={4}
                  placeholder="请畅所欲言..."
                  className="w-full bg-surface-container-low border-none rounded-2xl p-5 text-sm focus:ring-4 focus:ring-primary/10 outline-none resize-none transition-all"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <button 
                onClick={onClose}
                className="flex-1 py-4 rounded-2xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setSubmitted(true)}
                className="flex-[2] py-4 bg-primary text-on-primary rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                提交反馈
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 space-y-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-primary/30">
              <CheckCircle2 className="w-12 h-12 text-on-primary" />
            </div>
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold">感谢反馈！</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed px-4">
                我们已收到你的心声。Lumina 的进化离不开每一位探索者的参与。
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-full py-5 bg-surface-container-high rounded-2xl font-bold text-sm hover:bg-surface-container-highest transition-colors"
            >
              返回探索
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('today');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleBack = () => {
    if (selectedTerm) {
      setSelectedTerm(null);
    }
  };

  const getHeaderTitle = () => {
    if (selectedTerm) return selectedTerm.title;
    switch (activeTab) {
      case 'today': return '今日';
      case 'glossary': return 'AI 词典';
      case 'source': return '源码初探';
      case 'explore': return '官网导读';
      case 'settings': return '设置';
      default: return 'Lumina';
    }
  };

  return (
    <div className="min-h-screen pb-32">
      <Header 
        title={getHeaderTitle()} 
        showSearch={activeTab === 'glossary' && !selectedTerm}
        onBack={selectedTerm ? handleBack : undefined}
      />
      
      <main>
        <AnimatePresence mode="wait">
          {selectedTerm ? (
            <TermDetailView term={selectedTerm} onBack={handleBack} />
          ) : (
            <div key={activeTab}>
              {activeTab === 'today' && <TodayView />}
              {activeTab === 'glossary' && <GlossaryView onSelectTerm={setSelectedTerm} />}
              {activeTab === 'source' && <SourceCodeView />}
              {activeTab === 'explore' && <ExploreView />}
              {activeTab === 'settings' && <SettingsView onOpenFeedback={() => setIsFeedbackOpen(true)} />}
            </div>
          )}
        </AnimatePresence>
      </main>

      {!selectedTerm && (
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      <AnimatePresence>
        {isFeedbackOpen && (
          <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
