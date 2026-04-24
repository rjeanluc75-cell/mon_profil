// Message dans la console
console.log("Bienvenue sur le portfolio de Jean Luc");

// Animation simple au clic sur les liens du menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigation vers : " + this.textContent);
    });
});

// Effet de bienvenue
window.addEventListener("load", function () {
    alert("Bienvenue sur mon portfolio !");
});
