import React from 'react';
import { personalData, socialLinks } from '@/data';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiGlobe,
  FiDownload,
  FiExternalLink
} from 'react-icons/fi';
import { 
  BsGithub, 
  BsLinkedin,
  BsInstagram,
  BsTwitter
} from 'react-icons/bs';
import { MdLocationCity } from 'react-icons/md';

const ContactPage = () => {
  const getSocialIcon = (iconName : string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <BsGithub className="w-5 h-5" />;
      case 'linkedin':
        return <BsLinkedin className="w-5 h-5" />;
      case 'instagram':
        return <BsInstagram className="w-5 h-5" />;
      case 'twitter':
        return <BsTwitter className="w-5 h-5" />;
      default:
        return <FiGlobe className="w-5 h-5" />;
    }
  };

  const getSocialColor = (iconName : string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200';
      case 'linkedin':
        return 'hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400';
      case 'instagram':
        return 'hover:bg-pink-100 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400';
      case 'twitter':
        return 'hover:bg-sky-100 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400';
      default:
        return 'hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            I&apos;m always interested in new opportunities, collaborations, and meaningful conversations. 
            Whether you have a project in mind, want to discuss technology, or just say hello, I&apos;d love to hear from you!
          </p>
          
          {/* Quick Response Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <FiClock className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <div className="text-sm font-medium">&lt; 24h</div>
              <div className="text-xs text-foreground/60">Response Time</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <FiGlobe className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <div className="text-sm font-medium">Remote</div>
              <div className="text-xs text-foreground/60">Work Ready</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <FiMessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-medium">English</div>
              <div className="text-xs text-foreground/60">& Indonesian</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <FiUser className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
              <div className="text-sm font-medium">Open</div>
              <div className="text-xs text-foreground/60">to Opportunities</div>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiUser className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Contact Information
              </h2>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                      <FiMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-foreground/70 mb-2">Best way to reach me</p>
                      <a 
                        href={`mailto:${personalData.email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors">
                      <FiPhone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-foreground/70 mb-2">WhatsApp preferred</p>
                      <a 
                        href={`tel:${personalData.phone}`}
                        className="text-green-600 dark:text-green-400 hover:underline font-medium"
                      >
                        {personalData.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30 transition-colors">
                      <MdLocationCity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-foreground/70 mb-2">Based in Indonesia</p>
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <FiMapPin className="w-4 h-4" />
                        <span className="font-medium">{personalData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FiGlobe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-300 ${getSocialColor(social.icon)}`}
                  >
                    {getSocialIcon(social.icon)}
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Download My Resume</h3>
              <p className="mb-4 opacity-90">
                Get a comprehensive overview of my experience, skills, and achievements.
              </p>
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiSend className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Send Me a Message
            </h2>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="youremail@mail.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="freelance-project">Freelance Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Tell me about your project or how I can help you..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </button>

              {/* Alternative Contact */}
              <div className="text-center pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-foreground/60 text-sm mb-2">
                  Prefer direct email?
                </p>
                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FiMail className="w-4 h-4" />
                  {personalData.email}
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-foreground mb-2">What services do you offer?</h3>
              <p className="text-foreground/70 text-sm">
                I specialize in full-stack web development, particularly with React.js and Express.js. 
                I also offer consultation on software architecture and project management.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-foreground mb-2">Are you available for remote work?</h3>
              <p className="text-foreground/70 text-sm">
                Yes! I&apos;m fully equipped for remote work and have experience collaborating with 
                international teams across different time zones.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-foreground mb-2">What&apos;s your typical response time?</h3>
              <p className="text-foreground/70 text-sm">
                I aim to respond to all inquiries within 24 hours. For urgent matters, 
                feel free to mention it in your message subject.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-foreground mb-2">Do you work on long-term projects?</h3>
              <p className="text-foreground/70 text-sm">
                Absolutely! I&apos;m open to both short-term projects and long-term collaborations. 
                I believe in building lasting professional relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h2>
            <p className="text-foreground/70 mb-6">
              Whether you&apos;re a startup looking to build your first product, an established company 
              seeking to modernize your systems, or a fellow developer interested in collaboration, 
              I&apos;m excited to hear about your ideas and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalData.email}?subject=Let's Collaborate`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend className="w-4 h-4" />
                Start a Conversation
              </a>
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600/10 transition-colors flex items-center justify-center gap-2"
              >
                <FiExternalLink className="w-4 h-4" />
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;