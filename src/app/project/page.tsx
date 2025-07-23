import React from 'react';
import { projects, personalData } from '@/data';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCalendar, 
  FiUser, 
  FiTag, 
  FiCode, 
  FiArrowRight,
  FiFolder,
  FiStar
} from 'react-icons/fi';
import { 
  BsLaptop, 
  BsPhone, 
  BsDisplay, 
  BsCloudArrowUpFill 
} from 'react-icons/bs';
import { MdWeb, MdApi } from 'react-icons/md';
import Image from 'next/image';

const ProjectsPage = () => {
  // Sort projects by start date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  // Group projects by category
  const projectsByCategory = sortedProjects.reduce<Record<string, typeof projects[0][]>>((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  const formatDate = (dateString : string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getCategoryIcon = (category : string) => {
    switch (category) {
      case 'Web App Development':
        return <MdWeb className="w-5 h-5" />;
      case 'Mobile App':
        return <BsPhone className="w-5 h-5" />;
      case 'Desktop App':
        return <BsDisplay className="w-5 h-5" />;
      case 'API':
        return <MdApi className="w-5 h-5" />;
      case 'Computer Vision':
        return <FiCode className="w-5 h-5" />;
      case 'Game Development':
        return <FiCode className="w-5 h-5" />;
      case 'Government/Enterprise':
        return <BsCloudArrowUpFill className="w-5 h-5" />;
      case 'WebGIS':
        return <MdWeb className="w-5 h-5" />;
      default:
        return <FiCode className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category : string) => {
    switch (category) {
      case 'Web App Development':
        return 'from-blue-400 to-indigo-600';
      case 'Mobile App':
        return 'from-green-400 to-emerald-600';
      case 'Desktop App':
        return 'from-purple-400 to-violet-600';
      case 'API':
        return 'from-orange-400 to-red-600';
      case 'Computer Vision':
        return 'from-pink-400 to-rose-600';
      case 'Game Development':
        return 'from-yellow-400 to-orange-600';
      case 'Government/Enterprise':
        return 'from-gray-400 to-slate-600';
      case 'WebGIS':
        return 'from-teal-400 to-cyan-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusBadge = (status : string) => {
    const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'Completed':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`;
      case 'In Progress':
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`;
      case 'Planned':
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            A showcase of my technical projects and contributions. From web applications to 
            full-stack solutions, here's what I've been building and learning.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {projects.length}
              </div>
              <div className="text-sm text-foreground/60">Total Projects</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-sm text-foreground/60">Completed</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-sm text-foreground/60">Technologies</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {Object.keys(projectsByCategory).length}
              </div>
              <div className="text-sm text-foreground/60">Categories</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            All Projects
          </button>
          {Object.keys(projectsByCategory).map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-white dark:bg-slate-800 text-foreground border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              {category} ({projectsByCategory[category].length})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
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
                    <span className={getStatusBadge(project.status)}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-white bg-gradient-to-r ${getCategoryColor(project.category)} backdrop-blur-sm`}>
                      {getCategoryIcon(project.category)}
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-foreground/70 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{formatDate(project.startDate)}</span>
                    </div>
                    {project.role && (
                      <div className="flex items-center gap-1">
                        <FiUser className="w-4 h-4" />
                        <span>{project.role}</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-foreground/80 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-foreground/60 rounded-full text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h5>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                            <FiArrowRight className="w-3 h-3 mt-0.5 text-blue-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      {/* GitHub Link */}
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                          title="View Source Code"
                        >
                          <FiGithub className="w-4 h-4" />
                          <span className="hidden sm:inline">Github Repository</span>
                        </a>
                      )}
                      
                      {/* Demo Link */}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                          title="View Live Demo"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      )}

                      {/* Fallback: View Details button if no links */}
                      {!project.links?.github && !project.links?.demo && (
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                          View Details
                        </button>
                      )}
                    </div>

                    {/* Show both links count if available */}
                    {project.links?.github && project.links?.demo && (
                      <div className="text-xs text-foreground/50">
                        2 links
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies I Use</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from(new Set(projects.flatMap(p => p.technologies))).sort().map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-800 dark:text-blue-300 rounded-lg font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
            <FiStar className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-foreground/70 mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalData.email}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiExternalLink className="w-4 h-4" />
                Let's Collaborate
              </a>
              <a
                href="https://github.com/muhammadfabil"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600/10 transition-colors flex items-center justify-center gap-2"
              >
                <FiGithub className="w-4 h-4" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;