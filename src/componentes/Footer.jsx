import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-top-line"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logout.png" alt="Marinho & Souza Advogados Associados" />
          </div>
          <div>
            <h4>Contato</h4>
            <p>contato1@gmail.com<br />contato2@gmail.com</p>
          </div>
          <div>
            <h4>Telefone</h4>
            <p>Telefone1<br />Telefone2</p>
          </div>
          <div>
            <h4>Redes</h4>
            <a href="https://www.instagram.com/msadvogadosms" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
            <a href="https://wa.me/5592999999999" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp social-icon"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2026 Marinho & Souza Advogados Associados · Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
