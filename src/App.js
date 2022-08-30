import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Projects from './Components/pages/Projects';
import Resume from './Components/pages/Resume';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
