const nav_phone = document.querySelector(".nav_phone");
const navmenu = document.querySelector(".navmenu");
const nav_list = document.querySelectorAll(".nav_list");

nav_phone.addEventListener("click", mobileMenu);
nav_list.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  nav_phone.classList.toggle("active_nav_phone");
  navmenu.classList.toggle("active_nav_phone");
  nav_phone.classList.toggle("animation_nav_phone_lines");
}

function closeMenu() {
  nav_phone.classList.remove("active_nav_phone");
  navmenu.classList.remove("active_nav_phone");
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
const output = document.getElementById('output');
const response = `Well, Hello there!👋 I am a sanskari GenZ boy,namaste🙏  My skills primarily include Front-End & Backend Development. I am currently pursuing Integrated Dual Degree Studies in Industrial and System Engineering at IIT Kharagpur. I am, in the fourth year of my KGP period. Opensource, scalability, developer operations, and coding are some of the topics that make my eyes sparkle.`;

let index = 0;
const printCharacter = () => {
  if (index < response.length) {
    const char = response[index];
    const charElement = document.createElement('span');
    
    if (index >= 5 && index < 18) {
      charElement.className = 'greenhelow';
    }
    
    charElement.textContent = char;
    output.appendChild(charElement);
    
    index++;
    output.scrollTop = output.scrollHeight;
    setTimeout(printCharacter, 10);
  }
};

setTimeout(printCharacter, 100);



const goBackButton=document.getElementById('goBackBtn');
const goForwardButton=document.getElementById('goForwardBtn');

goBackButton.addEventListener('click',() => {
  window.history.back(); // Go back one page
});

goForwardButton.addEventListener('click',() => {
  window.history.forward(); // Go forward one page
});