import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { reducer } from "./reducer";
import { Provider } from "react-redux";


function App() {
  const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0,
  }

  const store = createStore(reducer, initialStore)
  // cart setup

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Provider>
  );
}

export default App;
