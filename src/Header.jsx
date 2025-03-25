import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        {/* Left side: Site title/logo */}
        <h1 className="site-title">My Website</h1>
        
        {/* Right side: Nav links */}
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
