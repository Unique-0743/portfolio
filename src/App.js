import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      
      <Projects />
      <Certifications />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
