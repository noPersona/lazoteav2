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
