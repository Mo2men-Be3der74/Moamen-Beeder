import React from "react";
import {
  ScrollSection,
  AnimatedColumn,
  StaggeredItem,
  FadeInText,
} from "./MotionWrappers";

interface Project {
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: "Flight Booking",
    description:
      "A team frontend project for searching flights and exploring ticket details. Built the flight search system, filtering logic, and JavaScript data structures to simulate a database.",
    tech: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/Mo2men-Be3der74/airline-website",
    demoUrl: "https://airline-website-silk.vercel.app/",
  },
  {
    title: "Courses Organizer",
    description:
      "A focused tool for organizing course information and keeping academic work easier to navigate. Built as an exercise in clear interfaces and practical data handling.",
    tech: ["JavaScript", "HTML", "CSS"],
    codeUrl: "https://github.com/Mo2men-Be3der74/Course-Organizer",
    demoUrl: "https://course-organizer-three.vercel.app/",
  },
  {
    title: "Student API",
    description:
      "A PHP backend project exploring how data is structured, accessed, and exposed through an API. A small project with the mindset of a larger system.",
    tech: ["PHP", "REST API"],
    codeUrl: "https://github.com/Mo2men-Be3der74/Student-Portal-API",
    demoUrl: "https://github.com/Mo2men-Be3der74/Student-Portal-API",
  },
  {
    title: "Student Manager",
    description:
      "A Java application built to practice object-oriented programming, application structure, and the discipline of making a program understandable before making it complex.",
    tech: ["Java", "OOP", "Application Design"],
    codeUrl: "https://github.com/Mo2men-Be3der74/Student-Manager",
    demoUrl: "https://github.com/Mo2men-Be3der74/Student-Manager",
  },
];

const SKILLS = [
  { category: "Languages", items: "Python · JavaScript · PHP · Java · C · SQL" },
  { category: "Frontend", items: "HTML · CSS · JavaScript" },
  { category: "Backend", items: "PHP · Laravel · REST APIs" },
  { category: "Database", items: "MySQL · PostgreSQL · SQL" },
  { category: "Data & AI", items: "NumPy · Pandas · Matplotlib · Scikit-learn" },
  { category: "Tools", items: "Git · GitHub · VS Code" },
];

export default function PortfolioMotion() {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#050505] dark:bg-[#0f0c0b] dark:text-[#f5f5f7] transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <ScrollSection className="mx-auto flex min-h-[calc(100vh-88px)] max-w-[1440px] flex-col justify-between px-6 pb-10 pt-20 sm:px-10 sm:pt-28 lg:px-16 lg:pt-32 xl:px-20">
        <AnimatedColumn direction="left" className="max-w-[1180px]">
          <FadeInText delay={0}>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-[.16em] opacity-60">
              Computer Science student · Helwan University
            </p>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h1 className="text-5xl font-extrabold sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              Hi, I'm
              <br />
              <span className="ml-[8vw] sm:ml-[11vw]">Moamen.</span>
            </h1>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="mt-10 max-w-[720px] text-xl font-medium leading-[1.35] tracking-[-.045em] opacity-85 sm:ml-[11vw] sm:text-2xl">
              A Computer Science student building toward becoming a Software Engineer.
            </p>
          </FadeInText>
        </AnimatedColumn>

        <AnimatedColumn
          direction="right"
          className="grid gap-10 border-t border-black/15 dark:border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end mt-12"
        >
          <FadeInText>
            <p className="max-w-[570px] text-[16px] leading-7 opacity-70">
              I like building software, understanding how systems work, and learning what sits
              beneath the interface — moving steadily from frontend development into backend
              engineering, then toward AI and machine learning.
            </p>
          </FadeInText>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium">
            <a href="https://github.com/Mo2men-Be3der74" className="hover:underline">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/moamen-beeder-9571a528b/" className="hover:underline">LinkedIn ↗</a>
            <a href="mailto:moamenbeeder@gmail.com" className="hover:underline">Email ↗</a>
          </div>
        </AnimatedColumn>
      </ScrollSection>

      {/* 2. ABOUT SECTION (Alternating 2-Column: Left Heading / Right Content) */}
      <ScrollSection id="about" className="border-t border-black/15 dark:border-white/15 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 xl:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.4fr] lg:gap-24">
          <AnimatedColumn direction="left">
            <p className="text-[12px] font-semibold uppercase tracking-[.18em] opacity-60">About</p>
          </AnimatedColumn>

          <AnimatedColumn direction="right">
            <FadeInText>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-[850px]">
                I'm learning to think beyond the screen.
              </h2>
            </FadeInText>
            <FadeInText delay={0.1}>
              <p className="mt-8 max-w-[650px] text-lg leading-8 opacity-70">
                I started with the visible parts of the web: HTML, CSS, and JavaScript. That
                curiosity kept pushing me deeper — into programming, databases, APIs, and the
                decisions that make software reliable.
              </p>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="mt-7 text-base font-medium tracking-tight">
                HTML → CSS → JavaScript → Programming → Databases → Backend → Software Engineering → AI/ML
              </p>
            </FadeInText>
          </AnimatedColumn>
        </div>
      </ScrollSection>

      {/* 3. SKILLS / FOUNDATIONS (Staggered row items) */}
      <ScrollSection id="skills" className="border-t border-black/15 dark:border-white/15 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <AnimatedColumn direction="left" className="mb-16 flex items-end justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-[.18em] opacity-60">Foundations</p>
            <span className="hidden text-[13px] opacity-60 sm:block">
              The tools are changing. The fundamentals stay.
            </span>
          </AnimatedColumn>

          <div className="divide-y divide-black/15 dark:divide-white/15 border-y border-black/15 dark:border-white/15">
            {SKILLS.map((skill, idx) => (
              <StaggeredItem
                key={skill.category}
                index={idx}
                className="grid gap-4 py-7 sm:grid-cols-[220px_1fr] sm:items-center"
              >
                <h3 className="text-sm font-semibold">{skill.category}</h3>
                <p className="text-xl sm:text-2xl tracking-tight opacity-90">{skill.items}</p>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* 4. WORK SECTION (Alternating / Staggered Project Cards) */}
      <ScrollSection id="work" className="border-t border-black/15 dark:border-white/15 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <AnimatedColumn direction="left" className="mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-[.18em] opacity-60">Selected work</p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-6">
              Things I've built
              <br />
              <span className="opacity-40">while figuring it out.</span>
            </h2>
          </AnimatedColumn>

          <div className="divide-y divide-black/15 dark:divide-white/15 border-y border-black/15 dark:border-white/15">
            {PROJECTS.map((project, idx) => (
              <StaggeredItem
                key={project.title}
                index={idx}
                className="py-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-start"
              >
                <div className="max-w-[850px] space-y-3">
                  <FadeInText>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </FadeInText>
                  <FadeInText delay={0.05}>
                    <p className="text-base leading-7 opacity-70">
                      {project.description}
                    </p>
                  </FadeInText>
                  {/* Tag pills */}
                  <FadeInText delay={0.1}>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold uppercase tracking-wider opacity-60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </FadeInText>
                </div>

                <div className="flex gap-4 sm:pt-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:opacity-75"
                  >
                    View code ↗
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:opacity-75"
                  >
                    View project ↗
                  </a>
                </div>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
