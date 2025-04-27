import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.heroContainer}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to Kevaat</h1>
        <p style={styles.subheading}>
          Connect with real university students, get real guidance!
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate('/student')}>
            Explore Mentors
          </button>
          <button style={{ ...styles.button, backgroundColor: '#555' }} onClick={() => navigate('/mentor')}>
            Become a Mentor
          </button>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
          alt="Mentorship"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    display: 'flex',
    padding: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f2f5',
    minHeight: '90vh',
  },
  textContainer: {
    flex: 1,
    marginRight: '30px',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#333',
  },
  subheading: {
    fontSize: '20px',
    marginBottom: '30px',
    color: '#666',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default HeroSection;
