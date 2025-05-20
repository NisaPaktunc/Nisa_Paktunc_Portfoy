import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      category: "Diğer",
      items: [
        { name: "Git", level: 80 },
        { name: "Responsive Design", level: 85 },
        { name: "UI/UX", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Neler Yapabilirim?</h2>
        <div className="skills-content">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 