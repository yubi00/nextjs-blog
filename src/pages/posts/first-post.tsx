import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '@/styles/utils.module.css';

export default function FirstPost() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            I am a passionate Full Stack Developer. I eat Nodejs, React, Graphql
            and AWS.{' '}
          </p>
        </section>
      </Layout>
    </>
  );
}
