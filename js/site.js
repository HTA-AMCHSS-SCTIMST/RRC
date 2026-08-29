(function () {
  const header = `
  <a class="skip" href="#main">Skip to content</a>
  <div class="util-bar">
    <div class="util-inner">
      <div class="goi">
        <img src="assets/flag.svg" alt="">
        <span>Government of India</span>
      </div>
      <div class="util-actions">
        <div class="font-btns" aria-label="Text size">
          <button type="button" data-fs="down" title="Decrease text">A-</button>
          <button type="button" data-fs="reset" title="Reset text">A</button>
          <button type="button" data-fs="up" title="Increase text">A+</button>
        </div>
        <a href="https://www.sctimst.ac.in/" target="_blank" rel="noopener">SCTIMST</a>
        <a class="portal-link" href="https://htain.dhr.gov.in/" target="_blank" rel="noopener">HTAIn Portal</a>
      </div>
    </div>
  </div>
  <header class="brand">
    <div class="brand-inner">
      <div class="brand-left">
        <img class="emblem" src="assets/sctimst-logo.svg" alt="SCTIMST, Trivandrum">
        <div class="brand-text">
          <p class="hi">अच्युत मेनोन स्वास्थ्य विज्ञान अध्ययन केंद्र</p>
          <h1>RRC-HTA-AMCHSS</h1>
          <p>Regional Resource Centre for Health Technology Assessment</p>
          <p>Achutha Menon Centre for Health Science Studies (AMCHSS)</p>
          <p>Sree Chitra Tirunal Institute for Medical Sciences &amp; Technology, Trivandrum</p>
          <p>A Resource Centre under HTAIn, Department of Health Research, MoHFW, Government of India</p>
        </div>
      </div>
      <img class="badge" src="assets/hta-badge.svg" alt="HTAIn AMCHSS badge">
    </div>
  </header>
  <nav class="nav" aria-label="Primary">
    <div class="nav-inner">
      <button class="nav-toggle" type="button" aria-expanded="false">Menu</button>
      <ul class="menu">
        <li><a data-nav="home" href="index.html">Home</a></li>
        <li>
          <a data-nav="about" href="about.html">About Us ▾</a>
          <div class="drop">
            <a href="about.html">About the Resource Centre</a>
            <a href="amchss.html">About AMCHSS</a>
            <a href="sctimst.html">About SCTIMST</a>
            <a href="htain.html">About HTAIn</a>
            <a href="team.html">Team</a>
          </div>
        </li>
        <li>
          <a data-nav="work" href="what-we-do.html">What We Do ▾</a>
          <div class="drop">
            <a href="what-we-do.html">Overview</a>
            <a href="process.html">HTA Process</a>
            <a href="studies.html">Studies &amp; Reports</a>
            <a href="publications.html">Publications</a>
            <a href="models.html">Models &amp; Tools</a>
            <a href="collaborations.html">Collaborations</a>
            <a href="capacity.html">Capacity Building</a>
            <a href="stakeholders.html">For Stakeholders</a>
          </div>
        </li>
        <li><a data-nav="events" href="events.html">Events</a></li>
        <li><a data-nav="resources" href="resources.html">Resources</a></li>
        <li><a data-nav="gallery" href="gallery.html">Gallery</a></li>
        <li><a data-nav="contact" href="contact.html">Contact Us</a></li>
        <li><a href="https://htain.dhr.gov.in/" target="_blank" rel="noopener">Topic Submission Portal</a></li>
      </ul>
    </div>
  </nav>`;

  const footer = `
  <footer class="footer">
    <div class="wrap foot-grid">
      <div>
        <h4>RRC-HTA, AMCHSS</h4>
        <p>Sree Chitra Tirunal Institute for Medical Sciences &amp; Technology<br>
        Medical College P.O., Thiruvananthapuram – 695 011, Kerala, India</p>
        <p>Email: <a href="mailto:hta.sctimst@gmail.com">hta.sctimst@gmail.com</a><br>
        Phone: 0471 252 4140 / 4230</p>
      </div>
      <div>
        <h4>Useful Links</h4>
        <p><a href="https://htain.dhr.gov.in/" target="_blank" rel="noopener">HTAIn, DHR</a></p>
        <p><a href="https://www.sctimst.ac.in/" target="_blank" rel="noopener">SCTIMST</a></p>
        <p><a href="https://www.sctimst.ac.in/About%20SCTIMST/Organisation/AMCHSS/" target="_blank" rel="noopener">AMCHSS at SCTIMST</a></p>
        <p><a href="https://dhr.gov.in/" target="_blank" rel="noopener">Department of Health Research</a></p>
        <p><a href="https://dst.gov.in/" target="_blank" rel="noopener">Department of Science &amp; Technology</a></p>
        <p><a href="contact.html">Contact</a></p>
      </div>
      <div>
        <h4>Social Connect</h4>
        <div class="social" style="display: flex; gap: 10px; align-items: center;">
          <!-- Twitter / X -->
          <a href="https://twitter.com/SCTIMST_Kerala" target="_blank" rel="noopener" aria-label="Twitter / X" style="display: inline-flex; align-items: center; justify-content: center;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/company/amchss-sctimst/?originalSubdomain=in" target="_blank" rel="noopener" aria-label="LinkedIn" style="display: inline-flex; align-items: center; justify-content: center;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        </div>
        <p style="margin-top:16px;font-size:13px">This site presents RRC-HTA-AMCHSS work. National guidance remains at <a href="https://htain.dhr.gov.in/" target="_blank" rel="noopener">HTAIn, DHR</a>.</p>
      </div>
    </div>
    <div class="copy">
      © <span id="yr"></span> RRC-HTA-AMCHSS, SCTIMST.
    </div>
  </footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((el) => {
    if (el.dataset.nav === page) el.classList.add("active");
  });

  const y = document.getElementById("yr");
  if (y) y.textContent = new Date().getFullYear();

  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  let size = 16;
  document.querySelectorAll("[data-fs]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const op = btn.dataset.fs;
      if (op === "up") size = Math.min(20, size + 1);
      if (op === "down") size = Math.max(14, size - 1);
      if (op === "reset") size = 16;
      document.body.style.fontSize = size + "px";
    });
  });

  const slides = document.querySelectorAll(".slide");
  const dotsWrap = document.querySelector(".dots");
  if (slides.length) {
    let i = 0;
    slides.forEach((_, idx) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Slide " + (idx + 1));
      b.addEventListener("click", () => show(idx));
      dotsWrap.appendChild(b);
    });
    const dots = dotsWrap.querySelectorAll("button");
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("active", k === i));
      dots.forEach((d, k) => d.classList.toggle("on", k === i));
    }
    document.querySelector(".hero-btn.prev")?.addEventListener("click", () => show(i - 1));
    document.querySelector(".hero-btn.next")?.addEventListener("click", () => show(i + 1));
    show(0);
    setInterval(() => show(i + 1), 6500);
  }

  const form = document.querySelector("form[data-contact]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const body = encodeURIComponent(
        `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nOrganisation: ${fd.get("org")}\n\n${fd.get("message")}`
      );
      window.location.href = `mailto:hta.sctimst@gmail.com?subject=${encodeURIComponent("HTA Resource Centre enquiry")}&body=${body}`;
    });
  }
})();