// Muhammad Fabil's Portfolio Data

export const personalData = {
  name: "Muhammad Fabil",
  title: "Fresh Graduate in Informatics | Fullstack Developer",
  subtitle: "Former Software Engineer Intern at Ministry of Trade, Republic of Indonesia",
  description:
    `A dedicated and enthusiastic Informatics Engineering fresh graduate from Institut Teknologi Sumatera with a strong passion for web development and information technology. Experienced in building modern web applications and actively involved in the student executive body through the External Relations Department, demonstrating strong communication and collaboration skills.`,
  email: "muhammadfabil40@gmail.com",
  phone: "+62895392727524",
  location: "West Java, Indonesia",
  profileImage: "/Muhammad-Fabil.jpg",
  avatarImage: "/avatar.png",
  resume: "/CV-Muhammad-Fabil.pdf"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/muhammadfabil",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammadfabil",
    icon: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/muhammadfabil",
    icon: "instagram"
  }
];

export const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", level: "Expert" },
  { name: "Next.js", category: "Frontend", level: "Expert" },
  { name: "TypeScript", category: "Frontend", level: "Expert" },
  { name: "HTML", category: "Frontend", level: "Expert" },
  { name: "CSS", category: "Frontend", level: "Expert" },
  { name: "JavaScript", category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  
  // Backend
  { name: "Express.js", category: "Backend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Python", category: "Backend", level: "Intermediate" },
  { name: "FastAPI", category: "Backend", level: "Intermediate" },
  { name: "RESTful APIs", category: "Backend", level: "Advanced" },
  
  // Database
  { name: "PostgreSQL", category: "Database", level: "Advanced" },
  { name: "SQL", category: "Database", level: "Advanced" },
  { name: "Database Design", category: "Database", level: "Intermediate" },
  { name: "Data Modeling", category: "Database", level: "Intermediate" },
  
  // Tools & Technologies
  { name: "Git", category: "Tools", level: "Advanced" },
  { name: "Version Control", category: "Tools", level: "Advanced" },
  { name: "Microsoft Office", category: "Tools", level: "Advanced" },
  { name: "OpenCV", category: "Tools", level: "Intermediate" },
  { name: "PWA", category: "Tools", level: "Intermediate" },
  { name: "Vite", category: "Tools", level: "Intermediate" },
  
  // Programming Languages
  { name: "C++", category: "Programming", level: "Intermediate" },
  { name: "VBA", category: "Programming", level: "Intermediate" },
  
  // Soft Skills
  { name: "Leadership", category: "Soft Skills", level: "Expert" },
  { name: "Communication", category: "Soft Skills", level: "Expert" },
  { name: "Collaboration", category: "Soft Skills", level: "Expert" },
  { name: "Project Management", category: "Soft Skills", level: "Advanced" }
];

export const experiences = [
  {
    id: "exp-1",
    company: "마크애니 (MarkAny)",
    position: "Research Assistant – Data Annotator",
    type: "Contract",
    location: "Seoul, South Korea (Remote)",
    startDate: "2024-09",
    endDate: "2024-11",
    duration: "3 months",
    description: "Assisted in a research project in collaboration with MarkAny, focusing on data annotation for machine learning models.",
    responsibilities: [
      "Labeled and annotated image/text datasets with high precision for AI model training",
      "Ensured data consistency and quality through careful verification and refinement",
      "Collaborated with research and development teams to improve annotation guidelines",
      "Gained experience in data preprocessing and the use of annotation tools in real-world projects"
    ],
    technologies: ["Machine Learning", "Data Annotation", "Image Processing", "Text Processing"],
    achievements: [
      "Maintained high precision standards in dataset labeling",
      "Contributed to improving annotation guidelines for better model training"
    ],
    logo: "/markany.png"
  },
  {
    id: "exp-2",
    company: "Ministry of Trade of the Republic of Indonesia",
    position: "Software Engineer",
    type: "Internship",
    location: "Jakarta, Indonesia",
    startDate: "2024-07",
    endDate: "2024-08",
    duration: "2 months",
    description: "Contributed to digital transformation initiatives at the Ministry of Trade by developing a full-stack web application to support ISO 9001:2015 compliance evaluation.",
    responsibilities: [
      "Developed a full-stack web application using React.js and Express.js for automated document processing and scoring",
      "Designed dynamic and responsive user interfaces to enhance user experience in administrative audits",
      "Implemented conditional rendering and form logic to ensure accuracy in score calculations",
      "Collaborated with supervisors to tailor features that align with ISO 9001:2015 standards and real-world audit workflows",
      "Utilized Git for version control and participated in peer code reviews for quality assurance and continuous improvement"
    ],
    technologies: ["React.js", "Express.js", "PostgreSQL", "Git", "JavaScript"],
    achievements: [
      "Successfully developed a government-grade web application",
      "Improved administrative efficiency through automated document processing",
      "Aligned technical solutions with ISO 9001:2015 compliance standards"
    ],
    logo: "/kemendag.png"
  },
  {
    id: "exp-3",
    company: "Institut Teknologi Sumatera",
    position: "Database Lab Assistant",
    type: "Part-time",
    location: "Lampung, Indonesia",
    startDate: "2024-01",
    endDate: "2024-07",
    duration: "7 months",
    description: "Assisted in delivering and managing practical sessions for the Database course at Institut Teknologi Sumatera.",
    responsibilities: [
      "Guided students through hands-on lab work involving relational databases, SQL queries, and data modeling",
      "Provided technical assistance during practical sessions to reinforce understanding of theoretical concepts",
      "Collaborated with lecturers and lab coordinators to prepare and evaluate lab exercises",
      "Helped troubleshoot students' code and resolve issues related to SQL syntax, logic, and performance",
      "Ensured all lab equipment and software (e.g., DBMS tools) functioned properly before and during sessions",
      "Offered feedback and guidance to improve students' practical skills and understanding of database systems"
    ],
    technologies: ["SQL", "PostgreSQL", "Database Design", "DBMS Tools"],
    achievements: [
      "Successfully guided students in database concepts and practical applications",
      "Improved lab session effectiveness through structured preparation and evaluation"
    ],
    logo: "/itera.png"
  },
  {
    id: "exp-4",
    company: "Institut Teknologi Sumatera",
    position: "Computer and Software Lab Assistant",
    type: "Part-time",
    location: "Lampung, Indonesia",
    startDate: "2022-06",
    endDate: "2023-05",
    duration: "1 year",
    description: "Supported practical academic sessions for Informatics students by assisting in technical labs and guiding students in solving programming tasks.",
    responsibilities: [
      "Assisted in delivering lab sessions for C++ programming and Microsoft Excel VBA to over 350 undergraduate students",
      "Facilitated group and individual troubleshooting during lab exercises to improve student comprehension",
      "Prepared lab materials and example cases to support curriculum and enhance engagement",
      "Collaborated with lecturers to align lab sessions with course objectives and assessments",
      "Provided feedback and informal performance tracking to help students improve practical skills",
      "Maintained and ensured proper functioning of lab computers and software environments"
    ],
    technologies: ["C++", "Microsoft Excel VBA", "Programming Education"],
    achievements: [
      "Successfully trained over 350 students in programming fundamentals",
      "Improved student comprehension through effective troubleshooting and guidance"
    ],
    logo: "/itera.png"
  }
];

export const education = [
  {
    id: "edu-1",
    institution: "Institut Teknologi Sumatera",
    degree: "Bachelor's Degree",
    field: "Informatics Engineering",
    startDate: "2021-08",
    endDate: "2025-05",
    gpa: "3.5 / 4.0",
    location: "Lampung, Indonesia",
    description: "Comprehensive study in computer science and software engineering with focus on web development and information systems.",
    courses: [
      "Object-Oriented Programming",
      "Software Engineering", 
      "Database Management Systems",
      "Artificial Intelligence",
      "Web Programming",
      "IT Project Management",
      "Human-Computer Interaction",
      "Operating Systems",
      "Information Systems",
      "Computer Networks",
      "Data Structures and Algorithms",
      "Software Testing"
    ],
    achievements: [
      "Strong academic performance with focus on practical applications",
      "Active participation in various academic and organizational activities"
    ],
    logo: "/itera.png"
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "FingerFacts – Gesture-Based Educational Quiz Game",
    description: "Interactive quiz game combining trivia with real-time hand gesture recognition using MediaPipe Hands and OpenCV. Players answer questions by raising fingers corresponding to their chosen answer.",
    technologies: ["Python", "OpenCV", "MediaPipe Hands", "Computer Vision", "Machine Learning"],
    features: [
      "Real-time hand gesture recognition",
      "Finger counting for answer selection",
      "Educational quiz content",
      "Intuitive gesture-based interface",
      "Natural user interaction system"
    ],
    images: ["/fact.jpg"],
    status: "Completed",
    category: "Computer Vision",
    startDate: "2023-11",
    endDate: "2023-12",
    role: "Lead Developer",
    links: {
      github: "https://github.com/muhammadfabil/IF4021_Final_Term",
      demo: ""
    },
    achievements: [
      "Successfully implemented real-time gesture recognition",
      "Created engaging educational gaming experience",
      "Demonstrated proficiency in computer vision and multimedia technologies"
    ]
  },
  {
    id: "proj-2",
    title: "ECOLAND",
    description: "Full-stack web application serving as a platform to facilitate land rentals for environmentally friendly 'green' business ventures across Indonesia. Developed as the capstone project for Dicoding Independent Study graduation.",
    technologies: ["React.js", "Express.js", "Tailwind CSS", "PostgreSQL", "RESTful APIs"],
    features: [
      "Land rental marketplace for green businesses",
      "User registration and authentication",
      "Property listing and search functionality",
      "Sustainable business focus",
      "Responsive web design"
    ],
    images: ["/ecoland.png"],
    status: "Completed",
    category: "Web App Development",
    startDate: "2024-05",
    endDate: "2024-06",
    role: "Full Stack Developer",
    links: {
      github: "https://github.com/Ecoland-C624-PS008",
      demo: ""
    },
    achievements: [
      "Successfully completed Dicoding capstone project",
      "Built comprehensive marketplace platform",
      "Promoted environmental sustainability through technology"
    ]
  },
  {
    id: "proj-3",
    title: "F-Chat",
    description: "Web-based discussion forum application developed as the final project for React Expert class in Dicoding Independent Study. Features discussion topics, comments, voting system, and thread exploration.",
    technologies: ["React.js", "Tailwind CSS", "RESTful APIs", "JavaScript"],
    features: [
      "Discussion topic creation",
      "Comment system with threading",
      "Upvote/downvote functionality",
      "Thread exploration and navigation",
      "Responsive modern interface"
    ],
    images: ["/fchat.png"],
    status: "Completed",
    category: "Web App Development",
    startDate: "2024-04",
    endDate: "2024-05",
    role: "Frontend Developer",
    links: {
      github: "",
      demo: "https://expert-fix.vercel.app/"
    },
    achievements: [
      "Demonstrated advanced React.js expertise",
      "Implemented clean component architecture",
      "Created interactive modern user experience"
    ]
  },
  {
    id: "proj-4",
    title: "Whac-A-Mole Game Enhancement",
    description: "Redesigned and expanded the classic Whac-A-Mole game as part of an academic project in object-oriented programming, introducing multiple gameplay enhancements using OOP principles.",
    technologies: ["C++", "Object-Oriented Programming", "Game Development"],
    features: [
      "Enhanced classic Whac-A-Mole gameplay",
      "Multiple game modes and difficulty levels",
      "Object-oriented architecture",
      "Polymorphism and inheritance implementation",
      "Interactive game mechanics"
    ],
    images: ["/whac.png"],
    status: "Completed",
    category: "Game Development",
    startDate: "2023-03",
    endDate: "2023-04",
    role: "Game Developer",
    links: {
      github: "https://github.com/muhammadfabil/tubes-pbo",
      demo: ""
    },
    achievements: [
      "Successfully applied OOP principles in game development",
      "Enhanced classic game with modern programming concepts",
      "Demonstrated understanding of inheritance and polymorphism"
    ]
  },
  {
    id: "proj-5",
    title: "SIMANTAP - Queue Management System",
    description: "Web platform for administrative service and queue management using Progressive Web App technology.",
    technologies: ["Vite", "React.js", "Tailwind CSS", "PostgreSQL", "PWA", "Express.js"],
    features: [
      "Queue registration and management",
      "Real-time status tracking",
      "Progressive Web App functionality",
      "Responsive design for mobile and desktop",
      "Admin dashboard for queue management"
    ],
    images: ["/simantap.png"],
    status: "Completed",
    category: "Web App Development",
    startDate: "2025-01",
    endDate: "2025-05",
    role: "Lead Full Stack Developer",
    links: {
      github: "",
      demo: "https://simantap.ifsyscenter.my.id"
    },
    achievements: [
      "Developed comprehensive queue management solution",
      "Implemented PWA features for better user experience",
      "Created efficient database design for real-time updates"
    ],
    
  },
  {
    id: "proj-6",
    title: "ISO 9001:2015 Compliance Web Application",
    description: "Full-stack web application for automated document processing and scoring system to support ISO 9001:2015 compliance evaluation at Ministry of Trade.",
    technologies: ["React.js", "Express.js", "PostgreSQL", "JavaScript"],
    features: [
      "Automated document processing and scoring",
      "Dynamic form validation and conditional rendering",
      "Administrative audit workflow management",
      "Responsive user interface design",
      "Score calculation automation"
    ],
    images: ["/iso.png"],
    status: "Completed",
    category: "Government/Enterprise",
    startDate: "2024-07",
    endDate: "2024-08",
    role: "Full Stack Developer",
    links: {
      github: "https://github.com/muhammadfabil/ISO-9001-2015-Kemendag-RI",
      demo: ""
    },
    achievements: [
      "Successfully deployed in government environment",
      "Improved audit process efficiency",
      "Met ISO 9001:2015 compliance standards"
    ]
  },
  {
    id: "proj-7",
    title: "Dusun 10 Girimulyo Village Web Portal",
    description: "WebGIS and hamlet information system for Dusun 10 featuring geospatial mapping and village information display.",
    technologies: ["HTML", "CSS", "JavaScript", "ESRI ArcGIS API", "WebGIS"],
    features: [
      "Interactive geospatial mapping",
      "Village demographic information display",
      "Location-based services",
      "Responsive web design",
      "Geographic data visualization"
    ],
    images: ["/dusun10.png"],
    status: "Completed",
    category: "WebGIS",
    startDate: "2023-06",
    endDate: "2023-08",
    role: "Frontend Developer & GIS Specialist",
    links: {
      github: "",
      demo: "https://desa-girimulyo-dusun10.vercel.app/"
    },
    achievements: [
      "Successfully integrated WebGIS functionality",
      "Created user-friendly interface for village information",
      "Implemented responsive design for various devices"
    ]
  }
];

export const organizations = [
  {
    id: "org-1",
    name: "ITERA Career Day 2023",
    position: "Chief Executive",
    
    startDate: "2023-05",
    endDate: "2023-09",
    duration: "5 months",
    location: "Lampung, Indonesia",
    logo: "/icd.png",
    cert: "/sertif_icd.pdf",
    description: "Led the largest career development event at Institut Teknologi Sumatera, attended by over 1,300 students from various disciplines.",
    activities: [
      "Directed strategic planning, execution, and evaluation of the event to ensure smooth operations and high impact",
      "Managed and coordinated a multidisciplinary team of 100+ committee members across 6 divisions",
      "Established partnerships with 7 reputable companies, including BUMN, multinational, and national corporations",
      "Collaborated with Vina Muliana, a national figure in the HR field, to deliver expert career insights and keynote session",
      "Oversaw budgeting, sponsorship acquisition, and communication strategies to support event success",
      "Ensured alignment between event goals and student career development needs"
    ],
    achievements: [
      "Successfully organized event with 1,300+ participants",
      "Secured partnerships with 7 major companies",
      "Managed budget and sponsorship acquisition effectively",
      "Led team of 100+ committee members"
    ]
  },
  {
    id: "org-2",
    name: "Kabinet KM-ITERA",
    position: "Expert Staff of the Ministry of External Relations",
    
    startDate: "2023-03",
    endDate: "2023-12",
    duration: "10 months",
    location: "Lampung, Indonesia",
    logo: "/km-itera.png",
    cert: "/sertif_km.pdf",
    description: "Actively contributed to expanding KM-ITERA's institutional network by establishing and maintaining strategic partnerships with external organizations.",
    activities: [
      "Represented KM-ITERA in partnership initiatives and institutional collaborations",
      "Supported diplomatic communication, outreach planning, and relationship building",
      "Assisted in drafting formal letters and handling official correspondences",
      "Coordinated external programs aimed at increasing KM-ITERA's visibility and impact",
      "Played key role in supporting cabinet's diplomatic communications and outreach activities",
      "Facilitated impactful engagements with academic, governmental, and private sector entities"
    ],
    achievements: [
      "Successfully expanded institutional network",
      "Strengthened external partnerships and collaborations",
      "Improved KM-ITERA's external presence and visibility"
    ]
  },
  {
    id: "org-3",
    name: "Himpunan Mahasiswa Informatika ITERA",
    position: "Staff of the Division of Professional Development and Training",
    
    startDate: "2023-04",
    endDate: "2023-11",
    duration: "8 months",
    location: "Lampung, Indonesia",
    logo: "/hmif.png",
    cert: "/sertif_hmif.pdf",
    description: "Actively contributed to student development by organizing impactful training initiatives and professional workshops.",
    activities: [
      "Planned and executed workshops, seminars, and training sessions tailored to industry-relevant skills in Informatics Engineering",
      "Coordinated with professionals and organizations to deliver high-quality learning content and speaker sessions",
      "Promoted student engagement in professional development through hands-on learning events",
      "Contributed to the design of training materials and feedback evaluation to improve event effectiveness",
      "Supported interdepartmental collaboration to ensure program alignment with student needs and organizational goals"
    ],
    achievements: [
      "Successfully organized multiple professional development workshops",
      "Fostered collaboration with industry partners",
      "Enhanced student career readiness through targeted training programs"
    ]
  },
  {
    id: "org-4",
    name: "Forum OSIS Jawa Barat",
    position: "Staff of the Division of Communication and Information",
    
    startDate: "2019-10",
    endDate: "2020-09",
    duration: "1 year",
    location: "West Java, Indonesia",
    logo: "/fojb.png",
    cert: "/sertif_fojb.pdf",
    description: "Supported organizational communication and digital outreach efforts across West Java province.",
    activities: [
      "Managed and distributed official information and announcements across Forum OSIS Jawa Barat's communication channels",
      "Created and maintained digital content, including posters, captions, and social media updates to boost student engagement",
      "Coordinated communication with OSIS representatives from various schools across West Java to ensure effective collaboration",
      "Assisted in organizing online and offline events by handling documentation and public information needs",
      "Promoted the Forum's initiatives and programs through consistent, creative, and impactful digital campaigns"
    ],
    achievements: [
      "Successfully managed provincial-level communication channels",
      "Improved student engagement through creative digital campaigns",
      "Facilitated effective coordination across West Java schools"
    ]
  }
];

export const volunteers = [
  {
    id: "vol-1",
    organization: "Pagelaran Sabang Merauke 2024",
    role: "Usher Team",
    startDate: "2024-08",
    endDate: "2024-08",
    duration: "1 month",
    location: "Jakarta, Indonesia",
    logo: "/psm.png",
    cert: "/sertif_psm.pdf",
    description: "Supported on-site coordination as part of the usher team during a national cultural performance that highlighted Indonesia's diverse traditions and heritage from Sabang to Merauke.",
    activities: [
      "Provided guidance and assistance to event attendees, ensuring smooth navigation throughout the venue",
      "Coordinated with event management team to facilitate proper seating arrangements and crowd control",
      "Assisted in managing the flow of audiences during cultural performances showcasing Indonesia's rich diversity",
      "Supported logistics coordination to ensure seamless execution of the national cultural showcase",
      "Maintained professional service standards while representing Indonesia's cultural heritage event"
    ],
    achievements: [
      "Successfully supported a major national cultural performance event",
      "Contributed to showcasing Indonesia's diverse traditions from Sabang to Merauke",
      "Demonstrated excellent teamwork and coordination skills in a high-profile cultural event"
    ]
  },
  {
    id: "vol-2",
    organization: "ICoSITeR 2022",
    role: "Event Staff",
    startDate: "2022-07",
    endDate: "2022-11",
    duration: "5 months",
    location: "Lampung, Indonesia",
    logo: "/icositer.png",
    cert: "/sertif_icos.pdf",
    description: "Supported the successful execution of an international scientific conference by managing key aspects of event logistics and coordination.",
    activities: [
      "Assisted in planning and executing logistics for conference sessions, including registration, technical setups, and attendee coordination",
      "Supported speaker and guest needs during the event to ensure smooth delivery of presentations and panel discussions",
      "Collaborated with the event team to manage scheduling, venue preparation, and technical troubleshooting",
      "Helped coordinate communications among organizing committees, academic participants, and stakeholders",
      "Ensured a professional and well-organized conference environment aligned with academic standards"
    ],
    achievements: [
      "Contributed to successful international scientific conference",
      "Ensured smooth logistics and professional event execution"
    ]
  },
  {
    id: "vol-3",
    organization: "Program Pengenalan Lingkungan Kampus (PPLK) ITERA 2022",
    role: "Event Staff",
    startDate: "2022-04",
    endDate: "2022-08",
    duration: "5 months",
    location: "Lampung, Indonesia",
    logo: "/pplk.jpg",
    cert: "/sertif_pplk.pdf",
    description: "Actively contributed to the successful onboarding of new students through PPLK 2022, a university orientation program.",
    activities: [
      "Facilitated orientation sessions to help new students adapt to academic and campus life at ITERA",
      "Supported the planning and coordination of various PPLK activities, including seminars, mentoring, and group discussions",
      "Acted as a liaison between organizing committees and student participants to ensure smooth program flow",
      "Provided logistical and technical support for online/offline activities, ensuring inclusivity and effectiveness",
      "Promoted values of collaboration, discipline, and proactive learning among new students"
    ],
    achievements: [
      "Successfully facilitated new student orientation program",
      "Promoted positive campus culture and student engagement"
    ]
  },
  {
    id: "vol-4",
    organization: "Pramuka Garuda",
    role: "Pramuka Garuda Penegak",
    startDate: "2021-03",
    endDate: "2021-03",
    duration: "Achievement earned",
    location: "Bogor, Indonesia",
    logo: "/pramuka.png",
    cert: "/sertif_pramuka.pdf",
    description: "Earned the highest achievement rank in the Indonesian Scout Movement at the Penegak level, demonstrating excellence in leadership, discipline, and community service.",
    activities: [
      "Completed comprehensive scouting programs focused on leadership development and character building",
      "Demonstrated exceptional skills in outdoor activities, survival techniques, and environmental conservation",
      "Led junior scouts in various community service projects and environmental awareness campaigns",
      "Participated in advanced scouting activities including camping, hiking, and team-building exercises",
      "Mentored younger scouts while developing personal discipline, responsibility, and civic engagement",
      "Contributed to community development through organized scout-led social service initiatives"
    ],
    achievements: [
      "Achieved Pramuka Garuda rank - the highest achievement in Indonesian Scout Movement at Penegak level",
      "Demonstrated exceptional leadership and discipline in scouting activities",
      "Successfully completed advanced scouting curriculum and community service requirements",
      "Recognized for outstanding character development and civic responsibility"
    ]
  }
];

export const certifications = [
  {
    id: "cert-1",
    name: "CompTIA IT Fundamentals+ (ITF+) Certification",
    issuer: "CompTIA",
    issueDate: "2023",
    expiryDate: null,
    credentialId: null,
    description: "Foundational certification demonstrating understanding of basic IT concepts, terminology, and fundamental technology principles.",
    skills: ["IT Fundamentals", "Hardware", "Software", "Networking", "Security Basics"]
  },
  {
    id: "cert-2",
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    issueDate: "2024",
    expiryDate: null,
    credentialId: null,
    description: "Comprehensive backend development course covering server-side programming fundamentals.",
    skills: ["Backend Development", "Server-side Programming", "API Development"]
  },
  {
    id: "cert-3",
    name: "Meniti Karier sebagai Software Developer",
    issuer: "Dicoding Indonesia",
    issueDate: "2024",
    expiryDate: null,
    credentialId: null,
    description: "Career development course focused on software developer career path and professional growth.",
    skills: ["Career Development", "Professional Growth", "Software Development Career"]
  },
  {
    id: "cert-4",
    name: "Belajar Fundamental Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    issueDate: "2024",
    expiryDate: null,
    credentialId: null,
    description: "Fundamental React.js development course covering modern web application development.",
    skills: ["React.js", "Frontend Development", "Modern Web Development"]
  },
  {
    id: "cert-5",
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    issueDate: "2024",
    expiryDate: null,
    credentialId: null,
    description: "Frontend web development course covering HTML, CSS, JavaScript fundamentals.",
    skills: ["Frontend Development", "HTML", "CSS", "JavaScript"]
  }
];

export const training = [
  {
    id: "train-1",
    name: "Dicoding Indonesia - React and Back-End Cohort",
    organization: "Dicoding Indonesia",
    startDate: "2024-02",
    endDate: "2024-06",
    duration: "5 months",
    description: "Completed 900+ hours of intensive full-stack web development training focused on React, Express.js, PostgreSQL, and RESTful APIs.",
    achievements: [
      "Completed 900+ hours of intensive training",
      "Built and deployed full-stack capstone project",
      "Learned software development best practices including agile methodology",
      "Mastered version control with Git and clean code principles"
    ],
    technologies: ["React.js", "Express.js", "PostgreSQL", "RESTful APIs", "Git", "Agile Methodology"]
  }
];

export const languages = [
  {
    name: "Indonesian",
    level: "Native",
    proficiency: "Native or Bilingual Proficiency"
  },
  {
    name: "English",
    level: "Professional",
    proficiency: "Professional Working Proficiency"
  }
];

// Helper functions
export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getCurrentExperience = () => {
  return experiences.find(exp => exp.endDate === null);
};

export const getCurrentEducation = () => {
  return education.find(edu => edu.endDate === null || new Date(edu.endDate) > new Date());
};

export const getProjectsByStatus = (status: string) => {
  return projects.filter(project => project.status === status);
};

export const getActiveOrganizations = () => {
  return organizations.filter(org => org.endDate === null || new Date(org.endDate) > new Date());
};

export const getActiveVolunteering = () => {
  return volunteers.filter(vol => vol.endDate === null || (vol.endDate && new Date(vol.endDate) > new Date()));
};

export const getRecentCertifications = (limit: number = 5) => {
  return certifications
    .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime())
    .slice(0, limit);
};

export const getExperienceByType = (type: string) => {
  return experiences.filter(exp => exp.type.toLowerCase().includes(type.toLowerCase()));
};

export const getTotalExperienceYears = () => {
  const totalMonths = experiences.reduce((total, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return total + months;
  }, 0);
  return Math.round(totalMonths / 12 * 10) / 10; // Round to 1 decimal place
};