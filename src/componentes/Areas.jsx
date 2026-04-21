import React from "react";
import { practiceAreas } from "./data";

function Areas() {
  return (
    <section id="areas" className="container">
      <div className="areas-header">
        <h2 className="section-title">Áreas de Atuação</h2>
        <div className="section-sub">
          Atuação técnica e personalizada em diferentes ramos do Direito, com foco em segurança jurídica,
          estratégia processual e soluções consistentes para cada cliente.
        </div>
      </div>

      <div className="areas-showcase">
        <div className="practice-grid">
          {practiceAreas.map(([icon, title, description, wide]) => (
            <div key={title} className={`practice-card${wide ? " practice-card-wide" : ""}`}>
              <div className="practice-icon-wrap">
                <div className="practice-icon"><i className={icon}></i></div>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
