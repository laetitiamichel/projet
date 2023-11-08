// SROLL ANIME POUR PRESENTATION:
// quand le logo est affiché à droite il correspond à une image à gauche
// si le logo change, l'image change
document.addEventListener("DOMContentLoaded", ()=>{
    let logo2007 = document.getElementById("logo-2007");
    let image2007 = document.getElementById("image-2007");
    let logo2011 = document.getElementById("logo-2011");
    let image2011 = document.getElementById("image-2011");
    let logo2016 = document.getElementById("logo-2016");
    let image2016 = document.getElementById("image-2016");  
    let logo2017 = document.getElementById("logo-2017");
    let image2017 = document.getElementById("image-2017");
    let logo2022 = document.getElementById("logo-2022");
    let image2022 = document.getElementById("image-2022");

    // click = 2011 => image de gauche change pour l'image 2011
    logo2011.addEventListener("click", ()=>{
        image2007.setAttribute("src","./asset/presentation/kookai.jpg")
         console.log("OK")
    })
      // click = 2016 => image de gauche change pour l'image 2016
      logo2016.addEventListener("click", ()=>{
        image2007.setAttribute("src","./asset/presentation/presentation-boutique.jpg")
         console.log("OK")
    })
     // click = 2017 => image de gauche change pour l'image 2017
     logo2017.addEventListener("click", ()=>{
        image2007.setAttribute("src","./asset/presentation/bijoux-rue-gabrielle.jpg")
         console.log("OK")
    })
    
      // click = 2022 => image de gauche change pour l'image 2022
      logo2022.addEventListener("click", ()=>{
        image2007.setAttribute("src","./asset/presentation/informatique.jpg")
         console.log("OK")
    })
    // click = 2022 => image de gauche change pour l'image 2022
    logo2007.addEventListener("click", ()=>{
        image2007.setAttribute("src","./asset/presentation/logo-chu-toulouse.png")
         console.log("OK")
    })
})
