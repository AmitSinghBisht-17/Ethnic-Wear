import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Aarvi Ethnic Studio</h3>
            <p className="text-gray-300 text-sm">
              Handcrafted ethnic elegance with a modern touch. Your destination for premium Indian ethnic wear.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Ludhiana, Punjab</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9876543210</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <a 
              href="https://instagram.com/aarviethnicstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram size={20} />
              <span>@aarviethnicstudio</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Aarvi Ethnic Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;