/**
 * Balaji M - Portfolio SPA Controller and Interactivity Script
 */

// Initialize Theme on Page Load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);
});

// Toggle Theme between Dark and Light Mode
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
  updateThemeUI(newTheme);
}

// Update Theme Icons and Text
function updateThemeUI(theme) {
  const toggleFloatIcon = document.querySelector('#themeToggleFloat i');
  const toggleBtnIcon = document.querySelector('.theme-toggle-btn i');
  const toggleBtnText = document.querySelector('.toggle-text');
  
  if (theme === 'light') {
    if (toggleFloatIcon) toggleFloatIcon.className = 'fa-solid fa-sun';
    if (toggleBtnIcon) toggleBtnIcon.className = 'fa-solid fa-sun';
    if (toggleBtnText) toggleBtnText.textContent = 'Light Mode';
  } else {
    if (toggleFloatIcon) toggleFloatIcon.className = 'fa-solid fa-moon';
    if (toggleBtnIcon) toggleBtnIcon.className = 'fa-solid fa-moon';
    if (toggleBtnText) toggleBtnText.textContent = 'Dark Mode';
  }
}

// Switch tabs in Single Page Application
function switchTab(sectionId) {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Hide active sections with animation transition
  sections.forEach(sec => {
    if (sec.classList.contains('active')) {
      sec.style.opacity = '0';
      sec.style.transform = 'translateY(15px)';
      setTimeout(() => {
        sec.classList.remove('active');
      }, 150);
    }
  });

  // Remove active state from nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Activate matching nav link
  const targetLink = Array.from(navLinks).find(link => 
    link.getAttribute('onclick').includes(`'${sectionId}'`)
  );
  if (targetLink) {
    targetLink.classList.add('active');
  }

  // Show target section with animation delay
  setTimeout(() => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
      // Force reflow
      targetSection.offsetHeight;
      targetSection.style.opacity = '1';
      targetSection.style.transform = 'translateY(0)';
    }
    // Scroll smoothly to top of main content area
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 180);
}

// Data Store for Publications details
const publicationData = {
  ieee: {
    category: "IEEE Conference Paper",
    title: "Smart Intelligence-Based Emergency Ward Rush Prediction Using Deep Feature Swarm Intelligence with LSTM Gated Hyper Capsule RNN",
    location: "Indian Institute of Technology (IIT) Indore, Madhya Pradesh, India",
    date: "July 6–11, 2025",
    conference: "16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)",
    concepts: [
      "Deep Learning (LSTM Gated Hyper Capsule RNN)", 
      "Swarm Intelligence (Particle Swarm Optimization)", 
      "Healthcare Resource Forecasting", 
      "Feature Engineering"
    ],
    why: "Emergency department overcrowding is a critical global issue that increases patient mortality rates and strains healthcare resources. I developed this hybrid model combining Long Short-Term Memory (LSTM) cells with Capsule Networks and Swarm Optimization to forecast patient surge levels accurately. This helps hospitals pre-allocate medical staff, ICU beds, and ventilators during surge hours, making emergency healthcare delivery much more proactive and efficient.",
    certHtml: `
      <div class="cert-image-pane">
        <iframe src="images/iit_indore_cert.pdf" class="full-cert-pdf" type="application/pdf"></iframe>
        <div class="cert-open-bar">
          <a href="images/iit_indore_cert.pdf" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-file-pdf"></i> Open PDF Certificate
          </a>
        </div>
      </div>
    `
  },
  springer: {
    category: "Springer Conference Paper",
    title: "A novel approach to digital evidence integrity and chain of custody in forensic analysis",
    location: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, Gujarat, India",
    date: "April 3–4, 2026",
    conference: "5th International Conference on Emerging Technology Trends in Electronics, Communication and Networking (ET2ECN 2026)",
    concepts: [
      "Blockchain Technology", 
      "Fuzzy Hashing Models", 
      "Deep Learning Architectures", 
      "Digital Forensics & Chain of Custody"
    ],
    why: "In digital forensic investigations, ensuring that digital files have not been modified or corrupted is crucial for admissibility in a court of law. I developed this novel approach that integrates Deep Learning fuzzy hashing with a decentralized Blockchain architecture. Standard hash algorithms fail if a single bit changes without showing history, but our fuzzy-hash blockchain records the precise evolution and timeline of file edits securely, creating an immutable audit trail that guarantees tamper-free evidence.",
    certHtml: `
      <div class="cert-image-pane">
        <img src="images/svnit_surat_cert.jpg" class="full-cert-img" alt="SVNIT Surat Certificate of Presentation">
        <div class="cert-open-bar">
          <a href="images/svnit_surat_cert.jpg" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-up-right-from-square"></i> View Full Image
          </a>
        </div>
      </div>
    `
  }
};

// Data Store for Certifications details
const certificationData = {
  google_cloud: {
    category: "Google Cloud Course Certification",
    title: "Introduction to Data Analytics in Google Cloud",
    issuer: "Google Cloud (issued via Coursera)",
    date: "April 18, 2025",
    description: "This course covers foundational principles of data engineering, data exploration, and analytics utilizing Google Cloud Platform (GCP) technologies. Validates proficiency in utilizing cloud tools like BigQuery, Cloud Storage, and data processing workflows for analytics workloads.",
    certHtml: `
      <div class="cert-image-pane">
        <img src="images/google_cloud_cert.jpg" class="full-cert-img" alt="Introduction to Data Analytics in Google Cloud Certificate">
        <div class="cert-open-bar">
          <span class="cert-url">Credential ID: YMKBRMLCFQRJ</span>
          <a href="https://coursera.org/verify/YMKBRMLCFQRJ" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-circle-check"></i> Verify on Coursera
          </a>
        </div>
      </div>
    `
  },
  board_infinity: {
    category: "Board Infinity Course Certification",
    title: "Generative AI in HR - Impact and Application of Gen AI",
    issuer: "Board Infinity (issued via Coursera)",
    date: "July 14, 2025",
    description: "An intensive curriculum covering the real-world applications of Large Language Models (LLMs) and Generative AI within human resources workflows, candidate screening, corporate knowledge retrieval, and automated document generation. Signed by Abhay Gupta, Co-Founder of Board Infinity.",
    certHtml: `
      <div class="cert-image-pane">
        <img src="images/board_infinity_cert.jpg" class="full-cert-img" alt="Generative AI in HR Course Certificate">
        <div class="cert-open-bar">
          <span class="cert-url">Credential ID: CIMZTA8MY86P</span>
          <a href="https://coursera.org/verify/CIMZTA8MY86P" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-circle-check"></i> Verify on Coursera
          </a>
        </div>
      </div>
    `
  },
  marcello_tech: {
    category: "Marcello Tech Workshop Certificate",
    title: "Two days Workshop in Mobile app Development with Flutter and Dart",
    issuer: "Marcello Tech, Trichy (in association with Paavai College of Engineering)",
    date: "October 23-24, 2023",
    description: "Hands-on intensive workshop validating core mobile engineering concepts with Flutter. Covers widget lifecycles, state management, asynchronous programming in Dart, integration with REST APIs, and building responsive native user interfaces for iOS and Android.",
    certHtml: `
      <div class="cert-image-pane">
        <img src="images/marcello_tech_cert.jpg" class="full-cert-img" alt="Marcello Tech Flutter Dart Workshop Certificate">
        <div class="cert-open-bar">
          <span class="cert-url">Certificate No: MTWF2510239</span>
          <a href="images/marcello_tech_cert.jpg" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-up-right-from-square"></i> Open Image
          </a>
        </div>
      </div>
    `
  },
  gradtwin_internship: {
    category: "Professional Internship Certificate",
    title: "Machine Learning Engineer Internship Certificate",
    issuer: "Gradtwin Services (OPC) Private Limited",
    date: "February 2026 — April 2026 (Issued May 19, 2026)",
    description: "Official internship experience certificate validating Mr. Balaji M's core machine learning engineering tenure at Gradtwin. Verifies success in feature engineering, pipeline optimization, model building using Scikit-learn, and collaboration on commercial predictive projects. Certified by Bharathi J, Sr. HR Associate.",
    certHtml: `
      <div class="cert-image-pane">
        <iframe src="images/gradtwin_cert.pdf" class="full-cert-pdf" type="application/pdf"></iframe>
        <div class="cert-open-bar">
          <a href="images/gradtwin_cert.pdf" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-file-pdf"></i> Open PDF Certificate
          </a>
        </div>
      </div>
    `
  },
  ibm_ml: {
    category: "IBM Course Certification",
    title: "Machine Learning with Python",
    issuer: "IBM (issued via Coursera)",
    date: "Completed in 2025",
    description: "This intensive credential covers core Machine Learning methods. Topics include regression analysis, classification trees, K-Nearest Neighbors, support vector machines, and hierarchical clustering. Focuses heavily on hands-on deployment of models to clean, preprocess, and evaluate structured data using Scikit-learn.",
    certHtml: `
      <div class="full-certificate" style="border-color: #2563eb;">
        <div class="cert-border-accent" style="border-color: #93c5fd;"></div>
        <div class="cert-logo-container">
          <div class="cert-logo" style="color: #2563eb; font-weight: 900; font-family: monospace;">IBM</div>
          <div class="cert-logo" style="color: #4b5563;">Coursera</div>
        </div>
        <h3 class="cert-main-title" style="color: #2563eb; font-size: 1.1rem; margin-top: 0.5rem;">Certificate of Completion</h3>
        <p class="cert-text-present" style="margin-top: 0.5rem;">This is to certify that</p>
        <h4 class="cert-recipient" style="font-size: 1.4rem;">Balaji M</h4>
        <p class="cert-text-for">has successfully completed the professional curriculum for</p>
        <p class="cert-event-title" style="font-size: 1.25rem; font-weight: bold; color:#1e293b;">Machine Learning with Python</p>
        <p class="cert-text-for">an online non-credit course authorized by IBM and offered through Coursera.</p>
        
        <div class="cert-footer-row" style="margin-top: 1.5rem;">
          <div class="cert-sig-block">
            <span class="cert-sig-line">IBM Education</span>
            <span class="cert-sig-label">Authorized Signatory</span>
          </div>
          <div class="cert-seal-large" style="background-color: #2563eb; border-color: #60a5fa;">IBM</div>
          <div class="cert-sig-block">
            <span class="cert-sig-line">Coursera Registrar</span>
            <span class="cert-sig-label">Verified Record</span>
          </div>
        </div>
      </div>
    `
  },
  ibm_python: {
    category: "IBM Course Certification",
    title: "Python for Data Science & AI",
    issuer: "IBM (issued via Coursera)",
    date: "Completed in 2025",
    description: "A foundational course validating data science workflows in Python. Covers data extraction using APIs and web crawlers, loading data structures, operating on multidimensional matrices with NumPy, processing structured tables via Pandas, and data visualization using Matplotlib and Seaborn.",
    certHtml: `
      <div class="full-certificate" style="border-color: #2563eb;">
        <div class="cert-border-accent" style="border-color: #93c5fd;"></div>
        <div class="cert-logo-container">
          <div class="cert-logo" style="color: #2563eb; font-weight: 900; font-family: monospace;">IBM</div>
          <div class="cert-logo" style="color: #4b5563;">Coursera</div>
        </div>
        <h3 class="cert-main-title" style="color: #2563eb; font-size: 1.1rem; margin-top: 0.5rem;">Certificate of Completion</h3>
        <p class="cert-text-present" style="margin-top: 0.5rem;">This is to certify that</p>
        <h4 class="cert-recipient" style="font-size: 1.4rem;">Balaji M</h4>
        <p class="cert-text-for">has successfully completed the professional curriculum for</p>
        <p class="cert-event-title" style="font-size: 1.25rem; font-weight: bold; color:#1e293b;">Python for Data Science & AI</p>
        <p class="cert-text-for">an online non-credit course authorized by IBM and offered through Coursera.</p>
        
        <div class="cert-footer-row" style="margin-top: 1.5rem;">
          <div class="cert-sig-block">
            <span class="cert-sig-line">IBM Education</span>
            <span class="cert-sig-label">Authorized Signatory</span>
          </div>
          <div class="cert-seal-large" style="background-color: #2563eb; border-color: #60a5fa;">IBM</div>
          <div class="cert-sig-block">
            <span class="cert-sig-line">Coursera Registrar</span>
            <span class="cert-sig-label">Verified Record</span>
          </div>
        </div>
      </div>
    `
  },
  nit_rocs: {
    category: "Academic Seminar Credentials",
    title: "Research Opportunities in Computer Science (ROCS)",
    issuer: "National Institute of Technology, Tiruchirappalli",
    date: "April 6, 2024",
    description: "Certificate of Participation in the one-day ACM sponsored national seminar on 'ROCS: Research Opportunities in Computer Science' hosted by the Department of Computer Science and Engineering at NIT Trichy (NITT). Discussed advancements in AI research, compiler designs, and cybersecurity structures.",
    certHtml: `
      <div class="full-certificate" style="border-color: #0f172a;">
        <div class="cert-border-accent" style="border-color: #cbd5e1;"></div>
        <div class="cert-logo-container">
          <div class="cert-logo" style="font-family: serif; color:#0f172a;">NIT Trichy</div>
          <div class="cert-logo" style="color: #0284c7;">acm</div>
        </div>
        <h3 class="cert-main-title" style="font-size: 0.95rem;">Certificate of Participation</h3>
        <p class="cert-text-present">This is presented to</p>
        <h4 class="cert-recipient" style="font-size: 1.3rem;">Balaji MS</h4>
        <p class="cert-text-school" style="font-size: 0.8rem; font-weight: bold; margin: 0.25rem 0;">PAAVAI ENGINEERING COLLEGE</p>
        <p class="cert-text-for">for participating in the one-day ACM sponsored event on</p>
        <p class="cert-event-title" style="font-size: 1.1rem; color: #0284c7;">ROCS: Research Opportunities in Computer Science</p>
        <p class="cert-text-for">held on April 6, 2024, at National Institute of Technology, Tiruchirappalli.</p>
        
        <div class="cert-footer-row" style="margin-top: 1rem; padding-top: 0.5rem;">
          <div class="cert-sig-block">
            <span class="cert-sig-line" style="font-size:0.6rem;">Kamalika B.</span>
            <span class="cert-sig-label" style="font-size: 0.45rem;">Dr. Kamalika Bhattacharjee</span>
          </div>
          <div class="cert-sig-block">
            <span class="cert-sig-line" style="font-size:0.6rem;">J. Pavan Kumar</span>
            <span class="cert-sig-label" style="font-size: 0.45rem;">Dr. J. Pavan Kumar</span>
          </div>
          <div class="cert-sig-block">
            <span class="cert-sig-line" style="font-size:0.6rem;">S. Mary</span>
            <span class="cert-sig-label" style="font-size: 0.45rem;">Dr. S. Mary Saira Bhanu</span>
          </div>
        </div>
      </div>
    `
  },
  iecd_basics: {
    category: "Academic Statement of Marks",
    title: "Certificate in Computer Basics",
    issuer: "IECD, Bharathidasan University, Tiruchirappalli",
    date: "April 4, 2016",
    description: "Official statement of marks awarded for the course program under the School-University-Industry-Tie-up Scheme (SUITS). Verified at Swamy Vivekananda Matriculation School. Secured outstanding scores across all subjects: Basic Computer Concepts Theory (78/100, Pass Grade D), MS DOS & Windows Practical (93/100, Pass Grade S), and LOGO Programming Practical (99/100, Pass Grade S+). Passed with First Class with Exemplary.",
    certHtml: `
      <div class="cert-image-pane">
        <img src="images/iecd_cert.jpg" class="full-cert-img" alt="IECD Marksheet Statement of Marks">
        <div class="cert-open-bar">
          <span class="cert-url">Folio No: 15SM45344 | Register No: 15CCB07284</span>
          <a href="images/iecd_cert.jpg" target="_blank" class="cert-dl-btn">
            <i class="fa-solid fa-up-right-from-square"></i> Open Full Image
          </a>
        </div>
      </div>
    `
  }
};

// Open Modal overlay and inject publication details
function openPublicationDetails(key) {
  const data = publicationData[key];
  if (!data) return;

  const modal = document.getElementById('showcaseModal');
  const category = document.getElementById('modalCategory');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  category.textContent = data.category;
  title.textContent = data.title;

  const conceptPills = data.concepts.map(c => `<span class="tech-pill">${c}</span>`).join(' ');

  body.innerHTML = `
    <div class="modal-split">
      <div class="modal-visual-pane">
        ${data.certHtml}
      </div>
      <div class="modal-details-pane">
        <div class="detail-section">
          <span class="detail-label">Concept / Focus</span>
          <div class="detail-val concept-list">${conceptPills}</div>
        </div>
        <div class="detail-section">
          <span class="detail-label">Conference Details</span>
          <p class="detail-val"><i class="fa-solid fa-hotel"></i> ${data.conference}</p>
          <p class="detail-val"><i class="fa-regular fa-clock"></i> ${data.date}</p>
          <p class="detail-val"><i class="fa-solid fa-map-pin"></i> ${data.location}</p>
        </div>
        <div class="detail-section why-highlight-box">
          <span class="detail-label" style="color: var(--accent);">Why I Did This Research</span>
          <p class="detail-val" style="color: var(--text-primary); font-size: 0.95rem; font-weight: 500;">
            ${data.why}
          </p>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
}

// Open Modal overlay and inject certificate details
function openCertificateDetails(key) {
  const data = certificationData[key];
  if (!data) return;

  const modal = document.getElementById('showcaseModal');
  const category = document.getElementById('modalCategory');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  category.textContent = data.category;
  title.textContent = data.title;

  body.innerHTML = `
    <div class="modal-split">
      <div class="modal-visual-pane">
        ${data.certHtml}
      </div>
      <div class="modal-details-pane">
        <div class="detail-section">
          <span class="detail-label">Issuing Authority</span>
          <p class="detail-val"><strong>${data.issuer}</strong></p>
        </div>
        <div class="detail-section">
          <span class="detail-label">Date Completed</span>
          <p class="detail-val">${data.date}</p>
        </div>
        <div class="detail-section">
          <span class="detail-label">Credential Description</span>
          <p class="detail-val">${data.description}</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal(event) {
  const modal = document.getElementById('showcaseModal');
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Release background scrolling
}

// Esc Key listener to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
