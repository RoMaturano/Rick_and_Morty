import React from "react";
import styled from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ name, gender, onClose, species, image, id }) {
  // aca la ser componente funcional y no
  // una clase piuedo hacer destructurin({}name, gender,species,image,onclose)
  // en buton le pongo la funcion onclose directamente, esperera un funcion
  // pero como onclose ya es una funcion solo la coloco ahi
  // <div className={style.card}> card es el nombre de la clase que va en el archivo importado '../styles/card.modules.css'
  return (
    <div className={styled.card}>
      <button className={styled.bt} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
