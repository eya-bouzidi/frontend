import React from 'react';
import Footer from './Footer';
import '../css/Home.css'; 
import Resources from './Resources';
import { Link } from 'react-router-dom';


  function Resourcea() {

   
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Mental Health</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/acceuil" >Home</Link></li>
              <li><Link to="/test">Test</Link></li>
              <li><Link to="/resources" className="active">Resources</Link></li>
              <li><Link to="/">Exit</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mycontainer">
        <Resources />
      </div>
       <Footer />
    </div>
  );
}

export default Resourcea;
