export const siteConfig = {
  name: "Fazle Mohammed Tasfiq",
  title: "CSE Undergraduate | Full-Stack & ML/NLP",
  description:
    "Portfolio of Fazle Mohammed Tasfiq — CSE undergraduate building full-stack systems and ML/NLP research.",
  accentColor: "#0d9488",
  social: {
    email: "mohammad.tasfiq@gmail.com",
    linkedin: "https://www.linkedin.com/in/fazle-mohammed-tasfiq/",
    github: "https://github.com/Tasfiq95",
  },
  aboutMe:
    "I'm a final-year Computer Science and Engineering student at BRAC University who likes seeing a project through, not just prototyping it. I've built full-stack platforms — payment flows, role-based dashboards, REST APIs — across Laravel/Vue and Node/Express, and I'm currently doing ongoing ML/NLP research: a multilingual RAG evaluation pipeline and a medical-image security study across several CNN architectures. Looking for internship or full-time opportunities in software, AI/ML, or research.",
  skills: [
    "Python",
    "JavaScript/TypeScript",
    "SQL",
    "PHP",
    "Java",
    "x86 Assembly",
    "Laravel",
    "Vue.js",
    "React",
    "Node.js/Express",
    "TailwindCSS",
    "PyTorch",
    "Keras/Scikit-learn",
    "LangChain/LangGraph",
    "ChromaDB",
    "PostgreSQL/MongoDB",
    "Docker",
    "Git",
  ],
  projects: [
    {
      name: "HelpRelief — Disaster Relief Coordination Platform",
      description:
        "Shipped the volunteer/NGO-staff dashboards — profile management, live campaign and state views, and task activity tracking — plus the Laravel REST APIs and Eloquent queries behind campaign maps, report aggregation, and task-completion metrics.",
      link: "https://github.com/tanximsiam/HelpRelief",
      skills: ["Vue.js", "Laravel", "PostgreSQL", "TailwindCSS"],
    },
    {
      name: "Kinder — Babysitter Booking Platform",
      description:
        "Built the SSLCommerz payment flow for completed bookings end to end — payment records, transaction IDs, platform-fee calculation, gateway callbacks — plus the parent booking-payment screens and their success/error/cancel states.",
      link: "https://github.com/farahdesu/470-",
      skills: ["React", "Node.js", "Express", "MongoDB", "SSLCommerz"],
    },
    {
      name: "QA Classification (Course Project)",
      description:
        "Implemented a BiLSTM classifier (embedding layer, bidirectional LSTM, dense softmax head) trained on GloVe and Skip-gram embeddings, benchmarked against TF-IDF/BoW Logistic Regression, Random Forest, and unidirectional LSTM baselines.",
      link: "",
      skills: ["Python", "Keras", "Scikit-learn", "NLTK"],
    },
    {
      name: "Battleship",
      description:
        "Built the majority of a 2-person team's x86 Assembly Battleship game: 8x8 grid with a hidden ship-placement layer, BIOS-clock-seeded randomization, hit/miss state tracking, and a scoring/accuracy system across multiple difficulty levels.",
      link: "https://github.com/Tasfiq95/CSE341P-Battleship_Game",
      skills: ["x86 Assembly", "EMU8086"],
    },
    {
      name: "Smart City Network Design",
      description:
        "Designed the VLSM address tree, topology, and IP/DHCP configuration for a healthcare network simulation in Cisco Packet Tracer.",
      link: "",
      skills: ["Cisco Packet Tracer", "VLSM", "DHCP"],
    },
  ],
  experience: [
    {
      company: "Collaborative Undergraduate Thesis, BRAC University",
      title: "RAG Evaluation for Multilingual QA — Tamil Track",
      dateRange: "Jul 2025 - Present",
      bullets: [
        "Built the web-scraping, dataset-curation, and LLM-based QA-generation pipeline for the Tamil track of a 5-language (Tamil, Bengali, Hindi, Nepali, Urdu) multilingual RAG benchmark, working across the shared pipeline design with the team.",
        "Evaluated 4 LLMs on direct question answering, then built and evaluated a RAG pipeline combining ChromaDB retrieval with those LLMs.",
        "Publication in progress.",
      ],
    },
    {
      company: "Collaborative Research",
      title: "Medical Image Security Research",
      dateRange: "Nov 2025 - Present",
      bullets: [
        "Building an encryption-decryption image-security pipeline across 5 CNN architectures (MobileNetV3, MobileViT, ResNet18, ShuffleNetV2, SqueezeNet) on brain tumor MRI and COVID-19 scans, using chaotic map-based image encryption to stress-test model robustness.",
        "Generating Grad-CAM interpretability maps and pre/post-attack accuracy comparisons per model.",
        "Ongoing research paper.",
      ],
    },
  ],
  education: [
    {
      school: "BRAC University",
      degree: "B.Sc. in Computer Science and Engineering",
      dateRange: "Sept 2022 - Expected Sept 2026",
      achievements: ["CGPA: 3.78 / 4.00"],
    },
  ],
};
