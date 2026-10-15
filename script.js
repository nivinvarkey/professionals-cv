const icons = {
  graduation: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3.6 3 8.4 3 12 0v-5M22 9v7"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c5 3 13 3 18 0"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/>',
  check: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 3.5h8M8 12l2.5 2.5L16 9"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
};
const fallback = [
  {id:'pratheeksha',title:'Pratheeksha Science Educator',description:'Science and Biology educator portfolio.',category:'Portfolio',status:'live',featured:true,url:'https://pratheekshashaju123-sudo.github.io/Pratheeksha_Science_Educator/',icon:'graduation',accent:'green',tags:['Education','Science']},
  {id:'nivin-portfolio',title:'Engineering Portfolio',description:'Piping engineering, fabrication and digital innovation.',category:'Portfolio',status:'coming-soon',url:'',icon:'briefcase',accent:'blue',tags:['Engineering']},
  {id:'engicore',title:'EngiCore',description:'Engineering data and smarter workflows.',category:'Applications',status:'coming-soon',url:'',icon:'layers',accent:'purple',tags:['Automation']},
  {id:'checkers-tool',title:'Checker’s Tool',description:'Streamlining engineering verification processes.',category:'Applications',status:'coming-soon',url:'',icon:'check',accent:'orange',tags:['Quality']},
  {id:'my-workfront',title:'My Workfront',description:'One workspace for productivity and organization.',category:'Applications',status:'coming-soon',url:'',icon:'grid',accent:'cyan',tags:['Productivity']}
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
    return `<article class="project-card accent-${['green','blue','purple','orange','cyan'].includes(site.accent) ? site.accent : 'blue'}" style="--delay:${Math.min(index,8)*75}ms"><div class="card-top"><div class="project-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg></div><span class="status ${live ? 'live' : 'soon'}"><i></i>${live?'LIVE':'COMING SOON'}</span></div><div class="card-content"><span class="card-category">${escapeHtml(site.category)}</span><h3>${escapeHtml(site.title)}</h3><p>${escapeHtml(site.description)}</p></div><div class="card-bottom"><div class="card-tags">${(Array.isArray(site.tags)?site.tags:[]).slice(0,2).map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div>${link}</div></article>`;
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
