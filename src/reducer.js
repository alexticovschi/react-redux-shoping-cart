import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from './actions';

// reducer
const reducer = (state, action) => {
  console.log({ state, action });

  if (action.type === INCREASE) {
    let newCart = state.cart.map((cartItem) => {
      console.log(cartItem);

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
    let newCart = [];

    if (action.payload.amount === 1) {
      newCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      newCart = state.cart.map((cartItem) => {
        console.log(cartItem);

        if (cartItem.id === action.payload.id) {
          cartItem = {
            ...cartItem,
            amount: cartItem.amount > 1 ? cartItem.amount - 1 : 1,
          };
        }

        return cartItem;
      });
    }

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

  return state;
};

export default reducer;
