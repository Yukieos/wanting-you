import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import "./index.css";

function App() {
  return(
    <Router>
      <Header/>
      <div className = "main1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wanting-you" element={<Navigate to="/" replace />} />
          <Route path="/wanting-you/" element={<Navigate to="/" replace />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App
