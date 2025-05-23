import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Fatma Nisa Paktunç</h3>
            <p>
              Modern ve kullanıcı dostu web uygulamaları geliştiren tutkulu bir yazılımcı.
              Yaratıcı çözümler ve yenilikçi fikirlerle projelerinizi hayata geçiriyorum.
            </p>
          </div>
          <div className="footer-links">
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li><a href="#home">Ana Sayfa</a></li>
              <li><a href="#about">Hakkımda</a></li>
              <li><a href="#skills">Yetenekler</a></li>
              <li><a href="#portfolio">Portfolyo</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Sosyal Medya</h3>
            <div className="social-links">
              <a href="https://github.com/fatmanisa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/fatmanisa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/fatmanisa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fatma Nisa Paktunç. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 