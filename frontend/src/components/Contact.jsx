import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon!',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Let's discuss your next project or just say hi</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <Card className="bg-cyan-50 dark:bg-[#0f0f1a]/50 border-2 border-cyan-200 dark:border-cyan-500/20 p-6 shadow-lg dark:backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500 dark:bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white dark:text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">karventhanp27042000@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-emerald-50 dark:bg-[#0f0f1a]/50 border-2 border-emerald-200 dark:border-emerald-500/20 p-6 shadow-lg dark:backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 dark:bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white dark:text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 6380601442</p>
                </div>
              </div>
            </Card>

            <Card className="bg-blue-50 dark:bg-[#0f0f1a]/50 border-2 border-blue-200 dark:border-cyan-500/20 p-6 shadow-lg dark:backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 dark:bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white dark:text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white dark:bg-[#0f0f1a]/50 border-2 border-gray-200 dark:border-cyan-500/20 p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 dark:bg-[#0a0a0f]/50 border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:border-cyan-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 dark:bg-[#0a0a0f]/50 border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:border-cyan-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 dark:bg-[#0a0a0f]/50 border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:border-cyan-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-50 dark:bg-[#0a0a0f]/50 border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:border-cyan-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none py-6 shadow-lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
