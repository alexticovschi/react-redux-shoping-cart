import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

// redux
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
