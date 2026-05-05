import React from 'react';
import Head from '@docusaurus/Head';

export default function Schema({data}) {
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Head>
  );
}