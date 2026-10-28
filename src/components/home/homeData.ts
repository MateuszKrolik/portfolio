export const skills: Record<string, string[]> = {
  "Programming & Scripting Languages": ["Python", "C#", "Java", "TypeScript", "Golang", "SQL", "Bash"],
  "Backend": ["FastAPI", ".NET", "Spring Boot", "Node.js", "ORMs", "Entity Framework Core", "PostgreSQL", "MsSQL Server", "Redis", "Elasticsearch", "Kafka", "Web Scraping"],
  "Architecture": ["Microservices", "CQRS", "Event-driven Architecture", "Asynchronous Programming"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "GitLab", "GitHub", "Docker", "Kubernetes", "Terraform"],
  "Frontend": ["Streamlit", "Next.js", "React.js", "React Router", "TailwindCSS", "HTML5", "CSS3", "Material Design"],
  "AI / ML": ["AI Agents", "RAG", "GraphRAG", "MCP", "Agent Platform/Vertex AI", "Azure AI Foundry", "Gemini", "OpenAI", "vLLM", "AWS Kiro", "Amazon Q Developer"],
  "Testing": ["PyTest", "Playwright", "Selenium", "xUnit", "TDD", "BDD", "E2E"],
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
};

export type Workplace = {
  company: string;
  role?: string;
  period?: string;
  url?: string;
  projects: Project[];
};

export const workplaces: Workplace[] = [
  {
    company: "OChK",
    role: "Full Stack Engineer/AI Engineer",
    period: "2026 - Present",
    projects: [
      {
        title: "Agentic Web Search Tool",
        desc: "Built a dynamic & secure agentic web search tool that lets users of a chatbot from different industries search the web in parallel to standard hybrid/vector RAG retrieval, improving overall recall of the solution without sacrificing response times.",
        tags: ["AI Agents", "RAG", "Azure", "GCP", "Agent Platform/Vertex AI", "Azure AI Foundry", "C#", ".NET", "Asynchronous Programming"],
      },
      {
        title: "Port of Agentic ChatBot RAG application from Azure to GCP and on-premise",
        desc: "Ported an agentic chatbot application used by variety of clients (e.g. oil and insurance industries) to enable simultaneous deployment on 3 platforms: Azure, GCP, and on-premise via vLLM.",
        tags: ["GCP", "Agent Platform/Vertex AI", "Azure", "vLLM", "Gemini", "OpenAI", "C#", ".NET", "CQRS", "Event-driven Architecture", "Microservices", "PostgreSQL", "MsSQL Server", "React"]
      },
      {
        title: "Chatbot GraphRAG implementation parallel to hybrid/vector search",
        desc: "WIP",
        tags: ["AI Agents", "RAG", "Azure", "GCP", "Agent Platform/Vertex AI", "Azure AI Foundry", "C#", ".NET", "Asynchronous Programming"],
      },
      {
        title: "Model waiting room/Model garden",
        desc: "WIP",
        tags: ["AI Agents", "RAG", "Azure", "GCP", "vLLM", "OpenAI", "Agent Platform/Vertex AI", "Azure AI Foundry", "C#", ".NET", "Asynchronous Programming"],
      },
    ],
  },
  {
    company: "Shiji Group",
    role: "Software Engineer",
    period: "2024 - 2026",
    projects: [
      {
        title: "E2E Test Coverage Dashboard",
        desc: "Full-stack internal tool tracking E2E test coverage across financial features at Shiji Group. Simplified visibility into automation progress for QA and engineering teams.",
        tags: ["Python3", "TypeScript", "FastAPI", "PostgreSQL", "React-Router", "Web Scraping"],
      },
      {
        title: "Hotel Data Migration Tool",
        desc: "Internal maintenance tool enabling non-technical support agents to perform hotel data migrations independently, reducing developer involvement in production incidents.",
        tags: ["C#", ".NET", "Entity Framework Core", "PostgreSQL"],
      },
      {
        title: "Playwright Migration",
        desc: "Led migration of a 1600+ E2E test suite from Selenium to Playwright at Shiji Group, enabling async execution and significantly improving CI reliability and runtime.",
        tags: ["C#", "xUnit", "Playwright", "Selenium"],
      },
    ],
  },
];

export type Cert = { code: string; name: string; url: string };

export const certs: Record<string, Cert[]> = {
  "Google Cloud": [
    { code: "GCP-PMLE", name: "GCP Professional Machine Learning Engineer", url: "https://www.credly.com/badges/2067fb67-1465-4118-83a1-4f081b8caee6/public_url" },
    { code: "GCP-GEAD", name: "GCP Certified Partner Specialist Gemini Enterprise Agent Development", url: "https://www.credly.com/badges/c38a4c61-9c7a-4e9f-a3c4-b1588976c7e8/public_url" },
    { code: "GCP-GED", name: "GCP Certified Partner Specialist Gemini Enterprise Deployment", url: "https://www.credly.com/badges/c8ca6c46-4e83-4328-ad0e-65d6c5716462/public_url" },
  ],
  "Microsoft Azure": [
    { code: "AI-103", name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate", url: "https://learn.microsoft.com/api/credentials/share/en-gb/MateuszKrlik-7051/43F76FAE5E839879?sharingId=6E021BA04ADDF89B" },
    { code: "AZ-900", name: "Azure Fundamentals", url: "https://learn.microsoft.com/en-us/users/mateuszkrolik-5311/credentials/fa78c72e4b020aae" },
  ],
  "AWS": [
    { code: "MLS-C01", name: "AWS ML Engineer Associate", url: "https://www.credly.com/badges/85ac21e8-d85f-48a8-bdb0-f84b716a1673" },
    { code: "AIF-C01", name: "AWS Certified AI Practitioner", url: "https://www.credly.com/badges/2a7af272-2f00-45c4-9958-d06766541c40" },
  ],
};
