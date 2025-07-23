'use client';
import React, { useState } from 'react';
import { organizations, volunteers, personalData } from '@/data';
import { 
  FiUsers, 
  FiMapPin, 
  FiCalendar, 
  FiAward, 
  FiExternalLink,
  FiStar,
  FiTrendingUp,
  FiUser,
  FiTarget,
  FiHeart,
  FiFileText,
  FiX
} from 'react-icons/fi';
import { 
  BsBuilding, 
  BsPeople,
  BsHandThumbsUp,
  BsGlobe
} from 'react-icons/bs';
import { MdVolunteerActivism, MdGroups } from 'react-icons/md';

const OrganizationPage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sort organizations by start date (newest first)
  const sortedOrganizations = [...organizations].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  // Sort volunteers by start date (newest first)
  const sortedVolunteers = [...volunteers].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
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

  const openPdfModal = (pdfUrl, title) => {
    setSelectedPdf({ url: pdfUrl, title });
    setIsModalOpen(true);
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Organizations</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            My involvement in various organizations, leadership roles, and volunteer activities. 
            Building communities and contributing to meaningful causes through active participation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {organizations.length}
              </div>
              <div className="text-sm text-foreground/60">Organizations</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {volunteers.length}
              </div>
              <div className="text-sm text-foreground/60">Volunteer Roles</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {organizations.filter(org => org.position.toLowerCase().includes('chief') || 
                                              org.position.toLowerCase().includes('lead') || 
                                              org.position.toLowerCase().includes('president')).length}
              </div>
              <div className="text-sm text-foreground/60">Leadership Roles</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {organizations.filter(org => org.endDate === null).length + 
                 volunteers.filter(vol => vol.endDate === null).length}
              </div>
              <div className="text-sm text-foreground/60">Active Roles</div>
            </div>
          </div>
        </div>

        {/* Organizations Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <MdGroups className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold">Organizational Involvement</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedOrganizations.map((org, index) => (
              <div
                key={org.id}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <div className="p-6">
                  {/* Logo, Organization Name & Position */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="w-20 h-20 bg-white rounded-lg p-2 shadow-md border border-slate-200 dark:border-slate-600 flex-shrink-0">
                      <img 
                        src={org.logo} 
                        alt={`${org.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Name and Position */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {org.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <FiAward className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{org.position}</span>
                      </div>
                      
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-200 dark:border-slate-700 mb-4"></div>

                  {/* Meta Information */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{formatYear(org.startDate)} - {org.endDate ? formatYear(org.endDate) : 'Present'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{org.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {org.description}
                  </p>

                  {/* Activities */}
                  {org.activities && org.activities.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <FiTarget className="w-4 h-4" />
                        Key Activities:
                      </h5>
                      <ul className="space-y-1">
                        {org.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {org.achievements && org.achievements.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <FiStar className="w-4 h-4" />
                        Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {org.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                            <FiStar className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Certificate Button */}
                  {org.cert && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <button
                        onClick={() => openPdfModal(org.cert, `Certificate - ${org.name}`)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                      >
                        <FiFileText className="w-4 h-4" />
                        View Certificate
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <MdVolunteerActivism className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-3xl font-bold">Volunteer Activities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedVolunteers.map((volunteer, index) => (
              <div
                key={volunteer.id}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <div className="p-6">
                  {/* Logo, Organization Name & Role */}
                  <div className="flex items-start gap-3 mb-4">
                    {/* Logo */}
                    <div className="w-16 h-16 bg-white rounded-lg p-1.5 shadow-md border border-slate-200 dark:border-slate-600 flex-shrink-0">
                      <img 
                        src={volunteer.logo} 
                        alt={`${volunteer.organization} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Name and Role */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {volunteer.organization}
                      </h3>
                      <div className="flex items-center gap-2">
                        <BsPeople className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-green-600 dark:text-green-400 text-sm">{volunteer.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-200 dark:border-slate-700 mb-4"></div>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{formatDate(volunteer.startDate)} - {volunteer.endDate ? formatDate(volunteer.endDate) : 'Ongoing'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-foreground/70">
                    <FiMapPin className="w-4 h-4" />
                    <span>{volunteer.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4 leading-relaxed text-sm">
                    {volunteer.description}
                  </p>

                  {/* Activities */}
                  {volunteer.activities && volunteer.activities.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                        <BsHandThumbsUp className="w-4 h-4" />
                        Activities:
                      </h5>
                      <ul className="space-y-1">
                        {volunteer.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {volunteer.achievements && volunteer.achievements.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                        <FiStar className="w-4 h-4" />
                        Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {volunteer.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                            <FiStar className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {volunteer.impact && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                        <FiTrendingUp className="w-4 h-4" />
                        <span>{volunteer.impact}</span>
                      </div>
                    </div>
                  )}

                  {/* Certificate Button */}
                  {volunteer.cert && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <button
                        onClick={() => openPdfModal(volunteer.cert, `Certificate - ${volunteer.organization}`)}
                        className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                      >
                        <FiFileText className="w-4 h-4" />
                        View Certificate
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
            <BsGlobe className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Community Impact</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Through my involvement in various organizations and volunteer activities, I've had the privilege 
              to contribute to community development, educational initiatives, and professional growth programs. 
              Each role has taught me valuable lessons in leadership, teamwork, and social responsibility.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">1,300+</div>
                <div className="text-sm text-foreground/60">People Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">100+</div>
                <div className="text-sm text-foreground/60">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">7+</div>
                <div className="text-sm text-foreground/60">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">3+</div>
                <div className="text-sm text-foreground/60">Years Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
            <FiUser className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
            <p className="text-foreground/70 mb-6">
              I'm always looking for opportunities to contribute to meaningful causes and collaborate 
              on projects that make a positive impact in the community.
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
                <FiUsers className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && selectedPdf && (
        <div className="fixed inset-0 bg-none backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-5xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-foreground">{selectedPdf.title}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={selectedPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
                >
                  <FiExternalLink className="w-3 h-3" />
                  Open in New Tab
                </a>
                <button
                  onClick={closePdfModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${selectedPdf.url}#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=100`}
                className="w-full h-full border-0"
                title={selectedPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationPage;