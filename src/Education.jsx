import React from 'react';

const Education = () => {
  return (
    <div className="education-section">
      <h2>EDUCATION</h2>
      <div className="education-item">
        <div className="school-location">
          <h3>University of North Carolina, Chapel Hill</h3>
          <span className="location">Chapel Hill, NC</span>
        </div>
        <div className="degree-time">
          <span className="degree">B.S. in Statistics and Computer Science</span>
          <span className="time">Aug 2023-May 2024</span>
        </div>
        <ul>
          <li>Cumulative GPA: 3.88/4.00, Dean's List</li>
          <li>Courses: Statistics and Data Science, Data Science and Econometrics, Intro to Programming, Calculus III</li>
        </ul>
      </div>
      
      <div className="education-item">
        <div className="school-location">
          <h3>Columbia University, Barnard College</h3>
          <span className="location">New York, NY</span>
        </div>
        <div className="degree-time">
          <span className="degree">B.A. in Computer Science</span>
          <span className="time">Sep 2024-May 2027</span>
        </div>
        <ul>
          <li>Cumulative GPA: 3.95/4.00, Dean's List</li>
          <li>Courses: Database, Artificial Intelligence, Data Structures, Discrete Mathematics, Linear Algebra and Probability</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
