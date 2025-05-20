import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">Portfolio</a>
        <ul className="nav-menu">
          <li><a href="#home">Ana Sayfa</a></li>
          <li><a href="#about">Ben Kimim?</a></li>
          <li><a href="#skills">Neler Yapabilirim?</a></li>
          <li><a href="#portfolio">Portfolyo</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 