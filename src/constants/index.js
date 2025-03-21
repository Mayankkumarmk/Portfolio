import {
    mobile,
    backend,
    creator,
    web,
    javascript,
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
    threejs,
    googlecloud,
    dbs,
    nft,
    gptflix,
    keeper,
  } from "../assets";
  
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      title: "SDE @ Experian",
      company_name: "Experian",
      icon: dbs,
      iconBg: "#E6DEDD",
      date: "Jan 2025",
      points: [
        "Worked under TOC team, Escalating severity incidents, alerts which are impacting the services.",
        "Resolving issues that impact services resulting in high cost and bad customer experience",
        "Handle alerts, Failed jobs, incidents and monitor services."
      ],
    },
    {
      title: "SDE Intern (DevOps)",
      company_name: "DBS Tech",
      icon: dbs,
      iconBg: "#E6DEDD",
      date: "June 2024 - Dec 2024",
      points: [
        "Developing and maintaining web applications related technologies.",
        "Achieving new milestones, Gain expertise in devops (linux, kubernetes, docker, ansible, jenkins).",
      ],
    },
    {
      title: "Google Cloud Facilitator 23",
      company_name: "Google Cloud",
      icon: googlecloud,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Feb 2024",
      points: [
        "Facilitate Arcade Event of Google cloud across India using Qwicklabs.",
        "Helped in Achieving participants thier various milestones, goodies and labs.",
        "Participated in facilitator meetings to guide candidates and helped in learning them related to Google Cloud Qwicklabs.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mayank proved me wrong.",
      name: "Rohit",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mayank does.",
      name: "Ashutosh",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mayank took over the team as facilitator our milestones hit by 50%. We can't thank him enough",
      name: "Navneet",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NFT MarketPlace",
      description:
        "Web3 based platform that allows users to buy, sell, and manage thier NFT's. A decentralized platform build using ICP blockchain.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "motoko",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nft,
      source_code_link: "https://github.com/Mayankkumarmk",
    },
    {
      name: "Gpt on Flix",
      description:
        "Web application that enables users to search with the power of ChatGpt for enjoying movies. A Netflix UI clone.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gptflix,
      source_code_link: "https://github.com/Mayankkumarmk/gpt-on-flix",
    },
    {
      name: "Keeper App",
      description:
        "A comprehensive Notes taking web app enhanced with edit, delete, sharing, backend storage etc ...",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: keeper,
      source_code_link: "https://github.com/Mayankkumarmk/dkeeper",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };