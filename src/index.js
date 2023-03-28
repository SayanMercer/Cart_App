// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import firebase from 'firebase/app';
// // import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "firebase/app";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCcBD0P8N7-awCkM6E9sj4F2h1f_p4VsBw",
  authDomain: "cart-52ed5.firebaseapp.com",
  projectId: "cart-52ed5",
  storageBucket: "cart-52ed5.appspot.com",
  messagingSenderId: "116608567123",
  appId: "1:116608567123:web:b83a35459e315a3cdfc3a6"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app); //create instance of firebase access and export it 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //create instance of firebase access and export it 

ReactDOM.render(<App />, document.getElementById('root'));

