import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import AboutPage from './pages/AboutPage';
import CertificatesPage from './pages/CertificatesPage';
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasEntered(true);
    }, 3000);
  };

  if (!hasEntered) {
    return isLoading ? <LoadingScreen /> : <WelcomeScreen onEnter={handleEnter} />;
  }

  return (
    <div className="dark">
      <Router>
        <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
          <div className="scanlines"></div>
          <div className="crt-overlay"></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/certificates" element={<CertificatesPage />} /> {/* New Route */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;