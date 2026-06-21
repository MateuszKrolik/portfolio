export const skills: Record<string, string[]> = {
  "Programming & Scripting Languages": ["Python", "C#", "Java", "TypeScript", "Golang", "SQL", "Bash"],
  "Backend": ["FastAPI", ".NET", "Spring Boot", "Node.js", "ORMs", "PostgreSQL", "Redis", "Elasticsearch", "Kafka"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "GitLab", "GitHub", "Docker", "Kubernetes", "Terraform"],
  "Frontend": ["Streamlit", "Next.js", "React.js", "TailwindCSS", "HTML5", "CSS3", "Material Design"],
  "AI / ML": ["AWS Kiro", "Amazon Q Developer", "MCP", "Agents", "RAG"],
  "Testing": ["PyTest", "Playwright", "Selenium", "xUnit", "TDD", "BDD", "E2E"],
};

export const projects = [
  {
    title: "E2E Test Coverage Dashboard",
    desc: "Full-stack internal tool tracking E2E test coverage across financial features at Shiji Group. Simplified visibility into automation progress for QA and engineering teams.",
    tags: ["Python3", "TypeScript", "FastAPI", "PostgreSQL", "React-Router", "Web Scraping"],
    status: "Professional",
  },
  {
    title: "Hotel Data Migration Tool",
    desc: "Internal maintenance tool enabling non-technical support agents to perform hotel data migrations independently, reducing developer involvement in production incidents.",
    tags: ["C#", ".NET", "Entity Framework Core", "PostgreSQL"],
    status: "Professional",
  },
  {
    title: "Playwright Migration",
    desc: "Led migration of a 1600+ E2E test suite from Selenium to Playwright at Shiji Group, enabling async execution and significantly improving CI reliability and runtime.",
    tags: ["C#", "xUnit", "Playwright", "Selenium"],
    status: "Professional",
  },
];

export const certs = [
  { code: "MLS-C01", name: "AWS ML Engineer Associate", url: "https://www.credly.com/badges/85ac21e8-d85f-48a8-bdb0-f84b716a1673" },
  { code: "AIF-C01", name: "AWS Certified AI Practitioner", url: "https://www.credly.com/badges/2a7af272-2f00-45c4-9958-d06766541c40" },
  { code: "AZ-900", name: "Azure Fundamentals", url: "https://learn.microsoft.com/en-us/users/mateuszkrolik-5311/credentials/fa78c72e4b020aae" },
];
