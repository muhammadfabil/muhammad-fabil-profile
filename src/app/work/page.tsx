import React from 'react';
import Image from 'next/image';
import { experiences, personalData } from '@/data';
import { FiMapPin, FiCalendar, FiBriefcase, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import { MdWork, MdWorkOutline } from 'react-icons/md';

const WorkPage = () => {
  // Sort experiences by start date (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  const formatDate = (dateString : string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getExperienceTypeIcon = (type : string) => {
    switch (type) {
      case 'Full-time':
        return <MdWork className="w-5 h-5" />;
      case 'Part-time':
        return <MdWorkOutline className="w-5 h-5" />;
      case 'Internship':
        return <FiBriefcase className="w-5 h-5" />;
      case 'Contract':
        return <FiExternalLink className="w-5 h-5" />;
      default:
        return <FiBriefcase className="w-5 h-5" />;
    }
  };

  const getExperienceTypeColor = (type : string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Part-time':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Internship':
        return 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300';
      case 'Contract':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Work <span className="bg-blue-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            My professional journey and career milestones. From internships to professional roles,
            here's how I've grown and contributed to various organizations.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-slate-600">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {experiences.length}
              </div>
              <div className="text-sm text-foreground/60">Total Roles</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-slate-600">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                {new Set(experiences.map(exp => exp.company)).size}
              </div>
              <div className="text-sm text-foreground/60">Companies</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-slate-600">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                {new Set(experiences.flatMap(exp => exp.technologies)).size}
              </div>
              <div className="text-sm text-foreground/60">Technologies</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-blue-200 dark:border-slate-600">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-400">
                2+
              </div>
              <div className="text-sm text-foreground/60">Years</div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Blue to Slate */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-slate-500"></div>

            {sortedExperiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Timeline Dot - Blue Theme */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 border-4 border-blue-600 dark:border-blue-400 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <div className="text-blue-600 dark:text-blue-400">
                    {getExperienceTypeIcon(experience.type)}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-blue-200 dark:border-slate-600 overflow-hidden">
                    
                    {/* Company Logo Section - Blue/White Theme */}
                    {experience.logo && (
                      <div className="relative bg-white dark:bg-slate-800 p-6 border-b border-slate-200 dark:border-slate-700">
                        <div className={`flex items-center gap-6 ${
                          index % 2 === 0 ? 'md:justify-start' : 'md:justify-start'
                        }`}>
                          {/* Large Logo Container with Blue/White Theme */}
                          <div className="relative group">
                            {/* Subtle glow background - Blue/White */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/50 to-slate-100/50 dark:from-blue-900/30 dark:to-slate-900/30 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                            
                            {/* Logo container with solid background */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-slate-50 dark:bg-slate-100 rounded-xl p-4 border-2 border-blue-200 dark:border-slate-600 shadow-lg group-hover:scale-105 transition-all duration-300">
                              <Image
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                fill
                                className="object-contain rounded-lg p-1"
                              />
                              
                              {/* Subtle shine effect overlay */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                            </div>
                          </div>
                          
                          {/* Company Info - Blue/White Theme */}
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {experience.company}
                            </h3>
                            <div className="flex items-center gap-2 text-foreground/60 mb-3">
                              <FiMapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              <span className="text-base">{experience.location}</span>
                            </div>
                            
                            {/* Type Badge - Enhanced Visibility */}
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                                getExperienceTypeColor(experience.type)
                              } shadow-sm border border-slate-200 dark:border-slate-600`}>
                                {getExperienceTypeIcon(experience.type)}
                                {experience.type}
                              </span>
                              <span className="text-sm text-foreground/70 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full font-medium border border-slate-200 dark:border-slate-600">
                                {experience.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Content Section */}
                    <div className="p-6">
                      {/* If no logo, show traditional header */}
                      {!experience.logo && (
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <BsBuilding className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <h3 className="text-2xl font-bold text-foreground">{experience.company}</h3>
                          </div>
                          
                          {/* Type Badge */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                              getExperienceTypeColor(experience.type)
                            }`}>
                              {getExperienceTypeIcon(experience.type)}
                              {experience.type}
                            </span>
                            <span className="text-xs text-foreground/60 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                              {experience.duration}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* Position Title - Blue Theme */}
                      <h4 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                        {experience.position}
                      </h4>

                      {/* Date & Location */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground/70">
                        <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700">
                          <FiCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">
                            {formatDate(experience.startDate)} - {
                              experience.endDate ? formatDate(experience.endDate) : 'Present'
                            }
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 mb-6 leading-relaxed text-base">
                        {experience.description}
                      </p>

                      {/* Responsibilities - Blue Theme */}
                      {experience.responsibilities && experience.responsibilities.length > 0 && (
                        <div className="mb-6">
                          <h5 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                            <span className="w-1 h-5 bg-blue-600 dark:bg-blue-400 rounded"></span>
                            Key Responsibilities
                          </h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-foreground/80">
                                <FiArrowRight className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                <span className="leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies - Blue/White Theme */}
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div className="mb-6">
                          <h5 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                            <span className="w-1 h-5 bg-slate-600 dark:bg-slate-400 rounded"></span>
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 text-foreground/80 rounded-full text-sm font-semibold border border-blue-200 dark:border-slate-600 hover:scale-105 transition-transform shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div>
                          <h5 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                            <span className="w-1 h-5 bg-green-500 rounded"></span>
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-green-600 dark:text-green-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="leading-relaxed font-medium">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Blue/White Theme */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-blue-200 relative overflow-hidden">
            {/* White/Blue accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Interested in Working Together?</h2>
              <p className="text-white/80 mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${personalData.email}`}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Get In Touch
                </a>
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/50 text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <FiBriefcase className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;