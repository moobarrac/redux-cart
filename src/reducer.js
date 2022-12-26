import { CLEAR_CART, DECREASE_ITEM, GET_TOTALS, INCREASE_ITEM, REMOVE_ITEM } from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
      amount: 0,
      total: 0
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload.id)
    }
  }

  if (action.type === INCREASE_ITEM) {
    let tempCart = state.cart.map(item => {
      if (item.id === action.payload.id) {
        item = {...item, amount: item.amount + 1}
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart
    }
  }
  
  if (action.type === DECREASE_ITEM) {
    let tempCart = state.cart.map(item => {
      if (item.id === action.payload.id) {
        item = {...item, amount: item.amount - 1}
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart
    }
  }

  if (action.type === GET_TOTALS) {
    let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
      const {price, amount} = cartItem
      let itemTotal = price * amount;

      cartTotal.total += itemTotal
      cartTotal.amount += amount;
      
      return cartTotal;
    }, {
      total: 0,
      amount: 0
    });
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount}
  }

  return state;
}