import Ecom_cover from "@/public/Ecom_cover.png";
import Ecom_screenshot from "@/public/Ecom_screenshot.png";
import Ecom_screenshot_2 from "@/public/Ecom_screenshot_2.png";
import wb1 from "@/public/wbdash.png";
import wb2 from "@/public/wbscreen.png";
import Identity from "@/public/id1.png";
import Identity1 from "@/public/id2.png";
import Identity3 from "@/public/id3.png";
import Identity4 from "@/public/id4.png";
import wb3 from "@/public/wb3.png";
import rahulJm from "@/public/rahuljmPs0.png";
import rahulJm1 from "@/public/rahuljmPs1.png";
import ab1 from "@/public/ab1.png";
import ab2 from "@/public/ab2.png";
import ab3 from "@/public/ab3.png";
import ab4 from "@/public/ab4.png";

export const projects = [
  {
    id: "LearnSwift",
    title: "Learn Swift",
    metadata: ["Education"],
    cover_image: ab2,
    screenshots: [ab1, ab3, ab4],
    description: "An Edtech platform for learning Languages and Programming",
    url: "/projects/LearnSwift",
    features: [
      "User Registration & Login - Seamlessly access the platform.",
      " Student & Instructor Roles - Tailored experiences for different users.",
      " Course Purchases - Students can easily enroll in their desired courses.",
      "RazorPay Integration - Smooth payment processing for hassle-free transactions.",
      " Course Management - Instructors can effortlessly create and edit course content.",
      " Dashboard Analytics - In-depth stats for instructors to track their progress.",
      " Progress Tracking - Students can monitor their course progression.",
      " Profile Customization - Users can personalize their profiles with profile pictures.",
      " Course Reviews - Share feedback and reviews for an interactive learning environment.",
    ],
    skills: {
      Backend: ["Express JS", "Javascript", "NodeJS", "MongoDB"],
      Frontend: ["React JS", "Tailwind CSS", "React-Redux", "Video React"],
      Others: ["REST API"],
    },
    liveLink: "https://learn-swift.vercel.app",
    codeLink: "https://github.com/foxyfool/Learn-Swift-",
  },
  {
    id: "Identity",
    title: "Identity",
    metadata: ["Security"],
    cover_image: Identity,
    screenshots: [Identity1, Identity3, Identity4],
    url: "/projects/Identity",
    description:
      "Identity is a robust web application built on Next.js 14 with server actions, offering a seamless user authentication experience with a plethora of features.",
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
      "The email verification functionality currently requires your own Resend API key and setup instructions are provided due to domain verification requirements on Resend / Handling Multiple Routes, Generating token based authentication storing and retrieving and deleting them using server actions in a mixed setup of server and client components mangaing scalable file folder structure with private and default routes etc...",
    solution:
      "I implemented multiple routes in a mixed server-client setup, employing token-based authentication for security. Utilizing server actions, tokens were generated, stored, retrieved, and deleted. A scalable file folder structure managed private and default routes.",
    skills: {
      Fullstack: [
        "NextJS 14",
        "React JS",
        "Prisma ORM/PostGres SQL",
        "Acternity UI",
        "Server Actions",
        "ZOD",
      ],
    },
    liveLink: "https://auth-next-js-git-main-foxyfool.vercel.app",
    codeLink: "https://github.com/foxyfool/Identity",
  },
  {
    id: "WhiteBoard-Connect",
    title: "WhiteBoard Connect",
    url: "/projects/WhiteBoard-Connect",
    cover_image: wb3,
    screenshots: [wb2, wb1],
    description:
      "A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing",
    metadata: ["Utility"],
    features: [
      "Whiteboard for drawing and sharing ideas",

      "Toolbar with Text, Shapes, Sticky Notes & Pencil",

      "Layering functionality",

      "Coloring system",

      "Undo & Redo functionality",

      "Keyboard shortcuts",

      "Real-time collaboration",

      "Auth, organisations and invites",

      "Favoriting functionality",

      "Next.js 14 framework",
    ],
    skills: {
      Fullstack: ["NextJS 14", "Convex-DB", "Clerk-Auth", "ReactJS"],
    },
    liveLink: "https://white-board-connect-git-main-foxyfool.vercel.app",
    codeLink: "https://github.com/foxyfool/WhiteBoard-Connect",
  },
  {
    id: "RahulJumps",
    title: "Rahul Jumps",
    metadata: ["Game"],
    cover_image: rahulJm,
    screenshots: [rahulJm1],
    url: "/projects/RahulJumps",
    description: "A game for fun using plain HTML CSS JS",
    features: [
      "No libraries used. No gimmicks. Just plain old HTML, CSS and JS.",
      "Amazing sprite animations.",
    ],
    problem:
      "Challenged myself to make a platformer game without using any game engine, any frameworks or html canvas. Just plain old html, css and javascript.",
    solution:
      "Achieved this by using html divs for the character sprite and the shooting blast. For the running and jumping of the sprite, css animations were used. Shooting blast divs were randomly generated at random intervals of time and appended to the document. Then calculated if the character and the blast intersects (which means the character dies) by using the getBoundingClientRect method, which returns a DOMRect object providing information about the size of an element and its position relative to the viewport.",
    skills: { Frontend: ["HTML", "CSS", "Javascript"] },
    liveLink: "https://jumping-jack-git-main-foxyfool.vercel.app",
    codeLink: "https://github.com/foxyfool/jumpingrahul",
  },
];
