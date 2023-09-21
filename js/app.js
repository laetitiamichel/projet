document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");

    // Sélectionnez le bouton dans le HTML pour activer/désactiver le mode sombre
    const toggleDarkModeButton = document.querySelector('button');

    // Ajoutez un gestionnaire d'événements pour basculer le mode sombre
    toggleDarkModeButton.addEventListener('click', () => {
        console.log("ok");
        document.body.classList.toggle('dark-mode'); /* ici on fait appel à la classe darkmode du CSS*/
    });
});