import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to Nintendo Wiki</h1>
        <p className="hero__subtitle">Dinosaurs are cool</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started - Go to Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Welcome to the Nintendo Wiki homepage">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Explore the Wiki</h2>
                <p>
                  Learn more about Nintendo and its rich history by exploring
                  our wiki.
                </p>
                <Link className="button button--primary" to="/docs">
                  Visit Documentation
                </Link>
              </div>
              <div className="col col--4">
                <h2>Community</h2>
                <p>
                  Join our community on Discord and participate in discussions
                  with other Nintendo fans.
                </p>
                <Link className="button button--secondary" to="https://discord.gg/QB5YFJfsFJ">
                  Join Discord
                </Link>
              </div>
              <div className="col col--4">
                <h2>Contribute</h2>
                <p>
                  Want to contribute to the wiki? Check out our GitHub repository
                  to get started.
                </p>
                <Link className="button button--secondary" to="https://github.com/RetendoNetwork">
                  Contribute on GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}