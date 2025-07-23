import React from 'react';
import { education, personalData, certifications } from '@/data';
import { 
  
  FiMapPin, 
  FiCalendar, 
  FiBook, 
  FiAward, 
  FiExternalLink,
  FiStar,
  FiBookOpen,
  FiTrendingUp,
  FiUser
} from 'react-icons/fi';
import { FaGraduationCap } from "react-icons/fa6";
import { 
  BsBuilding, 
  BsClipboardCheck, 
  BsAward,
  BsBarChart
} from 'react-icons/bs';
import { MdSchool, MdVerifiedUser } from 'react-icons/md';

const EducationPage = () => {
  // Sort education by start date (newest first)
  const sortedEducation = [...education].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  // Sort certifications by issue date (newest first)
  const sortedCertifications = [...certifications].sort((a, b) => {
    return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const formatYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const getGradeColor = (gpa) => {
    const numericGpa = parseFloat(gpa);
    if (numericGpa >= 3.5) return 'text-green-600 dark:text-green-400';
    if (numericGpa >= 3.0) return 'text-blue-600 dark:text-blue-400';
    if (numericGpa >= 2.5) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            My academic journey, learning milestones, and professional certifications. 
            Continuous learning is the foundation of my growth in technology.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {education.length}
              </div>
              <div className="text-sm text-foreground/60">Degrees</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {certifications.length}
              </div>
              <div className="text-sm text-foreground/60">Certifications</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {education.reduce((total, edu) => total + (edu.courses ? edu.courses.length : 0), 0)}
              </div>
              <div className="text-sm text-foreground/60">Courses Taken</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                3.5
              </div>
              <div className="text-sm text-foreground/60">Current GPA</div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <MdSchool className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold">Academic Background</h2>
          </div>

          <div className="space-y-8">
            {sortedEducation.map((edu, index) => (
              <div key={edu.id} className="relative">
                {/* Timeline connector */}
                {index < sortedEducation.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                )}
                
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <FaGraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Education Card */}
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl transition-shadow">
                    
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BsBuilding className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                      </div>
                      <div className="mb-2">
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {edu.degree}
                        </h4>
                        <p className="text-foreground/70 font-medium">{edu.field}</p>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <FiCalendar className="w-4 h-4" />
                        <span>{formatYear(edu.startDate)} - {edu.endDate ? formatYear(edu.endDate) : 'Present'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <FiMapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2 text-sm">
                          <BsBarChart className="w-4 h-4" />
                          <span className="text-foreground/70">GPA: </span>
                          <span className={`font-semibold ${getGradeColor(edu.gpa)}`}>{edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                    )}

                    {/* Courses */}
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <FiBookOpen className="w-4 h-4" />
                          Relevant Coursework:
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {edu.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-2 bg-slate-50 dark:bg-slate-700 rounded-lg text-sm font-medium text-foreground/80 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                            >
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <FiAward className="w-4 h-4" />
                          Academic Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                              <FiStar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <BsAward className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold">Professional Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCertifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                {/* Certification Header */}
                <div className="h-24 bg-gradient-to-br from-blue-500 to-indigo-600 p-4 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <MdVerifiedUser className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>

                <div className="p-6">
                  {/* Certification Name */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-3">
                    <BsBuilding className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-foreground/80">{cert.issuer}</span>
                  </div>

                  {/* Issue Date */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-foreground/60">
                    <FiCalendar className="w-4 h-4" />
                    <span>Issued {formatDate(cert.issueDate)}</span>
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {/* Credential Link */}
                  {cert.credentialUrl && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                      >
                        <BsClipboardCheck className="w-4 h-4" />
                        View Credential
                        <FiExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto border border-slate-200 dark:border-slate-700">
            <FiTrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              I believe in lifelong learning and staying updated with the latest technologies and industry trends. 
              My education journey continues through online courses, workshops, and hands-on projects that 
              challenge me to grow as a developer and professional.
            </p>
            
            {/* Learning Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                <div className="text-sm text-foreground/60">Online Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">5+</div>
                <div className="text-sm text-foreground/60">Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-foreground/60">Learning Mode</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
            <FiUser className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-foreground/70 mb-6">
              I'm always eager to discuss new learning opportunities, collaborate on projects, 
              or share knowledge with fellow learners and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalData.email}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiExternalLink className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600/10 transition-colors flex items-center justify-center gap-2"
              >
                <FaGraduationCap className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;