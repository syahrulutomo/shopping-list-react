import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class ProductList extends Component {
    render() {
       const itemList = this.props.items.map((item) => {
           return <Product added={this.props.added} item={item} key={item.id}/>
        })
        return(
            <div className="products-container">
                {itemList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        added: state.addedItems
    }
}
export default connect(mapStateToProps)(ProductList);