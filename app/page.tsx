'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Mic,
  Cloud,
  Globe,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Linkedin,
  Code2,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Briefcase,
  RefreshCw,
  Rocket,
  Shield,
  Headphones,
  Lightbulb,
  ChevronRight,
  MapPin,
  MessageSquare,
  Smartphone,
  Monitor,
  Bot,
  Database,
  Lock,
  TrendingUp,
  Users,
  Award,
  Star,
  Cpu,
  BarChart3,
  Layers,
  GitBranch,
  Terminal,
  Eye,
  Fingerprint,
  Radio,
  Activity,
} from 'lucide-react'

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden font-sans">

      {/* ─── Ambient Background ─── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Mesh gradient orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-indigo-700/20 rounded-full blur-[160px] animate-drift" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px] animate-drift-slow" />
        <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] bg-violet-700/15 rounded-full blur-[180px] animate-drift" style={{ animationDelay: '3s' }} />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.025]" />
        {/* Fine grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        {/* Spotlight following mouse — subtle */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
            left: mousePos.x - 300,
            top: mousePos.y - 300,
          }}
        />
      </div>

      {/* ─── Navigation ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-glass border-b border-white/[0.06] py-3' : 'py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
          <a
            href="https://www.linkedin.com/company/zenithpulseuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/zenith-pulse-logo.png"
              alt="Zenith Pulse"
              width={200}
              height={60}
              className="h-10 md:h-11 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {['services', 'how-we-work', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="nav-link px-4 py-2 text-[13px] font-medium tracking-wide text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05] capitalize"
              >
                {item === 'how-we-work' ? 'Process' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shahzaib-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2"
            >
              <Linkedin size={16} />
            </a>
            <Button asChild className="cta-button text-[13px] font-semibold tracking-wide px-5 py-2 h-9 border-0 rounded-full">
              <a href="#contact">Get Started Free</a>
            </Button>
          </div>

          <button
            className="md:hidden text-zinc-300 hover:text-white transition-colors p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 rounded-2xl p-5 space-y-1 mobile-glass border border-white/10 backdrop-blur-2xl">
            {[
              { href: '#services', label: 'Services' },
              { href: '#how-we-work', label: 'Process' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all font-medium"
              >
                {link.label}
                <ChevronRight size={16} className="text-zinc-600" />
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full cta-button text-sm font-semibold border-0 rounded-xl py-3">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started Free</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-44 pb-32 px-6 z-10">
        <div className="container mx-auto text-center max-w-6xl">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 border border-cyan-500/25 bg-cyan-500/[0.07]">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">Trusted by 50+ Global Companies</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.95] tracking-[-0.04em] mb-8 text-balance">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="hero-gradient-text">Business</span>
            <br />
            <span className="text-white/90">with Digital Innovation</span>
          </h1>

          <p className="text-[clamp(1rem,2.2vw,1.3rem)] text-zinc-400 mb-3 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            From AI-powered chatbots to stunning mobile apps and enterprise websites—we build digital solutions that drive real business growth.
          </p>

          <p className="text-base text-cyan-400/90 font-semibold mb-14 tracking-wide">
            One partner. Full stack. Delivered in weeks, not months.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: Users, value: '50+', label: 'Clients Worldwide', color: 'cyan' },
              { icon: Award, value: '100+', label: 'Projects Delivered', color: 'indigo' },
              { icon: Star, value: '99.9%', label: 'Success Rate', color: 'violet' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05] transition-colors group"
              >
                <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
                <span className="font-bold text-white text-sm">{stat.value}</span>
                <span className="text-zinc-500 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Hero visual — floating card cluster */}
          <div className="relative w-full max-w-[320px] mx-auto mb-16 h-72">
            {/* Central orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/40 via-cyan-500/30 to-violet-600/40 blur-2xl animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full bento-card flex items-center justify-center border border-white/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-indigo-500/40">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating chips */}
            {[
              { icon: Smartphone, color: 'cyan', label: 'Mobile', top: '-4%', left: '50%', delay: '0s' },
              { icon: Monitor, color: 'indigo', label: 'Web', top: '55%', left: '4%', delay: '0.8s' },
              { icon: Bot, color: 'violet', label: 'AI', top: '55%', left: '76%', delay: '1.6s' },
              { icon: Shield, color: 'emerald', label: 'Secure', top: '8%', left: '80%', delay: '2.4s' },
            ].map((chip) => (
              <div
                key={chip.label}
                className="absolute flex items-center gap-2 px-3 py-2 rounded-xl bento-card border border-white/[0.09] floating-chip"
                style={{ top: chip.top, left: chip.left, animationDelay: chip.delay, transform: 'translateX(-50%)' }}
              >
                <chip.icon className={`w-4 h-4 text-${chip.color}-400`} />
                <span className="text-xs font-semibold text-zinc-300">{chip.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="cta-button border-0 text-base font-semibold px-8 py-6 rounded-full group shadow-2xl shadow-indigo-500/30"
            >
              <a href="#contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.07] text-white text-base font-medium px-8 py-6 rounded-full backdrop-blur-xl"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <p className="text-xs text-zinc-600 mt-6 tracking-widest">
            ⚡ FREE CONSULTATION &nbsp;·&nbsp; 🔒 NDA AVAILABLE &nbsp;·&nbsp; 🌍 GLOBAL DELIVERY
          </p>
        </div>
      </section>

      {/* ─── Security / Military-Grade Section ─── */}
      <section className="py-20 px-6 z-10 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="security-bento rounded-3xl border border-white/[0.07] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left — main content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-8 right-8 opacity-[0.04]">
                  <Shield className="w-48 h-48 text-cyan-400" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.07] mb-6 w-fit">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase">Military-Grade Security</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.035em] mb-6 text-balance">
                  Built for Fintech,
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Defence-Grade</span>
                  <br />
                  Security Standards
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg text-base">
                  Every system we build is engineered with the same security rigor used in financial institutions and defense sectors. From supply-chain integrity checks to zero-trust architecture, we protect your data like a fortress.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Lock, label: 'Zero-Trust Architecture' },
                    { icon: Fingerprint, label: 'Biometric Authentication' },
                    { icon: Eye, label: 'Audit Trail Logging' },
                    { icon: Activity, label: 'Real-time Threat Detection' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <item.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-zinc-300 font-medium leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — metrics grid */}
              <div className="p-8 lg:p-12 border-l border-white/[0.06] grid grid-cols-2 gap-4 content-center">
                {[
                  { value: 'SOC 2', label: 'Compliance Ready', color: 'cyan' },
                  { value: 'HIPAA', label: 'Healthcare Compliant', color: 'violet' },
                  { value: 'PCI DSS', label: 'Payment Security', color: 'indigo' },
                  { value: '256-bit', label: 'AES Encryption', color: 'emerald' },
                  { value: '99.99%', label: 'Uptime SLA', color: 'cyan' },
                  { value: '<100ms', label: 'Incident Response', color: 'pink' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-6 rounded-2xl bg-${metric.color}-500/[0.06] border border-${metric.color}-500/20 hover:bg-${metric.color}-500/[0.10] transition-colors group`}
                  >
                    <div className={`text-2xl font-black tracking-tight text-${metric.color}-400 mb-1`}>{metric.value}</div>
                    <div className="text-xs text-zinc-500 font-medium leading-tight">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Bento Grid ─── */}
      <section id="services" className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-[0.2em] text-xs">What We Do</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight tracking-[-0.035em] mb-5 text-balance">
              Complete Digital Solutions
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Under One Roof</span>
            </h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">
              From concept to launch, we handle everything your business needs to thrive in the digital world
            </p>
          </div>

          {/* Asymmetric bento layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

            {/* Mobile — large card */}
            <ServiceBentoCard
              className="md:col-span-3 md:row-span-1"
              icon={Smartphone}
              color="indigo"
              title="Mobile App Development"
              description="Native iOS & Android apps with stunning UI/UX. From concept to App Store—we build apps users love at scale."
              features={['React Native & Flutter', 'Push notifications & payments', 'Offline-first architecture', 'App Store optimization']}
              tags={['iOS', 'Android', 'Cross-platform']}
              watermarkIcon={Smartphone}
            />

            {/* Website — tall card */}
            <ServiceBentoCard
              className="md:col-span-3"
              icon={Monitor}
              color="cyan"
              title="Website Development"
              description="Lightning-fast websites that convert visitors into customers. SEO-optimized, mobile-responsive, and built on modern frameworks."
              features={['Next.js & React', 'E-commerce platforms', 'CMS integration', 'Core Web Vitals optimized']}
              tags={['Landing Pages', 'E-commerce', 'Portals']}
              watermarkIcon={Monitor}
            />

            {/* AI Chatbots */}
            <ServiceBentoCard
              className="md:col-span-2"
              icon={Bot}
              color="violet"
              title="AI Chatbots"
              description="24/7 intelligent assistants that learn from every conversation and delight customers."
              features={['GPT-4 & Claude integration', 'CRM integration', 'Custom training']}
              tags={['Support', 'Sales', 'Lead Gen']}
              watermarkIcon={Bot}
              compact
            />

            {/* Voice AI */}
            <ServiceBentoCard
              className="md:col-span-2"
              icon={Headphones}
              color="pink"
              title="Voice AI Assistants"
              description="Natural voice interactions for call centers, IVR systems, and intelligent voice apps."
              features={['Real-time transcription', 'Emotion detection', 'Low latency <200ms']}
              tags={['IVR', 'Call Centers', 'Voice Apps']}
              watermarkIcon={Radio}
              compact
            />

            {/* Cloud */}
            <ServiceBentoCard
              className="md:col-span-2"
              icon={Cloud}
              color="emerald"
              title="Cloud & DevOps"
              description="Scalable infrastructure on AWS, Azure, GCP with 99.9% uptime guaranteed."
              features={['Auto-scaling', 'CI/CD pipelines', 'Security hardening']}
              tags={['AWS', 'Azure', 'Docker']}
              watermarkIcon={Cloud}
              compact
            />

            {/* Custom Dev — wide bottom */}
            <ServiceBentoCard
              className="md:col-span-6"
              icon={Code2}
              color="amber"
              title="Custom Development"
              description="Got a unique challenge? We architect and build bespoke solutions—from complex APIs to legacy modernization—tailored to your exact business requirements."
              features={['Full-stack development', 'API design & development', 'Database architecture', 'Legacy system modernization']}
              tags={['Python', 'Node.js', 'React', 'PostgreSQL', 'Microservices']}
              watermarkIcon={Terminal}
              wide
            />
          </div>
        </div>
      </section>

      {/* ─── Founder Section — Tech Titan Profile ─── */}
      <section className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-[0.2em] text-xs">Leadership</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] mb-4">
              Meet Your <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Tech Partner</span>
            </h2>
          </div>

          <div className="founder-card rounded-3xl border border-white/[0.07] overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left panel */}
              <div className="md:col-span-2 p-10 flex flex-col items-center justify-center text-center relative border-r border-white/[0.06] founder-left-panel">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
                  <Layers className="w-72 h-72 text-indigo-400" />
                </div>
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/50 to-cyan-500/50 blur-2xl scale-125 animate-pulse-slow" />
                  <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-500/20 to-violet-500/30 border border-white/15 flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                    <span className="text-4xl font-black text-white tracking-[-0.04em]">SZ</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/shahzaib-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-1 -right-1 w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg border-2 border-[#050507]"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-white mb-1">Shahzaib</h3>
                <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-wide">
                  Founder & Chief Architect
                </p>
                {/* Signature quote */}
                <blockquote className="founder-quote relative text-xs text-zinc-500 italic leading-relaxed max-w-[200px]">
                  <span className="absolute -top-3 -left-2 text-4xl text-indigo-500/30 font-serif leading-none">"</span>
                  Technology should amplify human ambition, not complicate it.
                  <span className="text-4xl text-indigo-500/30 font-serif leading-none ml-1">"</span>
                </blockquote>
                {/* Social links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/shahzaib-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                  <a
                    href="mailto:shahzaibshah0028@gmail.com"
                    className="text-xs text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Mail size={13} /> Email
                  </a>
                </div>
              </div>

              {/* Right panel */}
              <div className="md:col-span-3 p-10 lg:p-14 flex flex-col justify-center">
                <p className="text-zinc-300 leading-relaxed text-base mb-10 font-light">
                  With over{' '}
                  <span className="text-white font-semibold">5 years</span> of experience building digital products for startups and enterprises, I founded Zenith Pulse to help businesses leverage cutting-edge technology without the complexity. We've delivered{' '}
                  <span className="text-white font-semibold">100+ projects</span> across fintech, healthcare, e-commerce, and SaaS—each one engineered to perform.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {[
                    { value: '50+', label: 'Happy Clients', color: 'indigo' },
                    { value: '100+', label: 'Projects Delivered', color: 'cyan' },
                    { value: '5+', label: 'Years Experience', color: 'violet' },
                    { value: '24/7', label: 'Support Available', color: 'pink' },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className={`p-5 rounded-2xl bg-${m.color}-500/[0.06] border border-${m.color}-500/20 hover:bg-${m.color}-500/[0.10] transition-all group cursor-default`}
                    >
                      <div className={`text-3xl font-black tracking-[-0.04em] text-${m.color}-400 mb-1`}>{m.value}</div>
                      <div className="text-xs text-zinc-500 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Expertise tags */}
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3 font-semibold">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {['Fintech Systems', 'Healthcare AI', 'SaaS Architecture', 'Mobile Platforms', 'LLM Integration', 'Security Engineering'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-zinc-400 rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section id="how-we-work" className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-[0.2em] text-xs">Our Process</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight tracking-[-0.035em] mb-5">
              From Idea to Launch
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">In Just 4 Weeks</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[2.4rem] top-16 bottom-16 w-px bg-gradient-to-b from-cyan-500/40 via-indigo-500/40 to-violet-500/20 hidden md:block" />

            <div className="space-y-5">
              {[
                { icon: Phone, color: 'cyan', step: '01', title: 'Discovery & Strategy', desc: 'Deep-dive into your business goals, challenges, and competitive landscape.', timeline: 'Week 1', deliverable: 'Project roadmap & proposal' },
                { icon: Lightbulb, color: 'indigo', step: '02', title: 'Design & Planning', desc: 'Wireframes, high-fidelity mockups, and technical architecture.', timeline: 'Week 1–2', deliverable: 'UI/UX designs & tech stack' },
                { icon: Code2, color: 'violet', step: '03', title: 'Development & Testing', desc: 'Agile sprints with weekly demos, continuous QA, and performance benchmarking.', timeline: 'Week 2–4', deliverable: 'Fully functional product' },
                { icon: Rocket, color: 'pink', step: '04', title: 'Launch & Support', desc: 'Deploy to production, train your team, and provide ongoing monitoring.', timeline: 'Week 4+', deliverable: 'Live product + documentation' },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 items-start group"
                >
                  <div className={`w-[4.8rem] h-[4.8rem] rounded-2xl flex-shrink-0 flex items-center justify-center bg-${phase.color}-500/[0.08] border border-${phase.color}-500/20 group-hover:bg-${phase.color}-500/[0.14] transition-colors z-10 relative`}>
                    <phase.icon className={`w-6 h-6 text-${phase.color}-400`} />
                  </div>
                  <div className={`flex-1 p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] group-hover:bg-white/[0.04] group-hover:border-${phase.color}-500/20 transition-all`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className={`text-[11px] font-black text-${phase.color}-500/70 tracking-widest uppercase`}>{phase.step}</span>
                        <h3 className="text-lg font-bold text-white mt-0.5 tracking-tight">{phase.title}</h3>
                      </div>
                      <span className={`text-xs text-${phase.color}-400 font-semibold border border-${phase.color}-500/25 bg-${phase.color}-500/[0.07] px-3 py-1.5 rounded-full`}>
                        {phase.timeline}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-2">{phase.desc}</p>
                    <p className="text-xs text-zinc-600">
                      <span className={`text-${phase.color}-500`}>→</span> {phase.deliverable}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio / Project Showcase ─── */}
      <section id="portfolio" className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-[0.2em] text-xs">Success Stories</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight tracking-[-0.035em] mb-5">
              Real Results for
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Real Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Fintech */}
            <div className="portfolio-card rounded-3xl overflow-hidden border border-white/[0.06] group hover:border-cyan-500/25 transition-all duration-500">
              {/* Image placeholder with gradient */}
              <div className="relative h-52 bg-gradient-to-br from-cyan-950/80 via-indigo-950/60 to-[#050507] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-cyan-500/20 rounded-full blur-3xl" />
                    <TrendingUp className="w-24 h-24 text-cyan-500/30 group-hover:text-cyan-400/50 transition-colors duration-500" />
                  </div>
                </div>
                {/* Overlay grid */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold">Fintech</div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">FinTech Payment Platform</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Engineered a secure payment processing platform with military-grade encryption, handling $50M+ in annual transactions across 12 countries.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/15">
                    <div className="text-2xl font-black text-cyan-400 tracking-tight">$2M</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Cost Savings/Year</div>
                  </div>
                  <div className="p-4 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/15">
                    <div className="text-2xl font-black text-indigo-400 tracking-tight">200ms</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Avg Response Time</div>
                  </div>
                </div>
                <blockquote className="text-zinc-500 italic text-xs border-l-2 border-cyan-500/30 pl-4 leading-relaxed">
                  "Exceeded all expectations. The platform is rock-solid and our customers love it."
                </blockquote>
                <p className="text-[11px] text-zinc-600 mt-1.5 pl-4">— CTO, FinTech Corp</p>
              </div>
            </div>

            {/* Healthcare */}
            <div className="portfolio-card rounded-3xl overflow-hidden border border-white/[0.06] group hover:border-violet-500/25 transition-all duration-500">
              <div className="relative h-52 bg-gradient-to-br from-violet-950/80 via-purple-950/60 to-[#050507] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-24 h-24 text-violet-500/30 group-hover:text-violet-400/50 transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-xs text-violet-400 font-semibold">Healthcare</div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Healthcare Voice AI</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  HIPAA-compliant voice AI for patient intake that reduced wait times by 70% while maintaining enterprise-grade data security and compliance.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-violet-500/[0.06] border border-violet-500/15">
                    <div className="text-2xl font-black text-violet-400 tracking-tight">70%</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Faster Intake</div>
                  </div>
                  <div className="p-4 rounded-xl bg-pink-500/[0.06] border border-pink-500/15">
                    <div className="text-2xl font-black text-pink-400 tracking-tight">99.95%</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Uptime SLA</div>
                  </div>
                </div>
                <blockquote className="text-zinc-500 italic text-xs border-l-2 border-violet-500/30 pl-4 leading-relaxed">
                  "Security, compliance, and performance—all delivered flawlessly."
                </blockquote>
                <p className="text-[11px] text-zinc-600 mt-1.5 pl-4">— Director, HealthTech Inc</p>
              </div>
            </div>

            {/* SaaS */}
            <div className="portfolio-card rounded-3xl overflow-hidden border border-white/[0.06] group hover:border-indigo-500/25 transition-all duration-500">
              <div className="relative h-52 bg-gradient-to-br from-indigo-950/80 via-blue-950/60 to-[#050507] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-indigo-500/30 group-hover:text-indigo-400/50 transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs text-indigo-400 font-semibold">SaaS / E-commerce</div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">AI-Powered Shopping App</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Native mobile app with AI product recommendations and real-time inventory sync. Increased conversion rates by 45% within the first quarter.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/15">
                    <div className="text-2xl font-black text-indigo-400 tracking-tight">300%</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Traffic Increase</div>
                  </div>
                  <div className="p-4 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/15">
                    <div className="text-2xl font-black text-cyan-400 tracking-tight">45%</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">Higher Conversion</div>
                  </div>
                </div>
                <blockquote className="text-zinc-500 italic text-xs border-l-2 border-indigo-500/30 pl-4 leading-relaxed">
                  "Our sales tripled within 3 months of launch. The app is beautiful and fast."
                </blockquote>
                <p className="text-[11px] text-zinc-600 mt-1.5 pl-4">— Founder, Fashion Retail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-[0.2em] text-xs">FAQ</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.035em] mb-4">
              Questions?{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Answered.</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] divide-y divide-white/[0.04]">
            {[
              { value: 'timeline', q: 'How long does a typical project take?', a: 'Most projects are delivered in 4–8 weeks depending on complexity. We use agile sprints with weekly demos so you see progress constantly. Enterprise projects may take 2–3 months.' },
              { value: 'cost', q: 'What\'s the typical project cost?', a: 'Projects start at $10,000 for MVPs and scale up to $100K+ for enterprise solutions. We offer flexible payment structures. Book a free consultation for an accurate quote.' },
              { value: 'tech', q: 'What technologies do you use?', a: 'We use modern, proven stacks: React/Next.js for web, React Native/Flutter for mobile, Python/Node.js for backend, AWS/Azure for cloud, and GPT-4/Claude for AI integrations.' },
              { value: 'support', q: 'Do you provide ongoing support?', a: 'Yes. All projects include 3 months of free support post-launch. We then offer monthly retainer plans for maintenance, updates, and feature additions.' },
              { value: 'location', q: 'Where are you based? Do you work remotely?', a: 'We have offices in Islamabad, Pakistan and Dammam, Saudi Arabia, and serve clients globally. We\'re fully remote-capable with Slack, Zoom, and Jira.' },
              { value: 'nda', q: 'Can you sign an NDA?', a: 'Absolutely. We\'re happy to sign NDAs and work within your company\'s security and confidentiality requirements before any work begins.' },
            ].map((item) => (
              <AccordionItem key={item.value} value={item.value} className="px-6 border-none">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-5 text-base font-semibold tracking-tight">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 pb-5 leading-relaxed text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden cta-card rounded-3xl border border-white/[0.09] p-14 md:p-20 text-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-cyan-600/10 pointer-events-none" />
            <div className="absolute top-[-50%] left-[-25%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-50%] right-[-25%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-[clamp(2.2rem,7vw,5rem)] font-black leading-tight tracking-[-0.04em] mb-6 text-balance">
                Ready to Build
                <br />
                <span className="hero-gradient-text">Something Amazing?</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-3 font-light">Let's turn your vision into reality.</p>
              <p className="text-sm text-cyan-400/90 mb-12 font-semibold tracking-wide">
                Book a free 30-minute strategy call — no commitment required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
                <Button
                  size="lg"
                  asChild
                  className="cta-button border-0 text-base font-semibold px-8 py-6 rounded-full group shadow-2xl shadow-indigo-500/30"
                >
                  <a href="mailto:shahzaibshah0028@gmail.com?subject=Project%20Inquiry" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us Your Idea
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.07] text-white text-base font-medium px-8 py-6 rounded-full"
                >
                  <a href="https://wa.me/923099718473" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                {[
                  { icon: Phone, color: 'cyan', title: 'Pakistan Office', value: '+92 309 9718473', href: 'tel:+923099718473' },
                  { icon: Phone, color: 'indigo', title: 'Saudi Arabia Office', value: '+966 549 433876', href: 'tel:+966549433876' },
                  { icon: Mail, color: 'violet', title: 'Email', value: 'shahzaibshah0028@gmail.com', href: 'mailto:shahzaibshah0028@gmail.com' },
                ].map((c) => (
                  <div key={c.title} className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                    <c.icon className={`w-5 h-5 text-${c.color}-400 mx-auto mb-2`} />
                    <p className="text-xs text-white font-semibold mb-1">{c.title}</p>
                    <a href={c.href} className={`text-xs text-${c.color}-400 hover:text-${c.color}-300 transition-colors break-all`}>{c.value}</a>
                  </div>
                ))}
              </div>

              <p className="text-xs text-zinc-600 tracking-widest">
                ⚡ RESPONSE WITHIN 4 HOURS &nbsp;·&nbsp; 🔒 NDA AVAILABLE &nbsp;·&nbsp; 🌍 SERVING CLIENTS GLOBALLY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/[0.05] py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <a
                href="https://www.linkedin.com/company/zenithpulseuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-5 hover:opacity-80 transition-opacity"
              >
                <Image src="/zenith-pulse-logo.png" alt="Zenith Pulse" width={180} height={54} className="h-10 w-auto object-contain" />
              </a>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-xs">
                Your trusted partner for mobile apps, websites, AI chatbots, voice assistants, and cloud solutions.
              </p>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                <span className="text-emerald-400 text-sm font-semibold">Accepting New Projects</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">Services</h4>
              <ul className="space-y-2.5">
                {['Mobile Apps', 'Website Development', 'AI Chatbots', 'Voice AI', 'Cloud Solutions', 'Custom Development'].map((s) => (
                  <li key={s}><a href="#services" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">Company</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Our Process', href: '#how-we-work' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahzaib-dev/' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-cyan-400 font-semibold mb-1">Islamabad, Pakistan</p>
                  <a href="tel:+923099718473" className="text-zinc-500 hover:text-cyan-400 text-sm flex items-center gap-1.5"><Phone size={12} /> +92 309 9718473</a>
                </div>
                <div>
                  <p className="text-xs text-cyan-400 font-semibold mb-1">Dammam, Saudi Arabia</p>
                  <a href="tel:+966549433876" className="text-zinc-500 hover:text-cyan-400 text-sm flex items-center gap-1.5"><Phone size={12} /> +966 549 433876</a>
                </div>
                <a href="mailto:shahzaibshah0028@gmail.com" className="text-zinc-500 hover:text-cyan-400 text-sm flex items-center gap-1.5 break-all"><Mail size={12} /> shahzaibshah0028@gmail.com</a>
                <a href="https://wa.me/923099718473" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-400 text-sm flex items-center gap-1.5"><MessageSquare size={12} /> WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs">© 2026 Zenith Pulse. All rights reserved. Built with ❤️ for ambitious businesses.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Global Styles ─── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; }

        body {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Animations ── */
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.03); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes drift-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 25px) scale(1.04); }
        }
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes border-beam {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-drift { animation: drift 12s ease-in-out infinite; }
        .animate-drift-slow { animation: drift-slow 16s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .floating-chip { animation: float 4s ease-in-out infinite; }

        /* ── Glass ── */
        .nav-glass { background: rgba(5, 5, 7, 0.85); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
        .mobile-glass { background: rgba(10, 10, 15, 0.95); backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px); }
        .bento-card { background: rgba(255,255,255,0.025); backdrop-filter: blur(12px); }

        /* ── CTA Button ── */
        .cta-button {
          background: linear-gradient(135deg, #4f46e5 0%, #0891b2 100%);
          position: relative;
          overflow: hidden;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta-button:hover::before { opacity: 1; }

        /* ── Hero gradient text ── */
        .hero-gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #22d3ee 50%, #a855f7 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: border-beam 6s ease infinite;
        }

        /* ── Service Bento Card ── */
        .service-bento {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .service-bento::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .service-bento:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.035); transform: translateY(-2px); }

        /* ── Security bento ── */
        .security-bento { background: rgba(255,255,255,0.015); }

        /* ── Portfolio cards ── */
        .portfolio-card { background: rgba(255,255,255,0.02); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .portfolio-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.035); }

        /* ── Founder ── */
        .founder-card { background: rgba(255,255,255,0.02); }
        .founder-left-panel { background: linear-gradient(160deg, rgba(99,102,241,0.05) 0%, rgba(5,5,7,0.3) 100%); }

        /* ── CTA card ── */
        .cta-card { background: rgba(255,255,255,0.02); }

        /* ── Noise overlay ── */
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050507; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.5); }
      `}</style>
    </div>
  )
}

/* ─── Service Bento Card Component ─── */
interface ServiceBentoCardProps {
  className?: string
  icon: React.ElementType
  color: string
  title: string
  description: string
  features: string[]
  tags: string[]
  watermarkIcon: React.ElementType
  compact?: boolean
  wide?: boolean
}

function ServiceBentoCard({
  className = '',
  icon: Icon,
  color,
  title,
  description,
  features,
  tags,
  watermarkIcon: WatermarkIcon,
  compact = false,
  wide = false,
}: ServiceBentoCardProps) {
  const colorMap: Record<string, string> = {
    indigo: 'indigo',
    cyan: 'cyan',
    violet: 'violet',
    pink: 'pink',
    emerald: 'emerald',
    amber: 'amber',
  }
  const c = colorMap[color] || 'indigo'

  return (
    <div className={`service-bento rounded-3xl p-8 group ${className}`}>
      {/* Watermark icon */}
      <div className="absolute bottom-4 right-6 opacity-[0.04] pointer-events-none">
        <WatermarkIcon className="w-24 h-24" />
      </div>

      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${c}-500/10 border border-${c}-500/20 mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 text-${c}-400`} />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{description}</p>

      {!compact && (
        <ul className="space-y-2.5 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 size={13} className={`text-${c}-500 flex-shrink-0`} />
              {f}
            </li>
          ))}
        </ul>
      )}

      {compact && (
        <ul className="space-y-2 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-zinc-500">
              <span className={`w-1 h-1 rounded-full bg-${c}-400 flex-shrink-0`} />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-1 bg-${c}-500/[0.08] text-${c}-400/80 text-[11px] font-medium rounded-full border border-${c}-500/15`}
          >
            {tag}
          </span>
        ))}
      </div>

      {wide && (
        <div className="mt-6 flex items-center gap-2 text-xs text-zinc-600 font-medium">
          <span className={`text-${c}-500`}>→</span>
          Have a unique challenge? Let's discuss a bespoke architecture.
          <a href="#contact" className={`text-${c}-400 hover:text-${c}-300 transition-colors underline`}>Get in touch</a>
        </div>
      )}
    </div>
  )
}