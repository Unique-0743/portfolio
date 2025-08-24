import React, { useState } from 'react';
import '../styles.css';

const projectData = [ {
  title: "E-Waste Management System (IoT)",
  description: `Developed an IoT-enabled E-Waste Management System for efficient waste monitoring and collection.
    The system tracks the fill level of waste bins using ultrasonic sensors and sends alerts to the authorities.
    Implemented real-time data visualization on a web dashboard for efficient resource allocation.
    Promotes sustainable practices by encouraging proper disposal and recycling of e-waste.
    The project contributes to smart city initiatives by reducing environmental impact.`
},
  {
    title: "Skin Cancer Detection using CNNs",
    description: `Developed a Convolutional Neural Network (CNN) model to accurately classify skin cancer types using image data.
      The system improves early detection and diagnosis by analyzing dermoscopic images.
      Implemented advanced image preprocessing techniques for better accuracy.
      Achieved high precision and recall metrics by optimizing hyperparameters.
      The model contributes to enhanced healthcare diagnostics and patient care.`
  },
  {
    title: "Grammar Correction using NLP",
    description: `Built an NLP-powered grammar correction system that provides real-time feedback on text input.
      Utilized Transformer-based language models for context-aware error detection and correction.
      Integrated Optical Character Recognition (OCR) for scanning handwritten text.
      Enhanced writing accuracy by suggesting grammatical improvements and style corrections.
      The tool aids students, professionals, and writers in enhancing their communication skills.`
  },
 
  {
    title: "Smart Helmet with Alcohol Detection",
    description: `Designed a smart helmet integrated with alcohol and accident detection sensors for enhanced road safety.
      The helmet prevents the vehicle from starting if alcohol consumption is detected.
      Includes a fall detection mechanism that sends an alert to emergency contacts with GPS location.
      Implemented using IoT technology for real-time monitoring and reporting.
      The project aims to reduce road accidents and ensure rider safety.`
  },
  {
    title: "Highway Lane Changing Decision Making using RL",
    description: `Implemented a Reinforcement Learning (RL) model for optimal highway lane-changing decisions.
      Utilized Deep Q-Learning algorithms to train the model on dynamic traffic scenarios.
      The system ensures safe and efficient lane changing by predicting vehicle behavior.
      Enhanced the accuracy of decisions through continuous learning and adaptation.
      Contributes to the development of autonomous driving systems and intelligent transportation.`
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="section">
      <div className="card">
        <h2 className="neon-text">Projects</h2>
        <ul className="project-list">
          {projectData.map((project, index) => (
            <li key={index} className="project-item">
              <div className="project-header">
                <h3>{project.title}</h3>
                <button 
                  className="view-info-btn" 
                  onClick={() => toggleDescription(index)}
                >
                  {activeIndex === index ? 'Hide Info' : 'View Info'}
                </button>
              </div>
              <p className={`project-description ${activeIndex === index ? 'show' : ''}`}>
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
