import React from "react";

export default function CartItem(props){
    return (
              
        <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto" >
        <div class="fw-bold">{props.data.title}</div>
        Rs{props.data.price}
        </div>
        <span class="btn btn-outline-primary btn-sm" onClick ={() => {props.handleRemove(props.data.id)}}>-</span>
        <span class="btn btn-outline-primary btn-sm" onClick ={() => {props.handleCart(props.data.id)}}>+</span>

        </li>
        </ol>
  
    );
}

        