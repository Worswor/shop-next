"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/cart">
          Cart ({totalItems})
        </Link>
    </nav>
  );
}