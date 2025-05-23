import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Git', level: 80 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-title">
          <h2>Yeteneklerim</h2>
        </div>
        <div className="skills-content">
          <div className="skills-text">
            <h3>Teknik Yeteneklerim</h3>
            <p>
              Modern web teknolojileri konusunda kapsamlı bilgi ve deneyime sahibim. 
              Kullanıcı dostu ve etkileyici web uygulamaları geliştirmek için gerekli 
              tüm araçları ve teknolojileri kullanıyorum.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 