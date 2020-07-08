import { INCREASE, DECREASE } from './actions';

// reducer
const reducer = (state, action) => {
  console.log({ state, action });

  if (action.type === INCREASE) {
    return {
      ...state,
      number: state.number + 1,
    };
  }

  if (action.type === DECREASE) {
    return {
      ...state,
      number: state.number - 1,
    };
  }

  return state;
};

export default reducer;
