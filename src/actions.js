import { INCREASE, DECREASE, CLEAR_CART, GET_TOTAL, REMOVE } from './constants';

export const increaseItem = (id, amount) => ({
  type: INCREASE,
  payload: { id, amount },
});

export const decreaseItem = (id, amount) => ({
  type: DECREASE,
  payload: { id, amount },
});

export const getTotal = () => ({ type: GET_TOTAL });

export const clearCart = () => ({ type: CLEAR_CART });

export const removeItem = (id) => ({ type: REMOVE, payload: { id } });
