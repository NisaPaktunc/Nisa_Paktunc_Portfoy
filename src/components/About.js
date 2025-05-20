import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>Ben Kimim?</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/path-to-your-image.jpg" alt="Profile" />
          </div>
          <div className="about-text">
            <p>
              [Buraya kendiniz hakkında kısa bir açıklama yazın. Örneğin: Web geliştirme konusunda tutkulu bir yazılımcıyım. 
              Modern teknolojileri kullanarak kullanıcı dostu ve etkileyici web uygulamaları geliştiriyorum.]
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Eğitim</h3>
                <p>[Eğitim bilgileriniz]</p>
              </div>
              <div className="detail-item">
                <h3>Deneyim</h3>
                <p>[İş deneyiminiz]</p>
              </div>
              <div className="detail-item">
                <h3>İlgi Alanları</h3>
                <p>[İlgi alanlarınız]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 