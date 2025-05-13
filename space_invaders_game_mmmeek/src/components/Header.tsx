import React, { useState } from 'react';
import { ShoppingCart, MapPin } from 'lucide-react';
import Cart from './Cart';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" 
              alt="McDonald's Logo" 
              className="h-12"
            />
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-yellow-300">Menu</a>
              <a href="#" className="hover:text-yellow-300">Deals</a>
              <a href="#" className="hover:text-yellow-300">Rewards</a>
              <a href="#" className="hover:text-yellow-300">Locations</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>Find a Restaurant</span>
            </div>
            <button 
              className="bg-yellow-400 text-black px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-yellow-300"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} />
              <span>My Order</span>
            </button>
          </div>
        </div>
      </header>
      {isCartOpen && <Cart />}
    </>
  );
};

export default Header;
