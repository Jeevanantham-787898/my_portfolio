// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a 
              href="#about" 
              className={activeLink === 'about' ? 'active' : ''} 
              onClick={() => handleClick('about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeLink === 'projects' ? 'active' : ''} 
              onClick={() => handleClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeLink === 'skills' ? 'active' : ''} 
              onClick={() => handleClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeLink === 'contact' ? 'active' : ''} 
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
