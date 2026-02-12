'use client'

import { useState, useEffect } from 'react'
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
  Star
} from 'lucide-react'

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#020202] to-[#0a0a0a] text-white overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 right-20 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass backdrop-blur-xl py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="https://www.linkedin.com/company/zenithpulseuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center shrink-0 hover:scale-105 transition-transform"
          >
            <Image
              src="/zenith-pulse-logo.png"
              alt="Zenith Pulse"
              width={300}
              height={90}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Services</a>
            <a href="#how-we-work" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Process</a>
            <a href="#pricing" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Pricing</a>
            <a href="#portfolio" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="text-zinc-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-lg shadow-indigo-500/50 border-0">
              <a href="#contact">Get Started Free</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass backdrop-blur-xl mt-4 mx-6 rounded-xl p-6 space-y-4 border border-white/10">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#how-we-work" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-cyan-400 transition-colors">Process</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-cyan-400 transition-colors">Contact</a>
            <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white mt-4">
              <a href="#contact">Get Started Free</a>
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-cyan-400/30">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-cyan-400 font-medium">Trusted by 50+ Global Companies</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent leading-tight text-balance">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              with Digital Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-4xl mx-auto leading-relaxed text-balance">
            From AI-powered chatbots to stunning mobile apps and enterprise websites—we build digital solutions that drive real business growth.
          </p>
          
          <p className="text-lg md:text-xl text-cyan-400/90 font-semibold mb-12 max-w-2xl mx-auto">
            One partner. Full stack. Delivered in weeks, not months.
          </p>

          {/* Stats bar with icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-zinc-300">
            <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl border border-cyan-400/20">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">50+ Clients Worldwide</span>
            </div>
            <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl border border-indigo-400/20">
              <Award className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold">100+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl border border-violet-400/20">
              <Star className="w-5 h-5 text-violet-400" />
              <span className="font-semibold">99.9% Success Rate</span>
            </div>
          </div>

          {/* Enhanced 3D visual */}
          <div className="relative w-80 h-80 mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-cyan-500 to-violet-600 rounded-full blur-3xl opacity-40 animate-pulse-glow" />
            <div className="absolute inset-8 glass-strong rounded-full flex items-center justify-center border-2 border-white/10 shadow-2xl">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full animate-pulse-glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
            {/* Floating icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 glass p-3 rounded-xl border border-cyan-400/30 animate-float">
              <Smartphone className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="absolute bottom-0 left-1/4 glass p-3 rounded-xl border border-indigo-400/30 animate-float" style={{ animationDelay: '1s' }}>
              <Monitor className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="absolute bottom-0 right-1/4 glass p-3 rounded-xl border border-violet-400/30 animate-float" style={{ animationDelay: '2s' }}>
              <Bot className="w-6 h-6 text-violet-400" />
            </div>
            <div className="absolute top-1/2 -right-12 glass p-3 rounded-xl border border-pink-400/30 animate-float" style={{ animationDelay: '1.5s' }}>
              <Database className="w-6 h-6 text-pink-400" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-xl shadow-indigo-500/50 text-lg px-10 py-6 border-0 group">
              <a href="#contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="glass text-white border border-white/20 hover:bg-white/10 text-lg px-10 py-6 backdrop-blur-xl">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="text-sm text-zinc-500 mt-8">
            ⚡ Free consultation • 🔒 NDA available • 🌍 Global delivery
          </p>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section id="services" className="py-28 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">What We Do</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Complete Digital Solutions
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              From concept to launch, we handle everything your business needs to thrive in the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile App Development */}
            <Card className="glass p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-400/30">
                <Smartphone className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile App Development</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Native iOS and Android apps with stunning UI/UX. From concept to App Store—we build apps users love.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" />
                  React Native & Flutter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" />
                  Push notifications & payments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" />
                  Offline-first architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0" />
                  App Store optimization
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-400/30">iOS</span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-400/30">Android</span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-400/30">Cross-platform</span>
              </div>
            </Card>

            {/* Website Development */}
            <Card className="glass p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-cyan-400/30">
                <Monitor className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Website Development</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Lightning-fast websites that convert visitors into customers. SEO-optimized and mobile-responsive.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  Next.js & React
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  E-commerce platforms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  CMS integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  Performance optimization
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/30">Landing Pages</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/30">E-commerce</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/30">Portals</span>
              </div>
            </Card>

            {/* AI Chatbots */}
            <Card className="glass p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-violet-400/30">
                <Bot className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI Chatbots</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                24/7 intelligent assistants that understand context, learn from conversations, and delight customers.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400 flex-shrink-0" />
                  GPT-4 & Claude integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400 flex-shrink-0" />
                  Multi-language support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400 flex-shrink-0" />
                  CRM integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400 flex-shrink-0" />
                  Custom training
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-400/30">Support</span>
                <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-400/30">Sales</span>
                <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-400/30">Lead Gen</span>
              </div>
            </Card>

            {/* Voice AI Assistants */}
            <Card className="glass p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-pink-400/30">
                <Headphones className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Voice AI Assistants</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Natural voice interactions that feel human. Perfect for call centers, IVR systems, and voice apps.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                  Real-time transcription
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                  Emotion detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                  Call routing & analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                  Low latency (&lt;200ms)
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full border border-pink-400/30">IVR</span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full border border-pink-400/30">Call Centers</span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full border border-pink-400/30">Voice Apps</span>
              </div>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="glass p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-emerald-400/30">
                <Cloud className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cloud & DevOps</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Scalable infrastructure that grows with you. AWS, Azure, GCP—we handle it all with 99.9% uptime.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  Auto-scaling & load balancing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  CI/CD pipelines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  Monitoring & alerts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  Security hardening
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-400/30">AWS</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-400/30">Azure</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-400/30">Docker</span>
              </div>
            </Card>

            {/* Custom Development */}
            <Card className="glass p-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-amber-400/30">
                <Code2 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Development</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Got a unique challenge? We build bespoke solutions tailored to your exact business needs.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  Full-stack development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  API development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  Database design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  Legacy modernization
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-400/30">Python</span>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-400/30">Node.js</span>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-400/30">React</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section - Redesigned */}
      <section className="py-28 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Meet Your <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Tech Partner</span>
            </h2>
          </div>
          
          <Card className="glass p-10 md:p-16 border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-cyan-500 to-violet-600 rounded-full blur-2xl opacity-50 animate-pulse-glow" />
                  <div className="relative w-56 h-56 rounded-full glass-strong flex items-center justify-center border-4 border-white/20 shadow-2xl">
                    <div className="w-52 h-52 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 flex items-center justify-center text-7xl font-bold text-white">
                      SZ
                    </div>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/shahzaib-dev/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-3 -right-3 w-14 h-14 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl border-4 border-[#020202]"
                  >
                    <Linkedin className="w-7 h-7 text-white" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-4xl font-bold mb-2 text-white">Shahzaib</h3>
                <p className="text-2xl text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text font-semibold mb-6">Founder & Chief Architect</p>
                <p className="text-zinc-300 leading-relaxed text-lg mb-8">
                  With over 5 years of experience building digital products for startups and enterprises, I founded Zenith Pulse to help businesses leverage cutting-edge technology without the complexity. We've delivered 100+ projects across fintech, healthcare, e-commerce, and SaaS.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="glass rounded-xl p-5 border border-indigo-400/30 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
                    <div className="text-xs text-zinc-400">Happy Clients</div>
                  </div>
                  <div className="glass rounded-xl p-5 border border-cyan-400/30 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">100+</div>
                    <div className="text-xs text-zinc-400">Projects Delivered</div>
                  </div>
                  <div className="glass rounded-xl p-5 border border-violet-400/30 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-xs text-zinc-400">Years Experience</div>
                  </div>
                  <div className="glass rounded-xl p-5 border border-pink-400/30 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-xs text-zinc-400">Support Available</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.linkedin.com/in/shahzaib-dev/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0077B5] hover:text-cyan-400 transition-colors font-semibold"
                  >
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </a>
                  <a 
                    href="mailto:shahzaibshah0028@gmail.com"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    <Mail size={18} />
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">Our Process</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              From Idea to Launch
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                In Just 4 Weeks
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Our proven methodology ensures fast delivery without compromising quality
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Phone,
                color: 'cyan',
                step: '01',
                title: 'Discovery & Strategy',
                desc: 'We deep-dive into your business goals, challenges, and vision',
                timeline: 'Week 1',
                deliverable: 'Project roadmap & proposal'
              },
              {
                icon: Lightbulb,
                color: 'indigo',
                step: '02',
                title: 'Design & Planning',
                desc: 'Wireframes, mockups, and technical architecture defined',
                timeline: 'Week 1-2',
                deliverable: 'UI/UX designs & tech stack'
              },
              {
                icon: Code2,
                color: 'violet',
                step: '03',
                title: 'Development & Testing',
                desc: 'Agile sprints with weekly demos and continuous testing',
                timeline: 'Week 2-4',
                deliverable: 'Fully functional product'
              },
              {
                icon: Rocket,
                color: 'pink',
                step: '04',
                title: 'Launch & Support',
                desc: 'Deploy to production, train your team, and provide ongoing support',
                timeline: 'Week 4+',
                deliverable: 'Live product + documentation'
              }
            ].map((phase, idx) => (
              <Card key={idx} className="glass p-8 border border-white/10 hover:border-white/20 transition-all group">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-${phase.color}-500/20 to-${phase.color}-600/20 border border-${phase.color}-400/30 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <phase.icon className={`w-10 h-10 text-${phase.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className={`text-sm font-bold text-${phase.color}-400`}>{phase.step}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                      </div>
                      <span className="text-sm text-cyan-400 font-semibold glass px-4 py-2 rounded-lg border border-cyan-400/30">
                        {phase.timeline}
                      </span>
                    </div>
                    <p className="text-zinc-300 mb-3">{phase.desc}</p>
                    <p className="text-sm text-zinc-500">
                      <span className="text-cyan-400">→</span> {phase.deliverable}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 px-6 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">Pricing</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Flexible Plans That
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Fit Your Budget
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Choose the engagement model that works best for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass p-10 border border-white/10 hover:border-indigo-400/50 hover:scale-105 transition-all">
              <Briefcase className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Fixed Project</h3>
              <p className="text-zinc-400 mb-6">Perfect for defined scope projects</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">Starting at</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">$10K</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400" />
                  Clear deliverables
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400" />
                  Fixed timeline (4-8 weeks)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400" />
                  3 months free support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-400" />
                  Source code included
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white">
                <a href="#contact">Get Quote</a>
              </Button>
            </Card>

            <Card className="glass p-10 border-2 border-cyan-400/50 hover:scale-105 transition-all relative shadow-2xl shadow-cyan-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <RefreshCw className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Monthly Retainer</h3>
              <p className="text-zinc-400 mb-6">For ongoing development needs</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">Starting at</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">$5K<span className="text-2xl">/mo</span></div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Dedicated team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Flexible scope changes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Monthly rollover hours
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white">
                <a href="#contact">Get Started</a>
              </Button>
            </Card>

            <Card className="glass p-10 border border-white/10 hover:border-violet-400/50 hover:scale-105 transition-all">
              <Rocket className="w-12 h-12 text-violet-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Equity Partnership</h3>
              <p className="text-zinc-400 mb-6">For game-changing startups</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Terms</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400" />
                  Reduced/no upfront costs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400" />
                  Long-term partnership
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400" />
                  Strategic guidance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet-400" />
                  We win when you win
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white">
                <a href="#contact">Let's Talk</a>
              </Button>
            </Card>
          </div>

          <p className="text-center text-zinc-400 mt-12 text-lg">
            Need something custom? <a href="mailto:shahzaibshah0028@gmail.com" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Let's discuss your project →</a>
          </p>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section id="portfolio" className="py-28 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">Success Stories</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Real Results for
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="glass p-8 border border-white/10 hover:border-cyan-400/30 hover:scale-[1.02] transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">FinTech Platform</h3>
                  <p className="text-cyan-400 font-semibold">Financial Services</p>
                </div>
                <TrendingUp className="w-10 h-10 text-cyan-400" />
              </div>
              <p className="text-zinc-400 mb-6">
                Built a secure payment processing platform handling $50M+ in annual transactions with military-grade encryption.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$2M</div>
                  <div className="text-xs text-zinc-500">Cost Savings/Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400">200ms</div>
                  <div className="text-xs text-zinc-500">Avg Response Time</div>
                </div>
              </div>
              <blockquote className="text-zinc-400 italic text-sm border-l-2 border-cyan-400/50 pl-4">
                "Exceeded all expectations. The platform is rock-solid and our customers love it."
              </blockquote>
              <p className="text-xs text-zinc-500 mt-2">— CTO, FinTech Corp</p>
            </Card>

            <Card className="glass p-8 border border-white/10 hover:border-indigo-400/30 hover:scale-[1.02] transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">E-commerce App</h3>
                  <p className="text-indigo-400 font-semibold">Retail & Shopping</p>
                </div>
                <Smartphone className="w-10 h-10 text-indigo-400" />
              </div>
              <p className="text-zinc-400 mb-6">
                Native mobile app with AI-powered product recommendations that increased conversion rates by 45%.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-indigo-400">300%</div>
                  <div className="text-xs text-zinc-500">Traffic Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-400">45%</div>
                  <div className="text-xs text-zinc-500">Higher Conversion</div>
                </div>
              </div>
              <blockquote className="text-zinc-400 italic text-sm border-l-2 border-indigo-400/50 pl-4">
                "Our sales tripled within 3 months of launch. The app is beautiful and fast."
              </blockquote>
              <p className="text-xs text-zinc-500 mt-2">— Founder, Fashion Retail</p>
            </Card>

            <Card className="glass p-8 border border-white/10 hover:border-violet-400/30 hover:scale-[1.02] transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Healthcare AI</h3>
                  <p className="text-violet-400 font-semibold">Medical Technology</p>
                </div>
                <Shield className="w-10 h-10 text-violet-400" />
              </div>
              <p className="text-zinc-400 mb-6">
                HIPAA-compliant voice AI for patient intake that reduced wait times by 70% while maintaining data security.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-violet-400">70%</div>
                  <div className="text-xs text-zinc-500">Faster Intake</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400">99.95%</div>
                  <div className="text-xs text-zinc-500">Uptime SLA</div>
                </div>
              </div>
              <blockquote className="text-zinc-400 italic text-sm border-l-2 border-violet-400/50 pl-4">
                "Security, compliance, and performance—all delivered flawlessly."
              </blockquote>
              <p className="text-xs text-zinc-500 mt-2">— Director, HealthTech Inc</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wider text-sm">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Questions? <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">We've Got Answers</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="glass rounded-2xl overflow-hidden border border-white/10 divide-y divide-white/5">
            <AccordionItem value="timeline" className="px-6 border-none">
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-6 text-lg">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                Most projects are delivered in 4-8 weeks depending on complexity. We follow an agile methodology with weekly demos, so you see progress constantly. Enterprise projects may take 2-3 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost" className="px-6 border-none">
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-6 text-lg">
                What's the typical project cost?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                Projects start at $10,000 for MVPs and can go up to $100K+ for enterprise solutions. We offer flexible payment plans and can work within your budget. Book a free consultation to get an accurate quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technologies" className="px-6 border-none">
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-6 text-lg">
                What technologies do you use?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                We use modern, proven tech stacks: React/Next.js for web, React Native/Flutter for mobile, Python/Node.js for backend, AWS/Azure for cloud, and GPT-4/Claude for AI. We choose the best tool for your specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="px-6 border-none">
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-6 text-lg">
                Do you provide ongoing support?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                Yes! All projects include 3 months of free support. After that, we offer monthly retainer plans starting at $1,500/month for maintenance, updates, and feature additions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="location" className="px-6 border-none">
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-6 text-lg">
                Where are you located? Do you work remotely?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                We have offices in Islamabad (Pakistan) and Dammam (Saudi Arabia), but we serve clients globally. We're experienced in remote collaboration and use tools like Slack, Zoom, and Jira to stay connected.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nda" className="px-6 border-none">
              <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400 py-6 text-lg">
                Can you sign an NDA?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                Absolutely. We're happy to sign NDAs and work under your company's security and confidentiality requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-cyan-500/10 to-violet-600/10 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <Card className="glass-strong p-12 md:p-20 text-center border-2 border-white/20 shadow-2xl shadow-indigo-500/20">
            <h2 className="text-4xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 mb-4 leading-relaxed">
              Let's turn your vision into reality.
            </p>
            <p className="text-lg text-cyan-400 mb-12 font-semibold">
              Book a free 30-minute strategy call—no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-xl shadow-indigo-500/50 text-xl px-10 py-7 border-0 group">
                <a href="mailto:shahzaibshah0028@gmail.com?subject=Project%20Inquiry" className="flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  Email Us Your Idea
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="glass text-white border-2 border-white/30 hover:bg-white/10 text-xl px-10 py-7 backdrop-blur-xl">
                <a href="https://wa.me/923099718473" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="glass p-6 rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                <p className="text-white font-semibold mb-1">Pakistan Office</p>
                <a href="tel:+923099718473" className="text-cyan-400 hover:text-cyan-300">
                  +92 309 9718473
                </a>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-indigo-400 mb-2 mx-auto" />
                <p className="text-white font-semibold mb-1">Saudi Arabia Office</p>
                <a href="tel:+966549433876" className="text-cyan-400 hover:text-cyan-300">
                  +966 549 433876
                </a>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10">
                <Mail className="w-6 h-6 text-violet-400 mb-2 mx-auto" />
                <p className="text-white font-semibold mb-1">Email</p>
                <a href="mailto:shahzaibshah0028@gmail.com" className="text-cyan-400 hover:text-cyan-300 break-all">
                  shahzaibshah0028@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 mt-8">
              <span className="flex items-center gap-2">⚡ Response within 4 hours</span>
              <span className="flex items-center gap-2">🔒 NDA available</span>
              <span className="flex items-center gap-2">🌍 Serving clients globally</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass py-16 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Company */}
            <div className="lg:col-span-2">
              <a
                href="https://www.linkedin.com/company/zenithpulseuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 hover:scale-105 transition-transform"
              >
                <Image
                  src="/zenith-pulse-logo.png"
                  alt="Zenith Pulse"
                  width={240}
                  height={72}
                  className="h-14 w-auto object-contain"
                />
              </a>
              <p className="text-zinc-400 leading-relaxed mb-4 max-w-sm">
                Your trusted partner for mobile apps, websites, AI chatbots, voice assistants, and cloud solutions. Transforming businesses through digital innovation.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Accepting New Projects</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Mobile Apps</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Website Development</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">AI Chatbots</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Voice AI</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Cloud Solutions</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Custom Development</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2">
                <li><a href="#portfolio" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</a></li>
                <li><a href="#how-we-work" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Our Process</a></li>
                <li><a href="#pricing" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Pricing</a></li>
                <li><a href="#faq" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">FAQ</a></li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/shahzaib-dev/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-cyan-400 font-semibold mb-1">Islamabad, Pakistan</p>
                  <a href="tel:+923099718473" className="text-zinc-400 hover:text-cyan-400 text-sm flex items-center gap-2">
                    <Phone size={14} /> +92 309 9718473
                  </a>
                </div>
                <div>
                  <p className="text-sm text-cyan-400 font-semibold mb-1">Dammam, Saudi Arabia</p>
                  <a href="tel:+966549433876" className="text-zinc-400 hover:text-cyan-400 text-sm flex items-center gap-2">
                    <Phone size={14} /> +966 549 433876
                  </a>
                </div>
                <a href="mailto:shahzaibshah0028@gmail.com" className="text-zinc-400 hover:text-cyan-400 text-sm flex items-center gap-2">
                  <Mail size={14} /> shahzaibshah0028@gmail.com
                </a>
                <a 
                  href="https://wa.me/923099718473" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-green-400 text-sm flex items-center gap-2"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm text-center md:text-left">
              © 2026 Zenith Pulse. All rights reserved. Built with ❤️ for ambitious businesses.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .glass-strong {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </div>
  )
}