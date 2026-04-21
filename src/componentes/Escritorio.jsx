import React from "react";
import { timeline } from "./data";

function Escritorio() {
  return (
    <section id="escritorio">
      <div className="office-shell">
        <div className="office-layout">
          <div className="office-content">
            <span className="office-kicker">Marinho & Souza</span>
            <h2 className="section-title">Estrutura jurídica sólida para decisões seguras.</h2>

            <div className="office-lead-card">
              <strong>Atuação técnica, objetiva e estrategicamente conduzida.</strong>
              <p>
                O escritório reúne repertório jurídico, clareza na condução processual e atendimento próximo para
                oferecer respostas consistentes a pessoas e empresas que precisam de segurança, seriedade e direção.
              </p>
            </div>

            <div className="about-text">
              <p>
                Cada demanda é tratada com análise precisa, comunicação direta e construção de estratégia
                compatível com o cenário concreto do cliente.
              </p>
              <p>
                Mais do que acompanhar processos, buscamos organizar riscos, sustentar teses com profundidade e
                conduzir cada etapa com previsibilidade e rigor técnico.
              </p>
            </div>

            <div className="office-highlight-row">
              <div className="office-mini-card">
                <i className="fas fa-balance-scale"></i>
                <strong>16+</strong>
                <span>Anos de experiência</span>
              </div>
              <div className="office-mini-card">
                <i className="fas fa-users"></i>
                <strong>3.000+</strong>
                <span>Clientes atendidos</span>
              </div>
              <div className="office-mini-card">
                <i className="fas fa-award"></i>
                <strong>95%</strong>
                <span>Índice de satisfação</span>
              </div>
              <div className="office-mini-card">
                <i className="fas fa-file"></i>
                <strong>+35</strong>
                <span>Contratos</span>
              </div>
            </div>
          </div>

          <div className="office-image-wrap">
            <img src="/escritorio.png" alt="Foto do escritório Marinho & Souza" id="escritorio-img" />
          </div>
        </div>

        <div className="office-timeline">
          <div className="timeline-track"></div>
          {timeline.map(([title, description]) => (
            <div key={title} className="timeline-item">
              <div className="timeline-dot"></div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Escritorio;
