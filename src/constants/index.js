
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
    infitity,
    qwerty,
    carrent,
    jobit,
    tripguide,
    threejs,
    chatR,
    face,
    insta,
    python,
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
        title: "Machine Learning",
        icon: web,
    },
    {
        title: "Artifical Intelligence",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: backend,
    },
    {
        title: "Backend Developer",
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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
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
    {
        name: "python",
        icon: python,
    },
];

const experiences = [
    {
        title: "Next.js Developer (Internship)",
        company_name: "Qwerty Thoughts",
        icon: qwerty,
        iconBg: "#383E56",
        date: "July 2023 - August 2021",
        points: [
            "During my duration of Internship, I worked on developing and maintaining web Bhavisha website with my team using Next.js.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Programmed functions and API's which utilized neurology-based algorithms to find the clients attitude and abilities."
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "Infinity Labs",
        icon: infitity,
        iconBg: "#E6DEDD",
        date: "September 2023 - November 2023",
        points: [
            "During my internship I worked on “Active learning data models in Data Science”, I Implemented active learning on AI algorithms in order to reduce the amount to data they require to give the best results.",
            "Implemented and modified “Gain Imputation”, Applied Convolutional Neural Networks (CNN) for image identification and modification.",
            "Engineered an Autoencoder for the main purpose of image restoration by deburring blurred images.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Metalytix",
        icon: meta,
        iconBg: "#383E56",
        date: "Dec 2023 - current",
        points: [
            "Developing and designed the landing page for the company.",
            "Made API's for all the ML models to be used in the website",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Made the changes to the website to make is look more effective",
        ],
    }
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
        name: "Chat Ruch(Whatsapp clone)",
        description:
            "Web-based platform that allows users to have real-time seamless text communication and file sharing.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: chatR,
        source_code_link: "https://github.com/nothing331/Whatsapp_clone",
    },
    {
        name: "Face Recognition and Emotion Detection",
        description:
            "Performing image classification for detection of various human emotions using CNN Architecture.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "CNN",
                color: "green-text-gradient",
            },
            {
                name: "TensorFlow",
                color: "pink-text-gradient",
            },
        ],
        image: face,
        source_code_link: "https://github.com/nothing331/Face-Recognition-and-Emotion-Detection/tree/main",
    },
    {
        name: "InstaGram Clone",
        description:
            "A social media app where people can share there image and video with there friends and family.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongoDb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: insta,
        source_code_link: "https://github.com/nothing331/Instagram-Clone",
    },
];

export { services, technologies, experiences, testimonials, projects };