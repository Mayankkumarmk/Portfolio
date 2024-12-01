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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "SDE (DevOps)",
      company_name: "DBS Tech",
      icon: dbs,
      iconBg: "#E6DEDD",
      date: "June 2024",
      points: [
        "Developing and maintaining web applications related technologies.",
        "Achieving new milestones, learning different tech stacks (upskilling).",
      
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