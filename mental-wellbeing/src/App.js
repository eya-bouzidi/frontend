import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Sign from './components/Sign';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
       
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />}/>
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
