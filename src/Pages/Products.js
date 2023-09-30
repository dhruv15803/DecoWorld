import React from 'react'
import ProductCard from '../Components/ProductCard'

const Products = (props) => {
    
  return (
    <>
    <div className="products-outer-container">
        <div className="products-child-container">
            <div className="products-heading">
                <h1>{props.category}</h1>
            </div>
            <div className="products-items-container">
                {props.products.map((item,index)=>{
                    if(item.category===props.category){
                        return <ProductCard 
                        title={item.title}
                         image={item.thumbnail}
                         price={item.price}
                         index={index}
                         addToCart={props.addToCart}
                        />
                    }
                    else{
                        return <></>
                    }
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Products