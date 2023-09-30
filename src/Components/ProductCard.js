import React from 'react'
import { ToastContainer } from 'react-toastify'

const ProductCard = (props) => {
  return (
    <>
    <div className="product-container">
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <p>{`$ ${props.price}`}</p>
        <button className="product-btn" onClick={()=>props.addToCart(props.index)}>Add to cart</button>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default ProductCard