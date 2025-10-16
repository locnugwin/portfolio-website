import { Experience } from "../components/ExperienceCard";

export const experiences: Experience[] = [
  {
    id: "bcm",
    company: "beavercreek marketing",
    position: "developer intern",
    duration: "sep. 2024 - present",
    technologies: ["tanstack router", "typescript", "react bootstrap", "cloudflare workers"],
    overview: "at beavercreek marketing, i am currently building a dns validation wizard to streamline client onboarding and ensure proper subdomain configuration for white-label content delivery.",
    contributions: [
      "developing a tanstack router wizard interface with multi-step navigation flow, enabling non-technical users to validate dns configurations through an intuitive bootstrap-styled ui.",
      "integrating cloudflare dns-over-https api to programmatically query and validate records.",
    ]
  },
  {
    id: "fcsa",
    company: "farm credit services of america",
    position: "application developer intern",
    duration: "may 2025 - aug. 2025",
    technologies: ["angular", "typescript", "c#", ".net"],
    overview: "coming soon",
    contributions: [
      "coming soon",
    ],
  },
  {
    id: "rentvision",
    company: "rentvision",
    position: "software engineer intern",
    duration: "may 2024 - aug. 2024",
    technologies: ["react", "typescript", "javascript", "java", "jsp", "mustache"],
    overview: "coming soon",
    contributions: [
      "coming soon",
    ],
  },
];