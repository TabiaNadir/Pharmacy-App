"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">💊 PharmaQuick</h1>
          <nav className="space-x-4 text-gray-700 flex items-center">
            <Link href="#">Home</Link>
            <Link href="#products">Medicines</Link>
            <Link href="#contact">Contact</Link>
            <button onClick={() => setIsOpen(true)} className="ml-4 relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            </button>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={isOpen} onCloseAction={() => setIsOpen(false)} />

    </>
  );
}
