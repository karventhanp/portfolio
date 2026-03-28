import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart management, payment integration, and admin dashboard. Built with modern React patterns and optimized for performance.',
    techStack: ['React', 'TypeScript', 'Redux', 'Stripe API', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Focused on productivity and user experience.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Shadcn UI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts. Features beautiful data visualizations and responsive design.',
    techStack: ['React', 'Chart.js', 'Weather API', 'Geolocation', 'CSS Modules'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio CMS',
    description: 'Content management system for creative professionals to showcase their work. Includes drag-and-drop builder, image optimization, and SEO tools.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Material-UI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-responsive fitness tracking app with workout logs, progress charts, and goal setting. Integrates with popular fitness APIs for comprehensive tracking.',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Recharts'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with real-time data processing, custom reports, and data export features. Built for scalability and performance.',
    techStack: ['Next.js', 'TypeScript', 'GraphQL', 'D3.js', 'Prisma'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work and side projects</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#0f0f1a]/50 backdrop-blur-sm border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-emerald-500/20 text-emerald-400 border-none text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none"
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;