import React, { Component } from 'react';
import { Data } from '../data';
import Product from './Product';

export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: Data
        }
    }
    
    render() {
        console.log(this.state.product);
        const list = this.state.product.map((item, index) => {
            return <div className="product" key={index}><img className="product-thumbnail" src={process.env.PUBLIC_URL + item.img} alt="" /><h3 className="product-name">{item.name}</h3>
            <p className="price">{item.price}</p></div>
        });
        return(
            <div className="products-container">
                {list}
            </div>
        );
    }
}
