// SROLL ANIME POUR PRESENTATION:
// quand le logo est affiché à droite il correspond à une image à gauche
// si le logo change, l'image change
let logo2007 = document.getElementById("logo-2007");
let image2007 = document.getElementById("image-2007");
let logo2011 = document.getElementById("logo-2011");
let image2011 = document.getElementById("image-2011");
let image2016 = document.getElementById("image-2016");

logo2007.addEventListener( "onscroll", (event) =>{
    if (logo2007 === logo2007){
        image2007 = image2011; 
    }
    
});
/* logo2011.addEventListener( "onscrollend", (event) =>{
    image2011 = image2016; 
}); */