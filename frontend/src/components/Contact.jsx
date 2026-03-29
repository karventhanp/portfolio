import React from 'react';
import { Card } from './ui/card';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Let's discuss your next project or just say hi</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-cyan-50 dark:bg-[#0f0f1a]/50 border-2 border-cyan-200 dark:border-cyan-500/20 p-6 shadow-lg dark:backdrop-blur-sm hover:scale-105 transition-transform">
              <a href="mailto:karventhanp27042000@gmail.com" className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-cyan-500 dark:bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-white dark:text-cyan-400" size={28} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">karventhanp27042000@gmail.com</p>
              </a>
            </Card>

            <Card className="bg-emerald-50 dark:bg-[#0f0f1a]/50 border-2 border-emerald-200 dark:border-emerald-500/20 p-6 shadow-lg dark:backdrop-blur-sm hover:scale-105 transition-transform">
              <a href="tel:+916380601442" className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-emerald-500 dark:bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-white dark:text-emerald-400" size={28} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">+91 6380601442</p>
              </a>
            </Card>

            <Card className="bg-blue-50 dark:bg-[#0f0f1a]/50 border-2 border-blue-200 dark:border-cyan-500/20 p-6 shadow-lg dark:backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500 dark:bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-white dark:text-cyan-400" size={28} />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Chennai, Tamil Nadu</p>
              </div>
            </Card>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h4>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/karventhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-100 dark:bg-[#0f0f1a]/50 border-2 border-gray-300 dark:border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:scale-110 transition-all"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/karventhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-100 dark:bg-[#0f0f1a]/50 border-2 border-gray-300 dark:border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:scale-110 transition-all"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://twitter.com/karventhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-100 dark:bg-[#0f0f1a]/50 border-2 border-gray-300 dark:border-cyan-500/20 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:scale-110 transition-all"
              >
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
