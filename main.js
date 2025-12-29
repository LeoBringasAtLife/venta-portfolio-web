// ====== NavBar
// Get elements from the DOM

const navBtn = document.querySelector('.nav-btn');
const menu = document.querySelector('.menu');

// Add click event to navbar buttom
navBtn.addEventListener('click', () => {
  // Toggle menu open class
  menu.classList.toggle('menu-open');
});
