import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          <span>Fatma Nisa</span> <span>Paktunç</span>
        </a>
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Ana Sayfa</a></li>
          <li><a href="#about" onClick={closeMenu}>Hakkımda</a></li>
          <li><a href="#skills" onClick={closeMenu}>Yetenekler</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolyo</a></li>
          <li><a href="#contact" onClick={closeMenu}>İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 