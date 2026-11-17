import type { Metadata } from 'next';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const linkedInUrl = 'https://www.linkedin.com/in/vinodkumaran/';

export const metadata: Metadata = {
  title: 'Real Estate Experience | Vinod Kumaran',
  description:
    "Digital marketing for Express Infrastructure's premium residential project, E Residences (Express Exclusive): SEO, paid search and social, landing pages, CRM and lead reporting, 2017 to 2021.",
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
          From February 2017 to September 2021 I was Digital Marketing Manager at Express Infrastructure Private Limited, part of the Indian Express Group. I led digital marketing for the group&apos;s premium residential project, E Residences, which was also marketed as Express Exclusive.
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
            In November 2018 I proposed a dedicated landing page so ad traffic landed on copy that matched the search term &mdash; for example, &ldquo;luxury homes in Chennai&rdquo; or &ldquo;ultra-luxury properties in Chennai&rdquo; &mdash; with enquiry forms at the top and bottom of the page, and enough text for Google to judge relevance.
          </p>
          <p>
            I also managed the CRM-driven sales pipeline: adding leads, tracking follow-ups and site visits, and sending regular performance reports to the managing director.
          </p>
        </div>
      </section>

      <section className="experience-section section-shell" id="case-studies">
        <div className="section-label"><span>02</span><span className="label-rule" /><span>Case studies</span></div>
        <h2>Campaign results, reporting and creatives.</h2>

        <article className="case-block">
          <p className="case-kicker">Case study 01</p>
          <h3>E Residences digital campaigns, 1&ndash;16 November 2020</h3>
          <p>
            In a report I sent to the managing director on 17 November 2020, I recorded the first sixteen days of November as follows. All 125 leads were added to the CRM.
          </p>
          <div className="metric-grid">
            <div><strong>125</strong><span>Leads in 16 days</span></div>
            <div><strong>69</strong><span>Active leads</span></div>
            <div><strong>56</strong><span>Disqualified</span></div>
            <div><strong>12</strong><span>Site visits</span></div>
          </div>
          <div className="channel-grid">
            <div><strong>37</strong><span>Website leads<br />(18 active)</span></div>
            <div><strong>54</strong><span>Calls received<br />(24 active)</span></div>
            <div><strong>31</strong><span>Social media leads<br />(24 active)</span></div>
            <div><strong>3</strong><span>Chat leads<br />(all active)</span></div>
          </div>
          <h4>Digital ads over the same 16 days</h4>
          <div className="table-wrap">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Ad views</th>
                  <th>Website visits</th>
                  <th>Leads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Search Ads</td>
                  <td>96,284</td>
                  <td>724</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>Google Banner Ads</td>
                  <td>686,708</td>
                  <td>5,776</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <td>Facebook Ads</td>
                  <td>30,276</td>
                  <td>&mdash;</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td>Instagram Ads</td>
                  <td>13,535</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="case-note">Disqualified leads were recorded for reasons such as low budget or marketing enquiries. Dashes mean that figure was not stated in the report.</p>
          <h4>Website audience snapshots</h4>
          <p>
            I attached Google Analytics screenshots to the same report. They show audience geography for the E Residences website, not the sixteen-day ad window above. Of 6,535 users, 6,365 (97%) were in India. Of 6,605 users in the city view, 5,326 (78%) were in Chennai.
          </p>
          <div className="analytics-grid">
            <figure>
              <img src="/experience/real-estate/analytics-users-world-map.png" alt="Google Analytics world map showing 6,365 users from India and 49 from the United States" />
              <figcaption>Users by country, from the November 2020 report</figcaption>
            </figure>
            <figure>
              <img src="/experience/real-estate/analytics-users-by-country.jpg" alt="Google Analytics table of users by country, led by India with 6,365 users" />
              <figcaption>Country table included in the report</figcaption>
            </figure>
            <figure>
              <img src="/experience/real-estate/analytics-users-by-city.jpg" alt="Google Analytics table of users by city, led by Chennai with 5,326 users" />
              <figcaption>City table included in the report</figcaption>
            </figure>
          </div>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 02</p>
          <h3>Lead and site-visit reporting</h3>
          <p>
            I reported lead and site-visit totals to leadership on a regular basis. The monthly summary below is from a report I sent to the managing director on 28 January 2020 for Express Exclusive.
          </p>
          <div className="table-wrap">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Leads</th>
                  <th>Site visits</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>August 2019</td><td>216</td><td>27</td></tr>
                <tr><td>September 2019</td><td>407</td><td>42</td></tr>
                <tr><td>October 2019</td><td>255</td><td>45</td></tr>
                <tr><td>November 2019</td><td>386</td><td>81</td></tr>
                <tr><td>December 2019</td><td>143</td><td>40</td></tr>
                <tr><td>January 2020</td><td>132</td><td>88</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            In the same email I also noted a mid-month snapshot of 132 leads and 81 site visits from 1 to 28 January, before the January monthly total was listed as 88 site visits.
          </p>
          <figure className="chart-figure">
            <img src="/experience/real-estate/leads-into-crm-2018-2019.png" alt="Line chart titled Leads into CRM, showing monthly totals from August 2018 to July 2019, peaking at 289 in March 2019" />
            <figcaption>Leads into the CRM, from a 15 July 2019 report I sent on Express Exclusive site visits and lead sources.</figcaption>
          </figure>
          <p>
            Earlier, in the first nine days of February 2018, the project received 98 inbound calls. Twenty-five prospects came from newspaper advertising, and digital and LinkedIn leads were directed to the website.
          </p>
        </article>

        <article className="case-block">
          <p className="case-kicker">Case study 03</p>
          <h3>Creatives and a conversion landing page</h3>
          <p>
            These are the Express Exclusive leaflet and landing-page creatives I shared with the project team in November 2018, when I recommended a keyword-relevant landing page with enquiry forms at the top and bottom.
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
              <figcaption>Landing-page layout with enquiry form</figcaption>
            </figure>
          </div>
        </article>
      </section>

      <section className="experience-cta section-shell">
        <div className="section-label"><span>03</span><span className="label-rule" /><span>Let&apos;s talk</span></div>
        <h2>Want to talk about demand generation for a real estate brand?</h2>
        <p>I&apos;m happy to walk through how search, paid media and a disciplined CRM process work together on a residential project.</p>
        <a className="button button-dark" href={linkedInUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> Follow me on LinkedIn <ArrowUpRight size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
