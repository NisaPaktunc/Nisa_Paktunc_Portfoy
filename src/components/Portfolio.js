import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web Geliştirme' },
    { id: 'design', label: 'UI/UX Tasarım' },
    { id: 'mobile', label: 'Mobil Uygulama' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      category: 'web',
      image: '/projects/ecommerce.jpg',
      description: 'Modern ve kullanıcı dostu bir e-ticaret platformu. React ve Next.js ile geliştirildi.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'design',
      image: '/projects/portfolio.jpg',
      description: 'Kişisel portfolio websitesi tasarımı ve geliştirmesi.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Blog Platformu',
      category: 'web',
      image: '/projects/blog.jpg',
      description: 'Modern blog platformu. Next.js ve Tailwind CSS ile geliştirildi.',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Mobil Uygulama UI',
      category: 'mobile',
      image: '/projects/mobile.jpg',
      description: 'Fitness takip uygulaması için modern UI tasarımı.',
      technologies: ['Figma', 'React Native'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-title">
          <h2>Projelerim</h2>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="portfolio-tech">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="portfolio-links">
                        <a href={project.liveLink} className="btn" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href={project.githubLink} className="btn" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 