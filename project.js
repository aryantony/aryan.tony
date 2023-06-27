const nav_phone = document.querySelector(".nav_phone");
const navmenu = document.querySelector(".navmenu");
const nav_list = document.querySelectorAll(".nav_list");
let opac = document.querySelector(".offfooter");
nav_phone.addEventListener("click", mobileMenu);
nav_list.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  nav_phone.classList.toggle("active_nav_phone");
  navmenu.classList.toggle("active_nav_phone");
  nav_phone.classList.toggle("animation_nav_phone_lines");
  opac.classList.toggle("y");
}

function closeMenu() {
  nav_phone.classList.remove("active_nav_phone");
  navmenu.classList.remove("active_nav_phone");
  //   opac.classList.remove("footer_opacity_zero");
}

document.querySelector(".click_fb").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.facebook.com/profile.php?id=100057814296670");
});
document.querySelector(".click_twit").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://twitter.com/aryan3865?s=08");
});
document.querySelector(".click_link").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/aryan-kumar-88515121a");
});
document.querySelector(".click_insta").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.instagram.com/aryanroy.tony?r=nametag");
});

const goBackButton=document.getElementById('goBackBtn');
const goForwardButton=document.getElementById('goForwardBtn');

goBackButton.addEventListener('click',() => {
  window.history.back(); // Go back one page
});

goForwardButton.addEventListener('click',() => {
  window.history.forward(); // Go forward one page
});