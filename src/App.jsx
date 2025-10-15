import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/Portfolio.jsx
function Portfolio() {
  return (
    <div className="container">
      <header>
        <h1>B.Keerthana</h1>
        <p>Full-stack developer & data science learner 
          React & Node.js enthusiast | Building scalable web apps
          Machine learning explorer | Turning data into insight
          Linux-powered problem solver | LPI Essentials in progress</p>
      </header>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">Scholarship Portal</div>
          <div className="project-card">Clustering Visualizer</div>
        </div>
      </section>

      <footer>
        <p>© 2025 Keerthana. Copy Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;

