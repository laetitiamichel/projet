const slide = ["updateSet_SN.png", "local_updateSet.png", "record_update.png"];
const slide2 = ["tableau_jira.jpg", "us_jira.png"];
const slide3 = ["demandeJira_1.png", "demandeJira_2.png","demandeJira_3.png"];
const slide4 = ["creation_UPSET_us.png", "creation_UPSET_us_2.png"];
let numero = 0;

/* slide update set */
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
        document.getElementById("slide").src = "./asset/entreprise/" + slide[numero];
}

/* présentation US dans le jira */
function ChangeSlide2(sens) {
    numero = numero + sens;
    if (numero > slide2.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide2.length - 1;
        document.getElementById("slide2").src = "./asset/entreprise/" + slide2[numero];
}

/* diapo JIRA */
function ChangeSlide3(sens) {
    numero = numero + sens;
    if (numero > slide3.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide3.length - 1;
        document.getElementById("slide3").src = "./asset/entreprise/" + slide3[numero];
}

/* diapo création Update set */
function ChangeSlide4(sens) {
    numero = numero + sens;
    if (numero > slide4.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide4.length - 1;
        document.getElementById("slide4").src = "./asset/entreprise/" + slide4[numero];
}