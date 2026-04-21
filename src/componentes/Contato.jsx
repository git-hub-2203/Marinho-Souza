import React, { useEffect, useState } from "react";
import { mapLocations } from "./data";

function Contato({ selectedLocation, onSelectLocation }) {
  const [backgrounds, setBackgrounds] = useState([
    { image: selectedLocation.backgroundImage, isVisible: true },
    { image: selectedLocation.backgroundImage, isVisible: false }
  ]);

  useEffect(() => {
    setBackgrounds((current) => {
      const activeIndex = current.findIndex((background) => background.isVisible);
      const nextIndex = activeIndex === 0 ? 1 : 0;

      if (current[activeIndex]?.image === selectedLocation.backgroundImage) {
        return current;
      }

      return current.map((background, index) => {
        if (index === nextIndex) {
          return { image: selectedLocation.backgroundImage, isVisible: true };
        }

        if (index === activeIndex) {
          return { ...background, isVisible: false };
        }

        return background;
      });
    });
  }, [selectedLocation.backgroundImage]);

  return (
    <>
      <section id="contact-transition" className="section-transition">
        {backgrounds.map((background, index) => (
          <div
            key={index}
            className={`section-transition-bg${background.isVisible ? " is-visible" : ""}`}
            aria-hidden={index === 1 ? "true" : undefined}
            style={{ backgroundImage: `url('${background.image}')` }}
          ></div>
        ))}
      </section>

      <section id="contato" className="contact-section">
        <div className="container contact-wrapper">
          <div className="contact-card">
            <img src="/logout-img.png" alt="Marinho & Souza" />
            <h2 className="contact-title">Atendimento</h2>
            <p className="contact-sub">
              Atendimento jurídico personalizado. Entre em contato e retornaremos para compreender o seu caso.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Localização</strong>
                  <span>Manaus - AM</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <strong>Telefone</strong>
                  <span>(92) 99999-9999</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>E-mail</strong>
                  <span>contato@marinhoesouza.adv.br</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <strong>Atendimento</strong>
                  <span>Seg-Sex · 8h às 18h</span>
                </div>
              </div>

              <a href="https://wa.me/5592999999999" target="_blank" rel="noreferrer" className="contact-whatsapp">
                <i className="fab fa-whatsapp"></i>
                Falar com um advogado
              </a>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-tabs">
              {mapLocations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className={`map-btn${selectedLocation.id === location.id ? " active" : ""}`}
                  onClick={() => onSelectLocation(location)}
                >
                  <i className={location.icon}></i>
                  {location.label}
                </button>
              ))}
            </div>

            <iframe
              id="mapa"
              src={selectedLocation.mapSrc}
              title={`Mapa ${selectedLocation.label}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;
