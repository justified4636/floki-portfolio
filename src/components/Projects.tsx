import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Web3 Content Series',
      description: 'Comprehensive content series simplifying complex Web3 concepts for mainstream audiences.',
      image: 'https://via.placeholder.com/300x200?text=Web3+Content',
      links: [
        { name: 'Read Articles', url: 'https://medium.com/@dcrypt' },
        { name: 'Newsletter', url: 'https://substack.com/@dcrypt' },
      ],
    },
    {
      title: 'KOL Collaboration Network',
      description: 'Connected emerging Web3 projects with influential Key Opinion Leaders for authentic promotion.',
      image: 'https://via.placeholder.com/300x200?text=KOL+Network',
      links: [
        { name: 'Case Studies', url: 'https://dcrypt.network/case-studies' },
        { name: 'Contact', url: 'http://t.me/DCRYPT_lord' },
      ],
    },
    {
      title: 'Alpha DAO',
      description: 'Decentralized autonomous organization focused on Web3 innovation and community governance.',
      image: 'https://via.placeholder.com/300x200?text=Alpha+DAO',
      links: [
        { name: 'GitHub', url: 'https://github.com/alphadao-org' },
        { name: 'Website', url: 'https://alpha-dao.com' },
        { name: 'Twitter', url: 'https://twitter.com/alpha_dao' },
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;