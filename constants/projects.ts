import Ecom_cover from "@/public/Ecom_cover.png";
import Ecom_screenshot from "@/public/Ecom_screenshot.png";
import Ecom_screenshot_2 from "@/public/Ecom_screenshot_2.png";
import rahul_jumps_cover from "@/public/rahul_jumps_cover.png";
import rahul_jumps_screenshot from "@/public/rahul_jumps_screenshot.png";
import shop_cover from "@/public/shop_cover.png";
import shop_screenshot from "@/public/shop_scrrenshot.png";


export const projects = [
  {
    id: "Ecom-Vision",
    title: "Ecom-Vision",
    metadata: ["Utility"],
    cover_image: Ecom_cover,
    screenshots: [Ecom_screenshot, Ecom_screenshot_2],
    description: "A Sales Dash-board with a sleek design and intuitive UX.",
    url: "/projects/Ecom-Vision",
    features: [
      "View Sales dash-board with an amazing UI and smooth UX",
      "Create and manage sales insights",
      "Acces users geographically on the fly",
      "View details of products/ratings/stocks etc...",
      "Download generated data reports ",
    ],
    skills: {
      Backend: ["Express JS", "Javascript", "NodeJS", "MongoDB"],
      Frontend: ["React JS", "Material UI", "React-Redux", "CSS", "Nivo-Charts"],
      Others: ["REST API"],
    },
    liveLink: "",
    codeLink: "https://github.com/foxyfool/Fullstack-Admin",
  },
  {
    id: "rahul_jumps",
    title: "Rahul JUMPS",
    metadata: ["Gaming"],
    cover_image: rahul_jumps_cover,
    screenshots: [rahul_jumps_screenshot],
    url: "/projects/rahul_jumps",
    description: "A Plain Platformer Game For Fun.",
    features: [
      "Plain HTML, CSS and JS.",
      "Amazing sprite animations.",
    ],
    problem:
      "Challenged myself to make a platformer game without using any game engine, any frameworks or html canvas. Just plain html, css and javascript.",
    solution:
      "Achieved this by using html divs for the character sprite and the shooting blast. For the running and jumping of the sprite, css animations were used. Shooting blast divs were randomly generated at random intervals of time and appended to the document. Then calculated if the character and the blast intersects (which means the character dies) by using the getBoundingClientRect method, which returns a DOMRect object providing information about the size of an element and its position relative to the viewport.",
    skills: { Frontend: ["HTML", "CSS", "Javascript"] },
    liveLink: "",
    codeLink: "https://github.com/foxyfool/jumpingJack",
  },
  {
    id: "Eshop",
    title: "Ecom-Shop",
    url: "/projects/Eshop",
    cover_image: shop_cover,
    screenshots: [shop_screenshot],
    description: "This project is a simple e-commerce application built using React and Redux, focusing on managing a shopping cart and displaying products.",
    metadata: ["Shopping"],
    features: [
      "Browse Shopping Items",
      "Add 1 or Multiple Items to Cart",
      "Display and view cart-items and total amount of the items",
    ],
    skills: {
      Frontend: ["React-Redux", "Tailwind-CSS","JS",]
    },
    liveLink: "",
    codeLink: "https://github.com/foxyfool/Shop-ReactRedux",
  },
];
