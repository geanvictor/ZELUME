// Placeholder para futuras interações (menu mobile, animações, etc)
console.log("Site Zelume carregado com sucesso!");
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});

const elementosAnimados = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.2
  }
);

elementosAnimados.forEach(el => observer.observe(el));

