import React from 'react';
import Head from '@docusaurus/Head';

export default function Schema({data}) {
  if (!data) {
    return null;
  }

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Head>
  );
}