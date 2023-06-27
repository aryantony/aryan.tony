const nav_phone = document.querySelector(".nav_phone");
const navmenu = document.querySelector(".navmenu");
const nav_list = document.querySelectorAll(".nav_list");
let x = document.querySelector(".off");
nav_phone.addEventListener("click", mobileMenu);
nav_list.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  // x.style.opacity = "0";
  nav_phone.classList.toggle("active_nav_phone");
  navmenu.classList.toggle("active_nav_phone");
  nav_phone.classList.toggle("animation_nav_phone_lines");
  x.classList.toggle("y");
}

function closeMenu() {
  nav_phone.classList.remove("active_nav_phone");
  navmenu.classList.remove("active_nav_phone");
  // x.classList.remove("y");
  // x.style.opacity = "1";
}

/**
 *!Adding the JavaScript in the Form
 */
/*
 *   let id = (id_call) => {
 *   return document.getElementById(id_call);
 *    };
 */
// when you use arrow function you must write the return value
// the above things can be written as following

let id = (id_call) => document.getElementById(id_call);
let classes = (classes_call) => document.getElementsByClassName(classes_call);

let username = id("NAME");
let Email_adress = id("EMAIL");
let Comments = id("MESSAGE");
let check_human = id(`I'm_not_a_robot`);
let select_form = id("form");
let Error_msg = classes("error_msg");
let incorrect = classes("output_incorrect");
let correct = classes("output_correct");

if (!localStorage.formValues) {
  localStorage.formValues = "[]";
}
var formValues = JSON.parse(localStorage.formValues);
let a, b, c, d;
let textarea = document.querySelectorAll("input");
textarea[0].addEventListener("blur", (e) => {
  if (a != 1) {
    check_letters_in_username(username.value.trim());
  }
});
textarea[1].addEventListener("blur", (e) => {
  if (b != 1) {
    check_char_of_email(Email_adress.value.trim());
  }
});
textarea[2].addEventListener("blur", (e) => {
  if (c != 1) {
    check_blank_msg(Comments.value.trim());
  }
});
textarea[3].addEventListener("blur", (e) => {
  if (d != 1) {
    check_answer(check_human.value.trim());
  }
});
select_form.addEventListener("submit", (x) => {
  x.preventDefault();
  a = check_letters_in_username(username.value.trim());
  fun1(0);
  b = check_char_of_email(Email_adress.value.trim());
  fun1(1);
  c = check_blank_msg(Comments.value.trim());
  fun1(2);
  d = check_answer(check_human.value.trim());
  fun1(3);

  if (a == 1 && b == 1 && c == 1 && d == 1) {
    id("opacity_of_contact_page").style.opacity = "0";
    id("opacity_of_contact_page").style.height = "0";
    id("opacity_of_contact_page").style.position = "absolute";
    id("opacity_of_contact_page").style.left = "-1000000px";
    document.body.classList.add("a");
    document.querySelector(".footer-bottom").style.height = "0";
    document.querySelector(".navbar").style.height = "0";
    id("body").style.opacity = "0.89";
    id("body").style.backgroundColor = "black";
    id("body").style.left = "0px";
    id("thanks_name").innerHTML = `Hello! ${username.value}`;
    id("explanation").innerHTML = "Thanks for being awesome!";
    id(
      "excuse1"
    ).innerHTML = ` I have received your message and would like to thank you for writing
    to me.I'll analyze your information and come back to you within a 3
    working days.`;
    id(
      "excuse2"
    ).innerHTML = `${username.value}, if your inquiry is urgent, please use the phone number listed in the
    footer of my website.`;
    id("excuse3").innerHTML = "Aryan...";
    id("ok_button").innerHTML = "OK";

    formValues.push({
      name: username.value.trim(),
      Email: Email_adress.value.trim(),
      Concern: Comments.value.trim(),
    });
    localStorage.formValues = JSON.stringify(formValues);
  }
});

let check_letters_in_username = function (name) {
  let letter_must_have = /^[a-zA-Z\s]+$/;

  if (name == "") {
    Error_msg[0].innerHTML = "This is a required field.";
    incorrect[0].style.opacity = "1";
    correct[0].style.opacity = "0";

    username.style.borderBottom = "2px solid red";
    return 0;
  } else if (name.match(letter_must_have)) {
    Error_msg[0].innerHTML = "";
    incorrect[0].style.opacity = "0";
    correct[0].style.opacity = "1";

    username.style.borderBottom = "2px solid green";

    y(0);
    return 1;
  } else {
    Error_msg[0].innerHTML = `Only alphabets are allowed.`;
    incorrect[0].style.opacity = "1";
    correct[0].style.opacity = "0";

    username.style.borderBottom = "2px solid red";
    return 0;
  }
};

let check_char_of_email = function (email) {
  let char = /^[a-zA-Z0-9@.]+$/;

  if (email == "") {
    Error_msg[1].innerHTML = "This is a required field.";
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (!email.match(char)) {
    Error_msg[1].innerHTML = "Invalid email adress.";
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (!email.includes("@") && !email.includes(".")) {
    Error_msg[1].innerHTML = `'.' & '@' must appear in the Email.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (!email.includes("@")) {
    Error_msg[1].innerHTML = `'@' must appear in the Email.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (!email.includes(".")) {
    Error_msg[1].innerHTML = `'.' must appear in the Email.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (
    email.indexOf(".") == email.indexOf("@") - 1 ||
    email.indexOf(".") == email.indexOf("@") + 1
  ) {
    Error_msg[1].innerHTML = `'.' & '@' cannot be together.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (email.endsWith("@")) {
    Error_msg[1].innerHTML = `'@' cannot be at the end.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (email.indexOf("@") == 0) {
    Error_msg[1].innerHTML = `'@' cannot be at the start.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (email.endsWith(".")) {
    Error_msg[1].innerHTML = `'.' cannot be at the end.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (email.indexOf(".") == 0) {
    Error_msg[1].innerHTML = `'.' cannot be at the start.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else if (
    email.indexOf(".") != email.length - 4 &&
    email.indexOf(".") != email.length - 3
  ) {
    Error_msg[1].innerHTML = `'.' is not at correct position.`;
    incorrect[1].style.opacity = "1";
    correct[1].style.opacity = "0";

    Email_adress.style.borderBottom = "2px solid red";
    return 0;
  } else {
    Error_msg[1].innerHTML = "";
    incorrect[1].style.opacity = "0";
    correct[1].style.opacity = "1";

    Email_adress.style.borderBottom = "2px solid green";
    y(1);
    return 1;
  }
};

let check_blank_msg = function (msg) {
  if (msg == "") {
    Error_msg[2].innerHTML = "This is a required field.";
    incorrect[2].style.opacity = "1";
    correct[2].style.opacity = "0";
    Comments.style.borderBottom = "2px solid red";
    return 0;
  } else {
    Error_msg[2].innerHTML = "";
    incorrect[2].style.opacity = "0";
    correct[2].style.opacity = "1";
    Comments.style.borderBottom = "2px solid green";
    y(2);
    return 1;
  }
};

let check_answer = function (ans) {
  if (ans == "") {
    Error_msg[3].innerHTML = "This is a required field.";
    incorrect[3].style.opacity = "1";
    correct[3].style.opacity = "0";

    check_human.style.borderBottom = "2px solid red";
    return 0;
  } else if (ans !== "8") {
    Error_msg[3].innerHTML = "You're not a Human.";
    incorrect[3].style.opacity = "1";
    correct[3].style.opacity = "0";

    check_human.style.borderBottom = "2px solid red";
    return 0;
  } else {
    Error_msg[3].innerHTML = "";
    incorrect[3].style.opacity = "0";
    correct[3].style.opacity = "1";

    check_human.style.borderBottom = "2px solid green";
    return 1;
  }
};

let y = function (i) {
  let movecursor = document.querySelectorAll("input");
  if (i != 3) {
    movecursor[i].parentElement.nextElementSibling
      .querySelector("input")
      .focus();
  }
};

let fun1 = function (i) {
  let movecursor = document.querySelectorAll("input");
  if (i == 0) {
    movecursor[0].addEventListener("keyup", function (x) {
      if (x.keyCode === 13) {
        check_letters_in_username(username.value.trim());
      }
    });
  } else if (i == 1) {
    movecursor[1].addEventListener("keyup", function (x) {
      if (x.keyCode === 13) {
        check_char_of_email(Email_adress.value.trim());
      }
    });
  } else if (i == 2) {
    movecursor[2].addEventListener("keyup", function (x) {
      if (x.keyCode === 13) {
        check_blank_msg(Comments.value.trim());
      }
    });
  } else {
    movecursor[3].addEventListener("keyup", function (x) {
      if (x.keyCode === 13) {
        check_answer(check_human.value.trim());
      }
    });
  }
};


id("ok_button").addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "contact.html";
});
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