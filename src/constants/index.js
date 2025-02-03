import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitImage2,
    instagram,
    notion,
    htmlcsslogo,
    javascriptlogo,
    reactlogo,
    nodelogo,
    mongodblogo,
    azurelogo,
    cpplogo,
    project1,
    project3,
    project4,
    telegram,
    twitter,
    linkedin,
    github,
    gmail,
    // geeksforgeeks,
    // scaler,
    // tutorialspoint,
    // peppercontent,
    // proelevate,
  } from "../assets";

  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "Services",
      url: "#services",
    },
    {
      id: "2",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "3",
      title: "Blogs",
      url: "#blogs",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Resume",
      url: "#resume",
      onlyMobile: true,
    },
  ];
  
  // export const companyLogos = [geeksforgeeks, scaler, tutorialspoint, peppercontent, proelevate];
  
  export const projects = [
    {
      id: "0",
      title: "AfyaHub",
      text: "Afya Hub is a Web App that is developed using ReactJS and Nodejs that brings healthcare providers, patients, and stakeholders together on a unified platform to streamline communication, improve care delivery, and revolutionize health outcomes.",
      date: "January 2025",
      status: "progress",
      imageUrl: project1,
      url: "https://afyahub.vercel.app/",
    },
    {
      id: "1",
      title: "Crypto Metrics",
      text: "CryptoMetrics is a powerful backend service designed for tracking cryptocurrency metrics. It supports live price tracking, portfolio management, CRUD operations, and in-depth analytics. The project is built with Node.js, Docker, and incorporates a robust CI/CD pipeline for deployment.",
      date: "January 2025",
      status: "done",
      imageUrl: project4,
      url: "https://github.com/Terkihacks/CryptoMetrics",
    },
    // {
    //   id: "2",
    //   title: "Linktree",
    //   text: "A Linktree is a web page which consists stack of social media links and developed using Reactjs and Tailwind CSS with a Modern UI.",
    //   date: "March 2024",
    //   status: "done",
    //   imageUrl: bhartiIcon,
    //   url: "https://github.com/Terkihacks/Afyahub",
    // },
    {
      id: "3",
      title: "Telecare",
      text: `
      The objective is developing a full-stack web application using Node.js, Express, and MySQL. I will build the backend of the telemedicine application that includes patient management, doctor scheduling, appointment booking, and user authentication for
       patients. This project will help  understand how to connect a Node.js application to a MySQL database, perform CRUD operations, manage user authentication, and handle data securely and efficiently.
      `,
      date: "December 2024",
      status: "done",
      imageUrl: project3,
      url: "https://github.com/Terkihacks/TelemedApp",
    },
  ];
  
  export const collabText = ["My job is to develop your website or create technical content so that it is functional and user-friendly. I focus on delivering clean, maintainable code that aligns with project goals "]
  
  export const collabContent = [
    {
      id: "0",
      title: "Learn About Me",
      text: `
      I’m Raymond , a Full Stack Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, and Node.js). I specialize in building scalable, efficient, and user-friendly web applications. My passion for both front-end and back-end development drives me to continually enhance my skills and
       stay current with the latest technologies and best practices.
       In addition to my technical proficiency, I thrive in collaborative environments where problem-solving and innovation are key. 
       I’m always eager to take on new challenges, improve processes, and contribute to impactful projects. Whether it’s crafting intuitive user interfaces or architecting robust APIs.

      `
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "HTML/CSS",
      icon: htmlcsslogo,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Javascript",
      icon: javascriptlogo,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "React",
      icon: reactlogo,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "NodeJs",
      icon: nodelogo,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "MongoDB",
      icon: mongodblogo,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Azure",
      icon: azurelogo,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Notion",
      icon: notion,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "CPP",
      icon: cpplogo,
      width: 38,
      height: 32,
    },
  ];
  
  export const services = [
    {
      id: "0",
      title: "Technical Writing",
      text: "Clear, concise content tailored to your audience's needs. Enhance communication with expert documentation.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Web Development",
      text: "Customized websites built with precision, functionality, and user experience in mind. Elevate your online presence.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: false,
    },
    {
      id: "2",
      title: "Community Building",
      text: "Foster connections and engagement through strategic initiatives and inclusive platforms. Cultivate thriving online communities.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "LinkedIn",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/raymondmunguti/",
    },
    {
      id: "1",
      title: "GitHub",
      iconUrl: github,
      url: "https://github.com/Terkihacks",
    },
    {
      id: "2",
      title: "Twitter",
      iconUrl: twitter,
      // url: "",
    },
    {
      id: "3",
      title: "Instagram",
      iconUrl: instagram,
      // url: "",
    },
    {
      id: "4",
      title: "Gmail",
      iconUrl: gmail,
      url: "mailto:raymondmunguti4894@gmail.com",
    },
    {
      id: "5",
      title: "Telegram",
      iconUrl: telegram,
      url: "https://t.me/Raymond Munguti",
    },
  ];