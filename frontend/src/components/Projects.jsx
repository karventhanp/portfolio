import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Award } from 'lucide-react';

const projects = [
  {
    title: 'Robotic Inspection Dashboard',
    company: 'Solinas Integrity',
    description: 'A specialized web application for managing infrastructure data, interactive maps, and inspection reporting. Features real-time data processing, GeoJSON optimization, and ArcGIS integration for pipeline monitoring.',
    techStack: ['React.js', 'Next.js', 'ArcGIS', 'Keycloak', 'GeoJSON', 'REST APIs'],
    highlights: [
      'Built from scratch for government and international clients',
      'Optimized large GeoJSON file rendering',
      'Integrated secure authentication with Keycloak'
    ]
  },
  {
    title: 'Enterprise MIS Platform',
    company: 'Grootan Technologies',
    description: 'A centralized Management Information System for project tracking, leave management, and resource effort consolidation. Integrates with Jira and Zoho APIs to manage data for 100+ employees.',
    techStack: ['Next.js', 'TypeScript', 'Jira API', 'Zoho API', 'Node.js', 'MongoDB'],
    highlights: [
      'Complete end-to-end development',
      'Real-time project tracking and analytics',
      'Automated effort consolidation'
    ]
  },
  {
    title: 'KOBIL IAM Frontend',
    company: 'Grootan Technologies',
    description: 'Frontend components for KOBIL Identity and Access Management platform, handling secure digital identity, token management, and complex authentication flows for enterprise clients.',
    techStack: ['React.js', 'TypeScript', 'OAuth 2.0', 'KOBIL IAM', 'Security Protocols'],
    highlights: [
      'Enterprise-grade security implementation',
      'Token-based authentication flows',
      'Role-based access control'
    ]
  },
  {
    title: 'IBM Enterprise Modules',
    company: 'Grootan Technologies',
    description: 'High-impact frontend modules for IBM enterprise services, built to global coding standards with focus on scalability, performance, and maintainability.',
    techStack: ['React.js', 'TypeScript', 'Enterprise Design Systems', 'REST APIs'],
    highlights: [
      'Adherence to IBM coding standards',
      'Enterprise-level scalability',
      'Performance optimization'
    ]
  },
  {
    title: 'Government Infrastructure Portal',
    company: 'Solinas Integrity',
    description: 'Production applications for State Governments (Tamil Nadu, Karnataka, Andhra Pradesh) featuring interactive mapping, data visualization, and infrastructure monitoring.',
    techStack: ['React.js', 'ArcGIS', 'GeoJSON', 'Keycloak', 'REST APIs'],
    highlights: [
      'Multi-state government deployment',
      'GIS mapping and visualization',
      'Secure government-grade authentication'
    ]
  },
  {
    title: 'Departmental Store System',
    company: 'Personal Project',
    description: 'A full-stack application designed to manage inventory and sales data with an optimized SQL database structure. Features real-time inventory tracking and sales analytics.',
    techStack: ['React.js', 'Node.js', 'SQL', 'Express', 'REST APIs'],
    highlights: [
      'Full-stack development',
      'Optimized database structure',
      'Real-time inventory management'
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Key projects developed from scratch for enterprises and governments</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-[#0f0f1a]/50 border-2 border-gray-200 dark:border-cyan-500/20 p-6 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-2xl shadow-lg dark:shadow-cyan-500/10 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                {(project.company === 'Grootan Technologies' && project.title === 'Enterprise MIS Platform') && (
                  <Award size={20} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" title="Best Quarter Award" />
                )}
              </div>
              
              <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-3 font-medium">{project.company}</p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 font-medium">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white dark:from-cyan-400 dark:to-emerald-400 dark:text-gray-900 border-none text-xs font-semibold"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4 pt-4 border-t border-gray-200 dark:border-cyan-500/10">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 font-medium">Key Highlights:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
