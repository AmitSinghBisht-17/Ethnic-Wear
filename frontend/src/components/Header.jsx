import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-secondary">
              Aarvi Ethnic Studio
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-secondary transition-colors font-medium">
              Home
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-secondary transition-colors font-medium">
              Catalog
            </Link>
            <a 
              href="https://instagram.com/aarviethnicstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-secondary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-secondary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/catalog" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-secondary transition-colors font-medium"
              >
                Catalog
              </Link>
              <a 
                href="https://instagram.com/aarviethnicstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-secondary transition-colors flex items-center gap-2"
              >
                <Instagram size={20} />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;