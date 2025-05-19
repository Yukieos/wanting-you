import React from 'react';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>INTERNSHIPS</h2>
      
      <div className="experience-item">
        <h3>Eat 100</h3>
        <p>Hong Kong, China</p>
        <div className="position-time">
          <span className="position">Business Growth and Data Analyst Summer Intern</span>
          <span className="time">May 2024-Aug 2024</span>
        </div>
        <ul>
          <li>Developed dynamic pricing models, predicting optimal price adjustments based on food expiration dates and waste patterns</li>
          <li>Designed the merchants’ portal UI(HTML/CSS) to let restaurant partners check live sales and expiry countdowns; onboarded 24 restaurants in the first month of and released 3 UI iterations based on weekly feedback.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>EasyPaper</h3>
        <p>Guangdong, China</p>
        <div className="position-time">
          <span className="position">Marketing and Development Intern</span>
          <span className="time">Jul 2021-Mar 2022</span>
        </div>
        <ul>
          <li>Debugged based on user feedback and assisted in testing, improving user experience and stability.</li>
          <li>Conducted pilot testing in international schools in China, gathering student feedback to optimize UX.</li>
          <li>Contributed to marketing strategy, achieving 20,000+ downloads.</li>
        </ul>
      </div>
      
      <h2>RESEARCH</h2>
      
      <div className="experience-item">
        <h3>3Demos Research Assistant</h3>
        <p>Applied Physics and Applied Mathematics Department, Columbia University</p>
      </div>
      <div className="position-time">
        <span className="time">Apr 2025-Current</span>
      </div>
      <ul>
          <li>Designing and building an interactive 3D electric field demonstration using Svelte and Three.js: users can place positive/negative charges, adjust magnitudes, and view real‑time field lines and equipotential surfaces.</li>
          <li>Integrating this demo into the 3Demos Story Mode framework with custom UI controls, responsive canvas resizing, and shareable URL state encoding.</li>
      </ul>
      
    </div>
  );
};

export default Experience;
