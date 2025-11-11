import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Soulbound Tokens (SBT)',
      description: 'Developed SBT contracts on TON blockchain for identity and reputation systems.',
    },
    {
      title: 'NFT Marketplace',
      description: 'Built an NFT platform with smart contracts for minting, trading, and ownership verification.',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;