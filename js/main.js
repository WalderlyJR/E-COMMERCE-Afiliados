document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".produtos");

  // ======== GERAÇÃO DE PRODUTOS ========
  if (container) {
    let tipoPagina = "todos";
    if (window.location.pathname.includes("digitais")) tipoPagina = "digital";
    if (window.location.pathname.includes("fisicos")) tipoPagina = "fisico";

    const filtrados = tipoPagina === "todos"
      ? produtos
      : produtos.filter(p => p.tipo === tipoPagina);

    container.innerHTML = filtrados.map(p => `
      <div class="card">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <button onclick="window.open('${p.link}', '_blank')">Ver Oferta</button>
      </div>
    `).join('');
  }

  // ======== SLIDER AUTOMÁTICO ========
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  if (slider && slides.length > 0) {
    let index = 0;

    function moveSlide() {
      index = (index + 1) % slides.length;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Troca de imagem a cada 4 segundos
    setInterval(moveSlide, 4000);
  }
});
// ===== MENU MOBILE =====
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
