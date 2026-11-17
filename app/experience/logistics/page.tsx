import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const linkedInUrl = 'https://www.linkedin.com/in/vinodkumaran/';

export const metadata: Metadata = {
  title: 'Logistics Experience | Vinod Kumaran',
  description:
    'Digital marketing for ShopUSA, a cross-border shopping and shipping service, from 2016 to 2017: a Global SEO proposal, Google Search campaigns, and a search, content and analytics strategy.',
  alternates: { canonical: 'https://vinodkumaran.com/experience/logistics' },
};

export default function LogisticsExperiencePage() {
  return (
    <main className="experience-page">
      <SiteHeader />

      <section className="experience-hero section-shell">
        <p className="eyebrow"><span className="eyebrow-line" /> My Experience</p>
        <h1 className="hero-title-lux">Logistics</h1>
        <figure className="experience-hero-banner">
          <Image
            src="/experience/logistics/hero-aeo.webp"
            alt="When shoppers ask AI how to ship US to India, whose name comes up? Vinod Kumaran · AEO"
            width={1200}
            height={627}
            sizes="(max-width: 720px) 100vw, 680px"
            priority
          />
        </figure>
        <p className="experience-lead">
          From 2016 to 2017 I ran digital marketing for ShopUSA, a cross-border shopping and shipping service. Customers shop from US retailers, send purchases to a US warehouse address, and have those goods shipped on to their own country. I prepared the Global SEO proposal, ran Google Search campaigns, and wrote a search, content and analytics strategy for the service.
        </p>
        <ol className="experience-timeline">
          <li><time>Feb 2016</time><span>ShopUSA Global SEO proposal and strategy discussion</span></li>
          <li><time>Mar 2016</time><span>Google Search campaigns, with a plan for Facebook brand awareness</span></li>
          <li><time>Aug 2016</time><span>Digital marketing strategy covering search, content and analytics</span></li>
          <li><time>2016&ndash;2017</time><span>Continued strategy and analytics work for ShopUSA</span></li>
        </ol>
        <a className="text-link" href="/">Back to home <ArrowUpRight size={16} /></a>
      </section>

      <section className="experience-section section-shell">
        <div className="section-label"><span>01</span><span className="label-rule" /><span>The work</span></div>
        <h2>Search, content and analytics for a cross-border shopping and shipping service.</h2>
        <div className="experience-prose">
          <p>
            In February 2016 I prepared a ShopUSA Global SEO proposal and joined the strategy discussion that followed. The aim was to give the service a clear search foundation before paid campaigns scaled.
          </p>
          <p>
            From March 2016 I ran Google Search campaigns for ShopUSA, matching ads to search intent so people looking for a US shopping and shipping service could reach a sign-up path. I also recommended Facebook campaigns for brand awareness, because search and social play different roles in the funnel.
          </p>
          <p>
            In August 2016 I wrote a broader digital marketing strategy for ShopUSA. It covered paid media across platforms, press releases, blog banners, guest posts and reviews, and it was grounded in an analysis of campaign results from earlier in the year, including India-specific search. I continued that strategy and analytics work through 2016 and 2017.
          </p>
        </div>
      </section>

      <section className="experience-section section-shell" id="case-studies">
        <div className="section-label"><span>02</span><span className="label-rule" /><span>Case studies</span></div>
        <h2>How I built demand for ShopUSA.</h2>

        <article className="case-block">
          <p className="case-kicker">Case study 01</p>
          <h3>ShopUSA Global SEO proposal</h3>
          <p>
            In February 2016 I prepared a ShopUSA Global SEO proposal and presented the analysis in a strategy discussion. The proposal set out how search should support a cross-border shopping and shipping service, ahead of the campaigns that followed in March.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 02</p>
          <h3>Google Search campaigns and a social plan</h3>
          <p>
            From March 2016 I ran Google Search campaigns for ShopUSA, starting with markets including the United Kingdom, the Gulf and Australia. The approach was to show ads that matched what people were already searching for, and to send that traffic toward a sign-up path, while using Facebook for brand awareness.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 03</p>
          <h3>Search, content and analytics strategy</h3>
          <p>
            In August 2016 I set out a digital marketing strategy for ShopUSA so acquisition could be planned across search, content and other platforms. The plan included press releases, banners on blogs, guest posts and reviews, alongside paid media, and it drew on analytics of results from earlier in 2016, including India-specific search campaigns. I continued this strategy and analytics work through 2016 and 2017.
          </p>
        </article>
      </section>

      <section className="experience-cta section-shell">
        <div className="section-label"><span>03</span><span className="label-rule" /><span>Let&apos;s talk</span></div>
        <h2>When shoppers ask AI how to ship from the US to India, whose name comes up?</h2>
        <p>I help logistics and cross-border brands become the answer that ChatGPT, Gemini, Claude and Grok recommend.</p>
        <a className="button button-dark" href={linkedInUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> Follow me on LinkedIn <ArrowUpRight size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
