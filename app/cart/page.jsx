"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart, } from "../../redux/cartSlice";

export default function CartPage() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleConfirmPurchase() {
    dispatch(clearCart());
    setPurchaseConfirmed(true);
  }

  if (purchaseConfirmed) {
    return (
      <div className="page cart-page">
        <h1>Purchase Confirmed</h1>
        <p>Thank you for your purchase!</p>

        <button onClick={() => setPurchaseConfirmed(false)}>
          Back to cart
        </button>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>
            Total Items: {totalItems}
            Total Price: ${totalPrice.toFixed(2)}
          </p>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-right">
                  <strong>
                      ${(item.price * item.quantity).toFixed(2)}
                  </strong>

                  <button classname="remove-button"
                   onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <div className="cart-buttons">
                <button className="clear-button"
                onClick={() => dispatch(clearCart())}>
                  Empty Cart
                </button>

                <button className="confirm-button"
                onClick={handleConfirmPurchase}>
                  Confirm Purchase
                </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}