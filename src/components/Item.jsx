import React from "react";

const Item = ({id, producto, descripcion, precio, img}) => {
  return (
    <div className="col-md-4 py-3">
      <div className="card">
        <img src={img} className="card-img-top" alt={producto}/>
        <div className="card-body">
          <h5 className="card-title text-center"><b>{producto}</b></h5>
          <p className="card-text text-center">{descripcion}</p>
          <p className="card-text text-center">$ {precio}</p>
          <button className="text-center bg-info">Ver Detalles</button>
        </div>
      </div>
    </div>
  )
}

export default Item;