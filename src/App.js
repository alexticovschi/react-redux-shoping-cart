import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux
import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
  number: 24,
  player1: 'LeBron James',
  player2: 'Anthony Davis',
};

const store = createStore(reducer, initialStore);
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'DECREASE' });

console.log(store.getState());

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
