// Mostrar botón "arriba"
window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    btn.style.display = window.scrollY > 250 ? "block" : "none";

    // Animaciones secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
};

// Función subir arriba
document.getElementById("topBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
