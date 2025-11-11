import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'TON Smart Contracts',
    'Solidity',
    'React',
    'TypeScript',
    'Blockchain Development',
    'NFT Standards',
    'DeFi Protocols',
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;