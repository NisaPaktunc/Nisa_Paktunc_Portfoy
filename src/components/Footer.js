import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Portfolio</h3>
            <p>Modern ve kullanıcı dostu web uygulamaları geliştiriyorum.</p>
          </div>
          <div className="footer-links">
            <h4>Hızlı Bağlantılar</h4>
            <ul>
              <li><a href="#home">Ana Sayfa</a></li>
              <li><a href="#about">Ben Kimim?</a></li>
              <li><a href="#skills">Neler Yapabilirim?</a></li>
              <li><a href="#portfolio">Portfolyo</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 