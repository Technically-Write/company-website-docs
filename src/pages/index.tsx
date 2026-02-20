import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {useEffect, useRef} from 'react';
import styles from './index.module.css';

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

  // ✅ R2 Public Development URL copied from Cloudflare for the MP4
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
          <Link className="button button--secondary button--lg" to="/docs/services">
            Explore Services{' '}
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
