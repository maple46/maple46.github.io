export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2025",
    title: "Summer Internship",
    company: "Fixstars",
    description:
      "Accelerating Deep Learning Models.",
    companyUrl: "https://www.fixstars.com/ja",
  },
  {
    date: "Summer 2024",
    title: "Summer Internship",
    company: "Jij",
    description:
      "Implemented a quantum optimization algorithm using Jij's SDK Qamomile.",
    companyUrl: "https://www.j-ij.com/ja",
  },
];
