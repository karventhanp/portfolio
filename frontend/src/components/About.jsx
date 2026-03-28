import React from 'react';
import { Code2, Sparkles, Zap } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know more about my journey and what drives me</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <Code2 size={80} className="text-white" />
                    </div>
                    <p className="text-cyan-400 text-lg font-medium">Frontend Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate frontend engineer with over 5 years of experience building modern, 
                responsive, and user-centric web applications. My journey in web development started 
                with a curiosity about how things work on the web, which quickly evolved into a deep 
                passion for creating exceptional digital experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in React ecosystem, TypeScript, and modern frontend architectures. 
                I believe in writing clean, maintainable code and creating interfaces that not only 
                look great but also provide seamless user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
                <p className="text-gray-400">
                  Writing maintainable, scalable, and well-documented code that stands the test of time
                </p>
              </div>
            </Card>

            <Card className="bg-[#0f0f1a]/50 backdrop-blur-sm border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">User Experience</h3>
                <p className="text-gray-400">
                  Creating intuitive interfaces that delight users and solve real-world problems
                </p>
              </div>
            </Card>

            <Card className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
                <p className="text-gray-400">
                  Optimizing every aspect to deliver fast, efficient, and responsive applications
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;