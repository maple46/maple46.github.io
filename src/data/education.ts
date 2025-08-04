export interface Education {
  year: string;
  institution: string;
  institutionUrl: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2022—Present",
    institution: "Institute of Science Tokyo",
    institutionUrl: "https://www.isct.ac.jp/en",
    degree: "B.S. in Computer Science",
    // advisor: "Prof. Koichiro Yoshino",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
