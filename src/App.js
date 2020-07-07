import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux
import { createStore } from 'redux';

// reducer
const reducer = (state, action) => {
  console.log({ state, action });
};

const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
