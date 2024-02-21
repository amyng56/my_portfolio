import {
    backend,
    creator,
    web,
    php,
    python,
    java,
    html,
    css,
    javascript,
    laravel,
    django,
    reactjs,
    redux,
    react_query,
    expressjs,
    nodejs,
    bootstrap,
    tailwind,
    mysql,
    mongodb,
    redis,
    cypress,
    sikulix,
    git,
    sourcetree,
    laragon,
    xampp,
    mysqlworkbench,
    postman,
    scenebuilder,
    stampede,
    malaysia,
    fanamylms,
    dreamscape,
    museumSimulator,
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

export const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "Quality Assurance Engineer",
        icon: creator,
    },
];

export const technologies = [
    {
        category: "Frontend",
        list: [
            {
                name: "HTML",
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
                name: "React Query",
                icon: react_query,
            },
            {
                name: "Bootstrap",
                icon: bootstrap,
            },
            {
                name: "Tailwind CSS",
                icon: tailwind,
            },
        ],
    },
    {
        category: "Backend",
        list: [
            {
                name: "PHP",
                icon: php,
            },
            {
                name: "Python",
                icon: python,
            },
            {
                name: "Java",
                icon: java,
            },
            {
                name: "Node JS",
                icon: nodejs,
            },
            {
                name: "Express JS",
                icon: expressjs,
            },
            {
                name: "Django",
                icon: django,
            },
            {
                name: "Laravel",
                icon: laravel,
            },
        ],
    },
    {
        category: "DBMS",
        list: [
            {
                name: "MySQL",
                icon: mysql,
            },
            {
                name: "MongoDB",
                icon: mongodb,
            },
            {
                name: "Redis",
                icon: redis,
            },
        ],
    },
];

export const automationTesting = [
    {
        name: "Cypress",
        icon: cypress,
    },
    {
        name: "SikuliX",
        icon: sikulix,
    },
];

export const devTools = [
    {
        name: "git",
        icon: git,
    },
    {
        name: "SourceTree",
        icon: sourcetree,
    },
    {
        name: "Laragon",
        icon: laragon,
    },
    {
        name: "Xampp",
        icon: xampp,
    },
    {
        name: "MySQL Workbench",
        icon: mysqlworkbench,
    },
    {
        name: "Postman",
        icon: postman,
    },
    {
        name: "SceneBuilder",
        icon: scenebuilder,
    },
];

export const experiences = [
    {
        title: "Automation QA @ Software Developer Intern ",
        company_name: "Stampede Solution Sdn. Bhd.",
        icon: stampede,
        iconBg: "#E6DEDD",
        country: "Malaysia",
        countryIcon: malaysia,
        date: "Aug 2020 – Feb 2021",
        points: [
            "Conducted manual testing, reported issues using Redmine, maintained detailed documentation and facilitated efficient communication with development teams for resolution.",
            "Designed comprehensive test plans, scenarios, scripts, and procedures for given testing coverage to establish a structured framework for systematic testing processes.",
            "Researched and compared automation tools (SikuliX, Nightwatch.js and Cypress) for regression tests.",
            "Implemented automated regression testing using Cypress (Node,js, JavaScript) for company’s product, covering planning, running, debugging, packaging, documentation, and maintenance.",
            "Transitioned to Software Development department, actively participated in troubleshooting and resolving bugs, adapted MVC concept through Laravel framework, developed effective use of Git commands.",
        ],
    },
    {
        title: "Software Engineer L1 (Part-time)",
        company_name: "Stampede Solution Sdn. Bhd.",
        icon: stampede,
        iconBg: "#E6DEDD",
        country: "Malaysia",
        countryIcon: malaysia,
        date: "Jul 2021 – Sep 2021",
        points: [
            "Analyzed and debugged existing code to fix the raised software issues. (PHP, SQL)",
            "Improved software security by implementing validation and sanitization of user inputs to prevent security vulnerabilities like Cross-Site Scripting (XSS).",
        ],
    },
    {
        title: "Software Engineer L1",
        company_name: "Stampede Solution Sdn. Bhd.",
        icon: stampede,
        iconBg: "#E6DEDD",
        country: "Malaysia",
        countryIcon: malaysia,
        date: "Apr 2022 – Aug 2023",
        points: [
            "Collaborated with cross-functional teams in an Agile environment to identify requirements, implemented new functionalities and continuous bug fixes as part of Full Stack Development in employing PHP Laravel framework for backend and frontend technologies including libraries like Bootstrap and DevExpress.",
            "Developed and maintained APIs to integrate multiple systems in collaboration with other developers.",
            "Created and optimized scheduled jobs for automated processes to streamline operational tasks using cron and Laravel Scheduler based on performance.",
            "Maintained databases by writing and optimizing SQL queries to ensure data integrity and database performance.",
            "Integrated with Redis for efficient data caching and storage.",
            "Implemented dynamic user interface using Handlebars templating engine.",
            "Provided support for Linux-based servers and utilized WinSCP to address end-user issues to deployed applications like implementing error handling and logging mechanisms.",
        ],
    },
];

export const projects = [
    {
        name: "Dreamscape",
        description:
            "A dynamic web application that enables users to record and share their dreams, incorporating AI concepts for visualization and interpretion.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "OpenAI",
                color: "pink-text-gradient",
            },
        ],
        image: dreamscape,
        source_code_link: "https://github.com/amyng56/dreamscape",
    },
    {
        name: "Fanamy LMS",
        description:
            "A web application designed to streamline the teaching and learning experience. Tailored for teachers, guardians, and young learners, it provides a systematic approach to teaching, assistance, and learning.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
        ],
        image: fanamylms,
        source_code_link: "https://github.com/amyng56/FANAMY-LMS",
    },
    {
        name: "Museum Simulator",
        description:
            "A multithreaded program to simulate operations of a museum.",
        tags: [
            {
                name: "JavaFX",
                color: "blue-text-gradient",
            },
            {
                name: "SceneBuilder",
                color: "green-text-gradient",
            },
            {
                name: "Concurrent_Programming",
                color: "pink-text-gradient",
            },
        ],
        image: museumSimulator,
        source_code_link: "https://github.com/ashleychong/Concurrent-Museum-Simulator",
    },
];