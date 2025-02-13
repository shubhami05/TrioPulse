import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  {
    title: 'Marketing',
    path: '/marketing',
    submenu: ['Digital Marketing', 'Social Media', 'SEO', 'Content Strategy']
  },
  {
    title: 'Media',
    path: '/media',
    submenu: ['Video Production', 'Animation', 'Photography', 'Live Streaming']
  },
  {
    title: 'IT Services',
    path: '/it-services',
    submenu: ['Web Development', 'App Development', 'Cloud Solutions', 'Cybersecurity']
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">
            TRIOPULSE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  {item.title}
                </Link>
                
                <AnimatePresence>
                  {activeSubmenu === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 w-48 py-2 mt-2 bg-black/90 backdrop-blur-md rounded-md shadow-xl"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
              {navItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}