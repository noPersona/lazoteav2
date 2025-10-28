// Activa “estado scrolled” si quisieras variar el menú al desplazar
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 12) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Marca enlace activo en el menú según URL
const path = location.pathname.replace(/\/index\.html$/, '/');
document.querySelectorAll('nav a').forEach(a => {
  const href = new URL(a.href, location.origin).pathname;
  if (href === path) a.classList.add('active');
});

// ======== Online Page Interaction ========
// (Por si luego quieres animaciones o carga dinámica)

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video-item");

  videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.classList.add("hovered");
    });

    video.addEventListener("mouseleave", () => {
      video.classList.remove("hovered");
    });
  });
});


// Animación de aparición suave en la sección Online
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  videos.forEach(v => observer.observe(v));
});
