import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      title: 'Step 1: Search University',
      description: 'Browse through universities and find the one you are interested in.',
    },
    {
      title: 'Step 2: Choose a Mentor',
      description: 'Select from a list of students already studying at that university.',
    },
    {
      title: 'Step 3: Book a Call',
      description: 'Book a 1-on-1 call to get real, honest insights about college life.',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>How Kevaat Works</h2>
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepCard}>
            <h3 style={styles.stepTitle}>{step.title}</h3>
            <p style={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 40px',
    backgroundColor: '#f0f8ff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#333',
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  stepCard: {
    width: '280px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  stepTitle: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#007bff',
  },
  stepDescription: {
    fontSize: '16px',
    color: '#555',
  },
};

export default HowItWorksSection;
