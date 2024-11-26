import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Edytor dokumentów',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Poczuj się jak pracownik kolei, generuj 
        i wypełniaj dokumenty kolejowe.
        Do nauki, czy do zabawy? Dokumenty wykorzystasz, gdzie tylko potrzebujesz.
      </>
    ),
  },
  {
    title: 'System SWDR',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dyżurny ruchu to ciężka i odpowiedzialna praca. 
        Stwórz własne posterunki i linie, teraz możesz 
        prowadzić ruch kolejowy jak tylko zechcesz.
      </>
    ),
  },
  {
    title: 'Rozkłady jazdy',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Stworzyłeś już swoje posterunki i linie? To teraz pora na pociągi. 
        Wygeneruj własne rozkłady jazdy, żeby maszynisty wiedział gdzie i jak szybko jechać.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
