'use client';

import Image from "next/image";
import Link from "next/link";
import { personalData, skills, projects, getCurrentExperience, getSkillsByCategory } from "@/data";
import { useEffect, useRef, useState } from "react";
import { 
  FiMail, 
  FiFileText, 
  FiArrowRight, 
  FiDownload, 
  FiX, 
  FiExternalLink,
  FiCode,
  FiLayers,
  FiFolder,
  FiUser,
  FiZap,
  FiSettings
} from 'react-icons/fi';
import { 
  BsRocket, 
  BsLightning, 
  BsFolderFill,
  
} from 'react-icons/bs';

export default function Home() {
  const currentJob = getCurrentExperience();
  const frontendSkills = getSkillsByCategory('Frontend');
  const backendSkills = getSkillsByCategory('Backend');
  const featuredProjects = projects.slice(4, 6);

  // State untuk animasi counter
  const [counters, setCounters] = useState({
    projects: 0,
    skills: 0,
    companies: 0
  });

  // State untuk CV modal
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const openCvModal = () => setIsCvModalOpen(true);
  const closeCvModal = () => setIsCvModalOpen(false);

  // Intersection Observer untuk scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCounter = (target: number, key: string, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    // Delay untuk memulai animasi setelah komponen dimount
    const timeout = setTimeout(() => {
      animateCounter(projects.length, 'projects');
      animateCounter(skills.length, 'skills', 2200);
      animateCounter(new Set(projects.map(p => p.category)).size, 'companies', 2400);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Pattern - Blue/White Theme */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-slate-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Dots Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-slate-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-48 left-1/3 w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent animate-gradient">
                  {personalData.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-foreground/70 mb-6">
                {personalData.title}
              </h2>
              <p className="text-lg mb-6 max-w-2xl text-foreground/80 leading-relaxed">
                {personalData.description}
              </p>
              {currentJob && (
                <div className="flex items-center gap-2 mb-8 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-base text-foreground/80">
                    Currently working as{' '}
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {currentJob.position}
                    </span>{' '}
                    at <span className="font-semibold">{currentJob.company}</span>
                  </p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <Link 
                  href="/project" 
                  className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px] border border-transparent"
                >
                  <FiFolder className="w-8 h-8" />
                  <span>View My Projects</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <Link 
                    href="/contact" 
                    className="group relative px-8 py-4 bg-white dark:bg-white text-blue-600 border-2 border-blue-600 dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[180px]"
                  >
                    <FiMail className="w-7 h-7" />
                    <span>Contact Me</span>
                  </Link>
                  
                  <button
                    onClick={openCvModal}
                    className="group relative px-8 py-4 bg-white dark:bg-white text-blue-600 border-2 border-blue-600 dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px] hover:cursor-pointer"
                  >
                    <FiFileText className="w-8 h-8" />
                    <span>Curriculum Vitae</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Avatar Section */}
            <div className="w-full md:w-1/2 flex justify-center scroll-animate opacity-0 translate-y-8 transition-all duration-1000" style={{transitionDelay: '0.2s'}}>
              <div className="relative group">
                {/* Floating background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-slate-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-slate-400 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Avatar container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-slate-600/20"></div>
                  <Image
                    src={personalData.avatarImage}
                    alt={`${personalData.name} - 3D Avatar`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                
                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce" style={{animationDelay: '0.5s'}}>
                  <FiCode className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-white text-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                  <BsRocket className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          </div>
          
          {/* Frontend Skills */}
          <div className="mb-8 scroll-animate opacity-0 translate-y-8 transition-all duration-1000" style={{transitionDelay: '0.1s'}}>
            <h3 className="text-xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
              <FiZap className="w-5 h-5 animate-bounce" />
              Frontend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {frontendSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="group bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:-translate-y-1 border border-blue-100 dark:border-blue-800"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="font-medium text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000" style={{transitionDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold mb-6 text-center text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
              <FiSettings className="w-5 h-5 animate-bounce" style={{animationDelay: '0.5s'}} />
              Backend & Others
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {backendSkills.concat(
                getSkillsByCategory('Database'),
                getSkillsByCategory('Tools'),
                getSkillsByCategory('Other')
              ).map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="group bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:-translate-y-1 border border-slate-100 dark:border-slate-700"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="font-medium text-center group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white dark:bg-slate-800 border border-foreground/10 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 scroll-animate opacity-0 translate-y-8"
                style={{transitionDelay: `${index * 0.2}s`}}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0] || '/placeholder-project.png'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-white bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'from-blue-400 to-slate-500' 
                        : 'from-slate-400 to-blue-500'
                    } backdrop-blur-sm`}>
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 rounded-full text-sm border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform"
                        style={{animationDelay: `${techIndex * 0.1}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-foreground/5 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-xs text-foreground/60 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded border border-blue-200 dark:border-blue-700">
                        • {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <span className="text-sm text-foreground/60">
                        {project.status} • {project.role}
                      </span>
                    </div>
                    <Link 
                      href="/project"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      Learn More <FiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 scroll-animate opacity-0 translate-y-8 transition-all duration-1000" style={{transitionDelay: '0.4s'}}>
            <Link 
              href="/project" 
              className="group px-6 py-3 border border-foreground/20 rounded-lg font-medium hover:bg-foreground/5 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <FiLayers className="w-4 h-4" />
              View All Projects ({projects.length})
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/10 dark:to-slate-900/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: counters.projects, label: 'Projects Completed', color: 'blue', icon: BsRocket },
              { value: counters.skills, label: 'Technical Skills', color: 'slate', icon: BsLightning },
              { value: counters.companies, label: 'Project Categories', color: 'blue', icon: BsFolderFill }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 group"
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 animate-bounce" style={{animationDelay: `${index * 0.5}s`}}>
                    <stat.icon className="w-8 h-8 mx-auto text-blue-500" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 text-${stat.color}-600 dark:text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
                    {stat.value}+
                  </div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to work together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiUser className="w-4 h-4" />
                  Get In Touch
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={`mailto:${personalData.email}`}
                  className="px-8 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiMail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      {isCvModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-5xl h-[95vh] sm:h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-2 sm:p-4 border-b border-slate-200 dark:border-slate-700 min-h-[60px]">
              <h3 className="text-sm sm:text-lg font-semibold text-foreground flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
                <FiFileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">CV - {personalData.name}</span>
              </h3>
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                {/* Download button - hidden on very small screens */}
                <a
                  href={personalData.resume}
                  download
                  className="hidden xs:flex px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors items-center gap-1"
                >
                  <FiDownload className="w-3 h-3" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                {/* External link button - hidden on very small screens */}
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex px-2 sm:px-3 py-1 text-xs sm:text-sm bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors items-center gap-1"
                >
                  <FiExternalLink className="w-3 h-3" />
                  <span className="hidden lg:inline">Open</span>
                </a>
                {/* Close button - always visible and properly sized for touch */}
                <button
                  onClick={closeCvModal}
                  className="p-2 sm:p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="Close CV Modal"
                >
                  <FiX className="w-5 h-5 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${personalData.resume}#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=100`}
                className="w-full h-full border-0"
                title="Curriculum Vitae"
              />
            </div>
            
            {/* Mobile action buttons at bottom */}
            <div className="flex sm:hidden border-t border-slate-200 dark:border-slate-700 p-2 gap-2">
              <a
                href={personalData.resume}
                download
                className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiExternalLink className="w-4 h-4" />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}