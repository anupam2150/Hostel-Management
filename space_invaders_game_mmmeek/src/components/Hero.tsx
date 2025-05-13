import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1615873968403-89e068629265')] bg-cover bg-center h-[500px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md bg-black bg-opacity-75 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">
            Free Fries & Drink
          </h1>
          <p className="text-white mb-6">
            Get free medium Fries and a medium Drink with any $1+ purchase. Only in the app.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
