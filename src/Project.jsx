import React from 'react';

const Project = () => {
  return (
    <div className="project-section">
      <h2>Project</h2>
      
      <div className="project-item">
        <div className="project-header">
          <h2>My GitHub: <a href="https://github.com/Yukieos" target="_blank" rel="noopener noreferrer">https://github.com/Yukieos</a></h2>
          <h3>Personal Project</a></h3>
          <h4>Photo‑Searched Price Comparison App (AWS/Swift UI/PyTorch/PostgreSQL)</h4>
          <span className="location">New York, Current</span>
        </div>
        <ul>
          <li>Captured images and implemented automated cropping, resizing, and color normalization pipelines to ensure consistent model‑inference inputs.</li>
          <li>Deployed MobileNet V3 Small for object classification(88.1% accuracy), and incorporated EasyOCR for packaging‑text extraction(reach F1 81.8%)</li>
          <li>Trained PyTorch model: https://colab.research.google.com/drive/11WNbGK8rpkXbFgYFW4iNv9SRYmt4SVzu?usp=sharing </li>
          <li>Collected price data from Amazon Fresh, Whole Foods, Trader Joe’s, Weee, Costco, stored in AWS RDS (PostgreSQL); SQL views return unit- and total-price rankings.</li>
        </ul>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>Columbia University COMSW4111 Database -Individual Project</h3>
          <h4>Restaurant Reservation System(Flask, PostgreSQL, GCP VM, Jinja, CSS)</h4>
          <span className="location">New York, Feb 2025-Apr 2025</span>
        </div>
        <ul>
          <li>Built a full-stack restaurant booking system with user login, menu/rating browsing, booking and checking reservations features.</li>
          <li>Designed and queried a relational database using PostgreSQL, integrated via SQLAlchemy.</li>
          <li>Deployed the app on a Google Cloud VM for remote testing and demonstration.</li>
          <li>Website: http://34.75.98.206:8111/ </li>
        </ul>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>Columbia University MATH UN2015 Linear Algebra and Probability - Group Project(Team Leader)</h3>
          <h4>Restaurant Recommendation System(Python, Linear Optimization)</h4>
          <span className="location">New York, 2024/11</span>
        </div>
        <ul>
          <li>Applied content-based filtering (cosine similarity) to recommend restaurants based on location and price range.</li>
          <li>Used Markov Chains/Singular Value Decomposition to predict user dining preferences and improve personalized suggestions.</li>
          <li>Retrieved and processed Yelp API data of 240 Manhattan restaurants to generate real-world recommendations.</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
