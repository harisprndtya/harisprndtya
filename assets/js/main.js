function includeHTML(targetId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch((err) => console.error(`Error loading ${filePath}:`, err));
}

includeHTML("menu", "../html/menu.html");
includeHTML("contact-info", "contact-info.html");
includeHTML("map-section", "map-section.html");
includeHTML("newsletter-cta", "newsletter-cta.html");
