

//Import react
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
//import * as firebase from 'firebase';
import {
  doc,
  addDoc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  // doc,
} from "firebase/firestore";
import { db } from "./index";


class App extends React.Component {
  constructor() {
    super(); // this is used here because the constructor need to be called inside so that is ue super
    this.state = {
      products: [],
      loading: true
    }
  }

  async componentDidMount() {
    //this is a realtime listener if you change anything in firebase ui will automatically updated 
    const q = query(
      collection(db, "products"),
      where("price", ">", 0),
      orderBy("price")
    );
    const unsub = await onSnapshot(q, (querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        getProducts.push(product);
      });
      console.log(getProducts);
      this.setState({ products: getProducts, loading: false });
    });
  }

  handleIncreaseQuantity = async (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);

    const docRef = doc(collection(db, "products"), products[index].id);
    await updateDoc(docRef, {
      qty: products[index].qty + 1,
    });
  };

  handleDecreaseQuantity = async (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty !== 0) {
      const docRef = doc(collection(db, "products"), products[index].id);
      await updateDoc(docRef, {
        qty: products[index].qty - 1,
      });
    }
  };


  handleDeleteProduct = (productToDelete) => {
    const docRef = doc(collection(db, "products"), productToDelete);
    deleteDoc(docRef)
      .then(() => {
        console.log("product deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getCartCount = () => {

    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';

    });

    return cartTotal;
  }


  addProduct = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      img: "https://www.ifbappliances.com/media/catalog/product/cache/f6d60de4095a6e5204f81c04aa5b766f/e/x/executive_mxs_id_1014_front300.png",
      price: 900,
      qty: 2,
      title: "Washing Machine"
    })
      .then((docRef) => {
        console.log("product added" + docRef);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };



  render() {

    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct}>Add a Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products</h1>}
        <div className="Total-amount">        {/* <div  style={{fontSize: 20, color:'blue',padding: 10, border:1  , padding:10 }}> */}
          TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }


}
export default App;

