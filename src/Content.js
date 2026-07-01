// import images
import Hero_person from "./assets/images/Hero/person.png";


import aws from "./assets/images/Skills/aws.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import expr from "./assets/images/Skills/express.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import gcp from "./assets/images/Skills/gcp.png";
import js from "./assets/images/Skills/js.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import posgress from "./assets/images/Skills/postgress.png";
import reactnative from "./assets/images/Skills/reactnative.png";
import sql from "./assets/images/Skills/sql.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import ts from "./assets/images/Skills/ts.png";
import fbas from "./assets/images/Skills/firebase.png";
import bull from "./assets/images/Skills/bullmq.png";
import docker from "./assets/images/Skills/docker.png";
import git from "./assets/images/Skills/git.png";
import rabbit from "./assets/images/Skills/rabbitmq.png";
import redis from "./assets/images/Skills/redis.png";
import jest from "./assets/images/Skills/jest.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "Indranil",
    LastName: "Hazra",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Full Stack Development",
      },
      {
        count: "4+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React Native",
        para: "Cross‑platform apps, unified experience.",
        logo: reactnative,
      },
      {
        name: "Node js",
        para: "Powering the backend of the future.",
        logo: nodejs,
      },
      {
        name: "Express",
        para: "The fast lane for Node.js.",
        logo: expr,
      },
      {
        name: "React js",
        para: "The engine of interactive web.",
        logo: reactjs,
      },
      {
        name: "Mongo DB",
        para: "Scale smarter, store faster.”",
        logo: mongodb,
      },
      {
        name: "Firebase",
        para: "Data. Auth. Deploy. Firebase.",
        logo: fbas,
      },
      {
        name: "Postgress SQL",
        para: "Relational strength, limitless scale.",
        logo: posgress,
      },
      {
        name: "My SQL",
        para: "The backbone of data.",
        logo: mysql,
      },
      {
        name: "Google Cloud Platform",
        para: "Scale smarter, deploy faster",
        logo: gcp,
      },
      {
        name: "Amazon Web Services",
        para: "Secure, scalable, unstoppable.",
        logo: aws,
      },
      {
        name: "Git",
        para: "Turning chaos into commits.",
        logo: git,
      },
      {
        name: "Docker",
        para: "Ship apps anywhere, without the baggage.",
        logo: docker,
      },
      {
        name: "Redis",
        para: "Speed in memory, power in simplicity.",
        logo: redis,
      },
      {
        name: "BullMQ",
        para: "Queue it, scale it, own it.",
        logo: bull,
      },
      {
        name: "RabbitMQ",
        para: "Hop your messages across with ease.",
        logo: rabbit,
      },
      {
        name: "Java Script",
        para: "Making the web dance since 95.",
        logo: js,
      },
      {
        name: "TypeScript",
        para: "JavaScript with a safety net.",
        logo: ts,
      },
      {
        name: "SQL",
        para: "Where data finds its voice.",
        logo: sql,
      },
      {
        name: "Bootstrap",
        para: "Style and structure, out of the box.",
        logo: bootstrap,
      },
      {
        name: "Tailwind",
        para: "Utility-first, design at full speed.",
        logo: tailwind,
      },
      {
        name: "Jest & Supertest",
        para: "Test with confidence, code with clarity.",
        logo: jest,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Experienced in building and maintaining dynamic websites and web applications, with a strong understanding of frontend and backend development, databases, and deployment workflows, while focusing on functionality, scalability, and user experience.",
        logo: services_logo1,
      },
      {
        title: "Mobile Application Development",
        para: "Experienced in designing and developing mobile applications with a strong grasp of frontend and backend integration, database connectivity, and deployment workflows, while ensuring functionality, scalability, and an engaging user experience.",
        logo: services_logo2,
      },
      {
        title: "Programming Mentorship",
        para: "Experienced in providing programming guidance and mentorship, helping learners understand core concepts, improve problem‑solving skills, and build confidence in coding through clear explanations and practical examples.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Resturant Website",
        image: project1,
      },
      {
        title: "Social Media Marketing website",
        image: project2,
      },
      {
        title: "Gig Connecting Mobile App",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Skilled in building cross‑platform mobile applications with React Native, delivering smooth performance and intuitive user interfaces across iOS and Android. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) for developing scalable, full‑stack web applications, with expertise in designing RESTful APIs, managing databases, and creating responsive front‑end experiences backed by reliable server logic.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
