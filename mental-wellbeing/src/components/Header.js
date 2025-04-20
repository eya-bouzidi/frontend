// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
        
         <div class="container">
            <div class="logo">
                <h1>Mental Health</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/" class="active">Home</a></li>
                    <li><a href="/sign">Sign Up</a></li>
                    <li><a href="login">Log in</a></li>
                </ul>
            </nav>
            </div>
      
    </header>
  );
}

export default Header;
