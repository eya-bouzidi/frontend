import React from 'react';
import Footer from './Footer';
import '../css/Home.css'; 
import Header from './Header';
import Hero from './Hero';
import Resources from './Resources';
import CTA from './CTA';
import DailyPractice from './DailyPractice';
import RelaxationIntro from './RelaxationIntro';
import Testimonials from './Testimonials';


  function Home() {

    
  return (
    <div>
      <Header />
      <div className="mycontainer">
      <CTA />
      <Hero />
       
       <RelaxationIntro />
      <Resources />
      <DailyPractice />
      <Testimonials />
      <CTA />

      </div>
      
       <Footer />
    </div>
  );
}

export default Home;
