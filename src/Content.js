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
import sql from "./assets/images/Skills/sql.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import fbas from "./assets/images/Skills/firebase.png";
import bull from "./assets/images/Skills/bullmq.png";
import docker from "./assets/images/Skills/docker.png";
import git from "./assets/images/Skills/git.png";
import rabbit from "./assets/images/Skills/rabbitmq.png";
import redis from "./assets/images/Skills/redis.png";
import Salesforce from "./assets/images/Skills/salesforce.png";
import apex from "./assets/images/Skills/apex.png";
import lwc from "./assets/images/Skills/lwc.png";
import soql from "./assets/images/Skills/soql.png";
import flows from "./assets/images/Skills/flows.jpg";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";


import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
    title: "Software Engineer",
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
        name: "Salesforce",
        para: "Where customer success drives cloud innovation.",
        logo: Salesforce,
      },
      {
        name: "Lightning Experience",
        para: "Powering CRM at the speed of innovation.",
        logo: flows,
      },
      {
        name: "APEX",
        para: "Where business logic meets cloud precision.",
        logo: apex,
      },
      {
        name: "Lightning Web Component",
        para: "Where modern UI sparks Salesforce speed.",
        logo: lwc,
      },
      {
        name: "SOQL & SOSL",
        para: "SOQL for precision, SOSL for speed.",
        logo: soql,
      },
      {
        name: "React js",
        para: "The engine of interactive web.",
        logo: reactjs,
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
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Cloud-Ready CRM & Web Application Engineering",
        para: "Experienced in engineering cloud-ready CRM solutions and modern web applications, with expertise in Salesforce (Apex, LWC, Lightning Experience) and full-stack JavaScript (MERN, Firebase). Skilled in building scalable systems that unify frontend and backend workflows, databases, and deployment pipelines, leveraging AWS, GCP, and Docker to deliver functionality, reliability, and seamless user experiences.",
        logo: services_logo1,
      },
      {
        title: "Specilized Service",
        para: "I engineer cloud‑ready Salesforce solutions that deliver dynamic CRM experiences, build MERN‑powered career platforms, enable tailored interview preparation, and support hands‑on project development. With expertise in AWS, GCP, and Docker, I design scalable, reliable, and future‑ready systems that unify frontend and backend workflows. Blending technical precision with user‑centric design, I transform complex processes into intuitive, high‑impact applications.",
        logo: services_logo2,
      },
      {
        title: "Programming Mentorship",
        para: "I provide programming guidance and mentorship that helps learners grasp core concepts, strengthen problem‑solving skills, and build confidence in coding. Through clear explanations and practical examples, I make complex ideas approachable and actionable. My focus is on fostering both technical growth and self‑reliance, ensuring learners can apply knowledge effectively in real projects. By blending structured learning with hands‑on practice, I aim to transform challenges into opportunities for lasting skill development.",
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

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Skilled in engineering scalable Salesforce solutions (Apex, LWC, Lightning Experience) that drive dynamic CRM workflows and intuitive user experiences. Experienced in building full‑stack web applications with the MERN stack, designing RESTful APIs, managing databases, and creating responsive front‑end interfaces backed by reliable server logic. Proficient in AWS, GCP, and Docker for robust deployment, seamless performance, and future‑ready scalability.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hazraindranil399@gmail.com",
        icon: GrMail,
        link: "mailto:hazraindranil399@gmail.com",
      },
      {
        text: "+91 8436423150",
        icon: MdCall,
        link: "https://wa.me/+91 8436423150",
      },
      {
        text: "Indranil-96",
        icon: FaGithub,
        link: "https://github.com/Indranil-96",
      },
      {
        text: "Indranil Hazra",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/indranil-hazra/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
