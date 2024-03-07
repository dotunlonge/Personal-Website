import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oludotun Longe - Expert Full-Stack Software Engineer & Innovator in Web3 and AI Technologies</title>
        <link rel="icon" href="/Dotun2.svg" />
        <meta name="author" content="Oludotun Longe" />
        <meta name="keywords" content='JavaScript, TypeScript, React, Redux, Zustand, React Query, React Native, NextJS, NodeJS,
ExpressJS, RabbitMQ, Redis, MeteorJS, Docker, Blockchain, APIs (REST and GraphQL), GRPC, Gatsby, Netlify CMS, Wordpress, AWS, MongoDB, Postgres, SQL, Firebase, PHP, Figma, HTML5, SCSS, TailwindCSS, CSS3' />
        <meta name="description" content="Discover Oludotun Longe, a visionary Full-Stack Developer specializing in JavaScript, AI, ML, and web3 technologies. With over 7 years of experience spanning startups, web development agencies, and freelance projects, Dotun excels in crafting user-centric solutions that drive engagement and innovation in the healthcare and security sectors. Explore dotunlonge.com to learn how Dotun's passion for technology and problem-solving can elevate your next project." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Oludotun Longe - Expert Full-Stack Software Engineer & Innovator in Web3 and AI Technologies" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Oludotun Longe - Expert Full-Stack Software Engineer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Oludotun Longe - Expert Full-Stack Software Engineer & Innovator in Web3 and AI Technologies"/>
        <meta data-rh="true" property="og:image" content="/images/oludotunlonge.jpg"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
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
