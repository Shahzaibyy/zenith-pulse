'use client'

import { useState, useEffect, useRef, type ReactNode, type ElementType } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Cloud, ArrowRight, CheckCircle2, Menu, X, Linkedin, Code2, Phone, Mail, Lightbulb, Rocket,
  Shield, Headphones, MessageSquare, Smartphone, Monitor, Bot, Lock, Eye, Fingerprint, Activity,
  Users, Award, Star, TrendingUp, ChevronRight,
} from 'lucide-react'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#how-we-work', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

/* Fades/slides children in once they scroll into view */
function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* Counts up to a numeric target when visible */
function Counter({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1)
        setVal(to * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>
}

function SectionHead({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent: string; sub?: string }) {
  return (
    <Reveal className="text-center mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
        {title} <span className="accent-text">{accent}</span>
      </h2>
      {sub && <p className="text-zinc-400 mt-5 max-w-xl mx-auto">{sub}</p>}
    </Reveal>
  )
}

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
    }
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#07080b] text-white overflow-x-hidden">
      {/* scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
        <div className="h-full bg-[#1aa7ff] origin-left" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb top-[-12%] left-[-8%] w-[620px] h-[620px] bg-[#1aa7ff]/20" />
        <div className="orb bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/15" style={{ animationDelay: '-6s' }} />
        <div ref={glowRef} className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full transition-transform duration-700 ease-out"
          style={{ background: 'radial-gradient(circle, rgba(26,167,255,0.07), transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.5]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
        }} />
      </div>

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-glass py-3' : 'py-6'}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#top" aria-label="Zenith Pulse home" className="shrink-0 transition-opacity hover:opacity-80">
            <Image src="/zenithpulse-logo-white.svg" alt="Zenith Pulse" width={200} height={53} priority className="h-9 md:h-10 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="px-4 py-2 text-[13px] font-medium text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <Button asChild className="btn-primary rounded-full h-10 px-6 text-[13px] border-0">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
          <button className="md:hidden p-1 text-zinc-300" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass-panel mt-3 mx-4 rounded-2xl p-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-zinc-200 rounded-xl hover:bg-white/[0.06]">
                {n.label}<ChevronRight size={16} className="text-zinc-500" />
              </a>
            ))}
            <Button asChild className="btn-primary w-full mt-2 rounded-xl border-0">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Get Started</a>
            </Button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="top" className="relative z-10 pt-44 pb-28 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="glass-panel inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-9">
              <span className="relative w-2 h-2"><span className="ring" /><span className="absolute inset-0 rounded-full bg-[#1aa7ff]" /></span>
              <span className="text-xs text-zinc-300 tracking-wide">Trusted by 50+ companies worldwide</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-[clamp(2.7rem,7.5vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] mb-7 text-balance">
              Digital products,<br /><span className="accent-text">engineered to perform.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[clamp(1rem,2vw,1.2rem)] text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-11">
              AI chatbots, mobile apps and enterprise websites from one partner — designed, built and shipped in weeks, not months.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
              <Button size="lg" asChild className="btn-primary rounded-full h-12 px-8 border-0 group">
                <a href="#contact" className="flex items-center gap-2">Start your project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
              </Button>
              <Button size="lg" asChild className="btn-ghost rounded-full h-12 px-8">
                <a href="#services">Explore services</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="glass-panel rounded-3xl grid grid-cols-3 divide-x divide-white/[0.08] max-w-2xl mx-auto py-6">
              {[
                { icon: Users, to: 50, suffix: '+', label: 'Clients' },
                { icon: Award, to: 100, suffix: '+', label: 'Projects' },
                { icon: Star, to: 99.9, suffix: '%', label: 'Success rate', decimals: 1 },
              ].map((s) => (
                <div key={s.label} className="px-4">
                  <s.icon className="w-4 h-4 text-[#1aa7ff] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight"><Counter to={s.to} suffix={s.suffix} decimals={s.decimals} /></div>
                  <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="relative z-10 py-16 px-6">
        <Reveal className="mx-auto max-w-6xl">
          <div className="glass-panel rounded-[2rem] grid lg:grid-cols-2 overflow-hidden">
            <div className="p-10 lg:p-14">
              <p className="eyebrow mb-4">Security first</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight mb-5">Built for fintech-grade security standards</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Every system we ship is engineered with the rigor of financial institutions — from zero-trust architecture to full audit trails.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Lock, label: 'Zero-trust architecture' },
                  { icon: Fingerprint, label: 'Biometric authentication' },
                  { icon: Eye, label: 'Audit trail logging' },
                  { icon: Activity, label: 'Threat detection' },
                ].map((i) => (
                  <div key={i.label} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                    <i.icon className="w-4 h-4 text-[#1aa7ff] shrink-0" />
                    <span className="text-xs text-zinc-300 leading-tight">{i.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/[0.07] grid grid-cols-2 gap-3 content-center">
              {[
                ['SOC 2', 'Compliance ready'], ['HIPAA', 'Healthcare compliant'], ['PCI DSS', 'Payment security'],
                ['256-bit', 'AES encryption'], ['99.99%', 'Uptime SLA'], ['<100ms', 'Incident response'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.07]">
                  <div className="text-xl font-semibold tracking-tight text-white">{v}</div>
                  <div className="text-xs text-zinc-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow="What we do" title="Complete digital solutions" accent="under one roof" sub="From concept to launch, we handle everything your business needs to thrive online." />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={(i % 3) * 100} />)}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="relative z-10 py-24 overflow-hidden">
        <div className="px-6"><SectionHead eyebrow="Our people" title="The team behind" accent="every delivery" sub="Senior engineers, a product designer and regional partners working together on every project." /></div>
        <div className="team-mask">
          <div className="team-track">
            {[...teamMembers, ...teamMembers].map((m, i) => <TeamMemberCard key={`${m.name}-${i}`} member={m} />)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="how-we-work" className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow="Our process" title="From idea to launch" accent="in just 4 weeks" />
          <div className="relative space-y-4">
            <div className="hidden md:block absolute left-[2.2rem] top-10 bottom-10 w-px bg-gradient-to-b from-[#1aa7ff]/60 via-white/15 to-transparent" />
            {[
              { icon: Phone, step: '01', title: 'Discovery & strategy', desc: 'Deep-dive into your goals, challenges and competitive landscape.', time: 'Week 1', out: 'Project roadmap & proposal' },
              { icon: Lightbulb, step: '02', title: 'Design & planning', desc: 'Wireframes, high-fidelity mockups and technical architecture.', time: 'Weeks 1–2', out: 'UI/UX designs & tech stack' },
              { icon: Code2, step: '03', title: 'Development & testing', desc: 'Agile sprints with weekly demos, continuous QA and benchmarking.', time: 'Weeks 2–4', out: 'Fully functional product' },
              { icon: Rocket, step: '04', title: 'Launch & support', desc: 'Production deploy, team training and ongoing monitoring.', time: 'Week 4+', out: 'Live product + documentation' },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="flex gap-5 items-start group">
                  <div className="glass-panel relative z-10 w-[4.4rem] h-[4.4rem] rounded-2xl shrink-0 flex items-center justify-center transition-colors group-hover:border-[#1aa7ff]/50">
                    <p.icon className="w-6 h-6 text-[#1aa7ff] transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="glass-panel glass-hover flex-1 rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[11px] tracking-widest text-[#1aa7ff] font-semibold">{p.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                      </div>
                      <span className="text-xs text-zinc-300 border border-white/10 bg-white/[0.04] rounded-full px-3 py-1 whitespace-nowrap">{p.time}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-2">{p.desc}</p>
                    <p className="text-xs text-zinc-500"><span className="text-[#1aa7ff]">→</span> {p.out}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="portfolio" className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow="Success stories" title="Real results for" accent="real businesses" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <article className="glass-panel glass-hover rounded-3xl overflow-hidden h-full group">
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#1aa7ff]/15 via-white/[0.02] to-transparent">
                    <div className="absolute inset-0 opacity-40" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                      backgroundSize: '22px 22px' }} />
                    <c.icon className="absolute inset-0 m-auto w-20 h-20 text-white/25 transition-all duration-700 group-hover:text-[#1aa7ff]/70 group-hover:scale-110" strokeWidth={1.2} />
                    <span className="absolute top-4 left-4 text-xs rounded-full border border-white/15 bg-black/30 backdrop-blur px-3 py-1 text-zinc-200">{c.tag}</span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold tracking-tight mb-2">{c.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">{c.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {c.stats.map(([v, l]) => (
                        <div key={l} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                          <div className="text-2xl font-semibold text-[#1aa7ff] tracking-tight">{v}</div>
                          <div className="text-[11px] text-zinc-500 mt-0.5">{l}</div>
                        </div>
                      ))}
                    </div>
                    <blockquote className="text-xs italic text-zinc-500 border-l-2 border-[#1aa7ff]/40 pl-4 leading-relaxed">“{c.quote}”</blockquote>
                    <p className="text-[11px] text-zinc-600 mt-1.5 pl-4">— {c.who}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="FAQ" title="Questions?" accent="Answered." />
          <Reveal>
            <Accordion type="single" collapsible className="glass-panel rounded-3xl overflow-hidden divide-y divide-white/[0.06]">
              {FAQ.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="px-6 border-none">
                  <AccordionTrigger className="text-left text-white hover:no-underline hover:text-[#1aa7ff] py-5 text-base font-medium">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 leading-relaxed text-sm">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="relative z-10 py-28 px-6">
        <Reveal className="mx-auto max-w-5xl">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center">
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#1aa7ff]/15 blur-[110px] pointer-events-none" />
            <div className="relative">
              <h2 className="text-[clamp(2.1rem,6vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.035em] mb-5 text-balance">
                Ready to build <span className="accent-text">something great?</span>
              </h2>
              <p className="text-zinc-400 mb-10">Book a free 30-minute strategy call — no commitment required.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                <Button size="lg" asChild className="btn-primary rounded-full h-12 px-8 border-0 group">
                  <a href="mailto:shahzaibshah0028@gmail.com?subject=Project%20Inquiry" className="flex items-center gap-2">
                    <Mail size={18} /> Email us your idea <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" asChild className="btn-ghost rounded-full h-12 px-8">
                  <a href="https://wa.me/923099718473" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><MessageSquare size={18} /> WhatsApp</a>
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {[
                  { icon: Phone, title: 'Pakistan office', value: '+92 309 9718473', href: 'tel:+923099718473' },
                  { icon: Phone, title: 'Saudi Arabia office', value: '+966 549 433876', href: 'tel:+966549433876' },
                  { icon: Mail, title: 'Email', value: 'shahzaibshah0028@gmail.com', href: 'mailto:shahzaibshah0028@gmail.com' },
                ].map((c) => (
                  <a key={c.title} href={c.href} className="glass-hover rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 block">
                    <c.icon className="w-5 h-5 text-[#1aa7ff] mx-auto mb-2" />
                    <p className="text-xs font-semibold mb-1">{c.title}</p>
                    <span className="text-xs text-zinc-400 break-all">{c.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.07] py-14 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <Image src="/zenithpulse-logo-white.svg" alt="Zenith Pulse" width={180} height={48} className="h-9 w-auto mb-5" />
              <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-xs">Your partner for mobile apps, websites, AI chatbots, voice assistants and cloud solutions.</p>
              <div className="flex items-center gap-2.5">
                <span className="relative w-2 h-2"><span className="ring" /><span className="absolute inset-0 rounded-full bg-emerald-400" /></span>
                <span className="text-emerald-400 text-sm font-medium">Accepting new projects</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-5">Services</h4>
              <ul className="space-y-2.5">
                {['Mobile Apps', 'Website Development', 'AI Chatbots', 'Voice AI', 'Cloud Solutions', 'Custom Development'].map((s) => (
                  <li key={s}><a href="#services" className="text-zinc-500 hover:text-[#1aa7ff] transition-colors text-sm">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-5">Company</h4>
              <ul className="space-y-2.5">
                {[['Team', '#team'], ['Portfolio', '#portfolio'], ['Our Process', '#how-we-work'], ['FAQ', '#faq']].map(([l, h]) => (
                  <li key={l}><a href={h} className="text-zinc-500 hover:text-[#1aa7ff] transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-5">Get in touch</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-[#1aa7ff] mb-1">Islamabad, Pakistan</p>
                  <a href="tel:+923099718473" className="text-zinc-500 hover:text-white flex items-center gap-1.5"><Phone size={12} /> +92 309 9718473</a>
                </div>
                <div>
                  <p className="text-xs text-[#1aa7ff] mb-1">Dammam, Saudi Arabia</p>
                  <a href="tel:+966549433876" className="text-zinc-500 hover:text-white flex items-center gap-1.5"><Phone size={12} /> +966 549 433876</a>
                </div>
                <a href="mailto:shahzaibshah0028@gmail.com" className="text-zinc-500 hover:text-white flex items-center gap-1.5 break-all"><Mail size={12} /> shahzaibshah0028@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs">© 2026 Zenith Pulse. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ─── Data ─── */
interface Service {
  className: string; icon: ElementType; title: string; description: string; features: string[]; tags: string[]
}
const SERVICES: Service[] = [
  { className: 'md:col-span-3', icon: Smartphone, title: 'Mobile App Development', description: 'Native iOS & Android apps with polished UI/UX — from concept to App Store.', features: ['React Native & Flutter', 'Push notifications & payments', 'Offline-first architecture'], tags: ['iOS', 'Android', 'Cross-platform'] },
  { className: 'md:col-span-3', icon: Monitor, title: 'Website Development', description: 'Fast, SEO-optimized, responsive websites that turn visitors into customers.', features: ['Next.js & React', 'E-commerce platforms', 'Core Web Vitals optimized'], tags: ['Landing pages', 'E-commerce', 'Portals'] },
  { className: 'md:col-span-2', icon: Bot, title: 'AI Chatbots', description: '24/7 intelligent assistants that learn from every conversation.', features: ['GPT-4 & Claude integration', 'CRM integration', 'Custom training'], tags: ['Support', 'Sales'] },
  { className: 'md:col-span-2', icon: Headphones, title: 'Voice AI Assistants', description: 'Natural voice interactions for call centers, IVR and voice apps.', features: ['Real-time transcription', 'Emotion detection', 'Latency under 200ms'], tags: ['IVR', 'Call centers'] },
  { className: 'md:col-span-2', icon: Cloud, title: 'Cloud & DevOps', description: 'Scalable infrastructure on AWS, Azure and GCP with 99.9% uptime.', features: ['Auto-scaling', 'CI/CD pipelines', 'Security hardening'], tags: ['AWS', 'Azure', 'Docker'] },
  { className: 'md:col-span-6', icon: Code2, title: 'Custom Development', description: 'Bespoke solutions — from complex APIs to legacy modernization — tailored to your exact requirements.', features: ['Full-stack development', 'API design', 'Database architecture', 'Legacy modernization'], tags: ['Python', 'Node.js', 'React', 'PostgreSQL', 'Microservices'] },
]

function ServiceCard({ className, icon: Icon, title, description, features, tags, delay }: Service & { delay: number }) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="glass-panel glass-hover rounded-3xl p-8 h-full group relative overflow-hidden">
        <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-white/[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#1aa7ff]/10 border border-[#1aa7ff]/25 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-6 h-6 text-[#1aa7ff]" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-zinc-300"><CheckCircle2 size={13} className="text-[#1aa7ff] shrink-0" />{f}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => <span key={t} className="px-2.5 py-1 text-[11px] text-zinc-300 rounded-full border border-white/10 bg-white/[0.04]">{t}</span>)}
        </div>
      </div>
    </Reveal>
  )
}

const CASES = [
  { icon: TrendingUp, tag: 'Fintech', title: 'FinTech Payment Platform', desc: 'A secure payment processing platform with military-grade encryption, handling $50M+ in annual transactions across 12 countries.', stats: [['$2M', 'Cost savings / year'], ['200ms', 'Avg response time']], quote: 'Exceeded all expectations. The platform is rock-solid and our customers love it.', who: 'CTO, FinTech Corp' },
  { icon: Shield, tag: 'Healthcare', title: 'Healthcare Voice AI', desc: 'HIPAA-compliant voice AI for patient intake that cut wait times by 70% while maintaining enterprise-grade security.', stats: [['70%', 'Faster intake'], ['99.95%', 'Uptime SLA']], quote: 'Security, compliance and performance — all delivered flawlessly.', who: 'Director, HealthTech Inc' },
  { icon: Smartphone, tag: 'SaaS / E-commerce', title: 'AI-Powered Shopping App', desc: 'Native mobile app with AI product recommendations and real-time inventory sync. Conversion up 45% in the first quarter.', stats: [['300%', 'Traffic increase'], ['45%', 'Higher conversion']], quote: 'Our sales tripled within 3 months of launch. The app is beautiful and fast.', who: 'Founder, Fashion Retail' },
]

const FAQ = [
  { q: 'How long does a typical project take?', a: 'Most projects are delivered in 4–8 weeks depending on complexity. We use agile sprints with weekly demos so you see progress constantly. Enterprise projects may take 2–3 months.' },
  { q: "What's the typical project cost?", a: 'Projects start at $10,000 for MVPs and scale up to $100K+ for enterprise solutions. We offer flexible payment structures. Book a free consultation for an accurate quote.' },
  { q: 'What technologies do you use?', a: 'Modern, proven stacks: React/Next.js for web, React Native/Flutter for mobile, Python/Node.js for backend, AWS/Azure for cloud, and GPT-4/Claude for AI integrations.' },
  { q: 'Do you provide ongoing support?', a: 'Yes. All projects include 3 months of free support post-launch, then monthly retainer plans for maintenance, updates and new features.' },
  { q: 'Where are you based? Do you work remotely?', a: "We have offices in Islamabad, Pakistan and Dammam, Saudi Arabia, and serve clients globally. We're fully remote-capable with Slack, Zoom and Jira." },
  { q: 'Can you sign an NDA?', a: "Absolutely. We're happy to sign NDAs and work within your security and confidentiality requirements before any work begins." },
]

/* ─── Team ─── */
interface TeamMember {
  name: string; role: string; bio: string; skills: string[]; linkedin: string; initials: string; photoSrc?: string
}

const teamMembers: TeamMember[] = [
  { name: 'Abdullah Bin Shahzad', role: 'MERN Stack Lead Developer', bio: 'Leads MERN stack development, architecting scalable Node.js/Express backends and dynamic React front-ends.', skills: ['MongoDB', 'Express.js', 'React', 'Node.js'], linkedin: 'https://www.linkedin.com/in/abdullah-bin-shahzad-507a56242/', initials: 'AS' },
  { name: 'Saif Ullah', role: 'Product UI/UX Designer', bio: 'Figma expert crafting intuitive product experiences and pixel-perfect, conversion-focused interfaces.', skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'], linkedin: 'https://www.linkedin.com/in/saif-ullah-52ab4a243/', initials: 'SU', photoSrc: '/saif.jpg' },
  { name: 'Raza Saeed', role: 'Software Engineer — Full-Stack', bio: 'Builds products end-to-end across mobile and web, with a focus on system design, APIs and databases.', skills: ['System Design', 'REST APIs', 'Databases'], linkedin: 'https://www.linkedin.com/in/razasaeed246/', initials: 'RS', photoSrc: '/raza%20saeed.jpg' },
  { name: 'Ibrahim Bashir', role: 'Data Engineer & ML Specialist', bio: 'Designs data pipelines and machine learning models that turn raw data into actionable insight.', skills: ['Data Engineering', 'Machine Learning', 'Python'], linkedin: 'https://www.linkedin.com/in/ibrahim-bashir-091708217/', initials: 'IB', photoSrc: '/ibrahim%20bashir.jpg' },
  { name: 'Abdur Rehman Mahmood', role: 'Full-Stack Developer', bio: 'Builds modern web applications across the Node, NestJS, Next.js and React ecosystem end-to-end.', skills: ['Node.js', 'NestJS', 'Next.js', 'TypeScript'], linkedin: 'https://www.linkedin.com/in/abdur-rehman-mahmood/', initials: 'AM' },
  { name: 'Umar Khalid', role: 'Senior Software Engineer', bio: 'Senior engineer delivering high-performance mobile and web applications across the full dev lifecycle.', skills: ['Mobile', 'Web', 'Architecture'], linkedin: 'https://www.linkedin.com/in/umarkhalid15/', initials: 'UK', photoSrc: '/Umar%20Khalid.jpg' },
  { name: 'Shahzaib Hassan', role: 'Software Architect — DevOps Leader', bio: 'Designs scalable AI systems for enterprise resilience, leading across Python, AI/ML, Java and DevOps.', skills: ['Python', 'AI/ML', 'Java', 'DevOps'], linkedin: 'https://www.linkedin.com/in/shahzaib-dev/', initials: 'SH', photoSrc: '/shahzaib.jpg' },
  { name: 'Abdul Raheem Mohammed', role: 'Smart City Senior Manager — KSA', bio: 'Saudi Premium Residency holder driving smart city programs and regional enterprise partnerships.', skills: ['Smart City', 'Partnerships', 'Regional Strategy'], linkedin: 'https://www.linkedin.com/in/abdul-raheem-mohammed-53a8732a/', initials: 'AR', photoSrc: '/abdulraheem.jpg' },
]

function TeamAvatar({ photoSrc, initials }: { photoSrc?: string; initials: string }) {
  const [err, setErr] = useState(false)
  return (
    <div className="relative w-20 h-20 mx-auto mb-5">
      <div className="absolute inset-0 rounded-full bg-[#1aa7ff]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-20 h-20 rounded-full border border-white/15 overflow-hidden flex items-center justify-center bg-white/[0.06]">
        {photoSrc && !err ? (
          <Image src={photoSrc} alt={initials} fill sizes="80px" className="object-cover" onError={() => setErr(true)} />
        ) : (
          <span className="text-lg font-semibold">{initials}</span>
        )}
      </div>
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="glass-panel glass-hover group shrink-0 w-[290px] rounded-3xl p-7">
      <TeamAvatar photoSrc={member.photoSrc} initials={member.initials} />
      <div className="text-center mb-4">
        <h3 className="text-base font-semibold tracking-tight mb-1">{member.name}</h3>
        <p className="text-xs font-medium text-[#1aa7ff] leading-snug">{member.role}</p>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed text-center mb-5 min-h-[52px]">{member.bio}</p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {member.skills.map((s) => <span key={s} className="px-2.5 py-1 text-[10px] text-zinc-300 rounded-full border border-white/10 bg-white/[0.04]">{s}</span>)}
      </div>
      <div className="flex justify-center">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[#1aa7ff] transition-colors">
          <Linkedin size={13} /> View profile
        </a>
      </div>
    </div>
  )
}
