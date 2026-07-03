import {
    logo,
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
    apple,
    dsn,
    osts,
    mrrHp,
    cgHp,
    thinkbigjoe,
    nanocrew,
    chatrealty,
    jpsrealtor,
    kellysrufflife,
    stephenlawyer,
    threejs,
    thumbnail,
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
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "Full-Stack Engineer",
      icon: backend,
    },
    {
      title: "AI Engineer",
      icon: mobile,
    },
    {
      title: "Generative AI Artist",
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
      title: "Specialist",
      company_name: "Apple",
      icon: apple,
      iconBg: "#fff",
      date: "October 2009 - Jan 2013",
      points: [
        "Personally interfaced with dozens of customers daily, providing top-notch service and solutions.",
        "Strictly adhered to company guidelines and policies, leveraging effective sales methods to consistently deliver results.",
        "Mastered and implemented the Apple steps of service to ensure customer satisfaction and brand consistency.",
      ],
    },
    {
      title: "Broadcasting Engineer",
      company_name: "Direct Sports Network",
      icon: dsn,
      iconBg: "#1e1e1e",
      date: "Jan 2013 - June 2016",
      points: [
        "Enhanced company branding through meticulous audio-video editing, graphic design using adobe creative suite tools such as photoshop, after effects, premiere pro. ",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality content.",
        "Oversaw SEO & Marketing initiatives for new partner content from the NFL, NBA.",
        "Developed front-end prototypes for larger screen applications.",
      ],
    },
    {
      title: "System Administrator",
      company_name: "On-site Tech Support",
      icon: osts,
      iconBg: "#fff",
      date: "Jan 2017 - Feb 2019 ",
      points: [
        "Acted as first line of support for technical questions across multiple companies remotely domestic and abroad.",
        "Utilized tools such as SSH, Kaseya, & Connectwise RMM for troubleshooting and deployment of software updates.",
        "Strong understanding of tools such as linux and bash to manage filesystems and server environments",
      ],
    },  
    {
      title: "Full-Stack Developer",
      company_name: "Think Big Joe",
      icon: logo,
      iconBg: "#000",
      date: "March 2020 - 2023",
      points: [
        "Grew from front-end work into building complete full-stack applications with React, Node.js, Next.js, and MongoDB.",
        "Designed and shipped responsive, cross-browser web apps and immersive 3D experiences with Three.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "AI Engineer",
      company_name: "Think Big Joe",
      icon: thumbnail,
      iconBg: "#000",
      date: "2023 - Present",
      points: [
        "Engineering AI-powered products that put large language models to work for real businesses — including ChatRealty, a conversational real estate platform.",
        "Building retrieval-augmented and agentic workflows that connect LLMs to live data, tools, and APIs.",
        "Integrating AI across the full stack, from prompt design and model orchestration to production deployment.",
        "Translating client goals into intelligent, scalable software that ships.",
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
      name: "ThinkBigJoe",
      description:
        "My AI consulting agency — building agentic software and Model Context Protocol (MCP) servers that let businesses deploy AI agents into real workflows. From AI strategy to production agent development, it's the brand behind projects like ChatRealty.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Agentic AI",
          color: "green-text-gradient",
        },
        {
          name: "MCP",
          color: "pink-text-gradient",
        },
      ],
      image: thinkbigjoe,
      source_code_link: "https://github.com/VirtualJoe760",
      website_link: "https://thinkbigjoe.com/",
    },
    {
      name: "ChatRealty",
      description:
        "An AI-powered real estate platform (jpsrealtor) built around conversational property search over live MLS data. Large language models generate listing content, market analysis, and neighborhood insights — turning a simple chat box into a full real estate assistant.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: chatrealty,
      source_code_link: "https://github.com/VirtualJoe760/jpsrealtor",
      website_link: "https://chatrealty.io/",
    },
    {
      name: "Nano Crew",
      description:
        "An AI-native creator commerce platform that turns a conversation into a real clothing brand — generating the shop, a custom storefront website, and the content to sell it, all run from your phone.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Generative AI",
          color: "green-text-gradient",
        },
        {
          name: "E-commerce",
          color: "pink-text-gradient",
        },
      ],
      image: nanocrew,
      source_code_link: "https://github.com/VirtualJoe760",
      website_link: "https://nanocrew.app/",
    },
    {
      name: "JPS Realtor",
      description:
        "My personal real estate brand and lead-generation landing page for eXp Realty, built on the ChatRealty platform. Visitors can create a free account, run a map-based property search, and reach me directly — a clean, conversion-focused front door to the same live MLS data.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "MLS",
          color: "pink-text-gradient",
        },
      ],
      image: jpsrealtor,
      source_code_link: "https://github.com/VirtualJoe760/jpsrealtor",
      website_link: "https://jpsrealtor.com/",
    },
    {
      name: "Kelly's Ruff Life",
      description:
        "A vibrant brand site for a pet care business, built to showcase services and turn visitors into bookings. Features a clean, responsive Next.js front-end with smooth Framer Motion animations and a mobile-first design.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: kellysrufflife,
      source_code_link: "https://github.com/VirtualJoe760",
      website_link: "https://kellysrufflife.com/",
    },
    {
      name: "Stephen Lawyer Clothing",
      description:
        "An e-commerce storefront for an independent clothing brand. Built with a fast Next.js front-end, Tailwind styling, and Stripe checkout for a smooth, secure shopping experience from browse to purchase.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Printful",
          color: "pink-text-gradient",
        },
      ],
      image: stephenlawyer,
      source_code_link: "https://github.com/VirtualJoe760",
      website_link: "https://stephenlawyer.clothing/",
    },
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };