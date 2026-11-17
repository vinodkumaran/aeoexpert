'use client';

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarCheck2,
  Home as HomeIcon,
  Images,
  Layers3,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useState } from 'react';

const bookingUrl = 'https://cal.com/vinodkumaran/30min';

const navigationItems = [
  { label: 'Home', description: 'Discover the full picture', href: '/#top', icon: HomeIcon },
  { label: 'Expertise', description: 'How I create momentum', href: '/#expertise', icon: BriefcaseBusiness },
  { label: 'Work', description: 'Selected growth systems', href: '/#work', icon: Layers3 },
  { label: 'Framework', description: 'The visibility framework', href: '/#framework', icon: Images },
  { label: 'Contact', description: 'Start a conversation', href: '/#contact', icon: Mail },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Vinod Kumaran home">
          <span className="brand-mark">VK</span>
          <span className="brand-name">Vinod Kumaran</span>
        </a>
        <div className="header-actions">
          <a className="header-phone" href="tel:+919884539305" aria-label="Call Vinod Kumaran"><Phone size={17} /><span>+91 98845 39305</span></a>
          <a className="header-booking" href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Book a meeting"><CalendarCheck2 size={17} /><span>Book a meeting</span></a>
          <button className={menuOpen ? 'menu-toggle is-open' : 'menu-toggle'} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <div className="nav-desktop-links">
            {['About', 'Expertise', 'Work', 'Framework', 'Journal'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
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
  );
}
