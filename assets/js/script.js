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



btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
modeMobile.addEventListener("click", closeMenu)

