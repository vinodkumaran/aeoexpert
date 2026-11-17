import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const linkedInUrl = 'https://www.linkedin.com/in/vinodkumaran/';

export const metadata: Metadata = {
  title: 'Real Estate Experience | Vinod Kumaran',
  description:
    "Digital marketing for Express Infrastructure's premium residential project, E Residences (Express Exclusive): NRI lead generation and conversions, SEO, paid search and social, and landing pages, 2017 to 2021.",
  alternates: { canonical: 'https://vinodkumaran.com/experience/real-estate' },
};

export default function RealEstateExperiencePage() {
  return (
    <main className="experience-page">
      <SiteHeader />

      <section className="experience-hero section-shell">
        <p className="eyebrow"><span className="eyebrow-line" /> My Experience</p>
        <h1 className="hero-title-lux">Real Estate</h1>
        <figure className="experience-hero-banner">
          <Image
            src="/experience/real-estate/hero-aeo.webp"
            alt="Is ChatGPT recommending your project to NRI buyers? Vinod Kumaran · AEO"
            width={1200}
            height={627}
            sizes="(max-width: 720px) 100vw, 680px"
            priority
          />
        </figure>
        <p className="experience-lead">
          From February 2017 to September 2021 I was Digital Marketing Manager at Express Infrastructure Private Limited, part of the Indian Express Group. I led digital marketing for the group&apos;s premium residential project, E Residences, which was also marketed as Express Exclusive. Between 2018 and 2020 I generated NRI leads and drove conversions for the project.
        </p>
        <ol className="experience-timeline">
          <li><time>Feb 2017</time><span>Joined Express Infrastructure as Digital Marketing Manager</span></li>
          <li><time>Oct 2018</time><span>Express Exclusive project leaflet</span></li>
          <li><time>Nov 2018</time><span>Keyword-relevant landing-page proposal</span></li>
          <li><time>2018&ndash;2020</time><span>Search, paid media and NRI campaigns</span></li>
          <li><time>Sep 2021</time><span>Completed the role</span></li>
        </ol>
        <a className="text-link" href="/">Back to home <ArrowUpRight size={16} /></a>
      </section>

      <section className="experience-section section-shell">
        <div className="section-label"><span>01</span><span className="label-rule" /><span>The work</span></div>
        <h2>Search, campaigns and a CRM-led sales pipeline.</h2>
        <div className="experience-prose">
          <p>
            From 2018 to 2020 I owned SEO and website content for the project, improving organic visibility through keyword work, original content and backlinks. In the same period I planned and ran digital campaigns across Google Search and display, Facebook, Instagram and LinkedIn, and directed those leads to the website.
          </p>
          <p>
            Between 2018 and 2020 I generated NRI leads and conversions through internationally targeted search, social and LinkedIn campaigns, supported by a conversion landing page and CRM follow-up.
          </p>
          <p>
            In November 2018 I proposed a dedicated landing page so ad traffic landed on copy that matched the search term &mdash; for example, &ldquo;luxury homes in Chennai&rdquo; or &ldquo;ultra-luxury properties in Chennai&rdquo; &mdash; with enquiry forms at the top and bottom of the page, and enough text for Google to judge relevance. Throughout the role I managed the CRM-driven sales pipeline, adding leads and tracking follow-ups and site visits.
          </p>
        </div>
      </section>

      <section className="experience-section section-shell" id="case-studies">
        <div className="section-label"><span>02</span><span className="label-rule" /><span>Case studies</span></div>
        <h2>How I built demand for the project.</h2>

        <article className="case-block">
          <p className="case-kicker">Case study 01</p>
          <h3>NRI lead generation and conversions</h3>
          <p>
            Between 2018 and 2020 I generated NRI leads and drove conversions for E Residences and Express Exclusive. The work combined internationally targeted search, social and LinkedIn campaigns with a dedicated landing page and CRM follow-up, so overseas interest could be captured, qualified and taken through to conversion.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 02</p>
          <h3>Search and paid media for a premium Chennai residential project</h3>
          <p>
            From 2018 to 2020 I ran organic search and paid media for this luxury residential project in Chennai. That included SEO and website content, Google Search and display campaigns, and Facebook, Instagram and LinkedIn advertising, with leads directed to the website and followed up through the CRM.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 03</p>
          <h3>Creatives and a keyword-relevant conversion landing page</h3>
          <p>
            These are the Express Exclusive leaflet from October 2018 and the landing-page creative I shared with the project team in November 2018, when I recommended a keyword-relevant landing page with enquiry forms at the top and bottom.
          </p>
          <div className="creative-gallery">
            <figure>
              <img src="/experience/real-estate/express-exclusive-leaflet-property.jpg" alt="Express Exclusive leaflet showing the Club House Road, Chennai residential towers and project amenities" />
              <figcaption>Project leaflet, October 2018</figcaption>
            </figure>
            <figure>
              <img src="/experience/real-estate/express-exclusive-leaflet-front.jpg" alt="Express Exclusive leaflet front, promoted by Express Infrastructure Private Limited" />
              <figcaption>Leaflet front, October 2018</figcaption>
            </figure>
            <figure>
              <img src="/experience/real-estate/express-exclusive-landing-page.jpg" alt="Express Exclusive landing page layout with an enquiry form for name, email, phone and comments" />
              <figcaption>Landing-page proposal, November 2018</figcaption>
            </figure>
          </div>
        </article>
      </section>

      <section className="experience-cta section-shell">
        <div className="section-label"><span>03</span><span className="label-rule" /><span>Let&apos;s talk</span></div>
        <h2>Is ChatGPT recommending your project to NRI buyers, or your competitor&apos;s?</h2>
        <p>I help real estate brands show up in AI answers on ChatGPT, Gemini, Claude and Grok, where buyers now shortlist before they ever call.</p>
        <a className="button button-dark" href={linkedInUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> Follow me on LinkedIn <ArrowUpRight size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
