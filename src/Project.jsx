import React from 'react';

const Project = () => {
  return (
    <div className="project-section">
      <h2>Project</h2>
      
      <div className="project-item">
        <div className="project-header">
          <h3>My GitHub: <a href="https://github.com/Yukieos" target="_blank" rel="noopener noreferrer">https://github.com/Yukieos</a></h3>
          <span className="location">New York, Current</span>
        </div>
        <ul>
          <li>Building an interactive chatbox on Hugging Face Spaces using Gradio, Gemma LLM, and Transformers, enabling immersive character-based roleplay for creative writing and fanfiction.</li>
          <li>Implementing a customizable character creation system with flexible identity, personality traits, and language styles paired with a responsive chat interface featuring emotional style selection.</li>
          <li>Engineering prompt templates that effectively combine persona information, conversation history, and emotional styles while maintaining a memory system to track emotional arcs across interactions.</li>
          <li>Building a content moderation pipeline with user feedback collection system, positioning the demo as a unique showcase on Hugging Face that highlights Gemma's capabilities for emotional intelligence and roleplay.</li>
        </ul>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>Restaurant Reservation System</h3>
          <span className="location">New York, 2023/5</span>
        </div>
        <p>Flask, PostgreSQL, OCR, VM, Nginx, CSS</p>
        <ul>
          <li>Built and deployed restaurant booking system with user functions, menu ordering, booking and checking reservation features.</li>
          <li>Designed and operated a relational database using PostgreSQL, integrated vis OCR Alchemy.</li>
          <li>Applied text processing and data visualization for grocery booking and demand prediction.</li>
        </ul>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>Restaurant Recommendation System</h3>
          <span className="location">New York, 2024/11</span>
        </div>
        <p>Python, Linear Optimization</p>
        <ul>
          <li>Applied content-based filtering (cosine similarity) to recommend restaurants based on location and cuisine types.</li>
          <li>Used Markov Chains/Singular Value Decomposition to predict user dining preferences and improve personalized suggestions.</li>
          <li>Retrieved and processed Yelp API data of 2,000 Manhattan restaurants to generate real-world recommendations.</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
