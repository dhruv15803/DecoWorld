import React from 'react'
import ProductCard from '../Components/ProductCard'

const Home = (props) => {
  return (
    <>
    <div className="home-outer-container">
        <div className="home-child-container">
            <h1>Welcome to DecoWorld</h1>
            <p>We sell a wide range of products from technology gadgets like smartphones,laptops to
                skincare,groceries and home decoration, Enjoy shopping!.
            </p>
        </div>
        <div className="best-sellers-container">
            <div className="best-sellers-heading">
                <h1>Best selling products</h1>
            </div>
            <div className="best-sellers-products">
                {props.bestSellers.map((item,index)=>{
                    return <ProductCard 
                    image={item.thumbnail}
                    title={item.title}
                    price={item.price}
                    index={index}
                    addToCart={props.addToCart}
                    />
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Home