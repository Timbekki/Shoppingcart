import { useState } from 'react';
import './App.css';
import { FaShoppingCart, IconName } from "react-icons/fa";

function App() {
  
  const [cart,setCart] = useState([])

  const [products, setProducts] = useState([
    {name: "Jackets", price: 100}, 
    {name: "Pants", price: 50},
    {name: "Hats", price: 10}
  ])

//Function Buy
  const buy = (e, index) => {
    e.preventDefault()
    const product = products[index]
    setCart([...cart, product])
    

  }

  
  return (
  <div id="container">
    <h1>My Web Shop</h1>
    <p><FaShoppingCart /> {cart.length}</p>
    {
      products.map((product,index) => (
        <div key={index}>
          <form onSubmit={(e) => buy (e,index)}>
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
            <button>Buy</button>
          </form>
        </div>

      ))
    }
  </div>
 );
}

export default App;
