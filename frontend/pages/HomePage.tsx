import React from 'react';
import Navigation from '../components/Navigation';

function HomePage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <div className="mb-8">
              {/* Pixel art banner placeholder */}
              <div className="neon-border bg-gray-900 p-8 mb-8 max-w-4xl mx-auto">
                <div className="text-6xl pixel-text text-cyan-300 mb-4 pulse-glow">
                  &lt;DEVELOPER/&gt;
                </div>
                <div className="text-2xl pixel-text text-purple-300">
                  DATA SCIENCE • RESEARCH • IT SYSTEMS
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold pixel-text text-gray-100 mb-6 glitch">
              JOHN DOE
            </h1>
            
            <p className="text-xl pixel-text text-emerald-300 mb-8 max-w-2xl mx-auto">
              &gt; Data Scientist & Research Analyst building insights from complex datasets
              <br />
              &gt; Transforming data into actionable intelligence
            </p>
            
            <div className="flex justify-center space-x-6">
              <button className="retro-button">
                VIEW PROJECTS
              </button>
              <button className="retro-button">
                DOWNLOAD CV
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: 'PROJECTS COMPLETED', value: '15+', icon: '📊' },
              { label: 'RESEARCH PAPERS', value: '8', icon: '📄' },
              { label: 'DATASETS ANALYZED', value: '50+', icon: '📈' }
            ].map((stat, index) => (
              <div key={index} className="neon-border bg-gray-900 p-6 text-center fade-in">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold pixel-text text-cyan-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm pixel-text text-emerald-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Skills */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold pixel-text text-cyan-300 mb-8 pulse-glow">
              &gt; CORE SYSTEMS &lt;
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'PYTHON', 'R', 'SQL', 'MACHINE LEARNING',
                'STATISTICS', 'DATA MINING', 'NETWORK SECURITY', 'DATABASE ADMIN'
              ].map((skill, index) => (
                <div
                  key={index}
                  className="neon-border bg-gray-900 p-4 pixel-text text-emerald-300 hover:text-purple-300 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Section */}
          <div className="neon-border bg-gray-900 p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 pixel-text text-white">terminal.exe</div>
            </div>
            
            <div className="font-mono text-emerald-300 space-y-2">
              <div>&gt; whoami</div>
              <div className="text-cyan-300">john_doe@portfolio:~$ Data Scientist & IT Specialist</div>
              <div>&gt; ls skills/</div>
              <div className="text-yellow-300">data_science/ analytics/ it_systems/ research/</div>
              <div>&gt; cat current_status.txt</div>
              <div className="text-purple-300">Available for research collaborations!</div>
              <div>&gt; <span className="animate-pulse">█</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
