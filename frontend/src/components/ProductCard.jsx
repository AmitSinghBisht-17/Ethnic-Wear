import React from 'react';
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = `Hello, I saw this product on your website. I want to know more about Product: ${product.name} (Code: ${product.id}).`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-accent text-secondary px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-2">Code: {product.id}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-secondary">{product.price}</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;