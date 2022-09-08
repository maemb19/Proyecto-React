import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdd, setItemAdd] = useState(onAdd);

  const restarCantidad = (valor) => {
    if (valor > 0){
      setCantidad(valor);
    }
  }

  const sumarCantidad = (valor) => {
    if (valor <= itemStock){
      setCantidad(valor);
    }  
  }

  const agregarProducto = () => {
    if (cantidad <= itemStock) {
      setItemStock(itemStock - cantidad);
      setItemAdd(itemAdd + cantidad);
    }
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2">
          <p className="text-center">IMAGEN</p>
          <div className="input-group">
            <input type="button" className="btn btn-secondary" value="-" onClick={() =>
            {restarCantidad (cantidad - 1)}}/>
            <input type="text" className="form-control text-center" value={cantidad} onChange={() => {}} />
            <input type="button" className="btn btn-secondary" value="+" onClick={() =>
            {sumarCantidad (cantidad + 1)}}/>
          </div>
          <div className="d-grid gap-2n pt-2">
            <input type="button" className="btn btn-danger"value="Agregar" onClick={() =>
            {agregarProducto()}}/>
          </div> 
          <p>Seleccionaste {itemAdd} Productos</p>
        </div>
      </div>
    </div>
  )
};

export default ItemCount;