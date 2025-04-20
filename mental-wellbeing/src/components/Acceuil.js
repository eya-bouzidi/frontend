// src/components/Acceuil.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Acceuil.css';
import '../css/Home.css';
import Footer from './Footer';
import CTA from './CTA';
const Acceuil = () => {
  return (
    <div className="acceuil">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Mental Health</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/acceuil" className="active">Home</Link></li>
              <li><Link to="/test" >Test</Link></li>
              <li><Link to="/resources"  >Resources</Link></li>
              <li><Link to="/">Exit</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
        <CTA />
          <div className="hero-content">
            <h1>Bienvenue sur Mental Health</h1>
            <p>
            Your mental well-being is our priority.
             Explore our tests and resources to get to know you better and take care of yourself.
            </p>
            <Link to="/test" className="btn btn-primary">Passer un Test</Link>
          </div>
        </section>

        <section className="resources-preview">
          <div className="container">
            <h2>Découvrez nos ressources</h2>
            <p>
            Discover a wide range of practical mental health resources, including guided meditations, 
            breathing exercises, relaxing sounds, and expert tips. 
            These tools are designed to help you manage stress, improve focus, and enhance your emotional well-being.
            </p>
            <Link to="/resources" className="btn btn-secondary">Voir les Ressources</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Acceuil;
