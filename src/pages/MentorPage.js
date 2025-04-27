import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './MentorPage.css';

const MentorPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    university: '',
    languages: [],
    isHosteller: false,
    bio: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        navigate('/mentor-dashboard');
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        
        await setDoc(doc(db, "mentors", userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          university: formData.university,
          languages: formData.languages,
          isHosteller: formData.isHosteller,
          bio: formData.bio,
          createdAt: new Date(),
          role: 'mentor'
        });
        
        navigate('/mentor-dashboard');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mentor-container">
      <div className="mentor-card">
        <div className="mentor-header">
          <h1 className="mentor-title">
            {isLogin ? 'Welcome Back!' : 'Join as Mentor'}
          </h1>
          <p className="mentor-subtitle">
            {isLogin ? 'Sign in to continue' : 'Help students achieve their dreams'}
          </p>
        </div>

        <div className="mentor-body">
          {error && <div className="mentor-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">University</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Harvard University"
                    required
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="form-group">
                  <label className="form-label">Languages (comma separated)</label>
                  <input
                    type="text"
                    value={formData.languages.join(', ')}
                    onChange={(e) => setFormData({
                      ...formData,
                      languages: e.target.value.split(',').map(lang => lang.trim())
                    })}
                    className="form-input"
                    placeholder="English, Hindi, French"
                    required
                  />
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="isHosteller"
                    checked={formData.isHosteller}
                    onChange={handleChange}
                    className="checkbox-input"
                    id="hosteller"
                  />
                  <label htmlFor="hosteller">I'm a hosteller</label>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="3"
                    className="form-input"
                    placeholder="Tell students about your experience..."
                    required
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="submit-btn"
            >
              {isLoading ? (
                <>
                  <span className="spinner">↻</span>
                  Processing...
                </>
              ) : isLogin ? (
                'Sign In'
              ) : (
                'Create Mentor Account'
              )}
            </button>
          </form>

          <div className="toggle-link">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-btn"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPage;