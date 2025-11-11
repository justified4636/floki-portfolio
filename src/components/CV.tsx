import React from 'react';

const CV: React.FC = () => {
  const handleDownload = () => {
    // Dummy download link
    const link = document.createElement('a');
    link.href = '#'; // Placeholder
    link.download = 'DCRYPT_Portfolio.pdf';
    link.click();
  };

  return (
    <section id="cv" className="cv-section">
      <h2>Download CV</h2>
      <button onClick={handleDownload} className="download-btn">
        Download Resume
      </button>
    </section>
  );
};

export default CV;