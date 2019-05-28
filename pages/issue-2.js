import Head from 'next/head';
import Example from "../components/example";

export default () => (
  <main>
    <Head>
      <title>expressjs/cors Issue #2</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <section>
      <h1>
        <a href="https://github.com/TroyGoode/node-cors/issues/2">Issue #2:</a>
      </h1>
      <Example heading="Example #1" url="/issue-2" method="POST" />
    </section>
  </main>
);
