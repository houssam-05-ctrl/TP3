// Fonction pour vérifier la taille de l'écran et adapter le contenu
function checkScreenSize() {
  const screenWidth = window.innerWidth;
  const mobileElement = document.getElementById("mobileElement");
  const desktopElement = document.getElementById("desktopElement");
  const widthValue = document.getElementById("widthValue");

  widthValue.textContent = screenWidth;

  // selon la largeur
  if (screenWidth < 768) {
    //  mobile
    mobileElement.style.display = "block";
    desktopElement.style.display = "none";
    console.log("Mode mobile activé");
  } else {
    //  desktop
    mobileElement.style.display = "none";
    desktopElement.style.display = "block";
    console.log("Mode desktop activé");
  }
}

// Exécuter la fonction au chargement de la page
window.addEventListener("load", checkScreenSize);

// Exécuter la fonction quand la fenêtre est redimensionnée
window.addEventListener("resize", checkScreenSize);

// Exécuter aussi au chargement du DOM
document.addEventListener("DOMContentLoaded", checkScreenSize);
