import React from 'react';
import Navigation from '../components/Navigation';
import { ExternalLink, Github } from 'lucide-react';

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'HEALTHCARE ANALYTICS DASHBOARD',
      description: 'Real-time healthcare data analytics platform with predictive modeling for patient outcomes and resource optimization.',
      tech: ['PYTHON', 'PANDAS', 'PLOTLY', 'TENSORFLOW'],
      github: 'https://github.com/johndoe/healthcare-dashboard',
      demo: 'https://healthcare-analytics-demo.com',
      image: '/api/placeholder/400/250',
      status: 'ACTIVE'
    },
    {
      id: 2,
      title: 'NETWORK SECURITY MONITOR',
      description: 'Automated network security monitoring system with machine learning threat detection and real-time alerting.',
      tech: ['PYTHON', 'SCIKIT-LEARN', 'WIRESHARK', 'ELASTICSEARCH'],
      github: 'https://github.com/johndoe/security-monitor',
      demo: 'https://security-monitor-demo.com',
      image: '/api/placeholder/400/250',
      status: 'BETA'
    },
    {
      id: 3,
      title: 'CLIMATE DATA VISUALIZER',
      description: 'Interactive climate data visualization tool for environmental research with statistical analysis capabilities.',
      tech: ['R', 'SHINY', 'GGPLOT2', 'POSTGRESQL'],
      github: 'https://github.com/johndoe/climate-viz',
      demo: 'https://climate-viz-demo.com',
      image: '/api/placeholder/400/250',
      status: 'COMPLETED'
    },
    {
      id: 4,
      title: 'IoT DATA PROCESSING ENGINE',
      description: 'High-performance IoT data processing system for real-time sensor data analysis and anomaly detection.',
      tech: ['APACHE SPARK', 'KAFKA', 'PYTHON', 'INFLUXDB'],
      github: 'https://github.com/johndoe/iot-engine',
      demo: null,
      image: '/api/placeholder/400/250',
      status: 'RESEARCH'
    },
    {
      id: 5,
      title: 'FINANCIAL RISK ANALYZER',
      description: 'Comprehensive financial risk assessment tool using machine learning for portfolio optimization and risk prediction.',
      tech: ['PYTHON', 'NUMPY', 'SCIPY', 'JUPYTER'],
      github: 'https://github.com/johndoe/risk-analyzer',
      demo: 'https://risk-analyzer-demo.com',
      image: '/api/placeholder/400/250',
      status: 'ACTIVE'
    },
    {
      id: 6,
      title: 'DATABASE PERFORMANCE OPTIMIZER',
      description: 'Automated database query optimization tool for large-scale data warehouse systems with performance monitoring.',
      tech: ['SQL', 'PYTHON', 'POSTGRESQL', 'GRAFANA'],
      github: 'https://github.com/johndoe/db-optimizer',
      demo: null,
      image: '/api/placeholder/400/250',
      status: 'COMPLETED'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'text-emerald-300';
      case 'BETA': return 'text-yellow-300';
      case 'COMPLETED': return 'text-cyan-300';
      case 'RESEARCH': return 'text-purple-300';
      default: return 'text-gray-100';
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold pixel-text text-cyan-300 mb-6 pulse-glow">
              &gt; PROJECTS DATABASE &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge technology implementations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="neon-border bg-gray-900 p-6 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image/Video Placeholder */}
                <div className="relative mb-6 overflow-hidden">
                  <div className="aspect-video bg-gray-800 border-2 border-emerald-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="pixel-text text-emerald-300">
                        {project.title} DEMO
                      </div>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-2 px-2 py-1 text-xs pixel-text ${getStatusColor(project.status)} border border-current`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold pixel-text text-cyan-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm pixel-text text-gray-100 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-sm pixel-text text-emerald-300 mb-2">
                    &gt; TECH_STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-emerald-300 text-emerald-300 pixel-text hover:bg-emerald-300 hover:text-black transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>SOURCE</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-cyan-300 text-cyan-300 pixel-text hover:bg-cyan-300 hover:text-black transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Footer */}
          <div className="mt-16 neon-border bg-gray-900 p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 pixel-text text-white">projects.sh</div>
            </div>
            
            <div className="font-mono text-emerald-300 space-y-2">
              <div>&gt; git log --oneline</div>
              <div className="text-cyan-300">a1b2c3d feat: Added financial risk analyzer with ML models</div>
              <div className="text-cyan-300">d4e5f6g fix: Optimized database performance monitoring</div>
              <div className="text-cyan-300">g7h8i9j feat: Enhanced IoT data processing with real-time analytics</div>
              <div>&gt; echo "Data-driven solutions in development..."</div>
              <div className="text-yellow-300">Data-driven solutions in development...</div>
              <div>&gt; <span className="animate-pulse">█</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
