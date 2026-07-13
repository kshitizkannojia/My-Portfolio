// Cache-bust: force Turbopack recompile
import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">⚡</span>,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Fl</span>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">FA</span>,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Da</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "taxibill",
    category: "Multi-Tenant SaaS",
    title: "TaxiBill",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    github: "https://github.com/kshitizkannojia/TaxiBill",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A production-grade, multi-tenant SaaS PWA for taxi &amp; travel
            companies.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built with React 18, TypeScript, Vite, Tailwind CSS, and Framer
            Motion — deployed on Vercel with GitHub Actions CI. Architected a
            multi-tenant Supabase backend powered by Postgres with Row Level
            Security and magic-link OTP authentication, supporting multiple
            drivers and companies from a single codebase.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Multi-Tenant Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Each taxi company operates as an isolated tenant with its own
            drivers, invoices, and billing data — all secured at the database
            layer via Postgres Row Level Security policies. Magic-link OTP
            authentication ensures drivers can sign in quickly without managing
            passwords, while tenant isolation guarantees no cross-company data
            leakage.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Security &amp; Hardening
          </TypographyH3>
          <p className="font-mono mb-2">
            Hardened with strict Content Security Policy headers, HSTS preload
            for transport security, Zod schema validation on every input
            boundary, and React ErrorBoundary for graceful runtime error
            recovery. The PWA is installable on any device with offline-capable
            service worker caching.
          </p>
        </div>
      );
    },
  },
  {
    id: "jobhunter",
    category: "AI Automation Platform",
    title: "Internship & Job Hunter",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    github: "https://github.com/kshitizkannojia/internship-job-hunter",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An AI-powered job outreach automation system — from discovery to
            inbox.
          </TypographyP>
          <TypographyP className="font-mono ">
            A full-stack automation platform built with React, FastAPI, and
            PostgreSQL that discovers target companies via Apollo.io and
            Playwright scraping, generates hyper-personalized cold emails using
            Groq AI (Llama 3.3 70B), and sends them through Gmail OAuth2 with
            open tracking, auto follow-ups, and rate limiting.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Async Multi-Agent Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Engineered an async multi-agent architecture that handles concurrent
            scraping, email verification via ZeroBounce, AI content generation,
            and scheduled sending — all running in parallel without blocking.
            Server-Sent Events (SSE) stream live progress updates to the React
            frontend so you can watch the pipeline work in real time.
          </p>

          <TypographyH3 className="my-4 mt-8">
            AI-Powered Email Generation
          </TypographyH3>
          <p className="font-mono mb-2">
            Each outreach email is hyper-personalized using Groq AI with the
            Llama 3.3 70B model — the system scrapes company context, role
            details, and team info to craft emails that feel hand-written. Auto
            follow-ups are scheduled with smart rate limiting to avoid spam
            filters, and open tracking provides analytics on engagement.
          </p>
        </div>
      );
    },
  },
  {
    id: "japfainvoice",
    category: "Mobile OCR App",
    title: "Japfa Invoice",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "#",
    github: "https://github.com/kshitizkannojia/Japfa-Invoice",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An Android OCR invoice scanner that cuts data entry from 7 minutes
            to under 30 seconds.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built for Japfa Comfeed India using Flutter, Riverpod, SQLite, ML
            Kit, and Firebase. A strict label-driven invoice parser tuned to 10
            real GST invoices with an offline-first architecture and a
            verify-and-edit-first UX that puts accuracy before speed.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Offline-First Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed with offline-first SQLite storage and v1→v2 schema
            migration support, so field workers can scan and store invoices
            without network connectivity. Data syncs to Firebase when
            connectivity is restored, ensuring nothing is lost even in remote
            warehouse environments.
          </p>

          <TypographyH3 className="my-4 mt-8">
            CI/CD &amp; Quality
          </TypographyH3>
          <p className="font-mono mb-2">
            Shipped with GitHub Actions CI covering lint, tests, Android APK
            build, and iOS compile-verify on macOS — all triggered automatically
            on tag-based releases. The pipeline ensures every release is
            production-ready before it reaches devices.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "#",
    github: "https://github.com/kshitizkannojia/My-Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
