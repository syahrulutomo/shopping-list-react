import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/addToCart';

class Product extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id){
        this.props.addToCart(id);
    }
    render() {
        const item = this.props.item;
        return (
            <div className="product">
                { 
                    (this.props.added.length > 0)? this.props.added.find(el => el.id === item.id)?
                        (<div className="indicator">
                            <p className="indicator-label">added to cart</p>
                        </div>
                        ) : '' : ''
                }
                <img className="product-thumbnail" src={process.env.PUBLIC_URL + item.img} alt="" />
                <h3 className="product-name">{item.name}</h3>
                <p className="price">{item.price}</p>
                    <button className="add-to-cart" onClick={()=>this.handleClick(item.id)}>Add to cart</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
       addToCart: (id)=>{
            dispatch(addToCart(id))
        }
    }
}

export default connect(null,mapDispatchToProps)(Product);