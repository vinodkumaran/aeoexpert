'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  BedDouble,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck2,
  Check,
  ChevronRight,
  CircleArrowOutUpRight,
  Crosshair,
  Home as HomeIcon,
  Images,
  Layers3,
  Mail,
  Menu,
  Network,
  Phone,
  Search,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { useState } from 'react';

const bookingUrl = 'https://cal.com/vinodkumaran/30min';

const expertise = [
  {
    number: '01',
    title: 'Organic SEO & AEO',
    description: 'Organic SEO/AEO improvement for keywords and queries.',
    details: 'Organic SEO · AEO · Keyword Strategy · Query Optimization · Content Structure · Entity Mapping',
    icon: Target,
  },
  {
    number: '02',
    title: 'Search',
    description: 'Building organic visibility and high-intent discovery.',
    details: 'SEO · Search Intent · Content Strategy · Technical SEO · Entities',
    icon: Search,
  },
  {
    number: '03',
    title: 'AI Visibility',
    description: 'Making brands discoverable across AI search.',
    details: 'AEO · GEO · Generative Search · AI Citations · Prompt Strategy',
    icon: BrainCircuit,
  },
  {
    number: '04',
    title: 'Growth Systems',
    description: 'Connecting marketing, technology and revenue.',
    details: 'CRM · Automation · Attribution · Lead Management · Infrastructure',
    icon: Network,
  },
];

const framework = [
  ['01', 'Intent', 'Understand what high-value audiences are asking.'],
  ['02', 'Content', 'Build the information required to answer those questions.'],
  ['03', 'Entity', 'Establish the brand and its expertise clearly.'],
  ['04', 'Authority', 'Build credible signals across the digital ecosystem.'],
  ['05', 'AI Visibility', 'Become discoverable across AI-powered experiences.'],
  ['06', 'Impact', 'Connect visibility with measurable business outcomes.'],
];

const industries = ['Healthcare', 'Pharma', 'Life Sciences', 'Diagnostics', 'Biotechnology', 'MedTech'];

const navigationItems = [
  { label: 'Home', description: 'Discover the full picture', href: '#top', icon: HomeIcon },
  { label: 'Expertise', description: 'How I create momentum', href: '#expertise', icon: BriefcaseBusiness },
  { label: 'Work', description: 'Selected growth systems', href: '#work', icon: Layers3 },
  { label: 'Framework', description: 'The visibility framework', href: '#framework', icon: Images },
  { label: 'Contact', description: 'Start a conversation', href: '#contact', icon: Mail },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
       <div className="header-inner">
        <a className="brand" href="#top" aria-label="Vinod Kumaran home">
          <span className="brand-mark">VK</span>
          <span className="brand-name">Vinod Kumaran</span>
        </a>
        <div className="header-actions">
          <a className="header-phone" href="tel:+12063855255" aria-label="Call Vinod Kumaran"><Phone size={17} /><span>+1 206 385 5255</span></a>
          <a className="header-booking" href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Book a meeting"><CalendarCheck2 size={17} /><span>Book a meeting</span></a>
          <button className={menuOpen ? 'menu-toggle is-open' : 'menu-toggle'} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <div className="nav-desktop-links">
            {['About', 'Expertise', 'Work', 'Framework', 'Journal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
          <a className="nav-cta nav-desktop-cta" href={bookingUrl} target="_blank" rel="noreferrer">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <p className="nav-heading">Navigation</p>
          <div className="nav-items">
            {navigationItems.map(({ label, description, href, icon: Icon }) => (
              <a className="nav-item" key={label} href={href} onClick={() => setMenuOpen(false)}>
                <span className="nav-item-icon"><Icon size={22} strokeWidth={1.7} /></span>
                <span className="nav-item-copy"><strong>{label}</strong><small>{description}</small></span>
                <ArrowUpRight className="nav-item-arrow" size={19} />
              </a>
            ))}
          </div>
          <a className="nav-cta nav-mobile-cta" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarCheck2 size={16} /> Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
       </div>
      </header>

      <section className="reference-cards section-shell" aria-label="Featured capabilities">
        <a className="reference-card" href="#work">
          <span className="reference-card-image image-visibility logo-card-image"><img src="/images/vinodkumaran_logo.png" alt="Vinod Kumaran logo" /></span>
          <span className="reference-card-copy"><strong>AI Visibility</strong><small>Build for what comes next</small></span>
        </a>
        <a className="reference-card" href="#expertise">
          <span className="reference-card-image image-growth"><img src="/images/profile_image.png" alt="" /></span>
          <span className="reference-card-copy"><strong>Growth Systems</strong><small>Connect intent to impact</small></span>
        </a>
      </section>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Digital strategist · AEO &amp; GEO pioneer</p>
          <div className="hire-badge"><span className="hire-pulse" /> Available for full time remote job</div>
          <h1>Open to Hire<br /><em>$120K<span className="hire-suffix">/yr</span></em></h1>
          <p className="hero-intro">I build visibility for brands in the age of AI — bringing together 17+ years of organic search, AEO, content and growth. One of the top pioneers adapting and executing AEO projects.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <ArrowUpRight size={17} /></a>
            <a className="phone-cta" href="tel:+12063855255"><Phone size={20} /><span>Call +1 206 385 5255</span><ArrowUpRight size={17} /></a>
            <a className="text-link" href="#work">Explore my strategy <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-meta"><span>01</span><span className="meta-rule" /><span>Digital marketing · AEO · GEO · AI Search</span></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-card">
            <img src="/images/profile_image.png" alt="Vinod Kumaran — AI Visibility Strategist" />
            <div className="portrait-caption"><span>Based in India</span><span>Working globally</span></div>
          </div>
          <div className="hero-float-card"><img src="/images/vinodkumaran_logo.png" alt="Vinod Kumaran logo" className="hero-float-logo" /><span>Building the next layer<br /><strong>of digital visibility</strong></span></div>
        </div>
      </section>

      <section className="signal-strip">
        <div className="section-shell signal-grid">
          <p>From organic<br />search to <strong>AI visibility.</strong></p>
          <div><span>17+</span><small>Years of digital<br />marketing</small></div>
          <div><span>04</span><small>Core areas of<br />expertise</small></div>
          <div><span>01</span><small>GEO platform<br />built</small></div>
          <a href="#about" aria-label="Continue to about section"><ChevronRight size={22} /></a>
        </div>
      </section>

      <section className="about section-shell section-pad" id="about">
        <div className="section-label"><span>02</span><span className="label-rule" /><span>The shift</span></div>
        <div className="about-grid">
          <h2>Beyond<br /><em>digital marketing.</em></h2>
          <div className="about-copy">
            <p className="lead-copy">The way people discover information is changing. Search results are becoming conversations, and brands need to be part of the answer.</p>
            <p>My career has evolved with the digital landscape — from SEO and organic search to AEO, GEO, AI Search and growth systems. Today, I work at the intersection of AEO, GEO, AI Search and high-intent acquisition.</p>
            <p>I help complex brands become more visible, relevant and discoverable wherever their audiences are searching, asking and deciding.</p>
            <a className="text-link" href="#framework">See how I think <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="expertise-section section-pad" id="expertise">
        <div className="section-shell">
          <div className="section-label light-label"><span>03</span><span className="label-rule" /><span>What I do</span></div>
          <div className="section-heading-row"><h2>Four ways to<br /><em>create momentum.</em></h2><p>One connected approach to visibility, intent and sustainable growth.</p></div>
          <div className="expertise-grid">
            {expertise.map(({ number, title, description, details, icon: Icon }) => (
              <article className="expertise-card" key={title}>
                <div className="card-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div>
                <h3>{title}</h3><p>{description}</p><span className="card-details">{details}</span><ArrowUpRight className="card-arrow" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pioneer section-shell section-pad" id="work">
        <div className="section-label"><span>04</span><span className="label-rule" /><span>The pioneer</span></div>
        <div className="pioneer-grid">
          <div><p className="quote-mark">“</p><h2>I didn&apos;t wait for AI Search to become mainstream.<br /><em>I started building for it.</em></h2></div>
          <div className="pioneer-copy"><p className="lead-copy">One of the top pioneers adapting and executing AEO projects. The objective is simple: don&apos;t just help a brand rank. Help it become part of the answer.</p><p>I began exploring AEO and GEO as a new layer of digital marketing — developing frameworks to understand how AI systems discover brands, interpret expertise and generate recommendations.</p><div className="platform-list"><span>ChatGPT</span><span>Claude</span><span>Gemini</span><span>Perplexity</span></div></div>
        </div>
      </section>

      <section className="tool-section section-pad">
        <div className="section-shell tool-grid">
          <div className="section-label light-label"><span>05</span><span className="label-rule" /><span>What I built</span></div>
          <div className="tool-copy"><p className="eyebrow mint-eyebrow"><span className="eyebrow-line" /> GEO platform &amp; tracking framework</p><h2>Making AI visibility<br /><em>measurable.</em></h2><p>From prompts to platforms. From mentions to measurable visibility. I developed a framework to bring structure and clarity to the emerging discipline of generative search.</p><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Discuss your visibility <ArrowUpRight size={17} /></a></div>
          <div className="dashboard-card"><div className="dashboard-head"><span>AI VISIBILITY / OVERVIEW</span><span className="live-dot">Live framework</span></div><div className="score-row"><div><small>Visibility score</small><strong>78.4</strong><span className="score-up">+12.8%</span></div><div className="score-ring"><span>78%</span></div></div><div className="chart"><span className="chart-label">PROMPT COVERAGE · 30 DAYS</span><div className="chart-bars">{[38, 48, 43, 58, 52, 69, 64, 78, 70, 84, 76, 92].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div><div className="dashboard-stats"><span><b>48</b> prompts tracked</span><span><b>26</b> citations found</span></div></div>
        </div>
      </section>

      <section className="framework section-shell section-pad" id="framework">
        <div className="framework-intro"><div className="section-label"><span>06</span><span className="label-rule" /><span>My philosophy</span></div><h2>The Vinod Kumaran<br /><em>visibility framework.</em></h2><p>Visibility is not a single tactic. It is a system that compounds when every layer works together.</p></div>
        <div className="framework-list">{framework.map(([number, title, description]) => <div className="framework-item" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><Check size={17} /></div>)}</div>
      </section>

      <section className="industries section-shell section-pad"><div className="section-label"><span>07</span><span className="label-rule" /><span>Where complexity meets growth</span></div><div className="industries-grid"><h2>Built for industries<br /><em>that matter.</em></h2><div><p>Deep digital experience across complex, highly regulated and knowledge-intensive industries.</p><div className="industry-tags">{industries.map((industry) => <span key={industry}>{industry}</span>)}</div></div></div></section>

      <section className="case-study section-shell" id="journal">
        <div className="case-content">
          <div className="section-label light-label"><span>08</span><span className="label-rule" /><span>Selected work</span></div>
          <p className="case-kicker">Life Sciences &middot; Healthcare &middot; Scientific AI</p>
          <h2>Building visibility<br /><em>where complexity lives.</em></h2>
          <p>Creating digital ecosystems that connect clinical authority and scientific innovation with the people actively searching for answers across the full spectrum of life sciences.</p>
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book a strategy session <ArrowUpRight size={16} /></a>
        </div>
        <div className="case-visual">
          <div className="case-orbit" />
          <div className="case-chain">
            <span className="case-chain-item">Life Sciences</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Biotechnology</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Genomics</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Proteomics</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Diagnostics</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Pharmaceuticals</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Medical Devices</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Clinical Research</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Precision Medicine</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Healthcare</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item">Researchers &amp; Scientists</span>
            <span className="case-chain-arrow">→</span>
            <span className="case-chain-item case-chain-final">Scientific AI</span>
          </div>
          <div className="case-caption">A study in<br /><strong>high-intent growth</strong></div>
        </div>
      </section>

      <section className="journal section-shell section-pad"><div className="section-label"><span>09</span><span className="label-rule" /><span>Thought leadership</span></div><div className="journal-heading"><h2>The AI visibility<br /><em>journal.</em></h2><a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16} /></a></div><div className="journal-grid"><article><span>01 · AEO</span><h3>How answer engines understand brands.</h3><CircleArrowOutUpRight size={20} /></article><article><span>02 · GEO</span><h3>From search rankings to generated answers.</h3><CircleArrowOutUpRight size={20} /></article><article><span>03 · Experiments</span><h3>What I&apos;m testing, building and learning.</h3><CircleArrowOutUpRight size={20} /></article></div></section>

      <section className="contact-section" id="contact"><div className="section-shell contact-content"><div className="section-label light-label"><span>10</span><span className="label-rule" /><span>Let&apos;s work together</span></div><h2>Build visibility<br /><em>that compounds.</em></h2><p>I will do the GEO/AEO and AI Citation Setup for your brand. Have a complex growth challenge, or want to understand what AI Search means for your brand?</p><a className="contact-link" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <ArrowUpRight size={20} /></a></div></section>

      <footer className="footer section-shell"><a className="brand" href="#top"><span className="brand-mark">VK</span><span className="brand-name">Vinod Kumaran</span></a><p>From search visibility to AI visibility.</p><span>© 2026 Vinod Kumaran</span></footer>
    </main>
  );
}
