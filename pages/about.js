import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8"/>
        <title>About page</title>
        <meta name="description" content="This is about page"/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        <meta name="author" content="John Doe"/>
      </Head>

      <div>About page</div>

    </React.Fragment>
  )
}
