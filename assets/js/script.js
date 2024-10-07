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



new TypeIt("#typeWriter", {
  speed: 100,
  waitUntilVisible: true,
  startDelay: 2000,
  loop: true,
})
  .type("desenvolvedor", { delay: 300 })
  .pause(200)
  .move(null, { to: "START", instant: true, delay: 300 })
  .pause(200)
  .move(1, { delay: 200 })
  .pause(100)
  .delete(1)
  .pause(200)
  .type("D", { delay: 225 })
  .move(12, { delay: 50 })
  .pause(200)
  .type(" Front End", { delay: 3000 })
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(300)
	.type("i")
	.pause(200)
	.type("g")
	.pause(200)
	.type("n")
	.pause(200)
	.type("e")
	.pause(200)
	.type("r")
  .pause(1600)
	.go();


