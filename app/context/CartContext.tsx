"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  name: string;
  price: string;
  image: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (item: Product) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart((prev) => [...prev, item]);
  };

  const total = cart.reduce((acc, item) => acc + parseInt(item.price.replace(/\D/g, "")), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
