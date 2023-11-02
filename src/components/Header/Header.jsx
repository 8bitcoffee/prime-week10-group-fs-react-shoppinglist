import React from 'react';
import './Header.css';
import shoppingCart from '../../Photos/cart.png';

function Header() {
    return (
        <header className="banner-header">
            <img id="shop-cart" alt="shopping cart" src={shoppingCart} />
            <h1><span id="our-tag">OUR</span></h1>
            <h2><span id="sl-tag">Shopping List</span></h2>
        </header>
    );
}

export default Header;
