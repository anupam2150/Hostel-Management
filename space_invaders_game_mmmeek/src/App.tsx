import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="font-sans">
        <Header />
        <Hero />
        <MenuSection />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
