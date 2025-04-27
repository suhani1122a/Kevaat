import React from 'react';

function StudentPage() {
  return (
    <div style={styles.page}>
      <h1>Welcome, Class 12 Student!</h1>
      <p>
        Here you can find university mentors to guide you through your journey.
        Get personalized help and advice from students who are already enrolled in universities.
      </p>
      <button style={styles.button}>Find a Mentor</button>
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

export default StudentPage;
