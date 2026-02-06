"use client";

import { useState } from "react";
import styles from "./page.module.css";

const images = {
  blackInk1: "/assets/portfolio/black-ink-1.png",
  image2: "/assets/portfolio/neondzen.png",
  image3: "/assets/portfolio/tool-1.png",
  image4: "/assets/portfolio/tool-3.png",
  image5: "/assets/portfolio/figma.png",
  image6: "/assets/portfolio/notion.png",
  frame2: "/assets/portfolio/ayenk.png",
  inkArchitectsProject: "/assets/portfolio/inkArchitectsProject.png.webp",
  image8: "/assets/portfolio/ink-shot.png",
  macbook: "/assets/portfolio/macbook.png",
  phoneBody: "/assets/portfolio/phone-body.png",
  pasteMask: "/assets/portfolio/phone-mask.png",
  pasteContent: "/assets/portfolio/phone-screen.png",
  image9: "/assets/portfolio/hse.png",
  image10: "/assets/portfolio/almau.png",
  arrowDown: "/assets/portfolio/arrow-down.png",
  arrowRight: "/assets/portfolio/arrow-right.png",
  arrowRightAlt: "/assets/portfolio/arrow-right-alt.png",
  dearLogo: "/assets/portfolio/dearLogo.png",
  dearProject: "/assets/portfolio/DearProject.png",
  reshapeProject: "/assets/portfolio/reshapeProject.webp",
  realTalkProject: "/assets/portfolio/realTalkProject.webp",
  italianMafiaProject: "/assets/portfolio/ItalianMafiaProject.webp",
  illumeProject: "/assets/portfolio/illumeProject.jpg",
  htmlStack: "/assets/portfolio/htmlStack.png",
  cssStack: "/assets/portfolio/cssStack.png",
  jsStack: "/assets/portfolio/jsStack.png",
};

const skills = [
  "Web Design",
  "UX/UI Design",
  "Responsive Layouts",
  "Web Tools & Platforms",
  "Development-Related",
  "Branding & Communication",
  "Social Media Visuals",
];

const experience = [
  {
    company: "INK Architects",
    role: "Lead Graphic, UX/UI Designer",
    date: "January 2025 - Present",
    logoType: "image",
    logo: images.blackInk1,
    logoBg: "#dfdfdf",
    arrow: images.arrowDown,
    details:
      "Started as a graphic designer and grew into a lead role. Designed and launched two multi-page websites, created presentations and commercial proposals, photographed architectural sites, and produced video content for internal and client use.",
  },
  {
    company: "Dear.kz",
    role: "SMM, Graphic Designer",
    date: "Apr 2024 - Jan 2025",
    logoType: "image",
    logo: images.dearLogo,
    logoBg: "#272727",
    arrow: images.arrowDown,
    details:
      "Worked on social media and branding visuals for a construction company. Created post designs, stories, and campaign creatives, managed content planning, and maintained a consistent visual tone across channels.",
  },
  {
    company: "Realtalk.tech",
    role: "SMM, Content Manager",
    date: "Apr 2024 - Jan 2025",
    logoType: "text",
    logo: "RealTalk.tech",
    logoBg: "#5b71cd",
    arrow: images.arrowDown,
    details:
      "Handled content creation for a developer-run tech blog. Produced visuals, planned content calendars, wrote copy, and supported the brand’s online presence through engaging design and social strategy.",
  },
  {
    company: "Neondzen",
    role: "CEO, Product Designer",
    date: "Jan 2020 - Mar 2022",
    logoType: "image",
    logo: images.image2,
    logoBg: "transparent",
    arrow: images.arrowDown,
    details:
      "Founded and ran a small neon signage studio. Oversaw the full cycle — from visual concept to production and installation. Focused on custom product design, client communication, and brand development.",
  },
];

const projects = [
  {
    title: "Ayenk inc.",
    description:
      "A sleek and responsive landing page designed for modern architecture company to showcase their products effectively.",
    image: images.frame2,
    type: "image",
    href: "https://ayenk.us",
  },
  {
    title: "INK Architects",
    description:
      "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    type: "image",
    image: images.inkArchitectsProject,
    href: "https://ink-a.com",
  },
  {
    title: "Ilumee",
    description:
      "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    type: "image",
    image: images.illumeProject,
    href: "https://apps.apple.com/us/app/ilumee/id6747663814",
  },
  {
    title: "Reshape",
    description:
      "Developed a multi-page educational website from scratch, explaining the creation and application of 3D graphics. Designed the UI/UX, built the site using HTML, CSS, and JavaScript. Fully responsive and adaptive across all screen sizes.",
    type: "image",
    image: images.reshapeProject,
    href: "https://reshape.adc.ac/index.html",
  },
  {
    title: "Dear.kz",
    description:
      "Designed client presentations and marketing materials, managed the company’s Instagram account, filmed and edited videos from construction sites, and created photo content showcasing renovation progress and finished projects.",
    type: "image",
    image: images.dearProject,
    href: "https://www.instagram.com/dear.construction/",
  },
  {
    title: "RealTalk.Tech",
    description: "A blog by two experienced programmers. Everything honest about IT.",
    type: "image",
    image: images.realTalkProject,
    href: "https://www.instagram.com/realtalk.tech/",
  },
  {
    title: "Longread about the Italian mafia",
    description:
      "Distrust of the population to the state generates organized crime, which increases mutual distrust, competition weakens, the economy stagnates, distrust to the state is even stronger.",
    type: "image",
    image: images.italianMafiaProject,
    href: "https://readymag.com/hseadc/mafia-longread/",
  },
];

const education = [
  {
    school: "HSE Art and Design School",
    program: "Design and Programming",
    date: "2021 - Present",
    logo: images.image9,
    details:
      "Currently completing a multidisciplinary program focused on UX/UI design, creative coding, and digital product development. Combining visual design with technical skills and user-centered thinking.",
  },
  {
    school: "Almaty Management University",
    program: "Business Administration",
    date: "2020 - 2021",
    logo: images.image10,
    details:
      "Studied fundamentals of business, marketing, and project management. Gained an early understanding of how creative work connects with real-world business processes.",
  },
];

const links = [
  {
    label: "Instagram",
    width: "large",
    href: "https://www.instagram.com/m1r4s_/",
  },
  { label: "Github", width: "medium", href: "https://github.com/m1r4ss" },
  {
    label: "LinkedIn",
    width: "small",
    href: "https://www.linkedin.com/in/miras-zhandosov-5b16b0298/",
  },
  { label: "Mail", width: "auto", href: "mailto:m1r4s.kz@gmail.com" },
  {
    label: "Google Meeting",
    width: "full",
    href: "https://cal.com/miras-zhandosov",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openEducationIndex, setOpenEducationIndex] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      <main className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={`${styles.card} ${styles.stickyCard}`}>
            <div className={styles.photo}>
              <img src="/assets/portfolio/me.png" alt="Miras Zhandosov" />
            </div>
            <div className={styles.name}>Miras Zhandosov</div>
            <div className={styles.title}>Graphic and UX/UI Designer</div>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Available for work</span>
            </div>
            <div className={styles.location}>Almaty, Kazakhstan</div>
          </div>

          <div className={`${styles.card} ${styles.stickyCardSecondary}`}>
            <div className={styles.contactLine}>m1r4s.com</div>
            <div className={styles.contactLine}>+7 771 856-12-19</div>
            <div className={styles.contactLine}>m1r4s.kz@gmail.com</div>
            <a
              className={styles.outlineButton}
              href="https://drive.google.com/file/d/1VnFIUHdrcoHWMejhIYIb_ZQiygnWpKGB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a
              className={styles.primaryButton}
              href="mailto:m1r4s.kz@gmail.com"
            >
              Contact Me
            </a>
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>ABOUT</div>
            <div className={styles.aboutText}>
              <p>UX/UI designer with a background in branding and digital design.</p>
              <p>
                I create thoughtful interfaces and design systems for web and
                mobile products. I have basic experience with frontend development
                and website layout.
              </p>
              <p>
                I work confidently in Figma and the Adobe Creative Suite. Skilled
                in prototyping, user research, and data analysis to improve user
                experience. Always exploring new design trends and looking to grow
                in a team that values usability, aesthetics, and innovation.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>SKILLS</div>
            <div className={styles.tags}>
              {skills.map((skill) => (
                <div key={skill} className={styles.tag}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>EXPERIENCE</div>
            <div className={styles.list}>
              {experience.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.company} className={styles.listItem}>
                    <button
                      className={styles.listButton}
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex((prev) => (prev === index ? null : index))
                      }
                    >
                      <div className={styles.listLeft}>
                        <div
                          className={styles.logoBox}
                          style={{ backgroundColor: item.logoBg }}
                        >
                          {item.logoType === "image" ? (
                            item.logo ? <img src={item.logo} alt="" /> : null
                          ) : (
                            <span className={styles.logoText}>RealTalk.tech</span>
                          )}
                        </div>
                        <div className={styles.listText}>
                          <div className={styles.listTitle}>{item.company}</div>
                          <div className={styles.listSubtitle}>{item.role}</div>
                        </div>
                      </div>
                      <div className={styles.listRight}>
                        <span>{item.date}</span>
                        <span
                          className={`${styles.chevron} ${
                            isOpen ? styles.chevronOpen : ""
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                    <div
                      className={`${styles.experienceDetails} ${
                        isOpen ? styles.experienceOpen : ""
                      }`}
                    >
                      {item.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>TECH STACK</div>
            <div className={styles.techRow}>
              <div className={styles.techTrack}>
              <div className={styles.techLogoLarge}>
                <img src={images.image3} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.image5} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.image4} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.htmlStack} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.cssStack} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.jsStack} alt="" />
              </div>
              <div className={`${styles.techLogo} ${styles.realTechLogo}`}>
                <span className={styles.logoText}>RealTalk.tech</span>
              </div>
              <div className={styles.techLogo}>
                <img src={images.image6} alt="" />
              </div>
              <div className={styles.techLogoLarge}>
                <img src={images.image3} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.image5} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.image4} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.htmlStack} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.cssStack} alt="" />
              </div>
              <div className={styles.techLogo}>
                <img src={images.jsStack} alt="" />
              </div>
              <div className={`${styles.techLogo} ${styles.realTechLogo}`}>
                <span className={styles.logoText}>RealTalk.tech</span>
              </div>
              <div className={styles.techLogo}>
                <img src={images.image6} alt="" />
              </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>PROJECTS</div>
            <div className={styles.projects}>
              {projects.map((project) => (
                <div key={project.title} className={styles.projectCard}>
                  {project.type === "image" && (
                    <div className={styles.projectImage}>
                      <img src={project.image} alt="" />
                    </div>
                  )}
                  {project.type === "phone" && (
                    <div className={styles.projectImageAlt}>
                      <div className={styles.phoneStack}>
                        <img src={images.phoneBody} alt="" />
                        <div
                          className={styles.phoneScreen}
                          style={{
                            maskImage: `url(${images.pasteMask})`,
                            WebkitMaskImage: `url(${images.pasteMask})`,
                          }}
                        >
                          <img src={images.pasteContent} alt="" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={styles.projectBody}>
                    <div className={styles.projectTitle}>{project.title}</div>
                    {project.description ? (
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                    ) : null}
                    {project.href ? (
                      <a
                        className={styles.inlineButton}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>See project</span>
                        <span className={styles.inlineChevron} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>EDUCATION</div>
            <div className={styles.list}>
              {education.map((item, index) => {
                const isOpen = openEducationIndex === index;
                return (
                  <div key={item.school} className={styles.listItem}>
                    <button
                      className={styles.listButton}
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenEducationIndex((prev) =>
                          prev === index ? null : index,
                        )
                      }
                    >
                      <div className={styles.listLeft}>
                        <div className={styles.logoBoxLight}>
                          <img src={item.logo} alt="" />
                        </div>
                        <div className={styles.listText}>
                          <div className={styles.listTitle}>{item.school}</div>
                          <div className={styles.listSubtitle}>{item.program}</div>
                        </div>
                      </div>
                      <div className={styles.listRightMuted}>
                        <span>{item.date}</span>
                        <span
                          className={`${styles.chevron} ${
                            isOpen ? styles.chevronOpen : ""
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                    <div
                      className={`${styles.experienceDetails} ${
                        isOpen ? styles.experienceOpen : ""
                      }`}
                    >
                      {item.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>LINKS</div>
            <div className={styles.linksGrid}>
              {links.map((link) => (
                <a
                  key={link.label}
                  className={`${styles.linkCard} ${styles[link.width]}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.label}</span>
                  <span className={styles.linkChevron} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
