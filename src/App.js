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
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/techy.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
