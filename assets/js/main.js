/* =========================================================
   Reza Izadian — Personal Website · main.js
   ========================================================= */

/* -----------------------------------------------------------
   CONTACT CONFIG  —  edit these with real details
   ----------------------------------------------------------- */
const CONTACT = {
  email: '',          // e.g. 'reza.izadian@email.com'  (leave '' to hide)
  phone: '',          // e.g. '+1 (613) 555-0100'
  linkedin: '',       // e.g. 'https://www.linkedin.com/in/reza-izadian'
  location: 'Ottawa, Ontario, Canada',
  resumeFile: ''      // e.g. 'assets/Reza_Izadian_Resume.pdf' to enable download
};

/* -----------------------------------------------------------
   SKILLS
   ----------------------------------------------------------- */
const SKILLS = [
  {
    icon: 'chart',
    title: 'Business Intelligence',
    tags: ['Power BI', 'DAX Studio', 'Tabular Editor', 'Dataflows', 'Semantic Models', 'SAP BusinessObjects', 'WebFOCUS', 'Crystal Reports', 'SSRS']
  },
  {
    icon: 'code',
    title: 'Development',
    tags: ['C#', 'ASP.NET MVC', 'ASP.NET Core', 'VB.NET', 'Java', 'JavaScript', 'React', 'HTML5', 'CSS3', 'REST APIs', 'WCF', 'Entity Framework']
  },
  {
    icon: 'database',
    title: 'Databases',
    tags: ['SQL Server', 'Oracle 9i–12c', 'PL/SQL', 'T-SQL', 'MySQL', 'DB2', 'MS Access', 'Data Modelling', 'ETL']
  },
  {
    icon: 'devops',
    title: 'DevOps & Tools',
    tags: ['Azure DevOps', 'Git', 'Jira', 'Team Foundation Server', 'SVN', 'CI/CD Pipelines', 'PowerShell']
  },
  {
    icon: 'server',
    title: 'Infrastructure',
    tags: ['Windows Server', 'IIS', 'Tomcat', 'Oracle Server Admin', 'Network Monitoring', 'Secure Coding', 'Encryption']
  },
  {
    icon: 'flow',
    title: 'Practices',
    tags: ['Enterprise Architecture', 'Agile / Scrum / Kanban', 'SDLC', 'Requirements Analysis', 'GoC CLF & Accessibility', 'Application Security']
  }
];

/* -----------------------------------------------------------
   EXPERIENCE  (career overview)
   ----------------------------------------------------------- */
const EXPERIENCE = [
  {
    period: '2011 – 2025',
    role: 'Programmer Analyst · BI Application Architect',
    org: 'Health Canada / Public Health Agency of Canada',
    desc: 'Designed, developed, modernized, and supported enterprise financial planning and reporting systems (MRS/MVR/MRE) using ASP.NET, Power BI, Oracle, SQL Server, WebFOCUS, and ETL. Led the migration of legacy reporting to Power BI, built 200+ reporting modules, and administered 12+ secure production servers.'
  },
  {
    period: '2006 – 2011',
    role: 'Senior Programmer Analyst · Application Developer',
    org: 'Government of Canada Consulting Engagements',
    desc: 'Delivered mission-critical N-tier web applications and financial reporting platforms for DND, Elections Canada, Department of Justice, DFO, DFAIT, and CFIA — spanning architecture, development, database design, deployment, and production support.'
  },
  {
    period: '2001 – 2006',
    role: 'Programmer Analyst · Application Developer',
    org: 'ExpressNet / IATA',
    desc: 'Built e-commerce, scheduling, and enterprise reporting applications. Designed databases and integrated reporting solutions using WebFOCUS and .NET, and implemented automation and data-management systems.'
  },
  {
    period: '2000 – 2001',
    role: 'Programmer Analyst',
    org: 'KOM International',
    desc: 'Built supply-chain analytics and logistics reporting applications, developing SQL Server reporting systems processing 10M+ records.'
  },
  {
    period: '1992 – 1995',
    role: 'Programmer Analyst · Application Developer',
    org: 'Ministry of Oil and Gas, Iran',
    desc: 'Developed budgeting, pipeline-network management, and operational applications, and supported UNIX-based enterprise business systems.'
  }
];

/* -----------------------------------------------------------
   PROJECTS  (16 engagements)
   category: gov | bi | enterprise | ecommerce
   ----------------------------------------------------------- */
const PROJECTS = [
  {
    n: 16, cat: 'gov', catLabel: 'Government',
    title: 'MRS / MVR / TMR Financial Reporting System',
    org: 'Health Canada · Government of Canada',
    period: '2011 – 2025',
    desc: 'N-Tier web platform for departmental financial planning, forecasting, and variance reporting. Migrated the reporting suite from WebFOCUS to Microsoft Power BI, built 200+ custom ad-hoc report modules, and delivered ETL pipelines feeding secure BI dashboards.',
    tags: ['ASP.NET MVC', 'C#', 'Power BI', 'WebFOCUS', 'Oracle', 'SQL Server', 'DAX', 'ETL', 'Azure DevOps']
  },
  {
    n: 15, cat: 'enterprise', catLabel: 'Enterprise',
    title: 'Magna Web Content Management System',
    org: 'High Road Communication',
    period: '2011',
    desc: 'Re-developed an existing web content management system on Sitefinity 4.1 using Agile and Test-Driven Development, delivering an N-Tier MVC web application.',
    tags: ['Sitefinity 4.1', 'VB.NET', 'C#', 'ASP.NET', 'Entity Framework', 'Telerik', 'SQL Server']
  },
  {
    n: 14, cat: 'gov', catLabel: 'Government',
    title: 'Canadian Forces Electronic Warfare Centre (CFEWC)',
    org: 'Department of National Defence',
    period: '2011',
    desc: 'Developed high-security software automating operational workflows for CFEWC analysts, dramatically improving productivity for the Operations department.',
    tags: ['VB.NET', 'C#', 'ASP.NET 3.5', 'Oracle 11g', 'TDD', 'Crystal Reports']
  },
  {
    n: 13, cat: 'gov', catLabel: 'Government',
    title: 'FAST — IT Renewal Program',
    org: 'Elections Canada',
    period: '2009 – 2011',
    desc: 'Centralized key election information services — elector registration, payment, results, and location management — from distributed returning offices into a single secure environment, delivered across four Agile teams.',
    tags: ['VB.NET', 'C#', 'ASP.NET 3.5', 'Oracle 10g', 'MVC', 'Agile / TDD']
  },
  {
    n: 12, cat: 'gov', catLabel: 'Government',
    title: 'iCase — Case Management & Timekeeping',
    org: 'Department of Justice',
    period: '2008 – 2009',
    desc: 'A national, multi-level-security case-management system integrated with the department’s Recorded Information Management System (iRIMS), consolidating multiple legacy systems into one national database.',
    tags: ['VB.NET', 'C#', 'ASP.NET 2.0', 'MVC', 'SQL Server 2005', 'Oracle 9i', 'SSRS']
  },
  {
    n: 11, cat: 'gov', catLabel: 'Government',
    title: 'National Centralized Attendant Service (NCAS)',
    org: 'Department of National Defence',
    period: '2008',
    desc: 'High-security application merging base information with Active Directory personnel data, enabling users to allocate, monitor, compare, and validate personal information.',
    tags: ['VB.NET', 'C#', 'ASP.NET 3.0', 'Oracle 9i', 'SQL Server 2005', 'MVC']
  },
  {
    n: 10, cat: 'gov', catLabel: 'Government',
    title: 'Emergency Help & PCN Records',
    org: 'Canadian Food Inspection Agency',
    period: '2008',
    desc: 'Resolved critical application issues and updated emergency-help records in the PCN database for the agency’s inspection operations.',
    tags: ['ASP.NET', 'VB.NET', 'C#', 'SQL Server']
  },
  {
    n: 9, cat: 'gov', catLabel: 'Government',
    title: 'AICFI — Fisheries Financial Planning & Reporting',
    org: 'Fisheries and Oceans Canada',
    period: '2007 – 2008',
    desc: 'Financial planning, contribution-agreement, and reporting platform for the Atlantic Integrated Commercial Fisheries Initiative, serving 34 Mi’kmaq and Maliseet First Nations with multi-year aggregate reporting.',
    tags: ['VB.NET', 'C#', 'ASP.NET 2.0', 'SQL Server 2005', 'Oracle 9i', 'Crystal Reports']
  },
  {
    n: 8, cat: 'gov', catLabel: 'Government',
    title: 'AAROM — Aquatic Resource Management',
    org: 'Fisheries and Oceans Canada',
    period: '2007',
    desc: 'Financial application and reporting tools for the Aboriginal Aquatic Resource and Oceans Management program, allocating and reporting results-based funding over a multi-year basis.',
    tags: ['VB.NET', 'C#', 'ASP.NET 2.0', 'SQL Server 2005', 'Oracle 10g', 'MVC']
  },
  {
    n: 7, cat: 'bi', catLabel: 'BI & Reporting',
    title: 'Reference Levels Database System',
    org: 'Foreign Affairs & International Trade (DFAIT)',
    period: '2006 – 2007',
    desc: 'Financial planning and reporting system enabling the DFAIT Budget Division to allocate, monitor, control, and report departmental financial resources over a multi-year basis, upgrading WebFOCUS 5 to 7.3.',
    tags: ['WebFOCUS', 'VB.NET', 'C#', 'ASP.NET 2.0', 'Oracle 9i', 'SQL Server 2005']
  },
  {
    n: 6, cat: 'bi', catLabel: 'BI & Reporting',
    title: 'Data Request Schedule (DRS)',
    org: 'ExpressNet, Ottawa',
    period: '2005 – 2006',
    desc: 'Scheduling platform for reporting data requests connecting to any native, relational, XML, or enterprise data source, with report distribution in Excel, PDF, HTML, and Crystal formats.',
    tags: ['WebFOCUS', 'VB.NET', 'C#', 'ASP.NET', 'SQL Server', 'Oracle', 'Report Caster']
  },
  {
    n: 5, cat: 'enterprise', catLabel: 'Enterprise',
    title: 'Online Dynamic Web Application',
    org: 'ExpressNet, Ottawa',
    period: '2004 – 2005',
    desc: 'N-Tier web application providing login, registration, and immigration application forms for new immigrants, with full data-access and business-logic layers.',
    tags: ['VB.NET', 'C#', 'ASP.NET', 'SQL Server 2000', 'Crystal Reports']
  },
  {
    n: 4, cat: 'bi', catLabel: 'BI & Reporting',
    title: 'Auto Report Schedule (ARS)',
    org: 'International Air Transport Association (IATA)',
    period: '2003 – 2004',
    desc: 'Automated report generation and Focexec jobs running under WebFOCUS to create lost-baggage reports and distribute them to airlines for investigation.',
    tags: ['WebFOCUS', 'VB.NET', 'C#', 'ASP.NET', 'SQL Server 2000', 'Report Caster']
  },
  {
    n: 3, cat: 'ecommerce', catLabel: 'E-Commerce',
    title: 'Storefront E-Commerce Platform',
    org: 'ExpressNet, Ottawa',
    period: '2001 – 2003',
    desc: 'Full N-Tier online catalogue and retail platform with shopping carts, membership, secure payment processing, inventory, product catalogues, and an administrative back end.',
    tags: ['ASP.NET 1.0', 'VB.NET', 'C#', 'WebFOCUS', 'SQL Server 2000', 'ADO.NET']
  },
  {
    n: 2, cat: 'enterprise', catLabel: 'Enterprise',
    title: 'Global Supply Chain Analytics',
    org: 'KOM International',
    period: '2000 – 2001',
    desc: 'Supply-chain and warehousing efficiency solution with a Visual Basic front end and SQL Server back end, processing and analyzing 10M+ logistics records.',
    tags: ['Visual Basic 6.0', 'SQL Server', 'ADO', 'T-SQL']
  },
  {
    n: 1, cat: 'enterprise', catLabel: 'Enterprise',
    title: 'Budgets, Pipeline & UNIX Systems',
    org: 'Ministry of Oil and Gas, Iran',
    period: '1992 – 1995',
    desc: 'Suite of enterprise applications: a budgets-administration system, a client-server pipeline-network application, UNIX shell scripting support, and a subscription-fees system.',
    tags: ['Visual Basic 4.0', 'SQL Server', 'FoxPro', 'UNIX Shell']
  }
];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'gov', label: 'Government of Canada' },
  { key: 'bi', label: 'BI & Reporting' },
  { key: 'enterprise', label: 'Enterprise Apps' },
  { key: 'ecommerce', label: 'E-Commerce' }
];

/* -----------------------------------------------------------
   ICONS
   ----------------------------------------------------------- */
const ICONS = {
  chart: '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 3 4-6"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  devops: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',
  server: '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>',
  flow: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4a2 2 0 0 1 2 2V14"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
};
const svg = (name) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;

/* -----------------------------------------------------------
   RENDER
   ----------------------------------------------------------- */
function renderSkills() {
  const el = document.getElementById('skillsGrid');
  el.innerHTML = SKILLS.map(s => `
    <div class="skill-card reveal">
      <div class="skill-icon">${svg(s.icon)}</div>
      <h3>${s.title}</h3>
      <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

function renderTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item reveal">
      <div class="tl-period">${e.period}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-org">${e.org}</div>
      <p class="tl-desc">${e.desc}</p>
    </div>`).join('');
}

function renderFilters() {
  const el = document.getElementById('filters');
  el.innerHTML = FILTERS.map((f, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`
  ).join('');
  el.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.filter-btn');
    if (!btn) return;
    el.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
}

function renderProjects() {
  const el = document.getElementById('projectsGrid');
  el.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal" data-cat="${p.cat}">
      <div class="pc-top">
        <span class="pc-cat">${p.catLabel}</span>
        <span class="pc-period">${p.period}</span>
      </div>
      <h3 class="pc-title">${p.title}</h3>
      <div class="pc-org">${p.org}</div>
      <p class="pc-desc">${p.desc}</p>
      <div class="pc-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </article>`).join('');
}

function applyFilter(key) {
  document.querySelectorAll('.project-card').forEach(card => {
    const show = key === 'all' || card.dataset.cat === key;
    card.classList.toggle('hide', !show);
  });
}

function renderContact() {
  const el = document.getElementById('contactActions');
  const items = [];
  if (CONTACT.email) items.push(`<a class="contact-link primary" href="mailto:${CONTACT.email}">${svg('mail')} Email Me</a>`);
  if (CONTACT.linkedin) items.push(`<a class="contact-link" href="${CONTACT.linkedin}" target="_blank" rel="noopener">${svg('linkedin')} LinkedIn</a>`);
  if (CONTACT.phone) items.push(`<a class="contact-link" href="tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}">${svg('phone')} ${CONTACT.phone}</a>`);
  if (CONTACT.resumeFile) items.push(`<a class="contact-link" href="${CONTACT.resumeFile}" download>${svg('download')} Download Résumé</a>`);
  if (CONTACT.location) items.push(`<span class="contact-link" style="cursor:default">${svg('pin')} ${CONTACT.location}</span>`);

  // Fallback when no contact methods are configured yet
  if (!CONTACT.email && !CONTACT.linkedin && !CONTACT.phone) {
    items.unshift(`<span class="contact-link" style="cursor:default">${svg('mail')} Add your email in main.js</span>`);
  }
  el.innerHTML = items.join('');
}

/* -----------------------------------------------------------
   INTERACTIONS
   ----------------------------------------------------------- */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

function initHeader() {
  const header = document.getElementById('header');
  const progress = document.getElementById('scrollProgress');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileNav() {
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  const close = () => { btn.classList.remove('open'); nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('.mobile-nav-link').forEach(a => a.addEventListener('click', close));
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const map = {};
  links.forEach(l => { const id = l.getAttribute('href').slice(1); map[id] = l; });
  const sections = Object.keys(map).map(id => document.getElementById(id)).filter(Boolean);
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        if (map[e.target.id]) map[e.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('visible')); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(e => obs.observe(e));
}

function initCounters() {
  const nums = document.querySelectorAll('.stat-num');
  const run = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  nums.forEach(n => obs.observe(n));
}

/* -----------------------------------------------------------
   INIT
   ----------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderTimeline();
  renderFilters();
  renderProjects();
  renderContact();

  initTheme();
  initHeader();
  initMobileNav();
  initScrollSpy();
  initReveal();
  initCounters();

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
