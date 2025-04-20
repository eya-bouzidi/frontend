import React from 'react';
import Login from './components/Login';
import Sign from './components/Sign';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './components/Home';
import Acceuil from './components/Acceuil';
import Resources from './components/Resources';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
                  
             <Route path="/" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/sign" element={<Sign />}/> 
               <Route path="/acceuil" element={<Acceuil />} />
              <Route path="/resouce" element={<Resources />} />
                   </Routes>
      </div>
    </Router>
  );
}

export default App;
