import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const linkedInUrl = 'https://www.linkedin.com/in/vinodkumaran/';

export const metadata: Metadata = {
  title: 'SaaS Experience | Vinod Kumaran',
  description:
    'SEO Analyst at Caddycode Solutions from January 2016 to February 2017, working on 6Storage, a self-storage SaaS product: performance marketing across the United States and Europe, product-marketing alignment, and content outreach.',
  alternates: { canonical: 'https://vinodkumaran.com/experience/saas' },
};

export default function SaasExperiencePage() {
  return (
    <main className="experience-page">
      <SiteHeader />

      <section className="experience-hero section-shell">
        <p className="eyebrow"><span className="eyebrow-line" /> My Experience</p>
        <h1 className="hero-title-lux">SaaS</h1>
        <figure className="experience-hero-banner">
          <Image
            src="/experience/saas/hero-aeo.webp"
            alt="Does ChatGPT list your SaaS as the best tool? Vinod Kumaran · AEO"
            width={1200}
            height={627}
            sizes="(max-width: 720px) 100vw, 680px"
            priority
          />
        </figure>
        <p className="experience-lead">
          From January 2016 to February 2017 I was SEO Analyst at Caddycode Solutions, a software company whose SaaS product, 6Storage, is a self-storage management platform. I planned and ran performance marketing for the product, worked with the product team so marketing stayed aligned with product improvements, and planned professional content and media outreach.
        </p>
        <ol className="experience-timeline">
          <li><time>Jan 2016</time><span>Joined Caddycode Solutions as SEO Analyst</span></li>
          <li><time>2016&ndash;2017</time><span>Performance marketing for 6Storage in the United States and Europe</span></li>
          <li><time>Nov 2016</time><span>Content and media outreach planning for 6Storage</span></li>
          <li><time>Feb 2017</time><span>Completed the role</span></li>
        </ol>
        <a className="text-link" href="/">Back to home <ArrowUpRight size={16} /></a>
      </section>

      <section className="experience-section section-shell">
        <div className="section-label"><span>01</span><span className="label-rule" /><span>The work</span></div>
        <h2>Search, product marketing and content for a self-storage SaaS product.</h2>
        <div className="experience-prose">
          <p>
            In my role as SEO Analyst I worked on 6Storage, Caddycode&apos;s self-storage SaaS product. Through 2016 and early 2017 I planned and ran performance marketing for the product in the United States and Europe, with conversion-focused campaigns designed to bring in qualified inbound interest and software subscriptions.
          </p>
          <p>
            I also worked with the product team so marketing and product improvements stayed aligned, including feedback from clients that could inform both the product and the campaigns around it.
          </p>
          <p>
            In November 2016 I planned professional content and media outreach for 6Storage in the US and UK, so the product had a content path alongside paid search.
          </p>
        </div>
      </section>

      <section className="experience-section section-shell" id="case-studies">
        <div className="section-label"><span>02</span><span className="label-rule" /><span>Case studies</span></div>
        <h2>How I supported demand for 6Storage.</h2>

        <article className="case-block">
          <p className="case-kicker">Case study 01</p>
          <h3>Performance marketing for 6Storage in the US and Europe</h3>
          <p>
            From January 2016 to February 2017 I ran Google Ads and performance marketing for 6Storage, Caddycode Solutions&apos; self-storage management software, across the United States and Europe. The campaigns were built to bring in qualified inbound leads and software subscriptions, with a conversion-focused funnel from search to sign-up.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 02</p>
          <h3>Aligning marketing with the product</h3>
          <p>
            Alongside the paid campaigns I worked with the product team so marketing and product improvements stayed in step. That included using client feedback to refine how the product was presented and to keep campaign messaging aligned with what the software actually offered.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 03</p>
          <h3>Content and media outreach in the US and UK</h3>
          <p>
            In November 2016 I planned professional content and media outreach for 6Storage in the United States and the United Kingdom, so the brand had a content and publicity path in those markets in addition to paid search.
          </p>
        </article>
      </section>

      <section className="experience-cta section-shell">
        <div className="section-label"><span>03</span><span className="label-rule" /><span>Let&apos;s talk</span></div>
        <h2>When buyers ask ChatGPT for the best tool in your category, does your product make the list?</h2>
        <p>I help SaaS brands get cited and recommended in AI answers across ChatGPT, Gemini, Claude and Grok.</p>
        <a className="button button-dark" href={linkedInUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> Follow me on LinkedIn <ArrowUpRight size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
