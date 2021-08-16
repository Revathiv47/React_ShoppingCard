import React from "react";


export default function Cart(props){
    return (
        
        <div className = "col-lg-4">
        <div class="card">
        <img src={props.data.image} class="img-fluid" width="80%" height="80%"  />
        <div class="card-body">
        <h5 class="card-title">{props.data.title}</h5>
        <p class="card-text">{props.data.description}</p>
        Rs{props.data.price}<br></br>
        
        <button class="btn btn-primary"  onClick ={() => {props.handleCart(props.data.id)}} >Add Card</button>
       
        </div>
        </div>
        
        </div>
 
 
        
    
    );
}