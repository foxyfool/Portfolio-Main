import { ExperienceType } from "@/@types/experience.type";
import stm from "@/public/stm.png";
import mit from "@/public/mit.png";
import uu from "@/public/uu.png";

export const yearsOfExperience =
  (new Date().getTime() - new Date("2019-02-01").getTime()) /
  (1000 * 60 * 60 * 24 * 365);

export const experiences: ExperienceType[] = [
  {
    company: "Ubiquiti Inc.",
    companyLink: "https://in.store.ui.com/in/en",
    companyLogo: uu,
    roles: [
      {
        role: "Full Stack Developer Intern",
        from: {
          month: "March",
          year: 2023,
        },
        to: {
          month: "February",
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
  {
    company: "Bachelor's Of Computer Applications",
    companyLink: "https://www.stthomascollegebhilai.in/",
    companyLogo: stm,
    roles: [
      {
        role: "St. Thomas College",
        from: {
          month: "JULY",
          year: 2018,
        },
        to: {
          month: "JULY",
          year: 2021,
        },
        type: "7.2 CGPA",
      },
    ],
  },
];
