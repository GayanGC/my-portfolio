// ============ DATA ============
const skills = [
  { icon: "⚛️", title: "MERN Stack", desc: "MongoDB, Express.js, React, Node.js — full-stack development for scalable web applications.", level: 90, color: "from-cyan-600/20 to-cyan-600/5" },
  { icon: "☕", title: "Java & PHP", desc: "Backend development with Java and PHP including RESTful APIs, MySQL integration, and OOP patterns.", level: 85, color: "from-orange-600/20 to-orange-600/5" },
  { icon: "📊", title: "System Analysis & Design", desc: "UML modeling, business process analysis, requirement engineering, and Agile/Scrum with Jira.", level: 92, color: "from-purple-600/20 to-purple-600/5" },
  { icon: "🔒", title: "Security & Auth", desc: "Multi-Factor Authentication (MFA), secure payment gateways, password hashing, and role-based access.", level: 88, color: "from-pink-600/20 to-pink-600/5" },
  { icon: "🛠️", title: "Tools & DevOps", desc: "Git/GitHub, Postman, Firebase, Linux (Ubuntu/WSL), and collaborative development workflows.", level: 85, color: "from-emerald-600/20 to-emerald-600/5" },
  { icon: "📱", title: "Mobile & Cross-Platform", desc: "React Native (Expo) for cross-platform mobile apps with shared Firebase backend integration.", level: 80, color: "from-amber-600/20 to-amber-600/5" },
];

const projects = [
  {
    id: "bakery",
    img: "assets/images/project-bakery.png", title: "Sweet Delights — Bakery Management System",
    category: "MERN Stack · ERP", featured: true, tag: "mern",
    desc: "Led a team of 7 to build a full MERN ERP solution with multi-role access, Two-Tier Admin Approval with MFA, and an Omni-Channel Cart with virtual payment processing.",
    tech: ["MongoDB", "Express", "React", "Node.js", "MFA"]
  },
  {
    id: "gig",
    img: "assets/images/project-parttime.png", title: "Part Time — Student Gig Marketplace",
    category: "React · React Native · Firebase", featured: true, tag: "mern",
    desc: "Dual-platform (Web & Mobile) solution featuring QR-based attendance tracking, real-time job feeds, and a shared Firebase backend for seamless synchronization.",
    tech: ["React", "React Native", "Firebase", "Expo"]
  },
  {
    id: "property",
    img: "assets/images/project-property.png", title: "Property Sales Management System",
    category: "Java · MySQL", featured: false, tag: "java",
    desc: "A Java/MySQL backend API service with robust user management, property data handling, and structured CRUD operations.",
    tech: ["Java", "MySQL", "REST API"]
  },
  {
    id: "login",
    img: "assets/images/project-login.png", title: "User Login & Profile Management",
    category: "PHP · MySQL", featured: false, tag: "php",
    desc: "Secure authentication system built with PHP and MySQL, featuring password hashing, profile management, and data protection best practices.",
    tech: ["PHP", "MySQL", "Security"]
  },
  {
    id: "airdraw",
    img: "assets/images/project-airdraw.png", title: "Air Drawing Project",
    category: "Python / Computer Vision", featured: false, tag: "python",
    desc: "A Python-based computer vision project that allows users to draw in the air using hand gestures tracked via webcam.",
    tech: ["Python", "OpenCV", "NumPy"],
    link: "https://github.com/GayanGC/Air-Drawing-Project",
    linkType: "github",
    linkLabel: "View on GitHub"
  },
  {
    id: "iot",
    img: "assets/images/project-iot.png", title: "IoT Based Embedded System",
    category: "IoT / Embedded Systems", featured: false, tag: "iot",
    desc: "A campus 1st Year 1st Semester project focused on embedded systems and smart automation using ESP32. Source code is not publicly available.",
    tech: ["IoT", "ESP32", "Embedded Systems", "C++"],
    link: "https://www.linkedin.com/posts/gayan-wickramarathna-_iot-embeddedsystems-esp32-activity-7471673908597915649-2eB8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEqD5ScBdRRFpxhzJFuJg1235hKN0NxUC64",
    linkType: "linkedin",
    linkLabel: "View on LinkedIn"
  },
];

const education = [
  { icon: "🎓", title: "BSc (Hons) in IT — Specializing in ISE", place: "Sri Lanka Institute of Information Technology (SLIIT)", status: "Reading — 2nd Year", color: "purple" },
  { icon: "📜", title: "Certified Level 01 — AAT Sri Lanka", place: "Association of Accounting Technicians", status: "Completed", color: "pink" },
  { icon: "🧠", title: "Diploma in Psychology & Counselling", place: "IMBS Campus", status: "Reading", color: "cyan" },
];

// ============ RENDER SKILLS ============
const skillsGrid = document.getElementById("skills-grid");
skills.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "skill-card anim-scale";
  card.style.animationDelay = `${i * 0.1}s`;
  card.innerHTML = `
    <div class="skill-icon bg-gradient-to-br ${s.color}"><span>${s.icon}</span></div>
    <h3 class="text-lg font-semibold mb-2 font-['Space_Grotesk']">${s.title}</h3>
    <p class="text-gray-500 text-sm leading-relaxed">${s.desc}</p>
    <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
  `;
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  });
  skillsGrid.appendChild(card);
});

// ============ RENDER PROJECTS ============
const projectsGrid = document.getElementById("projects-grid");

// Icon SVG paths
const GITHUB_ICON = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;
const LINKEDIN_ICON = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

function getProjectIcon(p) {
  return p.linkType === "linkedin" ? LINKEDIN_ICON : GITHUB_ICON;
}

function getProjectLink(p) {
  return p.link || "https://github.com/GayanGC/";
}

function renderProjects(filter = "all") {
  projectsGrid.innerHTML = "";
  const filtered = filter === "all" ? projects : projects.filter(p => p.tag === filter);
  
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = `project-card anim-scale visible ${p.featured ? "featured-project" : ""}`;
    card.style.animationDelay = `${i * 0.1}s`;
    const techHtml = p.tech.map(t => `<span class="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-gray-300">${t}</span>`).join("");
    const featuredBadge = p.featured ? `<span class="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] tracking-widest uppercase rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">⭐ Featured</span>` : "";
    const linkUrl = getProjectLink(p);
    const linkIcon = getProjectIcon(p);
    const linkLabel = p.linkLabel || "View on GitHub";
    card.innerHTML = `
      ${featuredBadge}
      <div class="overflow-hidden"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="project-overlay">
        <span class="text-purple-400 text-xs tracking-widest uppercase mb-1">${p.category}</span>
        <h3 class="text-lg font-semibold font-['Space_Grotesk']">${p.title}</h3>
        <p class="text-gray-400 text-sm mt-1 mb-3">${p.desc}</p>
        <div class="flex flex-wrap gap-1.5 mb-3">${techHtml}</div>
        <a href="${linkUrl}" target="_blank" class="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          ${linkIcon}
          ${linkLabel}
        </a>
      </div>
      <div class="p-5">
        <span class="text-purple-400 text-xs tracking-widest uppercase">${p.category}</span>
        <h3 class="text-base font-semibold font-['Space_Grotesk'] mt-1">${p.title}</h3>
        <p class="text-gray-500 text-sm mt-1 mb-3">${p.desc}</p>
        <div class="flex flex-wrap gap-1.5 mb-3">${techHtml}</div>
        <a href="${linkUrl}" target="_blank" class="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          ${linkIcon}
          ${linkLabel}
        </a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

renderProjects();

// Filter Logic
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active", "border-purple-500/50", "bg-purple-500/10"));
    btn.classList.add("active", "border-purple-500/50", "bg-purple-500/10");
    renderProjects(btn.dataset.filter);
  });
});

// ============ RENDER EDUCATION ============
const educationGrid = document.getElementById("education-grid");
education.forEach((e, i) => {
  const card = document.createElement("div");
  card.className = "anim-reveal p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-5 hover:border-purple-500/25 transition-all duration-300";
  card.style.animationDelay = `${i * 0.12}s`;
  const statusColor = e.status === "Completed" ? "text-green-400" : "text-yellow-400";
  card.innerHTML = `
    <div class="text-3xl mt-1">${e.icon}</div>
    <div>
      <h3 class="text-lg font-semibold font-['Space_Grotesk'] mb-1">${e.title}</h3>
      <p class="text-gray-500 text-sm">${e.place}</p>
      <span class="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-white/5 ${statusColor}">${e.status}</span>
    </div>
  `;
  educationGrid.appendChild(card);
});

// ============ SCROLL ANIMATIONS ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
        setTimeout(() => { bar.style.width = bar.dataset.level + "%"; }, 400);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".anim-reveal, .anim-slide-right, .anim-slide-left, .anim-scale").forEach((el) => observer.observe(el));

// ============ NAVBAR SCROLL & PROGRESS ============
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("navbar-scrolled", window.scrollY > 50);
  
  // Progress Bar
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
});

// ============ MOBILE MENU ============
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;
mobileToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.style.maxHeight = menuOpen ? mobileMenu.scrollHeight + "px" : "0";
  const spans = mobileToggle.querySelectorAll("span");
  spans[0].style.transform = menuOpen ? "rotate(45deg) translate(4px, 4px)" : "";
  spans[1].style.opacity = menuOpen ? "0" : "1";
  spans[2].style.transform = menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "";
  spans[2].style.width = menuOpen ? "24px" : "16px";
});
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.style.maxHeight = "0";
    const spans = mobileToggle.querySelectorAll("span");
    spans[0].style.transform = "";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "";
    spans[2].style.width = "16px";
  });
});

// ============ CURSOR GLOW ============
const cursorGlow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX - 250 + "px";
  cursorGlow.style.top = e.clientY - 250 + "px";
});

// Native functionality enabled.

