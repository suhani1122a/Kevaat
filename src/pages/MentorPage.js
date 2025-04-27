import React from 'react';

function MentorPage() {
  return (
    <div style={styles.page}>
      <h1>Welcome, University Mentor!</h1>
      <p>
        Here you can sign up as a mentor and help Class 12 students by sharing your experiences.
        Your insights will make a difference in someone's educational journey.
      </p>
      <button style={styles.button}>Sign Up as a Mentor</button>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    marginTop: '20px',
  },
};

export default MentorPage;