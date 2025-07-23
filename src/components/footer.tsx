'use client';

import Link from "next/link";
import { personalData, socialLinks } from "@/data";
import { 
  FiMail, 
  FiMapPin, 
  FiArrowUp,
  FiHeart
} from "react-icons/fi";
import { 
  BsGithub, 
  BsLinkedin, 
  BsInstagram 
} from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName : string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <BsGithub className="w-5 h-5" />;
      case 'linkedin':
        return <BsLinkedin className="w-5 h-5" />;
      case 'instagram':
        return <BsInstagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 ">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-2">{personalData.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                {personalData.title}
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-md">
                {personalData.subtitle}. Building modern web applications with passion 
                and dedication to create meaningful digital experiences.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <FiMail className="w-4 h-4" />
                <a 
                  href={`mailto:${personalData.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {personalData.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <FiMapPin className="w-4 h-4" />
                <span>{personalData.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                href="/"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/experience"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </Link>
              <Link 
                href="/project"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/education"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Education
              </Link>
              <Link 
                href="/organization"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Organizations
              </Link>
              <Link 
                href="/contact"
                className="block text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
                    {getSocialIcon(social.icon)}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            {/* Download Resume */}
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>&copy; {currentYear} {personalData.name}. All rights reserved.</span>
                           
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/60 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all group"
            >
              <span>Back to top</span>
              <FiArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50/50 to-transparent dark:from-slate-900/50 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;