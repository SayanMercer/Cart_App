import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
    
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn.iconscout.com/icon/free/png-512/free-cart-plus-shopping-insert-44561.png?f=avif&w=256" alt="cart-icon" />
        <span style={styles.cartCount}> { props.count } </span>
      </div>
    </div>
  );
}



const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))', /* Added a drop shadow effect to the cart icon */
  },
  nav: {
    height: 70,
    background: 'linear-gradient(to right, #FFC371, #FF5F6D)', /* Applied a gradient background with vibrant colors */
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 20px', /* Added padding for better spacing */
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' /* Added a slightly stronger shadow effect */
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'linear-gradient(to right, #8B78E6, #FC7D7B)', /* Changed the background to a gradient with contrasting colors */
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: -10, /* Adjusted the position to align better with the cart icon */
    top: -10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' /* Added a subtle shadow effect to the cart count */
  }
};

export default Navbar;

