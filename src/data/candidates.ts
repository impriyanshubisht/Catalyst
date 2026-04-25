export interface Candidate {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: number; // in years
  skills: string[];
  salaryExpectation: string;
  education: string;
  bio: string;
  avatarUrl: string;
}

export const mockCandidates: Candidate[] = [
  {
    id: "c1",
    name: "Alex Rivera",
    role: "Senior Full Stack Engineer",
    location: "Remote (USA)",
    experience: 7,
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    salaryExpectation: "$140k - $160k",
    education: "B.S. Computer Science, UC Berkeley",
    bio: "Passionate builder with 7 years of experience scaling web applications. Lead developer on a microservices migration that improved system uptime to 99.99%.",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: "c2",
    name: "Samantha Lee",
    role: "Frontend Developer",
    location: "New York, NY",
    experience: 4,
    skills: ["Vue.js", "React", "JavaScript", "Tailwind CSS", "Figma"],
    salaryExpectation: "$110k - $120k",
    education: "B.A. Graphic Design, NYU",
    bio: "Design-minded frontend engineer focused on creating pixel-perfect, accessible, and performant user interfaces.",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "c3",
    name: "David Chen",
    role: "Backend Systems Engineer",
    location: "San Francisco, CA",
    experience: 9,
    skills: ["Go", "Python", "Kubernetes", "Docker", "MongoDB", "Redis"],
    salaryExpectation: "$170k - $190k",
    education: "M.S. Computer Engineering, Stanford",
    bio: "Expert in building high-throughput, low-latency backend systems. Contributed to core Kubernetes features.",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: "c4",
    name: "Priya Patel",
    role: "Machine Learning Engineer",
    location: "London, UK",
    experience: 5,
    skills: ["Python", "PyTorch", "TensorFlow", "NLP", "LLMs", "LangChain"],
    salaryExpectation: "£90k - £110k",
    education: "Ph.D. Machine Learning, Imperial College London",
    bio: "Specialist in fine-tuning LLMs for domain-specific tasks. Published 3 papers on efficient transformer architectures.",
    avatarUrl: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: "c5",
    name: "Marcus Johnson",
    role: "Product Manager",
    location: "Austin, TX",
    experience: 6,
    skills: ["Agile", "Jira", "Product Strategy", "User Research", "Data Analysis"],
    salaryExpectation: "$130k - $150k",
    education: "MBA, UT Austin",
    bio: "Customer-obsessed PM with a track record of launching successful SaaS products from 0 to 1.",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  },
  {
    id: "c6",
    name: "Elena Rodriguez",
    role: "DevOps Engineer",
    location: "Remote (Spain)",
    experience: 8,
    skills: ["AWS", "Terraform", "CI/CD", "Linux", "Python", "Datadog"],
    salaryExpectation: "€80k - €100k",
    education: "B.S. Information Technology, Universitat de Barcelona",
    bio: "Automation enthusiast. Reduced deployment times by 70% at my last company by completely revamping the CI/CD pipeline.",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
  }
];
