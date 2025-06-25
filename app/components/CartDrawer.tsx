"use client";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ isOpen, onCloseAction }: { isOpen: boolean; onCloseAction: () => void }) {
  const { cart, total } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-bold text-blue-700">🛒 Your Cart</h3>
        <button onClick={onCloseAction} className="text-gray-500 hover:text-black text-xl">×</button>
      </div>
      <div className="p-4 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-blue-600">{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="p-4 border-t mt-auto">
          <p className="text-right font-semibold">Total: Rs. {total}</p>
          <button className="w-full bg-blue-600 text-white py-2 mt-3 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
