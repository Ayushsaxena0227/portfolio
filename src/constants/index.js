import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import aimock from "../assets/aimock.png";
import livedocs from "../assets/livedocs.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Devloper",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Nextjs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Devlopment Engineer",
    company_name: "Bluestock Fintech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Developed a secure REST API with Django REST Framework for IPO data management using JWT authentication.",
      "Designed and implemented a PostgreSQL database schema, increasing data retrieval efficiency by 40% for IPO data.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "CodeCommunity Member",
    company_name: "CodeCademy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - present",
    points: [
      "Collaborated with international students on various projects, including a Spotify app",
      "Enabled seamless fetching of auth tokens and integrated song display functionality into the UI. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I Contributed significantly to the project,leading key aspects of the frontend development and enhancing overall user experience.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "He was an excellent team lead during our internship. He ensured smooth collaboration, delegated tasks effectively, and motivated the team to meet deadlines.",
    name: "Team member",
    designation: "devloper",
    company: "Bluestock fintech",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Ayush during the hackathon was a great experience! He took initiative, helped resolve blockers quickly, and guided us towards building a solid project",
    name: "Team member",
    designation: "web devloper",
    company: "Hackathon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "he made sure everyone was on the same page and open to discussions. He listens, shares ideas, and supports the team, making collaboration smooth and effective",
    name: "Mr. Shubham bhatt",
    designation: "software devloper",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ai-mock-Interview",
    description: " AI-powered platform to help users prepare for interviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: aimock,
    source_code_link: "https://github.com/Ayushsaxena0227/ai-mock-interview",
  },
  {
    name: "Livedoc",
    description:
      " Real Time Collaborative Document Editor, allowing multiple users from world to work together.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: livedocs,
    source_code_link: "https://github.com/Ayushsaxena0227/livedocs",
  },
  {
    name: "Smart Utiltity Management System",
    description:
      "A Utiltiy Management System for Users to track thier Consumption.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
