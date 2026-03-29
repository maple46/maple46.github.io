export interface LinkItem {
  label: string;
  href: string;
  iconPath: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  sub: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: {
    name: string;
  }[];
  venue: string;
  url?: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export const profile = {
  name: "Futa Watanabe",
  role: "First-year Master's student",
  org: "@ Institute of Science Tokyo",
  bio: "自然言語処理の研究をしています。最近は言語モデルの安全性や内部機序に関心があります。AIの他には、HPC技術や量子計算(特にFTQCの開発)に興味があります。",
  skills: [
    {
      name: "Python",
      description: "",
    },
    {
      name: "Rust",
      description: "",
    },
    {
      name: "競技プログラミング",
      description: "",
    },
  ] as SkillItem[],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/maple46",
      iconPath:
        "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      label: "X",
      href: "https://twitter.com/maple_46_",
      iconPath:
        "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
  ] as LinkItem[],

  education: [
    {
      period: "2026.4 - Present",
      title: "東京科学大学 修士課程",
      sub: "情報理工学院 情報工学系　知能情報コース",
      url: "https://www.isct.ac.jp/",
    },
    {
      period: "2022.4 - 2026.3",
      title: "東京科学大学 学士課程",
      sub: "情報理工学院 情報工学系",
      url: "https://www.isct.ac.jp/",
    },
  ] as TimelineEntry[],

  experience: [
    {
      period: "2025.9",
      title: "株式会社フィックスターズ",
      sub: "Internship",
      url: "https://www.fixstars.com/",
    },
    {
      period: "2024.8 - 2024.9",
      title: "株式会社JIJ",
      sub: "Summer Internship",
      url: "https://j-ij.com/ja",
    },
  ] as TimelineEntry[],

  publications: [
    {
      title: "複数参照ベース評価における参照集合の評価に向けて",
      authors: [
        { name: "渡邉 楓大" },
        { name: "佐藤 魁" },
        { name: "赤間 怜奈" },
        { name: "吉野 幸一郎" },
      ],
      venue: "言語処理学会第32回年次大会 (NLP2026), March 2026",
      url: "https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/B2-21.pdf",
    },
  ] as Publication[],
};
