// script.js

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".galeria-imagenes img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    close.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
