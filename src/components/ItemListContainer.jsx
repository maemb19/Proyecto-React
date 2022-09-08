import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
    useEffect (() => {
      const productos = [
        { 
          "id": 1,
          "producto":"Oli",
          "descripcion":"Vibrador Clitorial", 
          "precio":"6250",
          "img": "./images/oli-vibador-clitorial.png"
        },
        {
          "id": 2,
          "producto":"Tito",
          "descripcion":"Vibrador Clitorial",  
          "precio":"7350",
          "img":"../images/tito-vibrador-clitorial.png"
        },
        {
          "id": 3,
          "producto":"Neo Plus",
          "descripcion":"Vibrador Mini", 
          "precio":"5890",
          "img":"../images/neo-vibrador-mini.png"
        }, 
        { 
         "id": 4,
          "producto":"Mio", 
          "descripcion":"Anillo Vibrador", 
          "precio":"3900",
          "img": "../images/mio-anillo-vibrador.png"
        },
        {
         "id": 5,
          "producto":"Tenga Eggs",
          "descripcion":"Vibrador para Pene",  
          "precio":"4980",
          "img":"../images/tenga-egg-vibrador-pene.png"
        }
      ];

      const getProductos = new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });

      getProductos.then((respuesta) => {
        setItems(respuesta)
      });
    },[]);

    return (
      <div className="container">
        <ItemList items={items}/>
      </div>
    )
}

export default ItemListContainer;