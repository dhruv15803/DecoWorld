import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
  return (
    <>
    <div className="cart-outer-container">
        {props.cart.length!==0 && <div className="cart-heading">
            <h1>Cart</h1>
        </div>}
        {props.cart.length===0 && <div className="cart-empty">
            <h1>Cart is empty</h1>
            <p>To shop more please <Link to='/'>click here</Link></p>
        </div>}
        <div className="cart-child-container">
            {props.cart.length!==0 && props.cart.map((item,index)=>{
                return<div className="cart-item-container">
                    <div className="cart-item-title">
                        {item.title}
                    </div>
                    <div className="cart-item-price">
                        {`$ ${item.price * item.qty}`}
                    </div>
                    <div className="cart-item-qty">
                        {item.qty > 1 && <button className="qtyBtn" onClick={()=>props.decrement(index)}>-</button>}
                        {item.qty}
                        <button className="qtyBtn" onClick={()=>props.increment(index)}>+</button>
                    </div>
                    <div className="cart-item-delete">
                        <button className="btn" onClick={()=>props.deleteCartItem(index)}>Delete</button>
                    </div>
                </div>
            })}
            {props.cart.length!==0 && <div className="cart-bottom">
                { `Total :  $ ${props.totalPrice()}`}
                <button className="btn" onClick={props.clearCart}>Clear cart</button>
            </div>}
        </div>
    </div>
    </>
  )
}

export default Cart