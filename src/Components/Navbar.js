import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const showNavLinks = ()=>{
        const x = document.getElementsByClassName('nav-links')[0];
        x.classList.toggle('active');
    }


  return (
    <>
    <nav id="navbar">
        <div id="navLeft">
            <Link to='/'>DecoWorld</Link>
        </div>
        <ul className="nav-links">
            <div onClick={showNavLinks}><li><Link to="/smartphones">smartphones</Link></li></div>
            <div onClick={showNavLinks}><li><Link to="/laptops">Laptops</Link></li></div>
            <div onClick={showNavLinks}><li><Link to="/fragrances">fragrances</Link></li></div>
            <div onClick={showNavLinks}><li><Link to="/skincare">skincare</Link></li></div>
            <div onClick={showNavLinks}><li><Link to="/groceries">groceries</Link></li></div>
            <div onClick={showNavLinks}><li><Link to="/home-decoration">Home Decor</Link></li></div>
        </ul>
        <div id="navRight">
            <Link to='/Cart'><button className="btn">{`Cart (${props.cart.length})`}</button></Link>
            <Link to='/Cart'><i class="fa-solid fa-cart-shopping" style={{color:'#00000'}}></i></Link>
        </div>
        <div id="hamburger" onClick={showNavLinks}>
        <i class="fa-solid fa-bars" style={{color:'#00000'}}></i>
        </div>
    </nav>
    </>
  )
}

export default Navbar