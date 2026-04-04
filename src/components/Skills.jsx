import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const skills = {
  core: [
    { name: 'React.js', level: 'Expert' },
    { name: 'Next.js', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'JavaScript (ES6+)', level: 'Expert' },
    { name: 'HTML5/CSS3', level: 'Expert' },
    { name: 'Redux', level: 'Expert' },
    { name: 'Zustand', level: 'Expert' },
    { name: 'Context API', level: 'Expert' },
  ],
  secondary: [
    { name: 'Angular', level: 'Basic' },
    { name: 'Vue.js', level: 'Basic' },
    { name: 'jQuery', level: 'Intermediate' },
  ],
  uiStyling: [
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'Bootstrap', level: 'Advanced' },
    { name: 'FTL (FreeMarker)', level: 'Intermediate' },
    { name: 'Dark Mode Optimization', level: 'Expert' },
  ],
  integrations: [
    { name: 'ArcGIS Maps', level: 'Advanced' },
    { name: 'Keycloak', level: 'Advanced' },
    { name: 'KOBIL IAM', level: 'Advanced' },
    { name: 'OAuth 2.0', level: 'Advanced' },
    { name: 'GeoJSON', level: 'Advanced' },
    { name: 'REST APIs', level: 'Expert' },
  ],
  backend: [
    { name: 'AWS Lambda', level: 'Intermediate' },
    { name: 'Node.js (Express)', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Mongoose', level: 'Intermediate' },
    { name: 'Jira', level: 'Advanced' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Core Development */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6">Core Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.core.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#0f0f1a] dark:to-[#0f0f1a] border-2 border-cyan-200 dark:border-cyan-500/20 p-4 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-xl shadow-cyan-100 dark:shadow-cyan-500/20"
                >
                  <div className="text-center">
                    <p className="text-gray-900 dark:text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-cyan-500 dark:bg-cyan-500/20 text-white dark:text-cyan-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* UI & Styling */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6">UI & Styling</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.uiStyling.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-[#0f0f1a] dark:to-[#0f0f1a] border-2 border-emerald-200 dark:border-emerald-500/20 p-4 hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-all hover:scale-105 hover:shadow-xl shadow-emerald-100 dark:shadow-emerald-500/20"
                >
                  <div className="text-center">
                    <p className="text-gray-900 dark:text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-emerald-500 dark:bg-emerald-500/20 text-white dark:text-emerald-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6">Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.integrations.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f0f1a] dark:to-[#0f0f1a] border-2 border-blue-200 dark:border-cyan-500/20 p-4 hover:border-blue-400 dark:hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-xl shadow-blue-100 dark:shadow-cyan-500/20"
                >
                  <div className="text-center">
                    <p className="text-gray-900 dark:text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-blue-500 dark:bg-cyan-500/20 text-white dark:text-cyan-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Backend & Cloud */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6">Backend & Cloud</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.backend.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-[#0f0f1a] dark:to-[#0f0f1a] border-2 border-teal-200 dark:border-emerald-500/20 p-4 hover:border-teal-400 dark:hover:border-emerald-500/40 transition-all hover:scale-105 hover:shadow-xl shadow-teal-100 dark:shadow-emerald-500/20"
                >
                  <div className="text-center">
                    <p className="text-gray-900 dark:text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-teal-500 dark:bg-emerald-500/20 text-white dark:text-emerald-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Secondary Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-cyan-400 mb-6">Secondary Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {skills.secondary.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-[#0f0f1a] dark:to-[#0f0f1a] border-2 border-indigo-200 dark:border-cyan-500/20 p-4 hover:border-indigo-400 dark:hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-xl shadow-indigo-100 dark:shadow-cyan-500/20"
                >
                  <div className="text-center">
                    <p className="text-gray-900 dark:text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-indigo-500 dark:bg-cyan-500/20 text-white dark:text-cyan-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
