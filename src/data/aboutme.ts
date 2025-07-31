export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Futa Watanabe",
  title: "Undergraduate student",
  institution: "Institute of Science Tokyo",
  // Note that links work in the description
  description:
    "I'm a fourth-year <a href='https://www.isct.ac.jp/en'>undergraduate student</a> working at Narural Language Processing.",
  email: "",
  imageUrl:
    "",
  googleScholarUrl: "",
  githubUsername: "maple46",
  linkedinUsername: "",
  twitterUsername: "maple_46_",
  blogUrl: "https://maple-46.hatenablog.com/",
  cvUrl: "",
  institutionUrl: "https://www.isct.ac.jp/en",
  // altName: "",
  // secretDescription: "I like dogs.",
};
