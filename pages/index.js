import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Nsight</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="To The Future"
        title="Our Mission">
        Break the cycle of poverty and unemployment in rural communities through sustainable technology
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="This is Nsight"
        title="Disrupting Education">
        The drive toward our mission, the challenges we face and the desire behind our company can be illustrated in the video below
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Consider Jumping In"
        title="We're always looking for skilled developers">
        If you're a developer with a burning desire to acclerate the world into a reality where opportunities are equal to all, please consider joining our team. Email your profile to kmesseur@gmail.com
      </SectionTitle>
      <Footer />
      <PopupWidget />
    </>
  );
}
