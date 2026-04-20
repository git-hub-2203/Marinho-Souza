function trocarMapa(unidade) {
    const mapa = document.getElementById("mapa");

    if (unidade === 1) {
        mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9525611829704!2d-60.012321125028926!3d-3.107251496868301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c052db993bf1f%3A0x19fb39ba9fe7a612!2sF%C3%B3rum%20Business%20Center%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1776647413304!5m2!1spt-BR!2sbr";
    } else {
        mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63745.12541427288!2d-60.02216345477288!3d-3.0758908567036265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c192e35e50999%3A0xa6b26ed2514f4cd8!2sMarinho%20%26%20Souza%20Advogados%20Associados%20-%20Unidade%20Osvaldo%20Frota%20I!5e0!3m2!1spt-BR!2sbr!4v1776647760098!5m2!1spt-BR!2sbr";
    }

    document.querySelectorAll(".map-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}


(function () {
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
    }
})();
