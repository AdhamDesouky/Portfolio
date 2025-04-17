'use client';

// @flow strict
import Link from "next/link";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('education')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATIONS</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
            </button>
          </li>
  
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;