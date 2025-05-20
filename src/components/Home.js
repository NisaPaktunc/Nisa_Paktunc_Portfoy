import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Merhaba, Ben [Adınız]</h1>
        <h2>Web Geliştirici</h2>
        <p>Modern ve kullanıcı dostu web uygulamaları geliştiriyorum.</p>
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
    </section>
  );
};

export default Home; 