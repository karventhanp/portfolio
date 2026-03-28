import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const skills = {
  frontend: [
    { name: 'React', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'JavaScript (ES6+)', level: 'Expert' },
    { name: 'HTML5/CSS3', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Advanced' },
  ],
  tools: [
    { name: 'Git/GitHub', level: 'Advanced' },
    { name: 'Webpack', level: 'Intermediate' },
    { name: 'Vite', level: 'Advanced' },
    { name: 'Redux/Zustand', level: 'Advanced' },
    { name: 'REST APIs', level: 'Expert' },
    { name: 'GraphQL', level: 'Intermediate' },
  ],
  other: [
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Expert' },
    { name: 'Performance Optimization', level: 'Advanced' },
    { name: 'Testing (Jest, RTL)', level: 'Advanced' },
    { name: 'CI/CD', level: 'Intermediate' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Frontend Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Frontend Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.frontend.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-4 hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="text-center">
                    <p className="text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.tools.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-[#0f0f1a]/50 backdrop-blur-sm border-emerald-500/20 p-4 hover:border-emerald-500/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <div className="text-center">
                    <p className="text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-none text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Other Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.other.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-4 hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="text-center">
                    <p className="text-white font-medium mb-2">{skill.name}</p>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-none text-xs">
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