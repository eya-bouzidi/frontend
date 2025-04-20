// src/components/Acceuil.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Acceuil.css';
import '../css/Home.css';
import Footer from './Footer';
import Resources from './Resources';

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
              <li><Link to="/test">Test</Link></li>
              <li><Link to="/resouce" >Resources</Link></li>
              <li><Link to="/">Exit</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Bienvenue sur Mental Health</h1>
            <p>
              Votre bien-être mental est notre priorité. Explorez nos tests et ressources
              pour mieux vous connaître et prendre soin de vous.
            </p>
            <Link to="/test" className="btn btn-primary">Passer un Test</Link>
          </div>
        </section>

        <section className="resources-preview">
          <div className="container">
            <h2>Découvrez nos ressources</h2>
            <p>
              Nous vous proposons une sélection de ressources pratiques : méditation guidée,
              exercices de respiration, sons relaxants, et plus encore.
              Ces outils sont conçus pour vous accompagner au quotidien.
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
