import React from 'react';
import '../styles.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="card">
        <h2 className="neon-text">Contact</h2>
        <p className="con">Email: ravivekanuru77@gmail.com</p>
        <p className="con">Phone: +917416748564</p>
        
        <div className="button-group">
          <a 
            className="linkedin-button" 
            href="https://www.linkedin.com/in/ravishankar-vekanuru" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          
          <a 
            className="resume-button" 
            href="/resume.pdf"  /* Change this to the path of your resume */
            download="Ravishankar_Vekanuru_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
          >
          Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
