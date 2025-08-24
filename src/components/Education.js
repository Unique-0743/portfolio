import React from 'react';
import '../styles.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="card">
        <h2 className="neon-text">Education</h2>
        <ul className="project-list">
          <li>
            <strong>VIT-AP University</strong> – B-Tech in Computer Science (Specialization in AI)  
            <br />CGPA: 8.59/10
          </li>
          <li>
            <strong>Narayana Junior College</strong> – Senior Secondary  
            <br />Percentage: 95.8%
          </li>
          <li>
            <strong>Ravindra Bharathi Public School</strong> – Secondary School  
            <br />GPA: 9.7/10
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
