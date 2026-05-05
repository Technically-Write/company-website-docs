import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {useEffect, useRef} from 'react';
import styles from './index.module.css';
import Schema from '@site/src/components/Schema';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const videoRef = useRef<HTMLVideoElement>(null);
  const {heroDescription} = siteConfig.customFields as {
    heroDescription: string;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 50% speed
    }
  }, []);

  // Hero background video
  const HERO_VIDEO_URL =
    'https://pub-44e9e263590e407f94e738c0c0b2a7be.r2.dev/hero-bg.mp4';

  return (
    <header className={`${styles.heroBanner} hero hero--primary`}>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      <div className={styles.heroOverlay}></div>

      <div className={clsx('container', styles.heroContent)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <p className="hero__description">{heroDescription}</p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/contact">
            Book a consultation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Technically Write Ltd. | Technical Documentation for Software Teams"
      description="Technical documentation services for software teams creating complex products. Reduce support tickets and drive product adoption with structured, scalable documentation."
    >
      <Schema
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://www.technicallywrite.co.uk/#organization',
              name: 'Technically Write Ltd.',
              url: 'https://www.technicallywrite.co.uk/',
              description:
                'Technical documentation services for software teams creating complex products.',
              email: 'colin@technicallywrite.co.uk',
              sameAs: [
                'https://www.linkedin.com/company/technically-write',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '22 Thornhill',
                addressLocality: 'Annalong',
                addressRegion: 'Northern Ireland',
                postalCode: 'BT34 4RT',
                addressCountry: 'GB',
              },
            },
            {
              '@type': 'ProfessionalService',
              '@id': 'https://www.technicallywrite.co.uk/#professionalservice',
              name: 'Technically Write Ltd.',
              url: 'https://www.technicallywrite.co.uk/',
              provider: {
                '@id': 'https://www.technicallywrite.co.uk/#organization',
              },
              areaServed: [
                'United Kingdom',
                'Ireland',
                'United States',
                'European Union',
              ],
              serviceType: [
                'Technical documentation',
                'Technical writing',
                'Software documentation',
                'SaaS documentation',
                'API documentation',
                'Developer documentation',
                'Product documentation',
                'User guides',
                'Startup support',
                'Aerospace documentation',
                'Knowledge base documentation',
                'Documentation audits',
                'Documentation strategy',
                'Information architecture',
                'Release notes',
                'Technical editing',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Technical documentation services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Technical documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Technical writing',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Software documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'SaaS documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'API documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Developer documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Product documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'User guides',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Startup support',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Aerospace documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Knowledge base documentation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Documentation audits',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Documentation strategy',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Information architecture',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Release notes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Technical editing',
                    },
                  },
                ],
              },
            },
            {
              '@type': 'WebSite',
              '@id': 'https://www.technicallywrite.co.uk/#website',
              name: 'Technically Write Ltd.',
              url: 'https://www.technicallywrite.co.uk/',
              publisher: {
                '@id': 'https://www.technicallywrite.co.uk/#organization',
              },
            },
            {
              '@type': 'WebPage',
              '@id': 'https://www.technicallywrite.co.uk/#webpage',
              name:
                'Technically Write Ltd. | Technical Documentation for Software Teams',
              url: 'https://www.technicallywrite.co.uk/',
              description:
                'Technical documentation services for software teams creating complex products. Reduce support tickets and drive product adoption with structured, scalable documentation.',
              isPartOf: {
                '@id': 'https://www.technicallywrite.co.uk/#website',
              },
              about: {
                '@id': 'https://www.technicallywrite.co.uk/#professionalservice',
              },
              potentialAction: [
                {
                  '@type': 'ContactAction',
                  name: 'Book a consultation',
                  target: 'https://www.technicallywrite.co.uk/docs/contact',
                },
                {
                  '@type': 'ContactAction',
                  name: 'Get a free docs audit',
                  target: 'https://www.technicallywrite.co.uk/docs/contact',
                },
              ],
            },
          ],
        }}
      />

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}