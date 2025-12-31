/**
 * JavaScript principal para la plantilla de portafolio
 * Gestiona la navegación móvil y las interacciones básicas.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navBtn = document.querySelector('.nav-btn');
  const menu = document.querySelector('.menu');

  if (navBtn && menu) {
    navBtn.addEventListener('click', () => {
      menu.classList.toggle('menu-open');

      // Change icon between bars and times if using Font Awesome
      const icon = navBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.links a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        const icon = navBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
});
