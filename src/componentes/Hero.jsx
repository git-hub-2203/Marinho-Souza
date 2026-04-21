import React from "react";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>Advocacia com <i>Estratégia</i>, Técnica e Presença Institucional.</h1>
          <p className="hero-desc">
            Escritório de advocacia full service, dedicado a oferecer soluções jurídicas completas e personalizadas
            para clientes que buscam segurança, clareza e acompanhamento próximo em cada etapa.
          </p>
          <div className="hero-cta">
            <a href="https://wa.me/5592999999999" target="_blank" rel="noreferrer" className="btn-whatsapp-hero">
              <i className="fab fa-whatsapp"></i>
              Falar com um advogado
            </a>
          </div>
          <div className="hero-metrics">
            <div className="hero-metric">
              <strong>+ 16</strong>
              <span>Anos de experiência</span>
            </div>
            <div className="hero-metric">
              <strong>+ 3.000</strong>
              <span>Clientes atendidos</span>
            </div>
            <div className="hero-metric">
              <strong>% 95</strong>
              <span>Satisfação estimada</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/logout.png" alt="Logo principal Marinho & Souza" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
