const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".Login");
const registerlink = document.querySelector(".register");
const btn = document.querySelector(".btnLogin");
const iconclose = document.querySelector(".icon-close");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  document.body.classList.remove("blur"); // Remove blur effect from the body
});

const btnLogin = document.querySelector(".btnLogin");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

// Function to toggle the overlay
function toggleOverlay() {
  document.body.classList.toggle("overlay-active");
}

btnLogin.addEventListener("click", function() {
  toggleOverlay();
});

// Clicking outside the login form will also close the overlay
overlay.addEventListener("click", function(event) {
  if (event.target === overlay) {
    toggleOverlay();
  }
});

// Append the overlay to the body
document.body.appendChild(overlay);

btnLogin.addEventListener('click', function() {
  overlay.classList.toggle('show');
});

const closeIcon = document.querySelector('.icon-close');

closeIcon.addEventListener('click', function() {
  overlay.classList.remove('show'); // Remove the 'show' class from overlay
  document.body.classList.remove('blur'); // Remove blur effect from the body
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));

    if (targetElement) {
      window.scroll({
        top: targetElement.offsetTop - 100,
        left: 0,
        behavior: 'smooth',
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const productDropdown = document.getElementById("productDropdown");
  const dropdownMenu = productDropdown.querySelector(".dropdown__menu");

  productDropdown.addEventListener("click", function() {
      dropdownMenu.classList.toggle("show");
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener("click", function(event) {
      if (!productDropdown.contains(event.target)) {
          dropdownMenu.classList.remove("show");
      }
  });
});