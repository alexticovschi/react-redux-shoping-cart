import { INCREASE, DECREASE, REMOVE, CLEAR_CART, GET_TOTAL } from './constants';
// items
import cartItems from './cart-items';

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  console.log({ state, action });

  if (action.type === INCREASE) {
    let newCart = state.cart.map((cartItem) => {
      // console.log(cartItem);

      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }

      return cartItem;
    });

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === DECREASE) {
    let newCart = state.cart.map((cartItem) => {
      // console.log(cartItem);

      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount > 1 ? cartItem.amount - 1 : 1,
        };
      }

      return cartItem;
    });

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, amount, total };
  }

  return state;
};

export default reducer;
