import React from "react";
import '../Header/header.css';

const Header = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item"> <a href="#">Curiosidades</a></li>
        <li className="navigation-item"> <a href="#">Imagem do dia</a> </li>
        <li className="navigation-item"> <a href="#">Sistema solar</a> </li>
        <li className="navigation-item"> <a href="#">Mensagem aniversário</a> </li>
      </ul>
    </nav>
  );
}

export default Header;