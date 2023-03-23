

import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super(); // this is used here because the constructor need to be called inside so that is ue super
    this.state = {
        products:[
            {
                price: 99,
                title:'Watch',
                qty:1,
                img: 'https://www.cnet.com/a/img/resize/0eeb48a577c1a545e79608c8ff3a39e6d5636cc1/hub/2020/08/01/79cf1165-834b-4079-b15a-c73921970368/apple-watch-5-4758.jpg?auto=webp&fit=crop&height=675&width=1200',
                id:1
            },
            {
                price: 999,
                title:'Mobile Phone',
                qty:10,
                img: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655033/Croma%20Assets/Communication/Mobiles/Images/261983_ppxi5n.png/mxw_2048,f_auto',
                id:2
            },
            {
                price: 999,
                title:'Laptop',
                qty:4,
                img: 'https://www.cnet.com/a/img/resize/c6bca3de2b9a296c19bf62f0c666d9ec6ba5fcdd/hub/2021/10/23/91f7ed14-0d9c-4cba-9715-3e50ef822252/macbook-pro-2021-cnet-review-14.jpg?auto=webp&fit=crop&height=675&width=1200',
                id:3
            },
            
        ]
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this);
    //this.testing();
}

handleIncreaseQuantity = (product) => {
    console.log('hey please inc the qty of ',product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products
    })
}


handleDecreaseQuantity = (product) => {
    console.log('hey please inc the qty of ',product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0) {
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !==id); //[{}]

    this.setState({
        products : items
    })
}
getCartCount =() => {

  const {products} = this.state;
  let count = 0;
  
  

  products.forEach((product) => {
    count += product.qty;
  })
  return count ;
}
getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price 
  })

  return cartTotal;
}
  
  render() {

    const { products } = this.state;
    return (
     <div className="App">
       <Navbar count={this.getCartCount()} />
       <Cart
         products = {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
       />
       <div  style={{fontSize: 20, padding:10 }}>
        TOTAL : {this.getCartTotal()}
       </div>
      </div>
    );
  }

  
}
export default App;
