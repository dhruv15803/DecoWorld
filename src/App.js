import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import { useEffect, useState } from 'react';
import bestSellers from './bestSellers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';


function App() {

  let cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if(cartItems===null){
    cartItems=[];
  }
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState(cartItems);

  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>setProducts(data.products));
  },[]);

  const addToCart = (index)=>{
    for(let i=0;i<cart.length;i++){
      if(cart[i].id===products[index].id){
        toast.error('Already in cart');
        return;
      }
    }
    setCart(prevCart=>[...prevCart,{
      "id":products[index].id,
      "title":products[index].title,
      "price":products[index].price,
      "stock":products[index].stock,
      "category":products[index].category,
      "brand":products[index].brand,
      'qty':1
    }])
    toast.success('Added to cart!');
  }

  const increment = (index)=>{
    const newCart = cart.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'qty':item.qty+1
        }
      }
      else{
        return item;
      }
    });
    setCart(newCart);
  }

  const decrement = (index)=>{
    const newCart = cart.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'qty':item.qty-1
        }
      }
      else{
        return item;
      }
    });
    setCart(newCart);
  }


  const deleteCartItem = (index)=>{
    const temp = [...cart];
    temp.splice(index,1);
    setCart(temp);
  }

  const clearCart = ()=>{
    setCart([]);
  }



  const totalPrice = ()=>{
    let sum  = 0;
    for(let i=0;i<cart.length;i++){
      sum+= cart[i].price * cart[i].qty;
    }
    return sum;
  }


  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cart));
  },[cart]);

  return (
    <>
    <Router>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/' element={<Home bestSellers={bestSellers} addToCart={addToCart}/>}/>
        <Route path='/smartphones' element={<Products category="smartphones" products={products} addToCart={addToCart}/>}/>
        <Route path='/laptops' element={<Products category="laptops" products={products} addToCart={addToCart}/>}/>
        <Route path='/fragrances' element={<Products category="fragrances" products={products} addToCart={addToCart}/>}/>
        <Route path='/skincare' element={<Products category="skincare" products={products} addToCart={addToCart}/>}/>
        <Route path='/groceries' element={<Products category="groceries" products={products} addToCart={addToCart}/>}/>
        <Route path='/home-decoration' element={<Products category="home-decoration" products={products} addToCart={addToCart}/>}/>
        <Route path='/Cart' element={<Cart cart={cart} increment={increment} decrement={decrement} totalPrice={totalPrice} clearCart={clearCart} deleteCartItem={deleteCartItem}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
