/* BOUTON DARK MODE */
document.addEventListener("DOMContentLoaded", e => {
console.log(e.target);
let el = document.querySelector("head");

// Sélectionnez le bouton dans le HTML pour activer/désactiver le mode sombre
const toggleDarkModeButton = document.querySelector('button');

// Ajoutez un gestionnaire d'événements pour basculer le mode sombre
toggleDarkModeButton.addEventListener('click', () => {
console.log("ok");
document.body.classList.toggle('dark-mode'); // ici on fait appel à la classe darkmode du CSS
});

/* const { Button } = require("bootstrap"); */
  /*   const carousel = new bootstrap.Carousel('#myCarousel')
    const carouselExampleCaptions = document.querySelectorAll('Button')
    data-bs-target.addEventListener('click', () =>{
        console.log("ok");
        document.body.classList.toggle('#carouselExampleCaptions')
    }) */

// Script to open and close sidebar
const togglemenuBtn = document.getElementById("mySidebar")
togglemenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('w3-sidebarw3-blackw3-animate-rightw3-xxlarge')
})
    
    
});