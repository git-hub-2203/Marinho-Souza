function trocarMapa(unidade, botao) {
    const mapa = document.getElementById("mapa");
    const transicaoContato = document.getElementById("contact-transition");
    const fundos = transicaoContato.querySelectorAll(".section-transition-bg");
    const fundoAtivo = transicaoContato.querySelector(".section-transition-bg.is-visible");
    const proximoFundo = Array.from(fundos).find(fundo => !fundo.classList.contains("is-visible"));
    let novaImagem = "url('fotos/fotos-forum/forum.png')";

    if (unidade === 1) {
        mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9525611829704!2d-60.012321125028926!3d-3.107251496868301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c052db993bf1f%3A0x19fb39ba9fe7a612!2sF%C3%B3rum%20Business%20Center%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1776647413304!5m2!1spt-BR!2sbr";
        novaImagem = "url('fotos/fotos-forum/forum.png')";
    } else {
        mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63745.12541427288!2d-60.02216345477288!3d-3.0758908567036265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c192e35e50999%3A0xa6b26ed2514f4cd8!2sMarinho%20%26%20Souza%20Advogados%20Associados%20-%20Unidade%20Osvaldo%20Frota%20I!5e0!3m2!1spt-BR!2sbr!4v1776647760098!5m2!1spt-BR!2sbr";
        novaImagem = "url('fotos/fotos-nova/foto9.jpeg')";
    }

    if (proximoFundo && fundoAtivo) {
        proximoFundo.style.backgroundImage = novaImagem;
        proximoFundo.classList.add("is-visible");
        fundoAtivo.classList.remove("is-visible");
    }

    document.querySelectorAll(".map-btn").forEach(btn => btn.classList.remove("active"));
    botao.classList.add("active");
}

(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();

(function () {
    const slides = [
        "fotos/fotos-forum/foto1.jpeg",
        "fotos/fotos-nova/foto6.jpeg",
        "fotos/fotos-forum/foto2.jpeg",
        "fotos/fotos-nova/foto7.jpeg",
        "fotos/fotos-forum/foto3.png",
        "fotos/fotos-nova/foto8.jpeg",
        "fotos/fotos-forum/foto5.jpeg",
        "fotos/fotos-nova/foto9.jpeg",
        "fotos/fotos-nova/foto10.jpeg",
        "fotos/fotos-nova/foto11.jpeg",
        "fotos/fotos-nova/foto12.jpeg"
    ];
    const primary = document.getElementById("office-slide-primary");
    const secondary = document.getElementById("office-slide-secondary");

    if (!primary || !secondary || slides.length < 2) return;

    let activeSlide = primary;
    let inactiveSlide = secondary;
    let currentIndex = 0;

    window.setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        inactiveSlide.src = slides[currentIndex];
        inactiveSlide.classList.add("is-active");
        activeSlide.classList.remove("is-active");

        const previousActive = activeSlide;
        activeSlide = inactiveSlide;
        inactiveSlide = previousActive;
    }, 3600);
})();
