import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const;

export const headerLanguageMap = {
  Home: "Home",
  About: "About",
  Projects: "Projects",
  Skills: "Skills",
  Experiences: "Experiences",
};

export const experiencesData = [
  {
    title: "Software Engineering Fellow",
    location: React.createElement("span", {}, "Remote - New York, New York"),
    description:
      "Built AI customer ChatBot from the ground up with a team of 4, leveraging React.js, Next.js, OpenAI, and AWS. Contributed an accepted Pull Request (PR) to the Biome (14k stars) open-source project, converting GraphQL files to Abstract Syntax Trees and detecting errors with GraphAL-ESLint.",

    icon: React.createElement(FaVuejs),
    date: "July 2024 - September 2024",
  },
  {
    title: "Software Engineer Intern",
    location: React.createElement(
      "span",
      {},
      "Remote - San Francisco, California"
    ),
    description:
      "Implemented an advanced file upload feature by configuring and optimizing hooks using the Appwrite SDK, efficiently handling file errors with the database, resulting in a 30% reduction in upload errors. Reduced page load times by over 40% by applying lazy loading techniques with Next.js. Developed a responsive mobile web version, enhancing user experience across devices and increasing mobile traffic by 35%.",

    icon: React.createElement(FaVuejs),
    date: "February 2024 – September 2024",
  },
  {
    title: "Webacy Remote Extern",
    location: React.createElement("span", {}, "Remote - New York, New York"),
    description:
      "Conducted detailed analysis and labeling of over 30 smart contract vulnerabilities by inspecting vulnerable accounts. Validated peers’ data labels through collaborative reviews, ensuring an accuracy and reliability rate of 95% across the dataset. Performed frequency and correlation analysis on risk tags using Python and hierarchical clustering, identifying the top 10 most prevalent vulnerabilities.",

    icon: React.createElement(FaVuejs),
    date: "June 2024 – July 2024",
  },
];

export const experiencesDataZn = [
  //     {
  //         "title": "计算机与信息技术硕士",
  //         "location": "英国圣安德鲁斯大学",
  //         "description": "获得了计算机与信息技术硕士学位，在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，为在科技驱动的环境中有效应用做好了准备。",
  //         icon: React.createElement(LuGraduationCap),
  //         "date": "2023年9月 - 2024年8月"
  //     },
  //     {
  //         "title": "前端实习生",
  //         "location": "蔚来汽车（中国武汉）",
  //         "description": "使用Vue3、TypeScript和百度地图API开发蔚来第三代换电站列表和详情页。在任务向导页面实施基于角色的访问控制，增强系统安全性。在Jira管理的环境中有效协作，利用Jenkins进行部署流程。",
  //         "icon": React.createElement(FaVuejs),
  //         "date": "2022年8月 - 2022年12月"
  //     },
  //     {
  //         "title": "前端开发",
  //         "location": "武汉大学大数据研究院",
  //         "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
  //         "icon": React.createElement(FaReact),
  //         "date": "2022年5月 - 2022年7月"
  //     },
  //     {
  //         "title": "数字出版学士",
  //         "location": "武汉大学",
  //         "description": "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
  //         "icon": React.createElement(LuGraduationCap),
  //         "date": "2019年9月 - 2023年6月"
  //     }
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "COVID-19 Sentiment Analyzer",
    title_zh: "COVID-19 Sentiment Analyzer",
    description:
      "Analyzed over 10,000 tweets related to COVID-19 to gauge public sentiment, achieving an accuracy of up to 86% using models such as Logistic Regression, Naive Bayes, and SVM. ",
    desc_zh:
      "Analyzed over 10,000 tweets related to COVID-19 to gauge public sentiment, achieving an accuracy of up to 86% using models such as Logistic Regression, Naive Bayes, and SVM. Implemented data preprocessing techniques to reduce noise by 25% and visualized results to provide insights into public opinion trends.",
    tags: ["Python", "Scikit-learn", "Matplotlib"],
    imageUrl: typingSpeedImage,
    projectUrl: "https://github.com/DaZeTw/CovidSentimentAnalyzer",
    demoUrl: "",
  },
  // {
  //     title: "Game Hub",
  //     title_zh: '游戏枢纽站',
  //     description: "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
  //     desc_zh: "使用React.js、TypeScript和ChakraUI构建的游戏聚合器。项目功能包括响应式游戏网格、搜索和过滤、使用React Query进行数据处理、使用Zod进行表单验证、使用Zustand进行状态管理、React Router进行导航以及实现无限滚动。",
  //     tags: ["React", "TypeScript", "Zod", "React Query", "Chakra UI"],
  //     imageUrl: gameHubImage,
  //     projectUrl: 'https://github.com/Codefreyy/New-Game-hub',
  //     demoUrl: 'https://joy-gamehub.netlify.app/',

  // },
  // {
  //     title: "Breddit",
  //     title_zh: "社交新闻论坛",
  //     description:
  //         `A modern full-stack Reddit clone features infinite scrolling, secure authentication via NextAuth and Google, and a custom feed for authenticated users. It utilizes Upstash Redis for advanced caching and React-Query for efficient data fetching, ensuring a responsive and user-friendly experience with optimistic updates.
  //         `,
  //     desc_zh: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
  //     tags: ["JavaScript", "HTML", "CSS3"],
  //     imageUrl: breadditImage,
  //     projectUrl: 'https://github.com/Codefreyy/Breddit',
  //     demoUrl: 'https://joy-breddit.vercel.app/',
  // },
];

export const skillsData = [
  "C++",
  "Python",
  "Pytorch",
  "Tensorflow",
  "Keras",
  "Scikit-learn",
  "Pandas",
  "Numpy",
  "Matplotlib",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Express",
  "Git",
  "Github",
  "MongoDB",
  "MySQL",
  "Docker",
  "HTML",
  "CSS",
  "Lamda",
  "S3",
  "CloudFront",
  "API Gateway",
  "Route 53",
];
