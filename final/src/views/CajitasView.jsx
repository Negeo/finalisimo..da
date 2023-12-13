import React from "react"
import "./CajitasView.css"

function CajitasView({cajita}) {
    return (
        <div className="CajitasView">
            <h1>{cajita.titulo}</h1>
            <p>{cajita.descripcion}</p>
            <img src={cajita.imagen} alt={cajita.titulo + " imagen"}/>
            
        </div>
    )
  }

  export default CajitasView