import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { clearCart, getTotal } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch(getTotal());
  });

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>&pound;{total}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(clearCart())} className='btn clear-btn'>
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total,
  };
};

export default connect(mapStateToProps)(CartContainer);
