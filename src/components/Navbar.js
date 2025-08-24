import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../styles.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
      let currentSection = 'home';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar-list">
        <li>
          <Link
            className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`}
            to="home"
            smooth={true}
            duration={500}
            offset={-60}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}
            to="about"
            smooth={true}
            duration={500}
            offset={-60}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${activeSection === 'certifications' ? 'active-link' : ''}`}
            to="certifications"
            smooth={true}
            duration={500}
            offset={-60}
          >
            Certifications
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`}
            to="skills"
            smooth={true}
            duration={500}
            offset={-60}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${activeSection === 'education' ? 'active-link' : ''}`}
            to="education"
            smooth={true}
            duration={500}
            offset={-60}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`}
            to="contact"
            smooth={true}
            duration={500}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
