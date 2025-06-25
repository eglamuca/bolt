import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Star, Zap, Target, Users, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NEXUS
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-3 pt-4">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-300 hover:text-purple-400 transition-colors duration-200 font-medium text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              CREATIVE
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-200">
              EXCELLENCE
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              We craft extraordinary digital experiences that captivate, engage, and inspire. 
              Where innovation meets artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('services')}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Our Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-purple-400 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Nexus
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are a collective of passionate creators, strategists, and innovators dedicated to pushing 
              the boundaries of what's possible in the digital realm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Zap className="text-yellow-400" size={40} />,
                title: "Innovation First",
                description: "We stay ahead of the curve, embracing cutting-edge technologies and methodologies to deliver groundbreaking solutions."
              },
              {
                icon: <Target className="text-green-400" size={40} />,
                title: "Precision Focus",
                description: "Every project receives meticulous attention to detail, ensuring pixel-perfect execution and flawless user experiences."
              },
              {
                icon: <Users className="text-blue-400" size={40} />,
                title: "Collaborative Spirit",
                description: "We believe in the power of collaboration, working closely with our clients to bring their visions to life."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-slate-700/50 p-8 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-200">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "250+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "5", label: "Years Experience" },
                { number: "99%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we provide comprehensive solutions that transform ideas into 
              remarkable digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Cutting-edge websites and web applications built with modern technologies and best practices.",
                features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"]
              },
              {
                title: "Brand Strategy",
                description: "Comprehensive brand development that captures your essence and resonates with your audience.",
                features: ["Brand Identity", "Visual Systems", "Messaging Strategy", "Market Positioning"]
              },
              {
                title: "Digital Marketing",
                description: "Data-driven marketing strategies that amplify your reach and drive meaningful engagement.",
                features: ["Social Media", "Content Strategy", "Analytics", "Campaign Management"]
              },
              {
                title: "UX/UI Design",
                description: "Intuitive and beautiful interfaces that prioritize user experience and conversion.",
                features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
              },
              {
                title: "E-commerce",
                description: "Powerful online stores that convert visitors into customers and scale with your business.",
                features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics"]
              },
              {
                title: "Consulting",
                description: "Strategic guidance and expert advice to help you make informed decisions and achieve your goals.",
                features: ["Technology Audit", "Strategic Planning", "Process Optimization", "Growth Strategy"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl hover:from-slate-600/50 hover:to-slate-700/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-slate-600/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-400">
                      <Star size={12} className="text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-slate-200">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail size={24} />, label: "Email", value: "hello@nexus.design" },
                  { icon: <Phone size={24} />, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: <MapPin size={24} />, label: "Location", value: "San Francisco, CA" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-purple-400">{contact.icon}</div>
                    <div>
                      <div className="text-slate-400 text-sm">{contact.label}</div>
                      <div className="text-slate-200 font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NEXUS
          </h3>
          <p className="text-slate-400 mb-6">
            Crafting extraordinary digital experiences since 2019
          </p>
          <div className="text-slate-500 text-sm">
            © 2024 Nexus Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;