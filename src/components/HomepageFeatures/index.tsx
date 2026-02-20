import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    to: '/docs/intro',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Book a Consultation',
    to: '/docs/contact',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Book a Consultation to review your documentation and UX goals with an
        experienced technical writing team. We’ll recommend a tailored strategy
        to improve clarity, consistency, and customer adoption.
      </>
    ),
  },
  {
    title: 'Powered by React',
    to: '/docs/tutorial-basics/create-a-page',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, to, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link
          to={to}
          aria-label={title}
          className={styles.featureLink}
          style={{display: 'inline-block', lineHeight: 0}}
        >
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={to} className={styles.featureTitleLink}>
            {title}
          </Link>
        </Heading>
        <p>{description}</p>
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