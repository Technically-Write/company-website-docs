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
  Img?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Read customer feedback',
    to: '/customer-feedback/',
    Img: 'img/customer-reviews.png',
    description: (
      <>
        See what clients say about working with Technically Write Ltd. across
        technical documentation, UX writing, delivery pace, quality, and support
        for complex software products.
      </>
    ),
  },
  {
    title: 'Book a documentation consultation',
    to: '/contact/',
    Img: 'img/consultation.png',
    description: (
      <>
        Discuss your technical documentation, API documentation, developer
        documentation, or UX writing needs. We’ll help you identify the right
        approach for your product and team.
      </>
    ),
  },
  {
    title: 'Request a free documentation audit',
    to: '/contact/',
    Img: 'https://pub-44e9e263590e407f94e738c0c0b2a7be.r2.dev/free-review.png',
    description: (
      <>
        Get a free review of your documentation. We’ll highlight gaps,
        usability issues, structure problems, and practical next steps to make
        your content clearer and more effective.
      </>
    ),
  },
];

function Feature({title, to, Svg, Img, description}: FeatureItem) {
  const imgUrl = Img ? useBaseUrl(Img) : undefined;

  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureInner}>
        <div className="text--center">
          <Link to={to} aria-label={title} className={styles.featureLink}>
            {Svg ? (
              <Svg className={styles.featureSvg} role="img" />
            ) : Img ? (
              <img className={styles.featureImg} src={imgUrl} alt="" />
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
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}