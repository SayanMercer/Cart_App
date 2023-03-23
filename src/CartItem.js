import React from 'react';

class CartItem extends React.Component {

       

  render () {
     console.log('this.props',this.props);
    const{ price, title, qty } = this.props.product;
    return (
      <div className="cart-item">  
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs: {price}</div>
          <div style={ { color: '#777' } }>Qty:{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
              alt="increase" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              />
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              />
            <img 
              alt="delete" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"/>
          </div>
        </div>
      </div>
    );
  }
}
//Object of java script
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;