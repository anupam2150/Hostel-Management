import React from 'react';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
    title: 'Big Mac® Meal',
    price: 8.99
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
    title: 'Quarter Pounder®',
    price: 7.49
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
    title: 'Chicken McNuggets®',
    price: 5.99
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
    title: 'French Fries',
    price: 2.99
  }
];

const MenuSection = () => {
  const { dispatch } = useCart();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <button 
                  className="bg-red-600 text-white px-6 py-2 rounded-full w-full hover:bg-red-500"
                  onClick={() => dispatch({ 
                    type: 'ADD_ITEM', 
                    payload: { 
                      id: item.id, 
                      title: item.title, 
                      price: item.price,
                      quantity: 1
                    } 
                  })}
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
