import Ecom_cover from "@/public/Ecom_cover.png";
import Ecom_screenshot from "@/public/Ecom_screenshot.png";
import Ecom_screenshot_2 from "@/public/Ecom_screenshot_2.png";
import shop_cover from "@/public/shop_cover.png";
import shop_screenshot from "@/public/shop_scrrenshot.png";
import Identity from "@/public/id2.png"
import Identity1 from "@/public/id5.png"

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
      Frontend: [
        "React JS",
        "Material UI",
        "React-Redux",
        "CSS",
        "Nivo-Charts",
      ],
      Others: ["REST API"],
    },
    liveLink: "https://admin-frontend-00wo.onrender.com",
    codeLink: "https://github.com/foxyfool/Fullstack-Admin",
  },
  {
    id: "Identity",
    title: "Identity",
    metadata: ["Security"],
    cover_image: Identity1,
    screenshots: [Identity],
    url: "/projects/Identity",
    description: "An Authentication Service",
    features: [
      "Next-auth v5 (Auth.js)",
      "Next.js 14 with server actions",
      "OAuth Provider (Social login with Google & GitHub)",
      "Forgot password functionality",
      "Email verification",
      "Two factor verification",
      "User roles (Admin & User)",
      "Change email with new verification in Settings page",
      " Change password with old password confirmation in Settings page",
      "Enable/disable two-factor auth in Settings page",
    ],
    problem:
      "Deployment issues with vercel that would work fine on a localhost as currently there are issues authV5(Beta) / Handling Multiple Routes, Generating token based authentication storing and retrieving and deleting them using server actions in a mixed srtup of server and client components mangaing scalable file folder structure with private and default routes etc...",
    solution:
      "I implemented multiple routes in a mixed server-client setup, employing token-based authentication for security. Utilizing server actions, tokens were generated, stored, retrieved, and deleted. A scalable file folder structure managed private and default routes. TypeScript errors and lack of a dns server for the Email Service hindered full deployment.",
    skills: {
      Frontend: [
        "NextJS 14",
        "React JS",
        "Prisma ORM/PostGres SQL",
        "Acternity UI",
        "Server Actions",
        "ZOD",
      ],
    },
    liveLink: "https://auth-next-js-git-main-foxyfool.vercel.app",
    codeLink: "https://github.com/foxyfool/Identity-",
  },
  {
    id: "Eshop",
    title: "Ecom-Shop",
    url: "/projects/Eshop",
    cover_image: shop_cover,
    screenshots: [shop_screenshot],
    description:
      "This project is a simple e-commerce application built using React and Redux, focusing on managing a shopping cart and displaying products.",
    metadata: ["Shopping"],
    features: [
      "Browse Shopping Items",
      "Add 1 or Multiple Items to Cart",
      "Display and view cart-items and total amount of the items",
    ],
    skills: {
      Frontend: ["React-Redux", "Tailwind-CSS", "JS"],
    },
    liveLink: "",
    codeLink: "https://github.com/foxyfool/Shop-ReactRedux",
  },
];
