<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
>>>>>>> gh-pages
  );
}

export default App;
