const $ = (selector) => document.querySelector(selector);

const menuButton = $(".menu-toggle");
const nav = $(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

$("#year").textContent = new Date().getFullYear();
$("#hero-summary").textContent = siteData.heroSummary;

siteData.profiles.forEach(([label, url]) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = label;
  $("#profile-links").appendChild(a);
});

siteData.metrics.forEach(item => {
  const div = document.createElement("div");
  div.className = "metric";
  div.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
  $("#metric-grid").appendChild(div);
});
$("#metric-source").href = siteData.contact.scholar;
$("#metric-updated").textContent = siteData.metricsUpdated;

siteData.about.forEach(text => {
  const p = document.createElement("p");
  p.textContent = text;
  $("#about-content").appendChild(p);
});

siteData.expertise.forEach(([title, text], index) => {
  const article = document.createElement("article");
  article.className = "expertise-card";
  article.innerHTML = `
    <span class="number">${String(index + 1).padStart(2, "0")}</span>
    <h3>${title}</h3>
    <p>${text}</p>
  `;
  $("#expertise-grid").appendChild(article);
});

$("#all-publications").href = siteData.contact.scholar;
siteData.publications.forEach(item => {
  const article = document.createElement("article");
  article.className = "publication";
  article.innerHTML = `
    <div class="year">${item.year}</div>
    <div>
      <p class="type">${item.type}</p>
      <h3>${item.title}</h3>
      <p>${item.journal}</p>
    </div>
  `;
  $("#publication-list").appendChild(article);
});

siteData.leadership.forEach(item => {
  const article = document.createElement("article");
  article.className = "leadership-card";
  article.innerHTML = `
    <div class="leadership-mark">${item.mark}</div>
    <div>
      <p class="eyebrow">${item.role}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.url}" target="_blank" rel="noopener">${item.linkText}</a>
    </div>
  `;
  $("#leadership-grid").appendChild(article);
});

siteData.news.forEach(item => {
  const article = document.createElement("article");
  article.className = "news-item";
  article.innerHTML = `
    <time>${item.date}</time>
    <div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `;
  $("#news-list").appendChild(article);
});

siteData.teaching.forEach(item => {
  const span = document.createElement("span");
  span.textContent = item;
  $("#teaching-tags").appendChild(span);
});

const emailLink = $("#contact-email");
emailLink.href = `mailto:${siteData.contact.email}`;
emailLink.textContent = siteData.contact.email;

$("#mrsctc-contact").href = siteData.contact.mrsctc;
$("#pjbmr-contact").href = siteData.contact.pjbmr;

const orcidLink = $("#orcid-contact");
orcidLink.href = siteData.contact.orcid;
orcidLink.textContent = "0000-0002-2670-6402";
document.querySelectorAll(".flip-card").forEach(function(card) {
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
});
