import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-warm">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-gray-100">
            Discover handcrafted ethnic wear for every occasion
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-[73px] bg-white shadow-md z-40 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;