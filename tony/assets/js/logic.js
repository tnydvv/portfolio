// Menu Animation
let menuBtn = document.getElementById("menu-btn-check");
let menuCon = document.getElementById("menu-container");
let navbar = document.getElementById("navbar");
let menuBar = document.getElementsByClassName("line");

// makes (hamburger) - to x and shows full page as menu
menuBtn.onclick = () => {
  if (menuBtn.checked) {
    menuCon.style.height = "100vh";
    navbar.style.backgroundColor = "black";
    navbar.style.color = "white";

    for (const bar of menuBar) {
      bar.style.backgroundColor = "white";
    }
  } else {
    menuCon.style.height = "4.5rem";
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";

    for (const bar of menuBar) {
      bar.style.backgroundColor = "black";
    }
  }
};

// hides / displays nav bar on scroll
window.onscroll = function () {
  if (!menuBtn.checked) {
    if (this.oldScroll > this.scrollY) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-4.5rem";
    }
    this.oldScroll = this.scrollY;
  }
};

let menuItems = document.querySelectorAll("#navbar ul > li > a");
for (const menuItem of menuItems) {
  menuItem.addEventListener("click", () => {
    menuBtn.checked = false;
    menuBtn.onclick();
  });
}

const animateLiText = (data) => {
  for (const title of data) {
    title.addEventListener("mouseenter", () => {
      const currentHoverElement = title;

      for (const item of data) {
        if (item != currentHoverElement) {
          item.style.opacity = "0.4";
        }
      }

      title.style.transition = "0.25s all ease-in-out";
    });

    title.addEventListener("mouseleave", () => {
      for (const item of data) {
        item.style.opacity = "1";
      }
    });
  }
};

// shows footer links
const sections = ["Home", "Projects", "Skills", "About Me", "Contact"];
const links = sections.map((section) => {
  let listElement = document.createElement("li");
  let a = document.createElement("a");
  let h2 = document.createElement("h2");

  let link = `#${section.toLowerCase().split(" ").join("-")}`; // <- #section

  a.setAttribute("href", link);
  h2.className = "unuppercase";
  h2.innerText = section;

  a.append(h2);
  listElement.append(a);

  return listElement;
});

document.querySelector("#footer-pages > ul").append(...links);

// animations
let navMenuTitles = document.querySelectorAll("#navbar ul > li > a > h2");
let footerJumpTitles = document.querySelectorAll("#footer-pages ul > li > a > h2");
let footerSocialTitles = document.querySelectorAll("#footer-contact-links ul > li > a > h2");

animateLiText(footerSocialTitles);
animateLiText(footerJumpTitles);
animateLiText(navMenuTitles);

// Caption Animation
const words = ["Software Engineer.", "Web Developer.", "Avid Learner.", "Problem Solver."];
let i = 0;
let timer;
let timeDelay = 1000;

const typingEffect = () => {
  let word = words[i].split("");
  let loopTyping = () => {
    if (word.length > 0) {
      document.getElementById('hero-caption').innerHTML += word.shift();
      timer = setTimeout(loopTyping, 300);
    } else {
      setTimeout(deletingEffect, timeDelay);
    }
  };
  loopTyping();
};

const deletingEffect = () => {
  let word = words[i].split("");
  let loopDeleting = () => {
    if (word.length > 0) {
      word.pop();
      document.getElementById('hero-caption').innerHTML = word.join("");
      timer = setTimeout(loopDeleting, 200);
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      }
      setTimeout(typingEffect, timeDelay);
      return false;
    }
  };
  loopDeleting();
};

const initialErase = () => {
  let initialWord = document.getElementById('hero-caption').innerHTML.split("");
  let index = 0;

  const eraseCharacter = () => {
    if (initialWord.length > 0) {
      initialWord.pop();
      document.getElementById('hero-caption').innerHTML = initialWord.join("");
      timer = setTimeout(eraseCharacter, 100);
    } else {
      typingEffect();
    }
  };

  eraseCharacter();
};

// Start the initial erasing process
initialErase();
