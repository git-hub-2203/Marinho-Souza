import React from "react";
import { testimonials } from "./data";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Percepção de quem já contou com nossa atuação</h2>
          <p className="section-sub">
            Depoimentos e impressões que reforçam nossa postura técnica, humana e comprometida com cada demanda.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>{testimonial}</p>
              <div className="client-name">
                {index === 0 ? "Cliente atendido" : index === 1 ? "Cliente empresarial" : "Cliente particular"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
