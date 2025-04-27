import React from 'react';

const TrustedBySection = () => {
  const universities = [
    'IIT Delhi',
    'IIT Bombay',
    'IIT Madras',
    'IIT Kanpur',
    'BITS Pilani',
    'NIT Trichy',
    'AIIMS Delhi',
    'DU Colleges',
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Trusted by Students from Top Universities</h2>
      <div style={styles.universitiesContainer}>
        {universities.map((uni, index) => (
          <div key={index} style={styles.universityCard}>
            {uni}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 40px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#333',
  },
  universitiesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  universityCard: {
    padding: '12px 20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    fontSize: '18px',
    fontWeight: '500',
    color: '#555',
    minWidth: '180px',
  },
};

export default TrustedBySection;
