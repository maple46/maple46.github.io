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
    "I study natural language processing, with a particular focus on the safety and interpretability of large language models. My research aims to uncover the internal mechanisms and representations that drive model behavior, ultimately contributing to more transparent and reliable AI systems.<br><br>In parallel, I am interested in quantum error correction and fault-tolerant quantum computing. I also develop software tools to explore and simulate these quantum systems.",
  email: "",
  imageUrl:
    "/images/profile.jpg",
  googleScholarUrl: "",
  githubUsername: "maple46",
  linkedinUsername: "",
  twitterUsername: "maple_46_",
  blogUrl: "https://maple-46.hatenablog.com/",
  cvUrl: "",
  institutionUrl: "https://www.isct.ac.jp/ja",
  // altName: "",
  // secretDescription: "I like dogs.",
};
