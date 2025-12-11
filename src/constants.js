import showcaseLogo from './assets/work_logo/Showcase.png';
import neoLogo from './assets/work_logo/NeoElectronix.png';
import adminLogo from './assets/work_logo/Admin Dashboard.png';
import nikeLogo from './assets/work_logo/Nike.png';
import portfolioLogo from './assets/work_logo/Portfolio.png';
import RestaurantLogo from './assets/work_logo/Restaurant.png';
import Doctor from "./assets/work_logo/DoctorWebApp.png"
import Expense from "./assets/work_logo/Expense.png"
import AIAdmin from "./assets/work_logo/AI Admin.png"
// import webverseLogo from './assets/company_logo/webverse_logo.png';


export const SkillsInfo = [
  {
    title: 'Front-End Development',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'React.jS' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Redux' },
    ],
  },
  {
    title: 'Backend, Database & Deployment',
    skills: [
      { name: 'Firebase' },
      { name: 'Python' },
      { name: 'Vercel' },
      { name: 'Netlify' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Notepad++' },
      { name: 'VS Code' },
      { name: 'IntelliJ IDEA' },
    ],
  },
  {
    title: 'AI & Productivity',
    skills: [
      { name: 'Axios' },
      { name: 'ChatGPT' },
      { name: 'Perplexity' },
      { name: 'Gemini' },
      { name: 'Replit' },
      { name: 'Lovable' },
    ],
  },
];

// export const experiences = [
//     {
//       id: 0,
//       img: webverseLogo,
//       role: "Fullstack Developer",
//       company: "Webverse Digital",
//       date: "April 2024 - Present",
//       desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React JS",
//         "TypeScript",
//         "Node JS",
//         "Tailwind CSS",
//         "MongoDb",
//         "Redux",
//         " Next Js",
//       ],
//     },
//   ];



export const services = [
  {
    id: 0,
    role: "Custom Website Development",
    desc: "I offer professional website development services using HTML, CSS, and JavaScript to build responsive, fast, and visually appealing websites. Whether it's a personal portfolio, business website, or landing page, I ensure the site is clean, user-friendly, and optimized for all devices.",
  },
  {
    id: 1,
    role: "React.js Application Development",
    desc: "I develop modern, interactive web applications using React.js and TypeScript. By building reusable components and implementing best coding practices, I deliver high-performance, scalable single-page applications (SPAs) that enhance the user experience and are easy to maintain.",
  },
  {
    id: 2,
    role: "Responsive Design & UI Implementation",
    desc: "With expertise in Tailwind CSS, Bootstrap, and modern CSS techniques, I create responsive and attractive user interfaces. I bring UI/UX designs to life by converting Figma or design files into clean, pixel-perfect, and fully functional web pages that work seamlessly across all screen sizes.",
  },
];

export const education = [
  {
    id: 0,
    school: "Maharaja Agrasen Himalayan Garhwal University, Uttarakhand",
    date: "Jun 2022 - July 2025",
    grade: "CGPA: 8.15/10",
    desc: "I completed my BCA from MAHGU, Uttarakhand, where I gained a solid understanding of computer science and software development. I studied key subjects like Programming, DSA, Web Development, OS, and CN, and worked on projects that helped me apply my knowledge to real-world problems and improve my problem-solving skills.",
    degree: "Bachelor of Computer Application(BCA)"
  },
  {
    id: 1,
    school: "Rana Pratap Inter College, Uttarakhand",
    date: "2021 - 2022",
    grade: "Percentage: 74.9%",
    desc: "I completed my class 12 education from Rana Pratap Inter College, Udham Singh Nager, under the UK board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UK Board(XII) - PCM",
  },
  {
    id: 2,
    school: "Guru Nanak Senior Secondary School, Uttarakhand",
    date: "2019 - 2020",
    grade: "Percentage: 79%",
    desc: "I completed my class 10 education from Guru Nanak Senior Secondary School, Udham Singh Nager, under the UK board, where I studied Science with Mathematics.",
    degree: "UK Board(X), Science with Mathematics",
  },
];

export const projects = [
  {
    id: 0,
    title: "Doctor Appointment Booking App",
    description:
      "Doctor Appointment App is a modern, responsive web application that allows users to securely book, edit, and delete doctor appointments. Built with React and Tailwind CSS, it offers a smooth and intuitive UI with light/dark mode support. Firebase powers the authentication and real-time database to ensure fast and reliable data handling.",
    image: Doctor,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js", "Firebase", "Router"],
    github: "https://github.com/pawan8705/Doctor_Booking_App",
    webapp: "https://doctor-appointment-booking-app-seven.vercel.app/ ",
  },
  {
    id: 1,
    title: "Neo Electronix",
    description:
      "NeoElectronix is a modern and responsive Electronics E-Commerce Website designed to provide users with a smooth and interactive shopping experience. Built using cutting-edge web technologies, this platform features real-time product data fetched from APIs and includes secure authentication, dynamic routing, and attractive UI components.",
    image: neoLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js", "Farmer Motion", "React Icons", "Mouse-Follower"],
    github: "https://github.com/pawan8705/NeoElectonix",
    webapp: "https://neo-electonix-l5ub.vercel.app/",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "This project is a responsive and user-friendly Admin Dashboard built using React.js, TypeScript, HTML, and CSS. It offers a clean and modern UI design with interactive data visualization components, making it ideal for managing users, products, orders, and other administrative functionalities.",
    image: adminLogo,
    tags: ["HTML", "CSS", "TypeScript", "Tailwind CSS", "React Js", "Chart Libraries", "React Router"],
    github: "https://github.com/pawan8705/React-Admin-Dashboard",
    webapp: "https://react-admin-dashboard-puce-psi.vercel.app/",
  },
  {
    id: 3,
    title: "Nike Shoes Website",
    description:
      "This is a Nike Shoes E-commerce Website built using HTML, CSS, JavaScript, React.js, and Tailwind CSS. The website provides a modern, sleek, and fully responsive user interface for exploring Nike shoes. It is designed to be both visually appealing and user-friendly, with smooth animations and seamless navigation.",
    image: nikeLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js", "Farmer Motion", "React Icons", "Mouse-Follower"],
    github: "https://github.com/pawan8705/Nike",
    webapp: "https://nike-eta-beryl.vercel.app/",
  },
  {
    id: 4,
    title: "Project Showcase",
    description:
      "A powerful and user-friendly JavaScript application designed to showcase my all small Projects.",
    image: showcaseLogo,
    tags: ["HTML", "CSS", "JavaScript", " Bootstrap"],
    github: "https://github.com/pawan8705",
    webapp: "https://manyprojects.netlify.app/",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "A powerful and user-friendly JavaScript application designed to uncover and showcase my all small Projects.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://portfolio-sooty-alpha-g4ekieye96.vercel.app/",
  },
  {
    id: 6,
    title: "Restaurant website",
    description:
      "This project is a modern and user-friendly Restaurant website built using React.js, TypeScript, Tailwind CSS, HTML, and CSS. It offers a clean and modern UI design with interactive data visualization components, making it ideal for managing users, products, orders, and other administrative functionalities.",
    image: RestaurantLogo,
    tags: ["HTML", "CSS", "TypeScript", "Tailwind CSS", "React Js", "Vite", "shadcn-ui"],
    github: "https://github.com/pawan8705/tasteful-themes-pro",
    webapp: "https://tasteful-themes-pro.lovable.app",
  },
  {
    id: 7,
    title: "Expense Tracker",
    description:
      "Expense Tracker is a modern and responsive finance management app that helps users easily add, track, and organize their daily expenses. Built using React, TypeScript, Tailwind CSS, and shadcn-ui, it delivers a clean UI with smooth and efficient performance powered by Vite. The app provides a simple and intuitive experience for managing budgets and keeping financial records organized.",
    image: Expense,
    tags: ["HTML", "CSS", "TypeScript", "Tailwind CSS", "React Js", "Vite", "shadcn-ui"],
    github: "https://github.com/pawan8705/expense-tracker-8705",
    webapp: "https://expense-tracker-8705.lovable.app",
  },
  {
    id: 8,
    title: "AI Admin Dashboard",
    description:
      "This project is a responsive and user-friendly Admin Dashboard built using Ai with React.js, TypeScript, HTML, and CSS. It offers a clean and modern UI design with interactive data visualization components, making it ideal for managing users, products, orders, and other administrative functionalities.",
    image: AIAdmin,
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Router Dom", "Recharts", "TanStack"],
    github: "https://github.com/pawan8705/insight-hub",
    webapp: "https://dashboard-bypawan8705.lovable.app",
  },
];