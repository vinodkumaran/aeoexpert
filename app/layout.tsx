import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = 'https://vinodkumaran.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Vinod Kumaran — AI Visibility Strategist | Book a Meeting',
  description:
    'Build AI visibility that compounds. 17+ years in organic search, AEO, GEO & AI Search. Book a meeting with Vinod Kumaran to make your brand discoverable across ChatGPT, Claude, Gemini & Perplexity.',
  alternates: { canonical: SITE_URL },
  keywords: [
    'AI visibility',
    'AEO',
    'GEO',
    'generative search optimization',
    'AI search visibility',
    'digital marketing strategist',
    'Vinod Kumaran',
    'answer engine optimization',
    'AI Search',
    'organic search',
    'SEO',
    'growth systems',
  ],
  openGraph: {
    title: 'Vinod Kumaran — Where High Intent Meets AI Visibility',
    description:
      'Build visibility for brands in the age of AI. AEO, GEO, AI Search & high-intent growth strategy. Book a meeting today.',
    url: SITE_URL,
    siteName: 'Vinod Kumaran',
    type: 'profile',
    images: [{ url: '/images/profile_image.png', width: 1200, height: 630, alt: 'Vinod Kumaran — AI Visibility Strategist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinod Kumaran — Where High Intent Meets AI Visibility',
    description:
      'Build visibility for brands in the age of AI. AEO, GEO, AI Search & high-intent growth strategy. Book a meeting today.',
    images: ['/images/profile_image.png'],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Vinod Kumaran',
  url: SITE_URL,
  image: `${SITE_URL}/images/profile_image.png`,
  jobTitle: 'AI Visibility Strategist',
  description:
    'Digital strategist and AEO/GEO pioneer with 17+ years in organic search, AEO, content and growth. One of the top pioneers adapting and executing AEO projects. Helping complex brands become visible and discoverable across AI-powered search.',
  knowsAbout: [
    'AI Visibility',
    'Answer Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)',
    'AI Search',
    'Organic SEO',
    'Answer Engine Optimization (AEO)',
    'Search Engine Optimization (SEO)',
    'Content Strategy',
    'Growth Systems',
    'CRM',
    'Lead Generation',
    'Digital Marketing',
    'Generative Search',
  ],
  nationality: 'Indian',
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  telephone: '+1-206-385-5255',
  sameAs: ['https://cal.com/vinodkumaran/30min'],
  worksFor: {
    '@type': 'Organization',
    name: 'Vinod Kumaran',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Digital Marketing',
  },
  award: 'GEO Platform Builder',
  slogan: 'Where high intent meets AI visibility.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Vinod Kumaran — AI Visibility Strategist',
  description: 'Building the next layer of digital visibility across AI search.',
  publisher: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en',
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#service`,
  name: 'AI Visibility & Growth Strategy — Vinod Kumaran',
  description:
    'AI visibility, AEO, GEO and growth systems for complex brands. Making brands discoverable across ChatGPT, Claude, Gemini and Perplexity.',
  provider: { '@id': `${SITE_URL}/#person` },
  areaServed: 'Global',
  serviceType: ['AI Visibility', 'AEO', 'GEO', 'Generative Search Optimization', 'Organic SEO', 'AI Citation Setup', 'Growth Systems'],
  offers: {
    '@type': 'Offer',
    description: 'Book a 30-minute strategy meeting to discuss your AI visibility and growth challenges.',
    url: 'https://cal.com/vinodkumaran/30min',
    availability: 'https://schema.org/InStock',
  },
  url: SITE_URL,
  telephone: '+1-206-385-5255',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI visibility and why does it matter for brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI visibility is the practice of making your brand discoverable across AI-powered search experiences like ChatGPT, Claude, Gemini and Perplexity. As search shifts from links to conversations, brands need to become part of the answer — not just rank for keywords. Vinod Kumaran builds frameworks that make complex brands visible, relevant and cited across generative AI platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AEO and GEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AEO (Answer Engine Optimization) focuses on optimizing content so answer engines can understand and surface your brand in responses. GEO (Generative Engine Optimization) is the broader practice of building visibility across generative AI platforms — covering prompts, citations, entity recognition and authority signals. Both work together as a new layer of digital marketing on top of traditional SEO.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Vinod Kumaran visibility framework work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The framework is a six-layer system: Intent (understand what high-value audiences ask), Content (build the information to answer those questions), Entity (establish brand and expertise clearly), Authority (build credible signals across the ecosystem), AI Visibility (become discoverable across AI experiences), and Impact (connect visibility to measurable outcomes). Each layer compounds when they work together.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries does Vinod Kumaran specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vinod Kumaran works with complex, highly regulated and knowledge-intensive industries including Healthcare, Pharma, Life Sciences, Diagnostics, Biotechnology and MedTech. These sectors require deep expertise and precise digital strategies to connect clinical authority with the people actively searching for answers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide organic SEO and AEO improvement for specific keywords and queries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vinod Kumaran provides organic SEO and AEO improvement targeted at specific keywords and queries. The approach combines traditional SEO fundamentals — keyword strategy, content structure, technical SEO and entity mapping — with answer engine optimization to ensure your brand surfaces in both organic search results and AI-generated answers. Book a meeting to discuss your target keywords and queries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you set up GEO, AEO and AI Citation for brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vinod Kumaran does the complete GEO, AEO and AI Citation Setup for your brand. This includes optimizing your content and entity signals so that AI platforms like ChatGPT, Claude, Gemini and Perplexity discover, understand and cite your brand in their generated responses. Book a meeting to get your GEO, AEO and AI Citation setup started.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I book a meeting with Vinod Kumaran?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a 30-minute strategy meeting directly at cal.com/vinodkumaran/30min, or call +1 206 385 5255. Whether you have a complex growth challenge or want to understand what AI Search means for your brand, book a meeting to start the conversation.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
