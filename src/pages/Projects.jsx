import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";
import project6 from "@/assets/projects_img/project-6.png";

const projects = [
  {
    title: "E-Learning Platform (LMS)",
    type: "Full-stack · Multi-role",
    summary:
      "Learning management system with separate instructor and student roles. Instructors create courses, upload lectures and move them from draft to published. An admin dashboard charts sales and revenue with Recharts, and students track their learning progress.",
    highlights: [
      "Protected routes per role",
      "Light / dark theme via custom context",
      "RTK Query caching for fast navigation",
    ],
    image: project5,
    github: "https://github.com/AbhiSecWizard/LMS-system",
    live: "https://lms-system-frontend-8k9n.onrender.com",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Forever E-commerce",
    type: "Full-stack · MERN with admin panel",
    summary:
      "Full-stack e-commerce store with a customer storefront and a separate admin panel. Customers browse products, place orders and pay with multiple payment methods, while admins manage products, images and orders.",
    highlights: [
      "Admin panel for products and orders",
      "Multiple payment methods at checkout",
      "Product image uploads with Cloudinary",
    ],
    image: project6,
    github: "https://github.com/AbhiSecWizard/forever-ecommerce",
    live: "https://forever-ecommerce-frontend-tt2k.onrender.com/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Payment Integration"],
  },
  {
    title: "Blog Beam",
    type: "Full-stack · Admin dashboard",
    summary:
      "Blog platform where users write and read posts. Admins review posts through a draft and approval flow, and approve or reject comments from one dashboard.",
    image: project4,
    github: "https://github.com/AbhiSecWizard/Blog-App-Frontend",
    live: "https://blog-app-frontend-xz19.onrender.com",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Axios", "ImageKit"],
  },
  {
    title: "Authentication App",
    type: "Full-stack · MERN",
    summary:
      "Production-style auth system using cookie-based JWT. Covers registration, login, email verification, OTP password reset, protected routes and persistent sessions.",
    image: project3,
    github: "https://github.com/AbhiSecWizard/AuthMern-Backend-",
    live: "https://authentication-frontend-evo7.onrender.com",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Brevo API"],
  },
  {
    title: "Hirred Job Portal",
    type: "Full-stack · Two user roles",
    summary:
      "Recruiters post and manage job listings. Candidates apply and track the status of each application. Authentication is handled by Clerk, data by Supabase.",
    image: project1,
    github: "https://github.com/AbhiSecWizard/hirredJobPortal",
    live: "https://hirredjobportal.netlify.app/",
    tags: ["React", "JavaScript", "Supabase", "Clerk"],
  },
  {
    title: "QuickKart",
    type: "Frontend · E-commerce",
    summary:
      "E-commerce storefront focused on a clean, realistic shopping interface, with product data pulled from a REST API.",
    image: project2,
    github: "https://github.com/AbhiSecWizard/QuickKart",
    live: "https://quickkart69g.netlify.app/",
    tags: ["React", "Tailwind CSS", "REST API", "Clerk"],
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

const linkBase = `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${focusRing}`;

const Projects = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const project = projects[active];

  // Arrow-key navigation between tabs
  const onKeyDown = (e) => {
    const last = projects.length - 1;
    let next = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="projects" className="mx-auto min-h-screen max-w-6xl px-4 pb-24 pt-24 sm:px-6">
      {/* one small entrance for the panel when switching projects */}
      <style>{`
        @keyframes projectIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .project-in { animation: projectIn .35s ease both; }
        @media (prefers-reduced-motion: reduce) { .project-in { animation: none; } }
      `}</style>

      <ScrollAnimation>
        <header className="mb-10 max-w-2xl md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Full-stack applications I designed, built and deployed. Pick a project
            to see what it does and how it was built.
          </p>
        </header>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
          {/* Project list: horizontal scroll strip on mobile, vertical list on desktop */}
          <div
            role="tablist"
            aria-label="Projects"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:snap-none lg:flex-col lg:gap-1 lg:self-start lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {projects.map((p, i) => {
              const selected = i === active;
              return (
                <button
                  key={p.title}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={selected}
                  aria-controls="project-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`shrink-0 snap-start rounded-lg border px-4 py-3 text-left transition-colors lg:w-full lg:rounded-none lg:rounded-r-lg lg:border-y-0 lg:border-r-0 lg:border-l-2 ${focusRing} ${
                    selected
                      ? "border-indigo-400 bg-indigo-500/10 text-white lg:bg-indigo-500/10"
                      : "border-white/10 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 lg:border-white/10"
                  }`}
                >
                  <span className="block whitespace-nowrap text-sm font-medium sm:text-base lg:whitespace-normal">
                    {p.title}
                  </span>
                  <span className="mt-0.5 hidden text-sm text-zinc-500 lg:block">{p.type}</span>
                </button>
              );
            })}
          </div>

          {/* Selected project */}
          <div
            key={project.title}
            role="tabpanel"
            id="project-panel"
            aria-labelledby={`tab-${active}`}
            className="project-in min-w-0"
          >
            {/* screenshot in a browser frame */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3 border-b border-white/10 px-3 py-2.5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-500">
                  {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </div>
              </div>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* details */}
            <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]">
              <div>
                <p className="text-sm text-indigo-300 lg:hidden">{project.type}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:mt-0">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-prose leading-relaxed text-zinc-400">{project.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} bg-indigo-500 text-white hover:bg-indigo-400`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} border border-white/15 text-zinc-200 hover:border-white/30 hover:bg-white/5`}
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Source code
                  </a>
                </div>
              </div>

              {project.highlights && (
                <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-5 xl:self-start">
                  <h4 className="text-sm font-medium text-white">Key features</h4>
                  <ul className="mt-3 space-y-3 text-sm text-zinc-400">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Projects;