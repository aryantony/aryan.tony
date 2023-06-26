


const nav_phone=document.querySelector(".nav_phone");
const navmenu=document.querySelector(".navmenu");
const nav_list=document.querySelectorAll(".nav_list");

nav_phone.addEventListener("click",mobileMenu);
nav_list.forEach((n) => n.addEventListener("click",closeMenu));

function mobileMenu() {
  nav_phone.classList.toggle("active_nav_phone");
  navmenu.classList.toggle("active_nav_phone");
  nav_phone.classList.toggle("animation_nav_phone_lines");
}

function closeMenu() {
  nav_phone.classList.remove("active_nav_phone");
  navmenu.classList.remove("active_nav_phone");
}

let change_heading=document.querySelector(".heading_mid-section-part2");
// let x = window.matchMedia("(min-width:0px) and (max-width:400px)");
/*The window.matchMedia() method returns a MeduaQueryList
object repersenting the results of the specified CSS media 
query string.
The value of the matchMedia() method can be any of the media 
features of the CSS@media rule like min-height,min-width,orientation,etc*/
// myfun(x);
// x.addListener(myfun);
// function myfun(x) {
//   if (x.matches) {
//     change_heading.innerHTML = "Hello";
//   }
// }
// The above method is also do the same works as below done.
if(window.innerWidth<=400) {
  change_heading.innerHTML="Hello";
}
// let resume=document.querySelector("#resume_footer_mid-section-part2");
// resume.addEventListener("click",(e) => {
//   e.preventDefault();
//   alert(
//     `Currently, this page is not available.
// "Work is under Process."


// Inconvenience regretted!"`
//   );
// });

document.querySelector(".click_fb").addEventListener("click",(e) => {
  e.preventDefault();
  window.open("https://www.facebook.com/profile.php?id=100057814296670");
});
document.querySelector(".click_twit").addEventListener("click",(e) => {
  e.preventDefault();
  window.open("https://twitter.com/aryan3865?s=08");
});
document.querySelector(".click_link").addEventListener("click",(e) => {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/aryan-kumar-88515121a");
});
document.querySelector(".click_insta").addEventListener("click",(e) => {
  e.preventDefault();
  window.open("https://www.instagram.com/aryanroy.tony?r=nametag");
});

const available=localStorage.getItem("available")

if(available!="yes")
{

const statements=[
  "> Hi",
  "> You know who I am?",
  "> Haha, I am kidding. You are my guest",
  "> Let's ask with prompt what he has about me",
];

const statementContainer=document.getElementById('statement');
let currentIndex=0;
let currentStatement="> Hi";
let charIndex=0;

function typeStatement() {


  if(currentStatement===null||charIndex===currentStatement.length) {
    currentIndex=(currentIndex+1)%statements.length;
    currentStatement=statements[currentIndex];
    charIndex=0;

    if(currentIndex===0) {
    // Delay the prompt display
    // setTimeout(function() {
      document.getElementById('prompt').classList.add('show');
    // }, 2000);
setTimeout(function() {
  document.getElementById('terminal').classList.add('show');
}, 1500); // Adjust the delay time (in milliseconds) as needed
  localStorage.setItem("available","yes");
  localStorage.setItem("initialCommand",statementContainer.innerHTML)
      return;
    }
  }

  if(charIndex<=currentStatement.length) {
    statementContainer.innerHTML+=currentStatement.charAt(charIndex);
    charIndex++;
  }

  if(charIndex===currentStatement.length) {
    setTimeout(typeStatement,2000);
    statementContainer.innerHTML+="<br>";
  } else {
    setTimeout(typeStatement,100);
  }
}

typeStatement();
}else{
  
  const statementContainer=document.getElementById('statement');
  statementContainer.innerHTML=localStorage.getItem("initialCommand");
  console.log(localStorage.getItem("initialCommand"));
  document.getElementById('prompt').classList.add('show');
  document.getElementById('terminal').classList.add('show');
}
const output=document.getElementById('output');
const input=document.getElementById('input');

input.focus();
document.addEventListener('click', function() {
  input.focus();
});
input.addEventListener('keydown',function(event) {
  if(event.key==="Enter") {
    event.preventDefault();
    const command=input.value;
    input.value='';
    writeToTerminal(command);
  }
});
// Initialize the terminal with the 'about:' command
writeToTerminal('about');
function writeToTerminal(command) {
  const response=executeCommand(command);
  output.innerHTML+=`<div class="command-prompt">&gt; ${command}</div><div>${response}</div>`;
  output.scrollTop=output.scrollHeight;
}

function executeCommand(command) {
  if (command === 'about') {
    return `Greetings, Guest! Allow me to introduce Aryan, an exceptional individual currently immersed in the pursuit of Integrated Dual Degree Studies in Industrial and System Engineering at <span id="iitkgp">IIT Kharagpur</span>. Aryan has reached the impressive milestone of his third year in the esteemed KGP program, showcasing his unwavering dedication and commitment. With a profound passion for development, Aryan's expertise and skills are sure to captivate and inspire.`;
  } else if (command === 'help') {
    return 'Available commands: <span class="helpCommand">help</span>, <span class="helpCommand">about</span>, <span class="helpCommand">hobbies</span>, <span class="helpCommand">project</span>, <span class="helpCommand">contact</span>';
  } else if (command === 'project') {
    setTimeout(function() {
      window.location.href = "/project.html";
    }, 2000);
    return "You are being redirected to the project page.";
  } else if (command === "contact") {
    setTimeout(function() {
      window.location.href = "/contact.html";
    }, 2000);
    // Handle the contact command logic here
    return "You are being redirected to the contact page.";
  }if(command==="hobbies")
 
  {
    return "Opensource, scalability, developer operations, coding and debugging"
  }
   else {
    return 'Command not found. Type "help" to see available commands.';
  }
}


