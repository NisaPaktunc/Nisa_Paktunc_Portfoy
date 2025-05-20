import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Proje 1",
      description: "Proje açıklaması buraya gelecek",
      image: "/path-to-project-image-1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Proje 2",
      description: "Proje açıklaması buraya gelecek",
      image: "/path-to-project-image-2.jpg",
      technologies: ["React", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Proje 3",
      description: "Proje açıklaması buraya gelecek",
      image: "/path-to-project-image-3.jpg",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>Portfolyo</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      Projeyi Görüntüle
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 