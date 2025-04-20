// src/components/Header1.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
function Header1() {
    return (
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
    );
  }
  

export default Header1;
