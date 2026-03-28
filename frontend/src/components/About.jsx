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
                Senior Frontend Engineer with 4+ years of experience architecting and developing scalable 
                web applications. Proven expertise in React.js, Next.js, and TypeScript with a track record 
                of delivering high-quality solutions for global enterprises and government platforms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Specialized in GIS mapping integration (ArcGIS), secure authentication systems (Keycloak, OAuth 2.0), 
                and performance optimization. Successfully delivered production applications for state governments 
                (Tamil Nadu, Karnataka, Andhra Pradesh) and international clients including IBM, Veolia, and Suez.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Recognized with "Best Quarter" award for exceptional project delivery and developing optimized, 
                reusable architectures. Passionate about building efficient, maintainable solutions that solve 
                complex real-world challenges.
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
                <h3 className="text-xl font-semibold text-white mb-2">Scalable Architecture</h3>
                <p className="text-gray-400">
                  Building robust, maintainable systems that scale from prototype to production for global enterprises
                </p>
              </div>
            </Card>

            <Card className="bg-[#0f0f1a]/50 backdrop-blur-sm border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance First</h3>
                <p className="text-gray-400">
                  Optimizing every layer - from GeoJSON rendering to dark mode implementations - for exceptional user experience
                </p>
              </div>
            </Card>

            <Card className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Quality</h3>
                <p className="text-gray-400">
                  Delivering production-ready solutions that meet global coding standards for IBM, governments, and international clients
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