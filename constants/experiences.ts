import { ExperienceType } from "@/@types/experience.type";
import stm from "@/public/stm.png";
import mit from "@/public/mit.png";

export const yearsOfExperience =
  (new Date().getTime() - new Date("2019-02-01").getTime()) /
  (1000 * 60 * 60 * 24 * 365);

export const experiences: ExperienceType[] = [
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
