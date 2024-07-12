import { ExperienceType } from "@/@types/experience.type";
import stm from "@/public/stm.png";
import mit from "@/public/mit.png";
import uu from "@/public/uu.png";
import mg from "@/public/mg.jpg";

export const yearsOfExperience =
  (new Date().getTime() - new Date("2023-03-01").getTime()) /
  (1000 * 60 * 60 * 24 * 365);

export const experiences: ExperienceType[] = [
  {
    company: "Magically Genius ",
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
          month: "present",
          year: 2024,
        },
        type: "Internship",
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
