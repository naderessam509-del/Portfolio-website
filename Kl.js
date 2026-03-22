// script.js

// ✅ حافظ على مكان التمرير عند الرجوع للصفحة
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'auto';
}

// 1️⃣ Menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 2️⃣ Scroll animations
const elements = document.querySelectorAll(".card, .project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold: 0.2
});

elements.forEach(el => {
  observer.observe(el);
});