export const WALLET = "Cs3u9b2UcogxWWAmT4PmD4ygcMrCDiZAYAEhc9Z5h1D1";

export const GITHUB = "https://github.com/Netdot-devs/Netdot-devs";

export const services = [
  {
    index: "01",
    mark: "↗",
    title: "Project scaling",
    accent: "& strategy",
    copy: "Technical roadmaps, architecture reviews and the infrastructure decisions that support your next stage.",
    price: "$150",
  },
  {
    index: "02",
    mark: "✳",
    title: "AI automation",
    accent: "& integrations",
    copy: "Purpose-built assistants, intelligent workflows and integrations that reduce repetitive work.",
    price: "$200",
  },
  {
    index: "03",
    mark: "⬡",
    title: "Blockchain",
    accent: "& Web3",
    copy: "Solana integrations, smart-contract engineering and useful decentralized product experiences.",
    price: "$350",
  },
  {
    index: "04",
    mark: "⌘",
    title: "GitHub",
    accent: "& DevOps",
    copy: "Clean repositories, deployment automation, CI/CD workflows and dependable infrastructure.",
    price: "$150",
  },
  {
    index: "05",
    mark: "▣",
    title: "Websites",
    accent: "& dApps",
    copy: "High-performance websites, interactive dashboards and wallet-connected applications.",
    price: "$300",
  },
] as const;

export const process = [
  {
    step: "01 / DISCOVER",
    title: "Define the right problem.",
    copy: "Align on goals, constraints, technical needs and measurable deliverables.",
  },
  {
    step: "02 / DESIGN & BUILD",
    title: "Engineer with intention.",
    copy: "Build in milestones with clear communication, version control and thoughtful testing.",
  },
  {
    step: "03 / SHIP & EVOLVE",
    title: "Launch with confidence.",
    copy: "Document, hand over and plan the next iteration around real project needs.",
  },
] as const;

export const ticker = [
  "INDEPENDENT BY DESIGN",
  "ENGINEERING FIRST",
  "BUILT FOR SCALE",
  "NO HYPE. JUST DELIVERY.",
] as const;

export const focuses = [
  "Project scaling & strategy",
  "AI automation & integrations",
  "Blockchain & Web3",
  "GitHub & DevOps",
  "Websites & dApps",
  "Not sure yet",
] as const;

export const team = [
  { name: "Jazz FBrowne", photo: "/team/jazz-fbrowne.jpg?v=5" },
  { name: "Yusuf King", photo: "/team/yusuf-king.jpg?v=5" },
] as const;

export const delivery = [
  ["Discover", "Define goals, dependencies and success criteria."],
  ["Scope", "Agree deliverables, milestones, fees and responsibilities."],
  ["Build", "Implement with version control and appropriate reviews."],
  ["Validate", "Test functionality, security considerations and usability."],
  ["Handover", "Deliver documentation, access and optional ongoing support."],
] as const;
