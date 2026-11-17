import type { Metadata } from 'next';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const linkedInUrl = 'https://www.linkedin.com/in/vinodkumaran/';

export const metadata: Metadata = {
  title: 'SaaS & Ecommerce Experience | Vinod Kumaran',
  description:
    'SEO Analyst at Caddycode Solutions from January 2016 to February 2017, working on 6Storage, a self-storage SaaS product, and on digital marketing strategy and analytics for ShopUSA, a cross-border ecommerce service.',
  alternates: { canonical: 'https://vinodkumaran.com/experience/saas-ecommerce' },
};

export default function SaasEcommerceExperiencePage() {
  return (
    <main className="experience-page">
      <SiteHeader />

      <section className="experience-hero section-shell">
        <p className="eyebrow"><span className="eyebrow-line" /> My Experience</p>
        <h1 className="hero-title-lux">SaaS &amp; Ecommerce</h1>
        <p className="experience-lead">
          From January 2016 to February 2017 I was SEO Analyst at Caddycode Solutions, a software company whose SaaS product, 6Storage, is a self-storage management platform. In the same period I also ran digital marketing strategy and analytics for ShopUSA, a cross-border ecommerce service that lets customers shop from US retailers and ship through a US warehouse.
        </p>
        <ol className="experience-timeline">
          <li><time>Jan 2016</time><span>Joined Caddycode Solutions as SEO Analyst</span></li>
          <li><time>Feb 2016</time><span>ShopUSA Global SEO proposal and strategy discussion</span></li>
          <li><time>Mar 2016</time><span>Google Search campaigns for ShopUSA, with a plan for Facebook brand awareness</span></li>
          <li><time>Aug 2016</time><span>ShopUSA digital marketing strategy covering search, content and analytics</span></li>
          <li><time>Nov 2016</time><span>Content and media outreach planning for 6Storage</span></li>
          <li><time>Feb 2017</time><span>Completed the role</span></li>
        </ol>
        <a className="text-link" href="/">Back to home <ArrowUpRight size={16} /></a>
      </section>

      <section className="experience-section section-shell">
        <div className="section-label"><span>01</span><span className="label-rule" /><span>The work</span></div>
        <h2>Search, strategy and analytics for a SaaS product and an ecommerce brand.</h2>
        <div className="experience-prose">
          <p>
            In my role as SEO Analyst I worked on 6Storage, Caddycode&apos;s self-storage SaaS product. Through 2016 and early 2017 I planned and ran performance marketing for the product in the United States and Europe, with conversion-focused campaigns designed to bring in qualified inbound interest and software subscriptions. I also worked with the product team so marketing and product improvements stayed aligned.
          </p>
          <p>
            In February 2016 I prepared a ShopUSA Global SEO proposal and joined the strategy discussion that followed. From March 2016 I ran Google Search campaigns for ShopUSA, matching ads to search intent so people looking for a US shopping and shipping service could reach a sign-up path. I also recommended Facebook campaigns for brand awareness, because search and social play different roles in the funnel.
          </p>
          <p>
            In August 2016 I wrote a broader digital marketing strategy for ShopUSA. It covered paid media across platforms, press releases, blog banners, guest posts and reviews, and it was grounded in an analysis of campaign results from earlier in the year, including India-specific search. In November 2016 I also planned professional content and media outreach for 6Storage in the US and UK.
          </p>
        </div>
      </section>

      <section className="experience-section section-shell" id="case-studies">
        <div className="section-label"><span>02</span><span className="label-rule" /><span>Case studies</span></div>
        <h2>How I supported demand for 6Storage and ShopUSA.</h2>

        <article className="case-block">
          <p className="case-kicker">Case study 01</p>
          <h3>Performance marketing for 6Storage, a self-storage SaaS product</h3>
          <p>
            From January 2016 to February 2017 I worked on 6Storage, Caddycode Solutions&apos; self-storage management software. The work included Google Ads and performance marketing across the United States and Europe, aimed at qualified inbound leads and software subscriptions, together with closer alignment between marketing and product. In November 2016 I also planned professional content and media outreach for the brand in the US and UK.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 02</p>
          <h3>ShopUSA Global SEO proposal and search campaigns</h3>
          <p>
            In February 2016 I prepared a ShopUSA Global SEO proposal and presented the analysis in a strategy discussion. From March 2016 I ran Google Search campaigns for the service, starting with markets including the United Kingdom, the Gulf and Australia. The approach was to show ads that matched what people were already searching for, and to send that traffic toward a sign-up path, while using Facebook for brand awareness.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 03</p>
          <h3>Digital marketing strategy and analytics for ShopUSA</h3>
          <p>
            In August 2016 I set out a digital marketing strategy for ShopUSA so acquisition could be planned across search, content and other platforms. The plan included press releases, banners on blogs, guest posts and reviews, alongside paid media, and it drew on analytics of results from earlier in 2016, including India-specific search campaigns. Through 2016 and 2017 this was a strategy and analytics project, running alongside my SEO Analyst role at Caddycode.
          </p>
        </article>
      </section>

      <section className="experience-cta section-shell">
        <div className="section-label"><span>03</span><span className="label-rule" /><span>Let&apos;s talk</span></div>
        <h2>Want to talk about demand generation for a SaaS or ecommerce brand?</h2>
        <p>I&apos;m happy to walk through how search, content and a clear analytics rhythm work together when you are building sign-ups or software subscriptions.</p>
        <a className="button button-dark" href={linkedInUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> Follow me on LinkedIn <ArrowUpRight size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
