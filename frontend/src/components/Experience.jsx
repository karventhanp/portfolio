import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Solinas Integrity Private Limited',
    location: 'Chennai',
    position: 'Senior Software Engineer (Frontend)',
    duration: 'Oct 2024 – Present',
    responsibilities: [
      'Architected and developed a web-based inspection management platform from scratch to monitor and manage robotic pipeline data',
      'Implemented custom logic to optimize the loading and rendering of large GeoJSON files, reducing map rendering time and improving responsiveness',
      'Built frontend modules to consume and display processed data and inspection videos via REST APIs, streamlining workflow for field engineers',
      'Utilized ArcGIS for infrastructure visualization and integrated Keycloak for secure user authentication and role-based access control',
      'Delivered production-ready applications for State Governments (TN, KA, AP) and international firms including Veolia and Suez'
    ]
  },
  {
    company: 'Grootan Technologies',
    location: 'Chennai',
    position: 'Software Engineer - Level 2',
    duration: 'March 2022 – Oct 2024',
    responsibilities: [
      'Contributed to high-impact frontend modules for IBM, ensuring adherence to global coding standards and enterprise-level scalability',
      'Developed frontend components for KOBIL IAM platform, focusing on secure digital identity, token management, and authentication flows',
      'Built comprehensive Management Information System (MIS) from scratch using Next.js, integrating Jira and Zoho APIs to track efforts for 100+ employees',
      'Awarded "Best Quarter" for rapid project delivery and developing highly optimized, reusable Dark Mode architecture'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">My journey in building enterprise-grade applications</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-8 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Briefcase size={18} />
                    <span className="text-lg font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                
                {index === 0 && (
                  <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                    Current
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-6 text-center">Education</h3>
          <Card className="bg-[#0f0f1a]/50 backdrop-blur-sm border-emerald-500/20 p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">MSc in Software Systems</h4>
                <p className="text-cyan-400 font-medium mb-2">Kongu Engineering College</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Perundurai, Erode</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>2017 – 2022</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <p className="text-cyan-400 font-semibold">GPA: 8.31</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
