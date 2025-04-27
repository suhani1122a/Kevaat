import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentPage from './pages/StudentPage'; // Ensure the correct import path
import MentorPage from './pages/MentorPage'; // Ensure the correct import path
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        {/* Define Routes first */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/mentor" element={<MentorPage />} />
      </Routes>
    </Router>
  );
}

// Landing Page with Kevaat Info and Buttons
// function LandingPage() {
//   return (
//     <div style={styles.page}>
//       <div style={styles.leftSide}>
//         <h1>Kevaat</h1>
//         <p>
//           Welcome to Kevaat! We connect Class 12 students with real University mentors.
//           Get genuine guidance from students who have already experienced university life.
//         </p>
//       </div>

//       <div style={styles.rightSide}>
//         <h2>Get Started</h2>
//         <button style={styles.button}>
//           <Link to="/student" style={styles.link}>Class 12 Student</Link>
//         </button>
//         <button style={styles.button}>
//           <Link to="/mentor" style={styles.link}>University Mentor</Link>
//         </button>
//       </div>
//     </div>
//   );
// }

// Styles for page layout
// const styles = {
//   page: {
//     display: 'flex',
//     height: '100vh',
//     padding: '50px',
//     boxSizing: 'border-box',
//   },
//   leftSide: {
//     flex: 2,
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     fontSize: '20px',
//   },
//   rightSide: {
//     flex: 1,
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f2f5',
//     borderRadius: '10px',
//   },
//   button: {
//     margin: '10px',
//     padding: '15px 30px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     borderRadius: '10px',
//     border: 'none',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     width: '200px',
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'white',
//   },
// };

export default App;
