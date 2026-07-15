import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";

const projects = [
  {
    title: "JOB PORTAL",
    description:
      "Hirred is a comprehensive full-stack job portal that enables recruiters to manage listings and candidates to seamlessly apply for jobs and track their application status using Clerk authentication and Supabase.",
    image: project1,
    github: "https://github.com/AbhiSecWizard/hirredJobPortal",
    live: "https://hirredjobportal.netlify.app/",
    tags: [
      "Supabase",
      "React",
      "JavaScript"
    ],
  },
  {
    title: "QuickKart E Commerce",
    description:
      "E commerce web Portal , where you can feel real e commerce website ui and Frontend developer",
    image: project2,
    github: "https://github.com/AbhiSecWizard/QuickKart",
    live: "https://quickkart69g.netlify.app/",
    tags: [
      "React",
      "Tailwind",
      "REST API",
      "Clerk"
    ],
  },
  {
    title: "Authentication App",
    description:
      "A complete production-ready authentication system built using the MERN stack with secure cookie-based JWT authentication. This project demonstrates real-world implementation of user registration, login, email verification, password reset via OTP, and protected routes with persistent login sessions.",
    image: project3,
    github: "https://github.com/AbhiSecWizard/AuthMern-Backend-",
    live: "https://auth-mern-frontend-wnmb.vercel.app/",
    tags: ["Tailwind", "React Js","Bravo Api","Express","Node Js","Mongo DB"],
  },
  {
    title:"Blog Beam",
    description:
      "A full-stack blog platform that enables users to create and read posts while providing an admin dashboard for complete content and comment moderation. The system supports publishing workflows with draft and approval states, ensuring quality control before content goes live. Administrators can review comments, mark them as approved or unapproved, and manage overall platform activity from a centralized dashboard. The application delivers a smooth user experience with dynamic rendering, secure APIs, and efficient state management",
    image: project4,
    github: "https://github.com/AbhiSecWizard/Blog-App-Frontend",
    live: "https://blog-app-frontend-xz19.onrender.com",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Axios", "ImageKit"]
  },
   {
  title: "E-Learning Platform (LMS)",
  description: "A full-stack Learning Management System (LMS) featuring a multi-role architecture for instructors and students. It includes an advanced admin dashboard with real-time sales value analytics (Total Sales, Revenue) using Recharts, custom dynamic theme context for fluid Light/Dark mode transitions, and strict route protection. Instructors can seamlessly manage course creation, lecture uploads, and multi-state publishing workflows (Draft/Published), while students can track their custom learning progress via secure APIs and efficient state caching.",
  image: project5,
  github: "https://github.com/AbhiSecWizard/LMS-system", 
  live: "https://lms-system-frontend-8k9n.onrender.com", // 💡 नोट: अगर लाइव लिंक अलग है तो यहाँ बदल लें
  tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Shadcn UI"]
}
];




const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
