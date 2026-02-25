import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Img?: string; // path under /static
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What do our customers say?',
    to: '/docs/customer-feedback',
    Img: 'img/customer-reviews.png',
    description: (
      <>
        A snapshot of what it’s like to work with us. These testimonials reflect
        the quality, pace, and care we bring to every documentation project, and
        the impact on clarity and customer success.
      </>
    ),
  },
  {
    title: 'Book a consultation',
    to: '/docs/contact',
    Img: 'img/consultation.png',
    description: (
      <>
        Tell us your documentation and UX goals. We’ll recommend a tailored
        strategy to improve clarity, consistency, and customer adoption.
      </>
    ),
  },
  {
    title: 'Want a free 1-hour review?',
    to: '/docs/contact',
    Img: 'https://pub-44e9e263590e407f94e738c0c0b2a7be.r2.dev/free-review.png',
    description: (
      <>
        Request a free documentation review to see how we can improve clarity
        and guide users better. We’ll highlight what’s working, what needs
        attention, and the next steps to fix it.
      </>
    ),
  },
];

function Feature({title, to, Svg, Img, description}: FeatureItem) {
  const imgUrl = Img ? useBaseUrl(Img) : undefined;

  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      {/* This wrapper constrains BOTH image + text to the same width */}
      <div className={styles.featureInner}>
        <div className="text--center">
          <Link
            to={to}
            aria-label={title}
            className={styles.featureLink}
            /* removed inline display/lineHeight so CSS controls layout */
          >
            {Svg ? (
              <Svg className={styles.featureSvg} role="img" />
            ) : Img ? (
              <img className={styles.featureImg} src={imgUrl} alt={title} />
            ) : null}
          </Link>
        </div>

        <div className={clsx('text--center', styles.featureText)}>
          <Heading as="h3">
            <Link to={to} className={styles.featureTitleLink}>
              {title}
            </Link>
          </Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}