import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Real University Students',
      description: 'Talk directly with university students who can guide you from real experience.',
    },
    {
      title: 'Book 1-on-1 Calls',
      description: 'Schedule personal mentorship calls with the students of your dream university.',
    },
    {
      title: 'Hostel and Campus Insights',
      description: 'Get details about hostel life, campus life, study environment and more.',
    },
  ];

  return (
    <div style={styles.featuresContainer}>
      <h2 style={styles.heading}>Why Choose Kevaat?</h2>
      <div style={styles.cardsContainer}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p style={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  featuresContainer: {
    padding: '60px 40px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#333',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    width: '280px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#007bff',
  },
  cardDescription: {
    fontSize: '16px',
    color: '#555',
  },
};

export default FeaturesSection;
