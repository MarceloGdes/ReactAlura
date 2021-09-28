import React, { Component } from "react";
import CardNota from "../CardNota/";
import './style.css'

class ListaDeNotas extends Component {
  render() {
    return (
        <ul className='lista-notas'>
         {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias, index) => {
            return(
               <li className='lista-notas_item' key={index}>
                  <div>{categorias}</div>
                  <CardNota/>
               </li>
            );
         })}
        </ul>
      );
  }
}

export default ListaDeNotas;