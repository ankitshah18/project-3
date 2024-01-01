// // toggle icon navbar

const menuBtn = document.getElementById("menu-btn");
const navlink = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navlink.classList.toggle("open");

  const isOpen = navlink.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick =() =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[herf*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  function toggleService(serviceId) {
    var content = document.getElementById(serviceId);
    content.classList.toggle("show");
  }

  // remove toggle icon and navbar when click navbar links (scroll)

  // animation footer on scroll
};
