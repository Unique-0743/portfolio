import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="card">
        <img 
          src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
          alt="Ravishankar Vekanuru" 
          className="profile-pic" 
        />
        <h1 className="neon-text">Ravishankar Vekanuru</h1>
        <p>Aspiring Computer Science Engineer specializing in Artificial Intelligence. Passionate about leveraging innovative technologies to solve real-world problems and build scalable solutions.</p>
       
      </div>
    </section>
  );
};

export default Home;
