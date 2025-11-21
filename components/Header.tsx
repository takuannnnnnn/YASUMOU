import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', href: '#concept' },
    { name: 'Features', href: '#features' },
    { name: 'Flow', href: '#flow' },
    { name: 'Access', href: '#access' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 group">
           <div className="bg-yasumou-dark text-white p-1.5 rounded-lg group-hover:bg-yasumou-blue transition-colors">
             <span className="font-bold text-xl tracking-wider">Y</span>
           </div>
           <span className={`font-black text-2xl tracking-tighter ${isScrolled ? 'text-yasumou-dark' : 'text-yasumou-dark'}`}>
             YASUMOU
           </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-yasumou-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-yasumou-dark text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-yasumou-blue transition-transform hover:scale-105">
            予約する
          </button>
        </nav>
        
        {/* Mobile Menu Button removed as requested */}
      </div>
    </header>
  );
};

export default Header;