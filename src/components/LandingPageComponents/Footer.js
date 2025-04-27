import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h3>Kevaat</h3>
          <p>Connecting students with university mentors for better guidance.</p>
          <p>© {new Date().getFullYear()} Kevaat. All rights reserved.</p>
        </div>
        <div style={styles.right}>
          <h4>Quick Links</h4>
          <ul style={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/student">Find Mentors</a></li>
            <li><a href="/mentor">Become a Mentor</a></li>
            <li><a href="#">Contact Us</a></li> {/* You can later create a Contact Us page */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    borderTop: '1px solid #e5e5e5',
    marginTop: '40px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  left: {
    flex: '1',
    minWidth: '250px',
    marginBottom: '20px',
  },
  right: {
    flex: '1',
    minWidth: '250px',
    marginBottom: '20px',
  },
  links: {
    listStyle: 'none',
    padding: '0',
  },
};

export default Footer;
