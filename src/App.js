import './App.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Platforms from './components/Platforms';
import Skills from './components/Skills';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="flash-link">Introduction</Link>
        <Link to="/about-me" className="flash-link">About Me</Link>
        <Link to="/education" className="flash-link">Education</Link>
        <Link to="/projects" className="flash-link">Projects</Link>
        <Link to="/skills" className="flash-link">Skills</Link>
        <Link to="/platforms" className="flash-link">Platforms</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/platforms" element={<Platforms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

