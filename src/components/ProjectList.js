import images from "./image";
export const ProjectList = [
    {
        title: 'Age Calculator',
        image: images.age,
        desc: 'Calculates age using date class and uses error states.',
        challenge: true,
        skills: [images.html, images.css, images.js],
        link: "https://jasenio.github.io/Age-calculator-app/",
    },
    {
        title: 'Calculator',
        image: images.calc,
        desc: 'Simple calculator built with changing themes and responsive design.',
        challenge: true,
        skills: [images.sass],
        link: "https://jasenio.github.io/calculator-app/",
    },
    
    {
        title: 'Product Page',
        image: images.ecommerce,
        desc: 'Online shopping product page with responsive design.',
        challenge: true,
        skills: [images.react, images.sass],
        link: "https://jasenio.github.io/ecommerce-product/",
    },
    {
        title: 'Form Subscription Page',
        image: images.form,
        desc: "Multi step form that stores customers' data and plan.",
        challenge: true,
        skills: [images.react, images.sass],
        link: "https://jasenio.github.io/multi-step-form/",
    },
    {
        title: 'IP Tracker',
        image: images.ip,
        desc: 'Map that returns details and image of location given an IP. Built using Leaflet map and GEOIpify.',
        challenge: true,
        skills: [images.react, images.sass, images.api],
        link: "https://jasenio.github.io/ip-address-tracker/",
    },
    
]