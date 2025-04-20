import React from 'react';
import Login from './components/Login';
import Sign from './components/Sign';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './components/Home';
import Acceuil from './components/Acceuil';
import Resources from './components/Resources';
import Resourcea from './components/Resourcea';
import Test from './components/Test';
function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
                  
             <Route path="/" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/sign" element={<Sign />}/> 
               <Route path="/acceuil" element={<Acceuil />} />
             <Route path="/resources" element={<Resourcea />} />
              <Route path="/resouce" element={<Resources />} />
              <Route path="/test" element={<Test />} />
                   </Routes>
      </div>
    </Router>
  );
}

export default App;
