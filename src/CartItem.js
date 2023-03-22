import React from 'react';

class CartItem extends React.Component {

    // constructor() {
    //     super() // this is used here because the constructor need to be called inside so that is ue super
    //     this.state ={
    //         price: 999,
    //         title:'Mobile Phone',
    //         qty:1,
    //         img: ''
    //     }
    //     //this.increaseQuantity = this.increaseQuantity.bind(this);
    //     //this.testing();
    // }
      // testing(){
      //   const promise = new Promise ((resolve,reject) =>{
      //     setTimeout(() => {
      //       resolve('done');
      //     },5000);
      //   })

      //   promise.then(() =>{
      //     //set state acts like a synchronus call
      //     this.setState({ qty : this.state.qty + 10 });

      //     console.log('state', this.state);
      //   });
      // }
    increaseQuantity = () => {
        //this.state.qty +=1;
        //console.log('this', this.state)
        //set state from 1
        // this.setState({
        //   qty: this.state.qty +1 
        // });
        //set state form 2 if previous state require use this
        this.setState((prevState) => {
           return {
            qty: this.state.qty +1 
           }
          });
        
    }

    decreaseQuantity = () => {
      const { qty } = this.state;
      if(qty === 0){
        return;
      }
      //set state form 2 if previous state require use this
      this.setState((prevState) => {
         return {
          qty: this.state.qty -1 
         }
        });
      }     

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
              onClick={this.increaseQuantity}
              />
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png"
              onClick={this.decreaseQuantity}
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