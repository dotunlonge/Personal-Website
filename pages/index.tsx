import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oludotun Longe - Full-Stack JavaScript Software Engineer</title>
        <link rel="icon" href="/Dotun2.svg" />
        <meta name="author" content="Oludotun Longe" />
        <meta name="keywords" content="ReactJS, NextJS, Tailwing, JavaScript, NodeJS, AWS" />
        <meta name="description" content="I am a talented Full-Stack JavaScript Software Engineer with a UI/UX design background." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Blaiti - Frontend Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Oludotun Longe - Full-Stack JavaScript Software Engineer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Oludotun Longe - Full-Stack JavaScript Software Engineer"/>
        <meta data-rh="true" property="og:image" content="/images/oludotunlonge.jpg"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
      </Head>

      {/* Header */}
      <Header />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;
