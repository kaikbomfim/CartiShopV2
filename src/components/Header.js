import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Dê um Novo Estilo ao Seu Trabalho!</h2>
          <p>
            Por mais que possa parecer uma fantasia, cabe a você criar o seu
            próprio futuro! A maior descoberta da minha geração é que os seres
            humanos podem mudar as suas vidas, mudando o seu modo de pensar ou,
            como alguém afirmou: "o homem é o que ele costuma pensar durante
            todo o dia."
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight}/>
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/header-image.png" alt="Products" />
        </div>
      </div>
    </header>
  );
}
