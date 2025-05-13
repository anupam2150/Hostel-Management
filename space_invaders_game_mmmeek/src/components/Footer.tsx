import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Our History</a></li>
              <li><a href="#" className="hover:text-gray-400">Leadership</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Mobile Order</a></li>
              <li><a href="#" className="hover:text-gray-400">Delivery</a></li>
              <li><a href="#" className="hover:text-gray-400">McDelivery®</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Ronald McDonald House</a></li>
              <li><a href="#" className="hover:text-gray-400">Charities</a></li>
              <li><a href="#" className="hover:text-gray-400">Sponsorships</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Customer Service</a></li>
              <li><a href="#" className="hover:text-gray-400">Feedback</a></li>
              <li><a href="#" className="hover:text-gray-400">Franchising</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2023 McDonald's. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
