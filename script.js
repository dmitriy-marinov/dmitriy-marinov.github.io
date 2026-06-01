// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// Burger menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("active");
});

// Close nav on link click
nav.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.classList.remove("active");
  });
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((s) => observer.observe(s));

// Reveal contacts
const revealBtn = document.getElementById("revealContacts");
const contactHidden = document.getElementById("contactHidden");
if (revealBtn && contactHidden) {
  revealBtn.addEventListener("click", () => {
    const isOpen = contactHidden.classList.toggle("open");
    revealBtn.classList.toggle("revealed", isOpen);
    revealBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-eye-slash"></i> Скрыть контакты'
      : '<i class="fa-solid fa-eye"></i> Показать контакты';
  });
}

// Phone input mask
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.startsWith("8")) val = "7" + val.slice(1);
    if (!val.startsWith("7")) val = "7" + val;
    val = val.slice(0, 11);
    let result = "+7";
    if (val.length > 1) result += " (" + val.slice(1, 4);
    if (val.length >= 4) result += ") " + val.slice(4, 7);
    if (val.length >= 7) result += "-" + val.slice(7, 9);
    if (val.length >= 9) result += "-" + val.slice(9, 11);
    e.target.value = result;
  });
}

// Form submission
const form = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll("[required]").forEach((field) => {
    field.classList.remove("error");
    if (!field.value.trim()) {
      field.classList.add("error");
      valid = false;
    }
  });

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Отправляем...";

  // Simulate send (replace with real endpoint)
  setTimeout(() => {
    formSuccess.style.display = "block";
    form.reset();
    btn.disabled = false;
    btn.textContent = "Отправить заявку";
    formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 1200);
});

// Animate elements on scroll
const animItems = document.querySelectorAll(
  ".adv-card, .service-card, .step, .extra-item",
);
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = entry.target.style.transform.replace(
          "translateY(20px)",
          "translateY(0)",
        );
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

animItems.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition =
    "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease, border-color 0.25s ease";
  animObserver.observe(el);
});
