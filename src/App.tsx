import './App.scss';

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import FiguresDesc from './components/FiguresDesc';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/heroes/:idHero" element={<FiguresDesc />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
