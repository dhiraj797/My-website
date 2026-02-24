// ==========================================
// Load Projects & Render
// ==========================================
let allProjects = [];

const fallbackProjects = [
  {
    "id": "crisp-tool",
    "title": "CRISP Tool \u2013 SCP Digitalization",
    "category": "Digital Transformation",
    "summary": "A system-driven, integrated digital platform that automates Price Change Calculation (PCR) and Sales, Controlling & Planning (SCP) workflows, bringing transparency, consistency, and governance to contract management.",
    "impact": "100% traceability of price & volume changes | Eliminated Excel-based processes",
    "period": "2023 \u2013 Present",
    "organization": "Bosch Ltd",
    "problem": "CMD and SCP processes for price change calculation (PCR) and volume planning were managed through manual, Excel-based workflows. This led to limited end-to-end visibility across Contracts, Plans (TBP/CF), and Actuals, high manual effort and dependency on individual knowledge, inconsistent and non-repeatable PCR and volume calculations, delays in TBP and CF cycles, and limited auditability and explainability of price and volume deviations.",
    "solution": "CRISP is a system-driven, integrated digital platform that automates PCR and SCP workflows. It introduces a structured Plan vs Actual explanation framework (Target Cross) to clearly separate and explain price and volume deviations. The platform enables seamless traceability across the value chain: Contracts (Quotation, LOI, PO) \u2192 Plan (TBP, CF) \u2192 Actuals (YEC, POE billing prices).",
    "modules": [
      { "name": "MDM", "description": "Add/Update Master Data \u2013 centralized management of all master data entities" },
      { "name": "Parts", "description": "Customer Code, Import Content, Materials, Energy, Discounts (Volume / Year-on-Year / Combined bands), Contracts (Read-Only)" },
      { "name": "Contracts", "description": "Engine Model, Parts, Forex, RMI, Energy \u2014 each with Contract Conditions, Category Threshold/Burden Share, Base Rates & Source; Expected Engine Volumes (Yearly); Reference Document Uploads; Other Contractual Conditions" },
      { "name": "Purchase Orders", "description": "Full CRUD operations for managing purchase orders end-to-end" },
      { "name": "Reconciliations", "description": "Rates (Forex, Material, Energy), Schedules, Parts with Approval Workflow (Pending Approvals \u2192 Pending PO \u2192 Pending GPM \u2192 History)" },
      { "name": "Forecasting", "description": "Schedules (CF Cycles/Year) with View/Update, CF Cycles with Manual Override, Download Price Forecasting Excel" }
    ],
    "technologies": ["Python", "Power BI", "Power Automate", "Azure", "Data Analytics"],
    "users": "Sales KAMs, SCP-IN team, PS-IN/RGB, rBUs, CTG-IN",
    "results": [
      "Digitized and automated end-to-end CMD and SCP workflows, eliminating manual Excel-based processes",
      "Seamless traceability across the value chain: Contracts (Quotation, LOI, PO) \u2192 Plan (TBP, CF) \u2192 Actuals (YEC, POE billing prices)",
      "System-driven PCR and volume forecast calculations ensuring consistency and accuracy",
      "Clear ownership and accountability for pricing, planning, and volume data",
      "Improved forecast accuracy and faster decision-making through reliable, timely, and explainable insights",
      "Reduced planning cycle times and manual effort across TBP and CF cycles"
    ],
    "successCriteria": [
      "100% traceability of price and volume changes across Contracts, Plans, Bottom Line, and Actuals",
      "Consistent, explainable, and auditable PCR calculations with full audit trails",
      "Measurable improvement in productivity and efficiency driven by reduced manual effort and cycle times",
      "Improved forecast accuracy across TBP and CF cycles with stronger alignment to Actuals",
      "High adoption and sustained usage of CRISP by CMD and SCP teams",
      "Single, trusted version of Target Cross outputs used for reviews and decision-making"
    ]
  },
  {
    "id": "ecu-diagnosis-assist",
    "title": "MSIL \u2013 ECU Diagnosis Assist",
    "category": "AI",
    "summary": "AI-assisted diagnostic platform that transforms physical, reactive warranty investigations into a digital, data-driven process \u2014 enabling faster, more accurate, and standardized claim decisions.",
    "impact": "Investigation time: Days \u2192 Minutes | NTF reduction: 30\u201340%",
    "period": "2024 \u2013 Present",
    "organization": "Bosch Ltd",
    "problem": "Current warranty and quality investigations are parts-return driven, manual, and time-consuming, resulting in long investigation cycles (days/weeks), unnecessary parts replacement and logistics cost, high dealer dependency and variability in diagnosis quality, and limited use of available vehicle, diagnostic, and field data.",
    "solution": "ECU Diagnosis Assist transforms physical, reactive investigations into a digital, data-driven, AI-assisted diagnostic process. It enables faster, more accurate, and standardized claim decisions by leveraging AI-guided diagnostics to identify defect vs. non-defect cases, reducing unnecessary part returns and NTF (No Trouble Found) cases.",
    "technologies": ["AI", "Machine Learning", "Data Analytics", "Python"],
    "users": "Dealers / Service Technicians, MSIL Warranty & Claims Teams, Customer Quality Teams",
    "results": [
      "Reduce end-to-end investigation time from days to minutes",
      "Enable AI-guided dealer diagnostics to identify defect vs. non-defect cases",
      "Reduce unnecessary part returns and NTF (No Trouble Found) cases",
      "Improve claim accuracy, consistency, and customer satisfaction",
      "Build a scalable foundation for future data-driven customer quality"
    ],
    "successCriteria": [
      "Investigation cycle time reduced from days to minutes",
      "NTF cases reduced by 30\u201340%",
      "Significant reduction in unnecessary parts returns",
      "Dealer adoption >80% in pilot phase",
      "Continuous improvement in diagnostic accuracy via AI learning"
    ]
  },
  {
    "id": "dike",
    "title": "DIKE \u2013 Document Insights Knowledge Engine",
    "category": "AI",
    "summary": "An LLM + RAG-powered knowledge platform that acts as a secure, internal ChatGPT \u2014 grounded entirely in Bosch engineering documentation, enabling data democratization and instant access to critical product knowledge.",
    "impact": "Data Democratization | Instant knowledge retrieval from internal engineering docs",
    "period": "2024 \u2013 Present",
    "organization": "Bosch Ltd",
    "problem": "Engineering teams spend significant time searching for information across servers, SharePoint folders, legacy reports, and multiple repositories. With many experts from conventional product development approaching retirement, critical engineering knowledge risks being lost. New engineers face steep onboarding curves to understand product history, system behavior, field learnings, and past design decisions. Teams frequently encounter information gaps \u2014 questions like: Have we seen this issue before? How did the product behave in the field? Where is the reference documentation?",
    "solution": "DIKE combines a Large Language Model with Retrieval-Augmented Generation (RAG), built on top of Bosch internal engineering data. Users can ask questions in plain natural language, and the platform retrieves the most relevant internal documents, generates context-aware answers, and provides source references and links for validation. Data from SharePoint and other systems is indexed into an Azure-based vector database, enabling engineers to interact with this knowledge instantly.",
    "technologies": ["LLM", "RAG", "Azure", "Vector Database", "GPT", "Python"],
    "users": "Engineering Teams, New Joiners, Product Development Teams",
    "results": [
      "Enabled data democratization \u2014 critical engineering knowledge accessible to everyone",
      "Instant retrieval of relevant documents via plain natural language queries",
      "Context-aware answers grounded in internal product and engineering documentation",
      "Source references and document links provided for validation and traceability",
      "Preserved institutional knowledge from retiring domain experts"
    ],
    "successCriteria": [
      "Significant reduction in time spent searching for engineering information",
      "Faster onboarding for new engineers with instant access to product history and design decisions",
      "High adoption across engineering teams",
      "Accurate, context-aware responses grounded in internal documentation",
      "Multi-domain data connectivity unlocking new engineering insights across products and systems"
    ]
  },
  {
    "id": "ai-drbfm",
    "title": "AI-Based DRBFM \u2013 Sensor Product Engineering",
    "category": "AI",
    "summary": "An AI-assisted DRBFM tool trained on Bosch reference documents that enables novice engineers to draft structured risk analyses and expert engineers to validate efficiently \u2014 dramatically reducing lead times for 30+ annual design changes in automotive sensor products.",
    "impact": "30+ DRBFMs/year accelerated | L1-grade outputs without 5+ years experience",
    "period": "2024 \u2013 Present",
    "organization": "Bosch Ltd",
    "problem": "Bosch supplies automotive sensors (RPM, pressure, temperature, crankshaft) to major OEMs worldwide. These sensors are assembled in inaccessible areas of the vehicle engine bay, and OEMs will not modify their engine layout to accommodate sensor fitment. This forces Bosch to execute frequent design changes, resulting in 30+ DRBFMs annually. Traditionally, conducting a DRBFM requires L1 certification and 5+ years of product-line experience, creating a bottleneck where only a handful of senior engineers can author them. This leads to long lead times, dependency on limited experts, and delays in product development cycles.",
    "solution": "An AI-assisted DRBFM platform trained on several Bosch DRBFM reference documents. Using Azure OpenAI GPT-5.2 with embeddings and MongoDB Atlas as a vector database, the system enables novice engineers to draft structured, high-quality DRBFM outputs by retrieving relevant failure modes, design concerns, and countermeasures from historical data. A SerpAPI integration provides external perspectives on design changes, enriching the analysis with industry-wide insights. Expert engineers can then peer-review and validate efficiently, reducing the overall cycle time significantly.",
    "technologies": ["Azure OpenAI", "GPT-5.2", "Embeddings", "MongoDB Atlas Vector DB", "React", "SerpAPI", "Python"],
    "users": "Sensor Product Engineers, Design Engineers, DRBFM Reviewers",
    "results": [
      "Enabled novice engineers to draft L1-grade structured DRBFM outputs without 5+ years of experience",
      "Reduced DRBFM lead time significantly across 30+ annual design changes",
      "Accelerated engineering response and faster product development cycles",
      "Standardized, knowledge-driven risk analysis grounded in Bosch reference documents",
      "External design change perspectives via SerpAPI integration for enriched analysis"
    ],
    "successCriteria": [
      "Measurable reduction in DRBFM authoring time per design change",
      "High-quality DRBFM outputs validated by L1-certified expert reviewers",
      "Adoption by novice engineers across sensor product engineering teams",
      "Faster time-to-market for sensor design changes driven by OEM requirements",
      "Consistent, repeatable risk analysis quality across all 30+ annual DRBFMs"
    ]
  },
  {
    "id": "eaxle-change-eval",
    "title": "Change Evaluation AI Assistant \u2013 Bosch eAxle",
    "category": "AI",
    "summary": "An AI-powered copilot for eAxle validation engineers that transforms manual, expert-driven change evaluation into a structured, explainable, and repeatable AI-supported workflow \u2014 enabling faster and more consistent responses to OEM change requests and DVP updates.",
    "impact": "Faster OEM response times | Structured test carry-over decisions with traceability",
    "period": "2024 \u2013 Present",
    "organization": "Bosch Ltd",
    "problem": "Bosch eAxle development and validation teams face frequent OEM change requests and DVP (Design Verification Plan) updates that require rapid, accurate evaluation. Today's process is manual and expert-driven \u2014 identifying which tests to carry over, re-execute, or newly add depends heavily on individual knowledge and experience. This leads to inconsistent responses, slow turnaround times, lack of structured justification and document-level traceability, and reduced responsiveness to OEM queries during critical development and validation phases.",
    "solution": "The Change Evaluation AI Assistant acts as a copilot for validation engineers, providing AI-assisted decision support for OEM change requests and DVP evaluations. Built on Azure OpenAI GPT-5.2 with embeddings and MongoDB Atlas as a vector database, it retrieves relevant test histories, validation records, and engineering documentation to recommend tests for carry-over, re-execution, or new addition. A SerpAPI integration provides external perspectives on design changes. The React-based UI delivers clear justifications with document-level traceability, enabling engineers to respond quickly and consistently to market and OEM queries.",
    "technologies": ["Azure OpenAI", "GPT-5.2", "Embeddings", "MongoDB Atlas Vector DB", "React", "SerpAPI", "Python"],
    "users": "eAxle Validation Engineers, Development Engineers, DVP Teams",
    "results": [
      "Transformed manual change evaluation into a structured, explainable AI-supported workflow",
      "Faster identification of tests to carry over, re-execute, or newly add for each change request",
      "Clear justification with document-level traceability for every recommendation",
      "Improved responsiveness to OEM queries during development and validation phases",
      "Consistent, repeatable evaluations independent of individual expert availability"
    ],
    "successCriteria": [
      "Measurable reduction in OEM change request response time",
      "High accuracy of test carry-over and re-execution recommendations validated by experts",
      "Adoption by eAxle validation and development engineering teams",
      "Full document-level traceability for all AI-generated recommendations",
      "Standardized change evaluation process across eAxle product variants"
    ]
  },
  {
    "id": "2wp-req-engineering",
    "title": "AI Requirements Engineering Assistant \u2013 Bosch 2WP",
    "category": "AI",
    "summary": "A fully deployed AI-powered platform that automates the requirements engineering lifecycle for Bosch Two-Wheeler & Powersports (2WP) \u2014 converting unstructured customer inputs into structured, categorized L1 and L2 engineering requirements with gap detection, conflict identification, and full traceability.",
    "impact": "Requirement drafting: Hours \u2192 Minutes | 50 engineers across 5 product lines",
    "period": "2024 \u2013 Present",
    "organization": "Bosch Ltd",
    "problem": "System engineers in the 2WP division manually convert unstructured customer inputs \u2014 meeting notes, emails, diagrams, and technical documents \u2014 into structured engineering requirements across L1 (high-level) and L2 (detailed) stages. This process is time-consuming, error-prone, and heavily dependent on individual expert knowledge. Engineers struggle with identifying gaps, missing information, and conflicts across requirement categories such as CAN Messages, Diagnostics, Monitoring, Fault Implementation, Hardware Tolerances, Software Implementations, and Calibration. With multiple product lines (ABS/Safety, Engine Management, Electric Powertrain, Connectivity, Vehicle Computer), maintaining consistency and traceability across teams is a significant challenge.",
    "solution": "A fully deployed AI-powered requirements engineering assistant that automates the entire L1-to-L2 lifecycle. Engineers upload documents (PDF, Excel, Word) and images (diagrams, whiteboard photos), and the AI generates structured, categorized L1 requirements automatically. It identifies missing information, assumptions, and gaps. After engineer review, the system generates detailed L2 requirements with test approaches, conflict detection against existing system specifications, and safety/cyber linkage. The platform includes DOORS integration for existing requirements, session history for saving and resuming work, Word document export, web search for datasheets and technical references, and an admin panel with usage analytics. Deployed on-premises within Bosch infrastructure with Azure AD SSO and SC2 data classification.",
    "modules": [
      { "name": "L1 Requirement Generation", "description": "Parses unstructured inputs (meeting notes, emails, diagrams) and generates clear, atomic, categorized L1 requirements across CAN, Diagnostics, Monitoring, Fault, Hardware, Software, and Calibration domains" },
      { "name": "L2 Requirement Decomposition", "description": "Decomposes L1 requirements into detailed L2 specifications with technical details, algorithms, interfaces, and constraints. Includes conflict detection and change impact analysis" },
      { "name": "Gap & Conflict Detection", "description": "Identifies missing requirements, assumptions, redundancies, and conflicts against existing system specifications and architecture" },
      { "name": "Traceability & Safety Linkage", "description": "Bidirectional traceability between L1/L2, design elements, diagnostics (DTCs), CAN signals, calibration parameters, tests, and safety/cyber work products" },
      { "name": "Document Management", "description": "Multi-format upload (PDF, Excel, Word, images), Word export, DOORS integration (read-only), and persistent session history" },
      { "name": "Admin & Analytics", "description": "User management via Azure AD SSO, usage analytics dashboard, and system monitoring for up to 50 concurrent engineers" }
    ],
    "technologies": ["Azure OpenAI", "GPT-5.1", "MongoDB Atlas", "React", "Python", "DOORS Integration", "Azure AD SSO", "SerpAPI"],
    "users": "2WP System Engineers (up to 50 concurrent), Product Owners, across ABS/Safety, Engine Management, Electric Powertrain, Connectivity, Vehicle Computer product lines",
    "results": [
      "Reduced initial requirement drafting time from hours to minutes across all 2WP product lines",
      "Automated L1-to-L2 requirement decomposition with test approach suggestions and full traceability",
      "AI-driven gap detection identifies missing information, assumptions, and conflicts that manual reviews may overlook",
      "Standardized requirement format and categorization across 5 product lines ensuring cross-team consistency",
      "Domain knowledge embedded in the system, reducing dependency on individual experts and improving knowledge retention",
      "Production-deployed on-premises with SC2 data classification, Azure AD SSO, and support for 50 concurrent users"
    ],
    "successCriteria": [
      "Adoption by 2WP system engineers across all 5 product lines",
      "Measurable reduction in requirement creation cycle time from hours to minutes",
      "High accuracy in AI-generated requirements validated by engineering reviewers",
      "Complete bidirectional traceability between L1, L2, design elements, tests, and safety work products",
      "Consistent requirement quality and categorization across teams and product variants",
      "Successful on-premises deployment with SC2 compliance and cybersecurity clearance"
    ]
  }
];

async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) throw new Error('Fetch failed');
    allProjects = await response.json();
  } catch (error) {
    console.warn('Falling back to embedded project data:', error.message);
    allProjects = fallbackProjects;
  }
  renderFilters();
  renderProjects(allProjects);
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
