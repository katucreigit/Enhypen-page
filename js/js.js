document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery img");
    const overlay = document.getElementById("overlay");
    const expandedImg = document.getElementById("expandedImg");
    const closeBtn = document.getElementById("closeBtn");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            expandedImg.src = img.src;
            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });
});

