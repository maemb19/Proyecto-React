import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
  return (
    <div className="detail">
      <img src={item.img} alt={item.producto}/>
      <div className="infoDetail">
        <h2 className="text-center"><b>{item.producto}</b></h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Repellat, molestiae accusamus quos porro ex, sed molestias error quaerat aperiam vero suscipit. 
          Sit veniam illum aut voluptatem maiores. Inventore, soluta quod.
        </p>
        <h3 className="text-center">$ {item.precio}</h3>
        <ItemCount stock={5} initial={1} onAdd={0}/>
      </div>
    </div>
  )
}

export default ItemDetail;