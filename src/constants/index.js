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
    mrrHp,
    ppHp,
    cgHp,
    jobit,
    tripguide,
    threejs,
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
      title: "Generative Ai Artist",
      icon: mobile,
    },
    {
      title: "Full-Stack",
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
      title: "React.js Web Developer",
      company_name: "Think Big Joe",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "System Administrator",
      company_name: "On-site Tech Support",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Acted as first line of support for technical questions across multiple companies remotely domestic and abroad.",
        "Utilized tools such as SSH, Kaseya, & Connectwise RMM for troubleshooting and deployment of software updates.",
        "Strong understanding of tools such as linux and bash to manage filesystems and server environments",
      ],
    },  
    {
      title: "Broadcasting Engineer",
      company_name: "Direct Sports Network",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Enhanced company branding through meticulous audio-video editing, graphic design. ",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality content.",
        "Oversaw SEO & Marketing initiatives for new partner content from the NFL, NBA.",
        "Developed front-end prototypes for larger screen applications.",
      ],
    },
    {
      title: "Specialist",
      company_name: "Apple",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Personally interfaced with dozens of customers daily, providing top-notch service and solutions.",
        "Strictly adhered to company guidelines and policies, leveraging effective sales methods to consistently deliver results.",
        "Mastered and implemented the Apple steps of service to ensure customer satisfaction and brand consistency.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Recovery Roads",
      description:
        "My Recovery Roads is a Sober living & Detox locator to help individuals get into Substance abuse and mental health treatment. Currently this website's CRM functionality is offline. It featured Mailchimp CRM & Email integration to run insurance for future patients.",
      tags: [
        {
          name: "Eleventy",
          color: "blue-text-gradient",
        },
        {
          name: "Netlify",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: mrrHp,
      source_code_link: "https://github.com/VirtualJoe760/myrecoveryroadsv2",
      website_link: "https://myrecoveryroads.com/"
    },
    {
      name: "Cyber Gorilla's",
      description:
        "A tech blog that also offers consulting and repair services. It is a Jamstack application that integrates with tinycal for booking apointments. It features Netlify CMS for easy blog post/content creation and a fun retro theme with gorillas to bring comedic relief & nostalgia to design.",
      tags: [
        {
          name: "Eleventy",
          color: "blue-text-gradient",
        },
        {
          name: "Netlify",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: cgHp,
      source_code_link: "https://github.com/VirtualJoe760/Cyber-Gorillas",
      website_link: "https://cyber-gorillas.com/"
    },
    {
      name: "Property Pulse",
      description:
        "A comprehensive property management platform that allows users to rental properties, equipt with a fullstack Nextjs/mongodb solution for property listing booking. This project is still in development as of 8/1/2024. The github code is available for those looking to follow my progress.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ppHp,
      source_code_link: "https://github.com/VirtualJoe760/sd-homes",
      website_link: "https://google.com/404"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };