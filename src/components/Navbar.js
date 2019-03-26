import React, { Component } from 'react';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import '.././App.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link to="/">
              <img className="logo" src={process.env.PUBLIC_URL + '/img/react-logo.png'}  alt="logo"/>
              <h3 className="brand">Shoping Cart React</h3>
          </Link>
        </div>
        <Link  to="/cart">
          <button className="cart">
            <img className="cart-logo" src={process.env.PUBLIC_URL + "img/cart.png"} alt="brand logo" />
          </button>
        </Link>
        <Cart/>
      </nav>
    );
  }
}

