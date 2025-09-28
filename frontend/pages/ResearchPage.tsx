import React from 'react';
import Navigation from '../components/Navigation';
import { Download, ExternalLink, Calendar, Users } from 'lucide-react';

function ResearchPage() {
  const papers = [
    {
      id: 1,
      title: 'Machine Learning Approaches for Predictive Healthcare Analytics',
      authors: 'J. Doe, M. Smith, R. Johnson',
      venue: 'International Conference on Health Informatics (ICHI 2023)',
      year: '2023',
      status: 'PUBLISHED',
      abstract: 'This paper presents novel machine learning approaches for predictive analytics in healthcare systems, achieving 92% accuracy in patient outcome prediction.',
      keywords: ['Machine Learning', 'Healthcare', 'Predictive Analytics', 'Neural Networks'],
      citations: 12,
      pdfLink: 'https://example.com/paper1.pdf',
      datasetLink: 'https://example.com/dataset1'
    },
    {
      id: 2,
      title: 'Big Data Processing Framework for Real-time IoT Analytics',
      authors: 'J. Doe, A. Williams, K. Brown',
      venue: 'IEEE Transactions on Big Data (TBD 2023)',
      year: '2023',
      status: 'PUBLISHED',
      abstract: 'A comprehensive framework for processing and analyzing IoT data streams in real-time, reducing latency by 65% compared to existing solutions.',
      keywords: ['Big Data', 'IoT', 'Real-time Processing', 'Data Streams'],
      citations: 8,
      pdfLink: 'https://example.com/paper2.pdf',
      datasetLink: null
    },
    {
      id: 3,
      title: 'Automated Network Security Monitoring Using Deep Learning',
      authors: 'J. Doe, C. Davis, L. Wilson',
      venue: 'Journal of Network Security (JNS 2022)',
      year: '2022',
      status: 'PUBLISHED',
      abstract: 'Implementation of deep learning models for automated detection of network security threats with 98.5% accuracy and minimal false positives.',
      keywords: ['Network Security', 'Deep Learning', 'Threat Detection', 'Cybersecurity'],
      citations: 25,
      pdfLink: 'https://example.com/paper3.pdf',
      datasetLink: 'https://example.com/dataset3'
    },
    {
      id: 4,
      title: 'Optimization Algorithms for Large-scale Data Warehouse Systems',
      authors: 'J. Doe, P. Martinez, S. Taylor',
      venue: 'ACM SIGMOD Conference (SIGMOD 2022)',
      year: '2022',
      status: 'PUBLISHED',
      abstract: 'Novel optimization techniques for improving query performance in large-scale data warehouse environments, achieving 3x speedup in complex analytical queries.',
      keywords: ['Data Warehousing', 'Query Optimization', 'Performance', 'Big Data'],
      citations: 18,
      pdfLink: 'https://example.com/paper4.pdf',
      datasetLink: null
    },
    {
      id: 5,
      title: 'Advanced Statistical Methods for Climate Data Analysis',
      authors: 'J. Doe, F. Anderson, T. Clark',
      venue: 'Environmental Data Science Journal (EDSJ 2024)',
      year: '2024',
      status: 'UNDER_REVIEW',
      abstract: 'Application of advanced statistical methodologies for analyzing long-term climate patterns and predicting environmental changes.',
      keywords: ['Climate Analysis', 'Statistics', 'Environmental Science', 'Time Series'],
      citations: 0,
      pdfLink: null,
      datasetLink: 'https://example.com/climate-dataset'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PUBLISHED': return 'text-emerald-300';
      case 'UNDER_REVIEW': return 'text-yellow-300';
      case 'IN_PROGRESS': return 'text-cyan-300';
      default: return 'text-gray-100';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PUBLISHED': return '📄';
      case 'UNDER_REVIEW': return '🔍';
      case 'IN_PROGRESS': return '⚙️';
      default: return '📝';
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
              &gt; RESEARCH.DB &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              Academic publications and research contributions in data science and technology
            </p>
          </div>

          {/* Research Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'PUBLICATIONS', value: '5', icon: '📄' },
              { label: 'CITATIONS', value: '63', icon: '📊' },
              { label: 'H-INDEX', value: '4', icon: '📈' },
              { label: 'COLLABORATORS', value: '12', icon: '👥' }
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

          {/* Research Papers */}
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div
                key={paper.id}
                className="neon-border bg-gray-900 p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold pixel-text text-cyan-300 mb-2">
                        {paper.title}
                      </h3>
                      <div className={`ml-4 px-3 py-1 text-sm pixel-text ${getStatusColor(paper.status)} border border-current flex items-center`}>
                        <span className="mr-2">{getStatusBadge(paper.status)}</span>
                        {paper.status.replace('_', ' ')}
                      </div>
                    </div>
                    
                    <div className="text-purple-300 pixel-text mb-2 flex items-center">
                      <Users size={16} className="mr-2" />
                      {paper.authors}
                    </div>
                    
                    <div className="text-emerald-300 pixel-text mb-2 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {paper.venue} ({paper.year})
                    </div>
                    
                    {paper.citations > 0 && (
                      <div className="text-yellow-300 pixel-text mb-4 text-sm">
                        📊 Citations: {paper.citations}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-100 pixel-text mb-4 text-sm leading-relaxed">
                  {paper.abstract}
                </p>

                {/* Keywords */}
                <div className="mb-6">
                  <div className="text-sm pixel-text text-emerald-300 mb-2">
                    &gt; KEYWORDS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, keywordIndex) => (
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
                  {paper.pdfLink && (
                    <a
                      href={paper.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-cyan-300 text-cyan-300 pixel-text hover:bg-cyan-300 hover:text-black transition-colors duration-300"
                    >
                      <Download size={16} />
                      <span>PDF</span>
                    </a>
                  )}
                  {paper.datasetLink && (
                    <a
                      href={paper.datasetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-emerald-300 text-emerald-300 pixel-text hover:bg-emerald-300 hover:text-black transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>DATASET</span>
                    </a>
                  )}
                  <button className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-purple-300 text-purple-300 pixel-text hover:bg-purple-300 hover:text-black transition-colors duration-300">
                    <span>📋</span>
                    <span>CITE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Research Areas */}
          <div className="mt-16 neon-border bg-gray-900 p-6">
            <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-6">
              &gt; RESEARCH_AREAS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  area: 'DATA SCIENCE',
                  topics: ['Machine Learning', 'Statistical Analysis', 'Predictive Modeling', 'Data Mining']
                },
                {
                  area: 'INFORMATION SYSTEMS',
                  topics: ['Database Optimization', 'Data Warehousing', 'System Architecture', 'Performance Tuning']
                },
                {
                  area: 'CYBERSECURITY',
                  topics: ['Network Security', 'Threat Detection', 'Security Analytics', 'Risk Assessment']
                }
              ].map((area, index) => (
                <div key={index} className="border border-emerald-300 p-4">
                  <h3 className="text-lg font-bold pixel-text text-purple-300 mb-3">
                    {area.area}
                  </h3>
                  <div className="space-y-1">
                    {area.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm pixel-text text-emerald-300">
                        &gt; {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-16 neon-border bg-gray-900 p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 pixel-text text-white">research.log</div>
            </div>
            
            <div className="font-mono text-emerald-300 space-y-2">
              <div>&gt; grep -r "machine learning" publications/</div>
              <div className="text-cyan-300">Found 3 publications in ML domain</div>
              <div>&gt; wc -l citations.txt</div>
              <div className="text-yellow-300">Total citations: 63 lines</div>
              <div>&gt; echo "Research never stops..."</div>
              <div className="text-purple-300">Research never stops...</div>
              <div>&gt; <span className="animate-pulse">█</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;