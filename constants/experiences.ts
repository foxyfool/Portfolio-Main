import { ExperienceType } from "@/@types/experience.type";
import stm from "@/public/stm.png";
import mit from "@/public/mit.png";
import uu from "@/public/uu.png";
import mg from "@/public/mg.jpg";
import adstia from "@/public/adstia.jpg";

export const yearsOfExperience =
  (new Date().getTime() - new Date("2023-03-01").getTime()) /
  (1000 * 60 * 60 * 24 * 365);

const now = new Date(); // Current date
const currentYear = now.getFullYear(); // Current year
const currentMonth = now.toLocaleString("default", { month: "long" }); // Current month as name

export const experiences: ExperienceType[] = [
  {
    company: "Adstia Agency",
    companyLink: "https://www.adstia.com/",
    companyLogo: adstia,
    roles: [
      {
        role: "Backend Developer",
        from: {
          month: "October",
          year: 2024,
        },
        to: {
          month: currentMonth,
          year: currentYear,
        },
        type: "Full Time",
      },
    ],
  },
  {
    company: "Magically Genius",
    companyLink: "https://magicallygenius.com/",
    companyLogo: mg,
    roles: [
      {
        role: "Backend Developer",
        from: {
          month: "July",
          year: 2024,
        },
        to: {
          month: "September",
          year: 2024,
        },
        type: "Full Time",
      },
    ],
  },
  {
    company: "Ubiquiti Inc.",
    companyLink: "https://www.ui.com/introduction",
    companyLogo: uu,
    roles: [
      {
        role: "Full Stack Developer",
        from: {
          month: "March",
          year: 2023,
        },
        to: {
          month: "March",
          year: 2024,
        },
        type: "Internship",
      },
    ],
  },
  {
    company: "Master's Of Computer Applications",
    companyLink: "https://www.manipal.edu/mit.html",
    companyLogo: mit,
    roles: [
      {
        role: "Manipal Institute Of Technology",
        from: {
          month: "August",
          year: 2021,
        },
        to: {
          month: "August",
          year: 2023,
        },
        type: "6.8 CGPA",
      },
    ],
  },
];
