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
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

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
          Welcome to Technically Write Ltd.
        </Heading>

        <p className="hero__subtitle">
          Reducing dependency on support teams by driving product adoption with clear, scalable documentation.
        </p>

        <p className="hero__description">{heroDescription}</p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/contact/">
            Book a consultation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Welcome to Technically Write Ltd."
      description="Technical documentation services for software, SaaS, and product teams. Improve API documentation, developer docs, user guides, and product adoption."
    >
      <Schema
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://www.technicallywrite.co.uk/#organization',
              name: 'Technically Write Ltd.',
              legalName: 'Technically Write Ltd.',
              url: 'https://www.technicallywrite.co.uk/',
              logo: 'https://www.technicallywrite.co.uk/img/tw-icon.jpg',
              description:
                'Technical documentation services for software, SaaS, aerospace, and high-trust product teams.',
              email: 'info@technicallywrite.co.uk',
              identifier: {
                '@type': 'PropertyValue',
                propertyID: 'Company Registration Number',
                value: 'NI720408',
              },
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
                description:
                  'Technical documentation services including API documentation, developer documentation, user guides, documentation audits, documentation strategy, and release notes.',
                url: 'https://www.technicallywrite.co.uk/technical-documentation-services/',
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
              copyrightYear: 2026,
              copyrightHolder: {
                '@id': 'https://www.technicallywrite.co.uk/#organization',
              },
            },
            {
              '@type': 'WebPage',
              '@id': 'https://www.technicallywrite.co.uk/#webpage',
              name: 'Technical Documentation Services for Software Teams',
              url: 'https://www.technicallywrite.co.uk/',
              description:
                'Technical documentation services for software, SaaS, and high-trust product teams. Improve API documentation, developer documentation, user guides, and product adoption.',
              isPartOf: {
                '@id': 'https://www.technicallywrite.co.uk/#website',
              },
              publisher: {
                '@id': 'https://www.technicallywrite.co.uk/#organization',
              },
              about: {
                '@type': 'ProfessionalService',
                '@id': 'https://www.technicallywrite.co.uk/#professionalservice',
              },
              mainEntity: {
                '@type': 'ProfessionalService',
                '@id': 'https://www.technicallywrite.co.uk/#professionalservice',
              },
              potentialAction: [
                {
                  '@type': 'ContactAction',
                  name: 'Book a consultation',
                  target: 'https://www.technicallywrite.co.uk/contact/',
                },
                {
                  '@type': 'ContactAction',
                  name: 'Request a free documentation audit',
                  target: 'https://www.technicallywrite.co.uk/contact/',
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