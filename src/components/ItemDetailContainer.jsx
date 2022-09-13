import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})

  useEffect (() => {
    const products = [
      { 
        "id": 1,
        "producto":"Oli",
        "descripcion":"Vibrador Clitorial", 
        "precio":"6250",
        "img": "/img/oli-vibador-clitorial.png"
      },
      {
        "id": 2,
        "producto":"Tito",
        "descripcion":"Vibrador Clitorial",  
        "precio":"7350",
        "img":"./images/tito-vibrador-clitorial.png"
      },
      {
        "id": 3,
        "producto":"Neo Plus",
        "descripcion":"Vibrador Mini", 
        "precio":"5890",
        "img":"./images/neo-vibrador-mini.png"
      }, 
      { 
       "id": 4,
        "producto":"Mio", 
        "descripcion":"Anillo Vibrador", 
        "precio":"3900",
        "img": "./images/mio-anillo-vibrador.png"
      },
      {
       "id": 5,
        "producto":"Tenga Eggs",
        "descripcion":"Vibrador para Pene",  
        "precio":"4980",
        "img":"./images/tenga-egg-vibrador-pene.png"
      }
    ];

    const getProduct = () =>
      new Promise ((res, rej)=>{
        const product = products.find((prod)=> prod.id === 1);
        setTimeout(() => {
          res(product);
        }, 2000);
      });

      getProduct()
      .then((info)=>{
        setItem(info);
      })
      .catch((error)=>{
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer;