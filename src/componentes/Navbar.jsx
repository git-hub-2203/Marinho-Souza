import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#inicio" className="logo">
        <img src="/logout-img.png" alt="Símbolo Marinho & Souza" className="logo-mark" />
        <div className="logo-text">
          <h1>MARINHO & SOUZA</h1>
          <span>Advogados Associados</span>
        </div>
      </a>
      <div className="nav-links">
        <a href="#inicio"><span>Início</span></a>
        <a href="#areas"><span>Áreas de Atuação</span></a>
        <a href="#escritorio"><span>Escritório</span></a>
        <a href="#contato"><span>Contato</span></a>
      </div>
    </nav>
  );
}

export default Navbar;
