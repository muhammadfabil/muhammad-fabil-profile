'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdWork } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home", path: "/", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
        )},
        { name: "Work Experience", path: "/work", icon: (
      <MdWork className="w-5 h-5" />
        )},
        { name: "Projects", path: "/project", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )},
    { name: "Education", path: "/education", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )},
    { name: "Organization", path: "/organization", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )},
    { name: "Contact", path: "/contact", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-[#0f172a] text-[#d4af37] p-3 rounded-xl shadow-xl border border-[#1e293b] hover:bg-[#1e293b] transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-2xl border-r border-[#334155]">
          
            {/* Logo/Brand */}
            <div className="p-6 border-b border-[#334155]">
            <Link href="/" className="block text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img
                src="/Muhammad_Fabil.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-l-xl"
              />
              </div>
              <h2 className="text-[#d4af37] font-semibold text-lg mb-1">Muhammad Fabil</h2>
              <p className="text-slate-400 text-xs font-medium">Full Stack Developer</p>
            </Link>
            </div>

          {/* Navigation Links */}
          <nav className="px-3 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                    isActive 
                      ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20' 
                      : 'text-slate-300 hover:bg-[#1e293b] hover:text-[#d4af37] border border-transparent hover:border-[#334155]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37] rounded-r"></div>
                  )}
                  
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-800/50 mr-3 group-hover:bg-[#d4af37]/10 transition-colors duration-200">
                    {link.icon}
                  </div>
                  
                  <span className="font-medium text-sm flex-1">{link.name}</span>
                  
                  <svg className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? 'text-[#d4af37]' : 'text-slate-500 group-hover:text-[#d4af37] group-hover:translate-x-1'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="absolute bottom-4 left-3 right-3">
            <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-lg p-3 border border-[#334155]">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-slate-300 text-xs font-medium">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;