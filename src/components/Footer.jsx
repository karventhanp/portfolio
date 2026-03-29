import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-[#0a0a0f] border-t-2 border-gray-200 dark:border-cyan-500/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              Karventhan P
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building scalable web applications, one component at a time
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/karventhanp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/karventhanp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:karventhanp27042000@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-200 dark:border-cyan-500/10 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Karventhan P. Built with <Heart size={16} className="text-cyan-500 dark:text-cyan-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
