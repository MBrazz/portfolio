"use strict";

const btnMobile = document.getElementById('btn-mobile');
const modeMobile = document.querySelector("#menu")


function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
}

function closeMenu() {
  // if (event.type === "touchstart") event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector("li");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
modeMobile.addEventListener("click", closeMenu)

