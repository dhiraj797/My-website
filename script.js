// ==========================================
// Load Projects & Render
// ==========================================
let allProjects = [];

async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    allProjects = await response.json();
    renderFilters();
    renderProjects(allProjects);
  } catch (error) {
    console.error('Failed to load projects:', error);
  }
}

// ==========================================
// Filter Buttons
// ==========================================
function renderFilters() {
  const filterBar = document.getElementById('filterBar');
  const categories = ['All', ...new Set(allProjects.map(p => p.category))];

  filterBar.innerHTML = categories.map((cat, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${cat}">${cat}</button>`
  ).join('');

  filterBar.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;

    filterBar.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.dataset.filter;
    const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);
    renderProjects(filtered);
  });
}

// ==========================================
// Project Cards
// ==========================================
function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');

  if (projects.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-light); grid-column: 1/-1;">No projects found in this category.</p>';
    return;
  }

  grid.innerHTML = projects.map(project => `
    <div class="project-card" data-id="${project.id}">
      <span class="card-arrow">&rarr;</span>
      <span class="card-category">${project.category}</span>
      <h3>${project.title}</h3>
      <p class="card-summary">${project.summary}</p>
      <p class="card-impact">${project.impact}</p>
      <p class="card-period">${project.organization} &middot; ${project.period}</p>
    </div>
  `).join('');

  // Attach click handlers
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const project = allProjects.find(p => p.id === card.dataset.id);
      if (project) openModal(project);
    });
  });
}

// ==========================================
// Modal
// ==========================================
function openModal(project) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  let modulesHTML = '';
  if (project.modules && project.modules.length > 0) {
    modulesHTML = `
      <div class="modal-section">
        <h3>Modules</h3>
        <table class="module-table">
          <thead><tr><th>Module</th><th>Description</th></tr></thead>
          <tbody>
            ${project.modules.map(m => `<tr><td><strong>${m.name}</strong></td><td>${m.description}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  let techHTML = '';
  if (project.technologies && project.technologies.length > 0) {
    techHTML = `
      <div class="modal-section">
        <h3>Technologies</h3>
        <div class="tech-tags">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let resultsHTML = '';
  if (project.results && project.results.length > 0) {
    resultsHTML = `
      <div class="modal-section">
        <h3>Results & Impact</h3>
        <ul>
          ${project.results.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  let successHTML = '';
  if (project.successCriteria && project.successCriteria.length > 0) {
    successHTML = `
      <div class="modal-section">
        <h3>Success Criteria</h3>
        <ul>
          ${project.successCriteria.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  body.innerHTML = `
    <span class="modal-category">${project.category}</span>
    <h2>${project.title}</h2>
    <p class="modal-meta">${project.organization} &middot; ${project.period}${project.users ? ' &middot; Users: ' + project.users : ''}</p>

    <div class="modal-section">
      <h3>Problem</h3>
      <p>${project.problem}</p>
    </div>

    <div class="modal-section">
      <h3>Solution</h3>
      <p>${project.solution}</p>
    </div>

    ${modulesHTML}
    ${techHTML}
    ${resultsHTML}
    ${successHTML}
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ==========================================
// Mobile Nav Toggle
// ==========================================
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ==========================================
// Navbar scroll effect
// ==========================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY;

  if (scrollY > 10) {
    navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  lastScroll = scrollY;
});

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', loadProjects);
