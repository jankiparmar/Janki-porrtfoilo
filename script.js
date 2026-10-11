const WHATSAPP_NUMBER = "919328540992";

// WhatsApp par pre-filled enquiry kholna
function openWhatsApp(message) {
  if (!/^\d{12}$/.test(WHATSAPP_NUMBER)) {
    alert("Please script.js mein apna WhatsApp number 91 ke saath add karo.");
    return;
  }

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Get a Quote buttons: open WhatsApp directly
document.querySelectorAll(
  ".nav-button, .hero-buttons .btn-primary, .cta-content .btn-light"
).forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();

    openWhatsApp(
      "Hello Jay Mataji Colour Work!\n\n" +
      "I would like to get a quotation for painting work.\n" +
      "Please contact me and share the estimated price."
    );
  });
});

// Service enquiry buttons: send the selected service in the message
document.querySelectorAll(".quote-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const service = link.dataset.service;

    openWhatsApp(
      "Hello Jay Mataji Colour Work!\n\n" +
      "I am interested in your " + service + " service.\n" +
      "Please share the quotation and further details."
    );
  });
});

// Contact form: send all entered details to WhatsApp
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("message").value.trim();

  if (!name || !phone || !service || !details) {
    alert("Please fill in all the enquiry details.");
    return;
  }

  const message =
    "Hello Jay Mataji Colour Work!\n\n" +
    "New Painting Enquiry\n" +
    "Name: " + name + "\n" +
    "Customer Phone: " + phone + "\n" +
    "Service: " + service + "\n" +
    "Project Details: " + details + "\n\n" +
    "Please contact me regarding this project.";

  openWhatsApp(message);
});

// Gallery image preview
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightbox.showModal();
  });
});

document.getElementById("lightboxClose").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
});