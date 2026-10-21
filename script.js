const icons = {
  microscope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M13 3l3 3"/><path d="m12 4 4 4"/><path d="M8 8l4-4 5 5-4 4-5-5Z"/>',
  wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4l-5.6 5.6a2 2 0 0 0 2.8 2.8l5.6-5.6a5 5 0 0 0 6.4-6.4l-3.4 3.4-3.5-3.5 3.4-3.4Z"/>',
  scale: '<path d="m16 16 3-8 3 8c-.8 1.4-5.2 1.4-6 0Z"/><path d="m2 16 3-8 3 8c-.8 1.4-5.2 1.4-6 0Z"/><path d="M5 8h14"/><path d="M12 3v18"/><path d="M9 21h6"/>',
  settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-1.89 1.89-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.02 1.52V21h-2.67v-.09a1.65 1.65 0 0 0-1.02-1.52 1.65 1.65 0 0 0-1.82.33l-.06.06-1.89-1.89.06-.06A1.65 1.65 0 0 0 7.93 16a1.65 1.65 0 0 0-1.52-1.02H6.3v-2.67h.09a1.65 1.65 0 0 0 1.52-1.02 1.65 1.65 0 0 0-.33-1.82l-.06-.06 1.89-1.89.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1.02-1.52V6.3h2.67v.09A1.65 1.65 0 0 0 16 7.91a1.65 1.65 0 0 0 1.82-.33l.06-.06 1.89 1.89-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.52 1.02H21v2.67h-.09A1.65 1.65 0 0 0 19.4 15Z" transform="translate(-1 -1)"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  'clipboard-check': '<rect x="5" y="5" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="m9 15 2 2 4-4"/>',
  kanban: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M6 8v5M12 8v8M18 8v3"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
};
const fallback = [
  {
    "id": "pratheeksha",
    "title": "Pratheeksha Science Educator",
    "description": "Professional portfolio of a Science and Biology educator showcasing teaching qualifications, classroom experience, and student-centred learning.",
    "category": "Portfolio",
    "status": "live",
    "featured": true,
    "url": "https://pratheeksha.professionals-cv.in/",
    "icon": "microscope",
    "accent": "green",
    "tags": [
      "Education",
      "Science",
      "Biology"
    ]
  },
  {
    "id": "nivin-portfolio",
    "title": "Nivin Varkey",
    "description": "Piping engineering professional specializing in fabrication, spool detailing, project coordination, and engineering workflow automation.",
    "category": "Portfolio",
    "status": "live",
    "featured": true,
    "url": "https://nivin.professionals-cv.in/",
    "icon": "wrench",
    "accent": "blue",
    "tags": [
      "Piping Engineering",
      "Fabrication",
      "Automation"
    ]
  },
  {
    "id": "reshma-portfolio",
    "title": "Adv. Reshma Raj",
    "description": "Professional legal portfolio featuring civil, criminal and family law, litigation, legal research, document drafting and case management.",
    "category": "Portfolio",
    "status": "live",
    "featured": true,
    "url": "https://reshma.professionals-cv.in/",
    "icon": "scale",
    "accent": "gold",
    "tags": [
      "Legal Associate",
      "Litigation",
      "Legal Research"
    ]
  },
  {
    "id": "vishnu-portfolio",
    "title": "Vishnu Prakash",
    "description": "Mechanical Engineer with 10 years of experience in pipe support design, structural detailing, fabrication engineering, EPC projects and CAD automation.",
    "category": "Portfolio",
    "status": "live",
    "featured": true,
    "url": "https://vishnu.professionals-cv.in/",
    "icon": "settings",
    "accent": "cyan",
    "tags": [
      "Mechanical Engineering",
      "Pipe Support Design",
      "CAD Automation"
    ]
  },
  {
    "id": "engicore",
    "title": "EngiCore",
    "description": "A centralized platform for engineering data, digital tools and automated project workflows.",
    "category": "Applications",
    "status": "coming-soon",
    "featured": true,
    "url": "",
    "icon": "database",
    "accent": "purple",
    "tags": [
      "Engineering Data",
      "Automation",
      "Digital Tools"
    ]
  },
  {
    "id": "checkers-tool",
    "title": "Checker’s Tool",
    "description": "Digital engineering drawing verification, spool tracking and quality checking across fabrication projects.",
    "category": "Applications",
    "status": "live",
    "featured": true,
    "url": "https://checkerstool.professionals-cv.in/",
    "icon": "clipboard-check",
    "accent": "orange",
    "tags": [
      "Drawing Verification",
      "Spool Tracking",
      "Quality"
    ]
  },
  {
    "id": "my-workfront",
    "title": "My Workfront",
    "description": "A digital workspace for task assignments, progress monitoring and engineering workflow management.",
    "category": "Applications",
    "status": "coming-soon",
    "featured": false,
    "url": "",
    "icon": "kanban",
    "accent": "cyan",
    "tags": [
      "Task Management",
      "Workflow",
      "Productivity"
    ]
  }
];
let sites = fallback;
let activeFilter = 'All';
let searchTerm = '';
const grid = document.getElementById('projectGrid');
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function safeURL(value) {
  try {const url = new URL(value);return ['https:', 'http:'].includes(url.protocol) ? url.href : '';} catch {return '';}
}
function render() {
  const filtered = sites.filter(site => (activeFilter === 'All' || site.category === activeFilter) && [site.title,site.description,site.category,...(Array.isArray(site.tags)?site.tags:[])].join(' ').toLowerCase().includes(searchTerm));
  grid.innerHTML = filtered.map((site, index) => {
    const validURL = safeURL(site.url);
    const live = site.status === 'live' && !!validURL;
    const icon = icons[site.icon] || icons.grid;
    const link = live ? `<a class="card-link" href="${escapeHtml(validURL)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${escapeHtml(site.title)}">Visit website <span aria-hidden="true">↗</span></a>` : `<span class="card-link disabled-link">Coming soon <span aria-hidden="true">↗</span></span>`;
    return `<article class="project-card accent-${['green','blue','gold','purple','orange','cyan'].includes(site.accent) ? site.accent : 'blue'}" style="--delay:${Math.min(index,8)*75}ms"><div class="card-top"><div class="project-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg></div><span class="status ${live ? 'live' : 'soon'}"><i></i>${live?'LIVE':'COMING SOON'}</span></div><div class="card-content"><span class="card-category">${escapeHtml(site.category)}</span><h3>${escapeHtml(site.title)}</h3><p>${escapeHtml(site.description)}</p></div><div class="card-bottom"><div class="card-tags">${(Array.isArray(site.tags)?site.tags:[]).slice(0,2).map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div>${link}</div></article>`;
  }).join('');
  document.getElementById('emptyState').hidden = filtered.length > 0;
  document.getElementById('directoryCount').textContent = String(sites.length).padStart(2,'0');
  document.getElementById('heroTotal').textContent = String(sites.length).padStart(2,'0');
  document.getElementById('heroLive').textContent = String(sites.filter(site => site.status === 'live' && safeURL(site.url)).length).padStart(2,'0');
}
document.getElementById('searchInput').addEventListener('input',event => {searchTerm=event.target.value.trim().toLowerCase();render();});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
document.getElementById('resetFilters').addEventListener('click',()=>{searchTerm='';activeFilter='All';document.getElementById('searchInput').value='';document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b.dataset.filter==='All');b.setAttribute('aria-pressed',String(b.dataset.filter==='All'));});render();});
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click',()=>{const open=document.getElementById('navLinks').classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{document.getElementById('navLinks').classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent = new Date().getFullYear();
render();
fetch('./sites.json',{cache:'no-store'}).then(response=>{if(!response.ok)throw new Error('Could not load config');return response.json();}).then(data=>{if(!Array.isArray(data))throw new Error('Invalid config');sites=data;render();}).catch(error=>console.warn('Using bundled project list:',error.message));
