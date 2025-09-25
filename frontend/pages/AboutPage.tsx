import React from 'react';
import Navigation from '../components/Navigation';
import { Download, Mail, Linkedin, Twitter } from 'lucide-react';

function AboutPage() {
  const skills = [
    {
      category: 'DATA SCIENCE',
      techs: ['Python', 'R', 'SQL', 'Statistical Analysis', 'Machine Learning', 'Data Mining']
    },
    {
      category: 'ANALYTICS',
      techs: ['R', 'SQL', 'Jupyter', 'Tableau', 'Power BI', 'Plotly']
    },
    {
      category: 'IT SYSTEMS',
      techs: ['Database Admin', 'Network Security', 'System Monitoring', 'Linux', 'Windows Server', 'Cloud Computing']
    },
    {
      category: 'RESEARCH',
      techs: ['Statistical Modeling', 'Academic Writing', 'Peer Review', 'Grant Writing', 'Experimental Design', 'Literature Review']
    }
  ];

  const experience = [
    {
      title: 'ORIENTATION LEADER',
      company: 'Dominican University',
      period: 'SUMMER 2023, 2024, 2025',
      description: 'Led groups of incoming students to foster college readiness, community, and leadership, serving as a mentor and role model during orientation and the academic year.',
      achievements: ['Mentored over 50+ new students to ensure a successful transition to college life', 'Organized and facilitated engaging workshops and social events for incoming classes', 'Enhanced student engagement through proactive leadership and community-building']
    },
    {
      title: 'PEER LED TEAM LEARNING TUTOR',
      company: 'Dominican University',
      period: 'AUG 2023 - DEC 2023',
      description: 'Acted as an embedded tutor within lectures, leading focused workshops to increase student understanding of complex material and foster better communication.',
      achievements: ['Increased student comprehension in core subjects through targeted workshops', 'Improved classroom communication by acting as a liaison between students and the professor']
    },
    {
      title: 'DATA MANAGEMENT',
      company: 'Go Green Tree & Outdoor Services',
      period: 'SUMMER 2022',
      description: 'Helped manage data, create a website and survey for services ranging from tree trimming to landscaping or firewood delivery.',
      achievements: ['Developed easier methods of communication between customer and owner']
    }
  ];

  const papers = [
    {
      title: 'Deep Learning Approaches for Real-time Data Processing',
      venue: 'International Conference on AI (ICAI 2023)',
      authors: 'J. Doe, A. Smith, B. Johnson'
    },
    {
      title: 'Optimizing Neural Networks for Edge Computing',
      venue: 'Journal of Machine Learning Research (JMLR 2022)',
      authors: 'J. Doe, C. Williams'
    },
    {
      title: 'Blockchain-based Secure Data Sharing in IoT Networks',
      venue: 'IEEE Transactions on IoT (2022)',
      authors: 'J. Doe, D. Brown, E. Davis'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold pixel-text text-cyan-300 mb-6 pulse-glow">
              &gt; ABOUT.EXE &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              System specifications and operational parameters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="neon-border bg-gray-900 p-6 fade-in">
                <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-4">
                  &gt; SYSTEM_INFO
                </h2>
                <div className="space-y-4 text-gray-100 pixel-text">
                  <p>
                    Experienced researcher and data analyst with 5+ years in academic and 
                    industry settings, specializing in statistical analysis and IT systems.
                  </p>
                  <p>
                    Expert in data science methodologies, machine learning applications, and 
                    IT infrastructure management with a focus on security and performance.
                  </p>
                  <p>
                    Published researcher with multiple peer-reviewed publications and 
                    extensive experience in grant writing and collaborative research projects.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="neon-border bg-gray-900 p-6 fade-in">
                <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-6">
                  &gt; WORK_HISTORY
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-emerald-300 pl-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-bold pixel-text text-purple-300">
                          {exp.title}
                        </h3>
                        <span className="text-sm pixel-text text-yellow-300">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-cyan-300 pixel-text mb-2">{exp.company}</div>
                      <p className="text-gray-100 text-sm mb-3">{exp.description}</p>
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, achieveIndex) => (
                          <div key={achieveIndex} className="text-sm text-emerald-300 pixel-text">
                            &gt; {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact */}
              <div className="neon-border bg-gray-900 p-6 fade-in">
                <h2 className="text-xl font-bold pixel-text text-cyan-300 mb-4">
                  &gt; CONTACT
                </h2>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: 'john@example.com', link: 'mailto:john@example.com' },
                    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/johndoe' },
                    { icon: Twitter, label: '@johndoe_dev', link: 'https://twitter.com/johndoe_dev' }
                  ].map(({ icon: Icon, label, link }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-300 hover:text-cyan-300 transition-colors pixel-text"
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
                <button className="retro-button w-full mt-4 text-sm">
                  <Download size={16} className="inline mr-2" />
                  DOWNLOAD CV
                </button>
              </div>

              {/* Quick Stats */}
              <div className="neon-border bg-gray-900 p-6 fade-in">
                <h2 className="text-xl font-bold pixel-text text-cyan-300 mb-4">
                  &gt; STATS
                </h2>
                <div className="space-y-3 text-sm pixel-text">
                  <div className="flex justify-between">
                    <span className="text-gray-100">EXPERIENCE:</span>
                    <span className="text-emerald-300">5+ YEARS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-100">PROJECTS:</span>
                    <span className="text-emerald-300">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-100">PAPERS:</span>
                    <span className="text-emerald-300">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-100">DATASETS:</span>
                    <span className="text-emerald-300">12+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold pixel-text text-cyan-300 mb-8 text-center pulse-glow">
              &gt; SKILL_MATRIX &lt;
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="neon-border bg-gray-900 p-6 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold pixel-text text-purple-300 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-sm pixel-text text-emerald-300 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        &gt; {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Papers */}
          <div className="neon-border bg-gray-900 p-6 fade-in">
            <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-6">
              &gt; RESEARCH_PUBLICATIONS
            </h2>
            <div className="space-y-4">
              {papers.map((paper, index) => (
                <div key={index} className="border-l-2 border-emerald-300 pl-4">
                  <h3 className="text-lg font-bold pixel-text text-gray-100 mb-1">
                    {paper.title}
                  </h3>
                  <div className="text-sm text-cyan-300 pixel-text mb-1">
                    {paper.venue}
                  </div>
                  <div className="text-sm text-gray-300 pixel-text">
                    Authors: {paper.authors}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
