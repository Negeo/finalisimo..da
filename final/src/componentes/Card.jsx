import "./Card.css"
import { Link } from "react-router-dom"

function Card({titulo = "Cajitas", descripcion = "descripcion de las cajitas"} ) {
    return (
      <div className="Card">
        <Link to={titulo} ><h2>{titulo}</h2></Link>
        <p>{descripcion}</p>
      </div>
    )
  }

  export default Card