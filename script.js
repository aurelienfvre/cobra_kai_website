var bannerImages = document.querySelectorAll("#hero .banner img");
var currentImageIndex = 0;

function changeBannerImage() {
  // Masquer l'image actuelle
  bannerImages[currentImageIndex].classList.remove("active");

  // Passer à l'image suivante
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;

  // Afficher la nouvelle image avec un léger délai pour le fondu
  setTimeout(function() {
    bannerImages[currentImageIndex].classList.add("active");
  }, 100);

  // Répéter toutes les 5 secondes
  setTimeout(changeBannerImage, 2000);
}

// Démarrer le changement d'images de la bannière
changeBannerImage();


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
  
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Vérifie si le navigateur supporte le défilement fluide natif
if ('scrollBehavior' in document.documentElement.style) {
    // Le défilement fluide est pris en charge nativement, aucune action supplémentaire n'est requise
  } else {
    // Le défilement fluide n'est pas pris en charge, utilise une bibliothèque JavaScript (par exemple, Smooth Scroll)
    // Assurez-vous d'inclure la bibliothèque Smooth Scroll dans votre page
    // Vous pouvez trouver la bibliothèque ici : https://github.com/cferdinandi/smooth-scroll
  
    // Exemple d'utilisation de Smooth Scroll avec des options par défaut
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500, // Vitesse de défilement (en millisecondes)
      offset: 0 // Décalage du défilement (en pixels)
    });
  }
  
