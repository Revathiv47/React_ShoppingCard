import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import CartItem from './CartItem';
import { useState } from 'react';

function App() {
  const [products,setProduct] = useState([
    {
      id : 1,
      title : "Product 1",
      description : "loren",
      price : 20,
      image : "https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/0/T063.409.16.058.00_SET.png"},
    {
      id : 2,
      title : "Product 2",
      description : "loren",
      price : 40,
      image : "https://n3.sdlcdn.com/imgs/h/v/o/Tissot-1853-Stainless-Steel-Chronograph-SDL451965856-1-dfe67.jpeg" },
    {
      id : 3,
      title : "Product 3",
      description : "loren",
      price : 90,
      image : "https://www.tissotwatches.com/media/home/hp_our_categories_touch.jpg"
      }
  ])

  const [cartItems,setCartItem] = useState([]);
  const [total,setTotal] = useState(0)
  let addToCart = (id) => {
    let product = products.find(obj => obj.id == id);
    setCartItem([...cartItems,product]);
    setTotal(total + product.price)
  }
  
  let removeItems = (id) => {
    let product = products.find(obj => obj.id == id);
    setTotal(total - product.price)
      cartItems.splice(product,1);
      setCartItem([...cartItems]);
  }
  
  
  let removeItem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if(result){
      let cartIndex = cartItems.findIndex(obj => obj.id == id);
      setTotal(total - cartItems[cartIndex].price)
      cartItems.splice(cartIndex,1);
      setCartItem([...cartItems]);
    }
  }

  return (
   
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              
              {
                products.map((product) => {
                  return <Card data={product} handleCart={addToCart} handleRemove={removeItems}/>
                })
              }
            </div>
          </div>
          <div className="col-lg-4">
            <ol class="list-group list-group-numbered">
              {
                cartItems.length == 0 ? <h3>No items in cart</h3> : null
              }
            {
              cartItems.map((item) => {
                  return <CartItem handleRemove={removeItem} data={item} handleRemove={removeItem} handleCart={addToCart} />
              })
            }
            
            
           
            
           
            
             <h1>Total - Rs {total}</h1>
            </ol>
          </div>
        </div>
      </div>
    
  );
}

export default App;
