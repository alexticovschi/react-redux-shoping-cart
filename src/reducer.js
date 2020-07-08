import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from './actions';

// reducer
const reducer = (state, action) => {
  console.log({ state, action });

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  return state;
};

export default reducer;
