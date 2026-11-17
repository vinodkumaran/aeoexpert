import type { Metadata } from 'next';
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
        <p className="experience-lead">
          From February 2017 to September 2021 I was Digital Marketing Manager at Express Infrastructure Private Limited, part of the Indian Express Group. I led digital marketing for the group&apos;s premium residential project, E Residences, which was also marketed as Express Exclusive. During this time I generated NRI leads and drove conversions for the project.
        </p>
        <a className="text-link" href="/">Back to home <ArrowUpRight size={16} /></a>
      </section>

      <section className="experience-section section-shell">
        <div className="section-label"><span>01</span><span className="label-rule" /><span>The work</span></div>
        <h2>Search, campaigns and a CRM-led sales pipeline.</h2>
        <div className="experience-prose">
          <p>
            I owned SEO and website content for the project, improving organic visibility through keyword work, original content and backlinks. I planned and ran digital campaigns across Google Search and display, Facebook, Instagram and LinkedIn, and directed those leads to the website.
          </p>
          <p>
            I generated NRI leads and conversions through internationally targeted search, social and LinkedIn campaigns, supported by a conversion landing page and CRM follow-up.
          </p>
          <p>
            I also proposed a dedicated landing page so ad traffic landed on copy that matched the search term &mdash; for example, &ldquo;luxury homes in Chennai&rdquo; or &ldquo;ultra-luxury properties in Chennai&rdquo; &mdash; with enquiry forms at the top and bottom of the page, and enough text for Google to judge relevance. I managed the CRM-driven sales pipeline, adding leads and tracking follow-ups and site visits.
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
            I generated NRI leads and drove conversions for E Residences and Express Exclusive. The work combined internationally targeted search, social and LinkedIn campaigns with a dedicated landing page and CRM follow-up, so overseas interest could be captured, qualified and taken through to conversion.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 02</p>
          <h3>Search and paid media for a premium Chennai residential project</h3>
          <p>
            I ran organic search and paid media for this luxury residential project in Chennai. That included SEO and website content, Google Search and display campaigns, and Facebook, Instagram and LinkedIn advertising, with leads directed to the website and followed up through the CRM.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 03</p>
          <h3>Creatives and a keyword-relevant conversion landing page</h3>
          <p>
            These are the Express Exclusive leaflet and landing-page creatives I shared with the project team when I recommended a keyword-relevant landing page with enquiry forms at the top and bottom.
          </p>
          <div className="creative-gallery">
            <figure>
              <img src="/experience/real-estate/express-exclusive-leaflet-property.jpg" alt="Express Exclusive leaflet showing the Club House Road, Chennai residential towers and project amenities" />
              <figcaption>Project leaflet</figcaption>
            </figure>
            <figure>
              <img src="/experience/real-estate/express-exclusive-leaflet-front.jpg" alt="Express Exclusive leaflet front, promoted by Express Infrastructure Private Limited" />
              <figcaption>Leaflet front</figcaption>
            </figure>
            <figure>
              <img src="/experience/real-estate/express-exclusive-landing-page.jpg" alt="Express Exclusive landing page layout with an enquiry form for name, email, phone and comments" />
              <figcaption>Landing-page layout with enquiry form</figcaption>
            </figure>
          </div>
        </article>
      </section>

      <section className="experience-cta section-shell">
        <div className="section-label"><span>03</span><span className="label-rule" /><span>Let&apos;s talk</span></div>
        <h2>Want to talk about demand generation for a real estate brand?</h2>
        <p>I&apos;m happy to walk through how search, paid media and a disciplined CRM process work together on a residential project, including reaching NRI buyers.</p>
        <a className="button button-dark" href={linkedInUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> Follow me on LinkedIn <ArrowUpRight size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
