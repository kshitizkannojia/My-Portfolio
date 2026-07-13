const config = {
  title: "Kshitiz Kannojia | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Kshitiz Kannojia, a full-stack developer specializing in React, Flutter, AI-powered applications, and interactive web experiences. Discover projects like TaxiBill, Japfa Invoice, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Kshitiz Kannojia, a full-stack developer building modern web and mobile applications.",
  },
  keywords: [
    "Kshitiz Kannojia",
    "portfolio",
    "full-stack developer",
    "web development",
    "React",
    "Flutter",
    "Next.js",
    "AI applications",
    "TaxiBill",
    "mobile development",
    "Tailwind CSS",
    "TypeScript",
    "GSAP",
    "Spline",
    "Framer Motion",
  ],
  author: "Kshitiz Kannojia",
  email: "kshitizkannojia16@gmail.com",
  site: "https://kshitizkannojia.dev",

  // for github stars button
  githubUsername: "kshitizkannojia",
  githubRepo: "My-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/kshitizkannojia",
    linkedin: "https://www.linkedin.com/in/kshitiz-kannojia/",
    instagram: "https://www.instagram.com/kshitiz_.k",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/kshitizkannojia",
  },
};
export { config };
