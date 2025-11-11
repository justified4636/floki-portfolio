import React from 'react';

const Gallery: React.FC = () => {
  const galleryItems = [
    { src: '/pexels-photo-220213.jpeg', alt: 'Web3 Content Creation', caption: 'Crafting compelling narratives' },
    { src: 'https://via.placeholder.com/400x300?text=KOL+Collaboration', alt: 'KOL Partnership', caption: 'Building strategic alliances' },
    { src: 'https://via.placeholder.com/400x300?text=Blockchain+Education', alt: 'Education Initiative', caption: 'Simplifying complex concepts' },
    { src: 'https://via.placeholder.com/400x300?text=Community+Building', alt: 'Community Engagement', caption: 'Fostering Web3 adoption' },
    { src: 'https://via.placeholder.com/400x300?text=Content+Strategy', alt: 'Strategic Planning', caption: 'Driving project success' },
    { src: 'https://via.placeholder.com/400x300?text=Network+Expansion', alt: 'Network Growth', caption: 'Expanding reach and influence' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Portfolio Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.alt} />
            <div className="gallery-overlay">
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;