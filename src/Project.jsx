function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div>
        <h3>Restaurant Recommendation System</h3>
        <p>Python, Linear Optimization | New York, NY</p>
        <ul>
          <li>Developed a personalized restaurant recommendation system to reduce bias in Yelp’s model.</li>
          <li>Applied content-based filtering and Markov Chains/SVD for user dining preferences.</li>
          <li>Used Yelp API data for real-world recommendations.</li>
        </ul>
      </div>

      <div>
        <h3>Restaurant Reservation System</h3>
        <p>Full-Stack Web Development, Database | New York, NY</p>
        <ul>
          <li>Designed a PostgreSQL database with indexing and normalization.</li>
          <li>Created a Flask backend with RESTful APIs (Google Maps & Yelp data).</li>
          <li>Developed a React.js frontend for browsing and making reservations.</li>
        </ul>
      </div>

      <div>
        <h3>AI Pathfinding & Game Agents</h3>
        <p>Python, NumPy, AI Algorithms | New York, NY</p>
        <ul>
          <li>Implemented BFS, DFS, A*, and other pathfinding algorithms for grid-based robot navigation.</li>
          <li>Developed AI players for Othello using Minimax, MCTS, and Random strategies.</li>
          <li>Created a reinforcement learning agent using Q-Learning & Dynamic Programming.</li>
          <li>GitHub: <a href="https://github.com/Yukieos/AI-project" target="_blank" rel="noopener noreferrer">https://github.com/Yukieos/AI-project</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
