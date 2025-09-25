import React from 'react';
import Navigation from '../components/Navigation';
import { ExternalLink, Calendar, Users } from 'lucide-react';

function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: 'Complete Guide to Power BI for Data Analysts',
      issuer: 'Microsoft Press / LinkedIn',
      year: 'Exp. 2025',
      description: 'A comprehensive certification covering all essential aspects of Power BI for professional data analysis and visualization.',
      keywords: ['Power BI', 'Data Analysis', 'Microsoft', 'Data Visualization'],
      link: 'https://www.linkedin.com/' // Placeholder link
    },
    {
      id: 2,
      title: 'Microsoft Security Essentials',
      issuer: 'Microsoft / LinkedIn',
      year: 'Exp. 2025',
      description: 'A professional certificate focusing on the fundamental principles of security, compliance, and identity in Microsoft environments.',
      keywords: ['Cybersecurity', 'Microsoft Security', 'Professional Certificate', 'Identity Management'],
      link: 'https://www.linkedin.com/' // Placeholder link
    },
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
              &gt; CERTIFICATES.LOG &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              Professional certificates and credentials in data and security
            </p>
          </div>

          {/* Certificates List */}
          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="neon-border bg-gray-900 p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold pixel-text text-cyan-300 mb-2">
                      {cert.title}
                    </h3>
                    <div className="text-purple-300 pixel-text mb-2 flex items-center">
                      <Users size={16} className="mr-2" />
                      {cert.issuer}
                    </div>
                    <div className="text-emerald-300 pixel-text mb-2 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {cert.year}
                    </div>
                  </div>
                </div>

                <p className="text-gray-100 pixel-text mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Keywords */}
                <div className="mb-6">
                  <div className="text-sm pixel-text text-emerald-300 mb-2">
                    &gt; KEYWORDS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.keywords.map((keyword, keywordIndex) => (
                      <span
                        key={keywordIndex}
                        className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-cyan-300 text-cyan-300 pixel-text hover:bg-cyan-300 hover:text-black transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>VERIFY</span>
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
              <div className="ml-4 pixel-text text-white">credentials.log</div>
            </div>
            
            <div className="font-mono text-emerald-300 space-y-2">
              <div>&gt; ls -l certificates/</div>
              <div className="text-cyan-300">2 items found</div>
              <div>&gt; echo "Continuously learning and growing..."</div>
              <div className="text-purple-300">Continuously learning and growing...</div>
              <div>&gt; <span className="animate-pulse">█</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatesPage;