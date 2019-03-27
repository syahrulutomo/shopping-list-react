import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeFromCart } from '../actions/removeFromCart';

class Cart extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id){
    this.props.removeFromCart(id);
  }
  render() {
    let addedItems = this.props.items.length > 0 ?
      (
        this.props.items.map(item => {
            return (
              <div className="added-item" key={item.id}>
                <img onClick={()=> this.handleClick(item.id)} className="remove-item" src={process.env.PUBLIC_URL + 'img/remove.png'} alt={item.name}/>
                <img className="added-item-thumbnail" src={process.env.PUBLIC_URL + item.img} alt={item.name} />
                <h3 className="added-item-name">{item.name}</h3>
                <p className="added-item-price">{item.price}</p>
              </div>
            )
        })
      ): (<p>Nothing :)</p>);
    return (
      <div className="cart-container">
          <h3 className="cart-title">You have ordered:</h3>
          <h3 className="total">{this.props.total}</h3>
          {addedItems}
      </div>
        
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    items: state.addedItems,
    total: state.total
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => {
      dispatch(removeFromCart(id))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);