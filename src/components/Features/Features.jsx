// Features.js
import React, { useState } from 'react';
import './Features.css';
import { FaRegListAlt, FaNewspaper, FaChalkboardTeacher, FaChartLine, FaGift } from 'react-icons/fa';

// Modal Component
const Modal = ({ show, onClose, title, content }) => {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Features = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const featuresData = [
    {
      icon: <FaRegListAlt />,
      title: 'Personal Watchlist',
      description: 'Track your favorite cryptocurrencies with a personalized watchlist.',
      content: 'The personal watchlist allows you to monitor the performance of specific coins you are interested in. Add and remove coins easily and stay updated with real-time data.',
    },
    {
      icon: <FaNewspaper />,
      title: 'News Integration',
      description: 'Stay informed with the latest crypto news.',
      content: 'With our news integration, you get real-time updates from trusted sources on the latest cryptocurrency trends, market movements, and analysis.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Educational Resources & Tutorials',
      description: 'Access beginner guides and tutorials to learn about cryptocurrency.',
      content: 'Our educational resources include beginner guides, tutorials, and expert insights on cryptocurrency, blockchain technology, and investment strategies.',
    },
    {
      icon: <FaChartLine />,
      title: 'Risk and Volatility Index',
      description: 'Understand the risk level and volatility of different coins.',
      content: 'The risk and volatility index helps you assess the stability of each cryptocurrency, enabling more informed decisions based on risk tolerance.',
    },
    {
      icon: <FaGift />,
      title: 'Rewards & Gamification',
      description: 'Earn rewards as you explore CryptoPlace.',
      content: 'Our rewards and gamification system allows you to earn points, badges, and other incentives as you interact with the platform.',
    },
  ];

  const handleFeatureClick = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div className="features-page">
      <h1 className="features-title">Our Features</h1>
      <p className="features-intro">Explore CryptoPlace’s powerful features designed to enhance your cryptocurrency experience.</p>
      
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-item" onClick={() => handleFeatureClick(feature.title, feature.content)}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for Feature Details */}
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} content={modalContent.content} />
    </div>
  );
};

export default Features;
