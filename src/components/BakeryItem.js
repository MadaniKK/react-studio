import "./BakeryItem.css";
import { useState } from "react";
// TODO: create a component that displays a single bakery item
function BakeryItem(props){
    const item = props.item
    // const name = props.item.name
    return (
        <div className="BakeryItem">
            <img src={item.image}></img>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={()=>{props.addToCart(item)}}>Add to cart</button>

        </div>
    );
}

export default BakeryItem;