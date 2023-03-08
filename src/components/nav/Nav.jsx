import React from 'react';
import './nav.css';
import CV from '../../assets/cv.pdf'

function Nav() {
  return (

    <div className='nav-container'>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <a href={CV} download className='btn-download'>Download CV</a>
          <a href="#contact" className='btn-contact'>Contact me</a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
