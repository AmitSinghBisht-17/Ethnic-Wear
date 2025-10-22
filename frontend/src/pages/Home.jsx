import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-warm to-accent">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1668371679302-a8ec781e876e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBldGhuaWMlMjB3ZWFyfGVufDB8fHx8MTc2MTExODY1OHww&ixlib=rb-4.1.0&q=85"
            alt="Aarvi Ethnic Studio Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
              Aarvi Ethnic Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
              Handcrafted ethnic elegance with a modern touch
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Collection
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
              About Our Boutique
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to Aarvi Ethnic Studio, your trusted destination for exquisite Indian ethnic wear. 
              We are a home-based boutique specializing in handcrafted suits, salwar kameez, and custom tailoring.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Each piece in our collection is carefully curated to blend traditional craftsmanship with contemporary style, 
              ensuring you look stunning at every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-warm">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/catalog"
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-secondary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Outfit?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Browse our complete collection and get in touch for custom orders
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-white hover:bg-accent text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
          >
            View Catalog
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;