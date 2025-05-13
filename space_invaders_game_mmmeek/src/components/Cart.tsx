import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Your Order</h2>
        {state.items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {state.items.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <button 
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  className="text-red-600 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
            <div className="pt-4 border-t">
              <p className="text-lg font-semibold">
                Total: ${state.total.toFixed(2)}
              </p>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-full w-full mt-4 hover:bg-red-500"
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
