import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '.././App.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link to="/">
              <img className="logo" src={process.env.PUBLIC_URL + '/img/react-logo.png'}  alt="logo"/>
              <h3 className="brand">Shopping Cart Demo</h3>
          </Link>
        </div>
        <Link className="cart" to="/cart">
            <img className="cart-logo" src={process.env.PUBLIC_URL + "img/cart.png"} alt="brand logo" />
        </Link>
      </nav>
    );
  }
}

