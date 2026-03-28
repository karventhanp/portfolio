// Mock data for portfolio - Real content for Karventhan P
// Update URLs and links as needed

export const personalInfo = {
  name: 'Karventhan P',
  title: 'Senior Frontend Engineer',
  subtitle: 'React.js • Next.js • TypeScript',
  email: 'karventhanp27042000@gmail.com',
  phone: '+91 6380601442',
  location: 'Chennai, Tamil Nadu',
  bio: [
    "Software Engineer with 4+ years of experience building and scaling web applications from the ground up. Expert in React.js and Next.js, with a proven track record of delivering high-quality frontend solutions for global enterprises like IBM and high-security platforms like KOBIL IAM.",
    "Specialized in GIS Mapping (ArcGIS), Keycloak, and optimizing large-scale data (GeoJSON) for government and private sector clients. Passionate about creating efficient, scalable, and user-centric web applications that solve real-world problems.",
    "Awarded 'Best Quarter' for rapid project delivery and developing highly optimized, reusable architectures. Committed to continuous learning and staying ahead of the latest frontend technologies."
  ],
  socialLinks: {
    github: 'https://github.com/karventhan', // Update with actual URL
    linkedin: 'https://linkedin.com/in/karventhan', // Update with actual URL
    portfolio: 'https://karventhan.dev', // Update with actual URL
    email: 'mailto:karventhanp27042000@gmail.com'
  }
};

export const experience = [
  {
    company: 'Solinas Integrity Private Limited',
    location: 'Chennai',
    position: 'Senior Software Engineer (Frontend)',
    duration: 'Oct 2024 – Present',
    responsibilities: [
      'Architected and developed a web-based inspection management platform from scratch to monitor and manage robotic pipeline data',
      'Implemented custom logic to optimize the loading and rendering of large GeoJSON files, reducing map rendering time and improving responsiveness',
      'Built frontend modules to consume and display processed data and inspection videos via REST APIs, streamlining workflow for field engineers',
      'Utilized ArcGIS for infrastructure visualization and integrated Keycloak for secure user authentication and role-based access control',
      'Delivered production-ready applications for State Governments (TN, KA, AP) and international firms including Veolia and Suez'
    ]
  },
  {
    company: 'Grootan Technologies',
    location: 'Chennai',
    position: 'Software Engineer - Level 2',
    duration: 'March 2022 – Oct 2024',
    responsibilities: [
      'Contributed to high-impact frontend modules for IBM, ensuring adherence to global coding standards and enterprise-level scalability',
      'Developed frontend components for KOBIL IAM platform, focusing on secure digital identity, token management, and authentication flows',
      'Built comprehensive Management Information System (MIS) from scratch using Next.js, integrating Jira and Zoho APIs to track efforts for 100+ employees',
      'Awarded "Best Quarter" for rapid project delivery and developing highly optimized, reusable Dark Mode architecture'
    ]
  }
];

export const skills = {
  core: [
    { name: 'React.js', level: 'Expert' },
    { name: 'Next.js', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'JavaScript (ES6+)', level: 'Expert' },
    { name: 'HTML5/CSS3', level: 'Expert' },
  ],
  secondary: [
    { name: 'Angular', level: 'Basic' },
    { name: 'Vue.js', level: 'Basic' },
    { name: 'jQuery', level: 'Intermediate' },
  ],
  uiStyling: [
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'Bootstrap', level: 'Advanced' },
    { name: 'FTL (FreeMarker)', level: 'Intermediate' },
    { name: 'Dark Mode Optimization', level: 'Expert' },
  ],
  integrations: [
    { name: 'ArcGIS Maps', level: 'Advanced' },
    { name: 'Keycloak', level: 'Advanced' },
    { name: 'KOBIL IAM', level: 'Advanced' },
    { name: 'OAuth 2.0', level: 'Advanced' },
    { name: 'GeoJSON', level: 'Advanced' },
    { name: 'REST APIs', level: 'Expert' },
  ],
  backend: [
    { name: 'AWS Lambda', level: 'Intermediate' },
    { name: 'Node.js (Express)', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Mongoose', level: 'Intermediate' },
    { name: 'Jira', level: 'Advanced' },
  ],
};

export const projects = [
  {
    title: 'Robotic Inspection Dashboard',
    company: 'Solinas Integrity',
    description: 'A specialized web application for managing infrastructure data, interactive maps, and inspection reporting. Features real-time data processing, GeoJSON optimization, and ArcGIS integration for pipeline monitoring.',
    techStack: ['React.js', 'Next.js', 'ArcGIS', 'Keycloak', 'GeoJSON', 'REST APIs'],
    highlights: [
      'Built from scratch for government and international clients',
      'Optimized large GeoJSON file rendering',
      'Integrated secure authentication with Keycloak'
    ]
  },
  {
    title: 'Enterprise MIS Platform',
    company: 'Grootan Technologies',
    description: 'A centralized Management Information System for project tracking, leave management, and resource effort consolidation. Integrates with Jira and Zoho APIs to manage data for 100+ employees.',
    techStack: ['Next.js', 'TypeScript', 'Jira API', 'Zoho API', 'Node.js', 'MongoDB'],
    highlights: [
      'Complete end-to-end development',
      'Real-time project tracking and analytics',
      'Automated effort consolidation'
    ]
  },
  {
    title: 'KOBIL IAM Frontend',
    company: 'Grootan Technologies',
    description: 'Frontend components for KOBIL Identity and Access Management platform, handling secure digital identity, token management, and complex authentication flows for enterprise clients.',
    techStack: ['React.js', 'TypeScript', 'OAuth 2.0', 'KOBIL IAM', 'Security Protocols'],
    highlights: [
      'Enterprise-grade security implementation',
      'Token-based authentication flows',
      'Role-based access control'
    ]
  },
  {
    title: 'IBM Enterprise Modules',
    company: 'Grootan Technologies',
    description: 'High-impact frontend modules for IBM enterprise services, built to global coding standards with focus on scalability, performance, and maintainability.',
    techStack: ['React.js', 'TypeScript', 'Enterprise Design Systems', 'REST APIs'],
    highlights: [
      'Adherence to IBM coding standards',
      'Enterprise-level scalability',
      'Performance optimization'
    ]
  },
  {
    title: 'Departmental Store System',
    company: 'Personal Project',
    description: 'A full-stack application designed to manage inventory and sales data with an optimized SQL database structure. Features real-time inventory tracking and sales analytics.',
    techStack: ['React.js', 'Node.js', 'SQL', 'Express', 'REST APIs'],
    highlights: [
      'Full-stack development',
      'Optimized database structure',
      'Real-time inventory management'
    ]
  },
  {
    title: 'Government Infrastructure Portal',
    company: 'Solinas Integrity',
    description: 'Production applications for State Governments (Tamil Nadu, Karnataka, Andhra Pradesh) featuring interactive mapping, data visualization, and infrastructure monitoring.',
    techStack: ['React.js', 'ArcGIS', 'GeoJSON', 'Keycloak', 'REST APIs'],
    highlights: [
      'Multi-state government deployment',
      'GIS mapping and visualization',
      'Secure government-grade authentication'
    ]
  },
];

export const education = {
  institution: 'Kongu Engineering College',
  location: 'Perundurai, Erode',
  degree: 'MSc in Software Systems',
  duration: '2017 – 2022',
  gpa: '8.31'
};

export const coreValues = [
  {
    title: 'Scalable Architecture',
    description: 'Building robust, maintainable systems that scale from prototype to production for global enterprises',
  },
  {
    title: 'Performance First',
    description: 'Optimizing every layer - from GeoJSON rendering to dark mode implementations - for exceptional user experience',
  },
  {
    title: 'Enterprise Quality',
    description: 'Delivering production-ready solutions that meet global coding standards for IBM, governments, and international clients',
  },
];