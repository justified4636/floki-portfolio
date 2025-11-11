import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-photo">
          <img src="/floki.jpg" alt="Floki" />
        </div>
        <div className="hero-content">
          <h1>DCRYPT</h1>
          <p>Web3 Made Simple</p>
          <p>Content Writer | Connecting Web3 Projects with Trusted KOLs & Creators</p>
          <p>Ready to amplify your Web3 project? <a href="http://t.me/DCRYPT_lord" target="_blank" rel="noopener noreferrer">Let's connect →</a></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;