// Side bar
function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const menuButton = document.getElementById("toggle-menu");

  sidenav.style.width = "100%";
  menuButton.classList.add("open");
}

function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  const menuButton = document.getElementById("toggle-menu");

  sidenav.style.width = "0";
  menuButton.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const navList = document.getElementById("nav-ul");

  navList.addEventListener("click", () => {
    closeNav();
  });

  if (window.innerWidth <= 950) {
    navList.addEventListener("click", () => {
      closeNav();
    });
  }
});

window.addEventListener("resize", () => {
  const sidenav = document.getElementById("mySidenav");
  const menuButton = document.getElementById("toggle-menu");

  if (window.innerWidth > 950) {
    sidenav.style.width = "0";
    menuButton.classList.remove("open");
  }
});

// Adjust the scroll position when clicking on the navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionID = this.getAttribute("href");
    const section = document.querySelector(sectionID);

    let headerOffset = document.querySelector("header").offsetHeight;
    let aosOffset = 50.5;

    if (window.innerWidth < 950) {
      headerOffset = 0;
    }
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - headerOffset - aosOffset,
        behavior: "smooth",
      });
    }
  });
});

// Checking if the user changing the width by inspecting: Mobile to deskopt mode
let isMobile = window.innerWidth <= 950;
let hasReloaded = false;

window.addEventListener("resize", reloadPageOnResize);

function reloadPageOnResize() {
  const newIsMobile = window.innerWidth <= 950;

  if (isMobile !== newIsMobile && !hasReloaded) {
    location.reload();
    hasReloaded = true;
  } else if (isMobile !== newIsMobile) {
    hasReloaded = false;
  }
  isMobile = newIsMobile;
}

reloadPageOnResize();

// Function to add or remove the 'scrolled' class based on scroll position
function handleScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();

document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
  const chatWindow = document.getElementById("chat-window");
  const chatTooltip = document.createElement("div");
  chatTooltip.className = "chat-tooltip";
  document.body.appendChild(chatTooltip);

  chatBox.addEventListener("click", function () {
    // Toggle chat window visibility
    chatWindow.classList.toggle("hidden");

    // Toggle tooltip visibility
    if (chatWindow.classList.contains("hidden")) {
      chatTooltip.style.display = "none";
    } else {
      chatTooltip.style.display = "block";
    }
  });

  document.getElementById("close-chat").addEventListener("click", function () {
    chatWindow.classList.add("hidden");
    chatTooltip.style.display = "none";
  });
});

// Carousel
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

document
  .querySelector(".next")
  .addEventListener("click", () => showSlide(index + 1));
document
  .querySelector(".prev")
  .addEventListener("click", () => showSlide(index - 1));

setInterval(() => showSlide(index + 1), 5000);

// Project Carousel
const carousel = document.querySelector(".project-card-container");
const cards = document.querySelectorAll(".project-card");
let projectCurrentIndex = 0;
const totalSlides = cards.length;

function projectSlowSlide(projectIndex) {
  projectCurrentIndex = (projectIndex + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${projectCurrentIndex * 100}%)`; // I have a fucking problem
}

document.querySelector("#project-next").addEventListener("click", () => projectSlowSlide(projectCurrentIndex + 1));
document.querySelector("#project-prev").addEventListener("click", () => projectSlowSlide(projectCurrentIndex - 1));

// Auto slide every 5 seconds
setInterval(() => projectSlowSlide(projectCurrentIndex + 1), 7000);

// Initialize the first slide
projectSlowSlide(projectCurrentIndex);