import React, { useState } from 'react';
import { Smartphone, MessageCircle, Camera, Phone } from 'lucide-react';

interface HeaderProps {
  navigateTo: (page: string, course?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => navigateTo('home')}
          className="text-2xl font-bold flex items-center"
        >
          <Smartphone className="mr-2" />
          Tecnología Adultos Mayores
        </button>

        {/* Botón de hamburguesa para dispositivos móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? 'flex flex-col w-full items-center mt-4' : 'hidden'
          } md:flex md:flex-row md:items-center md:w-auto space-y-4 md:space-y-0 md:space-x-4`}
        >
          <button
            onClick={() => navigateTo('course', 'basic')}
            className="btn-nav"
          >
            <Smartphone className="mr-1" /> Curso Básico
          </button>
          <button
            onClick={() => navigateTo('course', 'whatsapp')}
            className="btn-nav"
          >
            <MessageCircle className="mr-1" /> WhatsApp
          </button>
          <button
            onClick={() => navigateTo('course', 'photos')}
            className="btn-nav"
          >
            <Camera className="mr-1" /> Fotos
          </button>
          <button
            onClick={() => navigateTo('course', 'calls')}
            className="btn-nav"
          >
            <Phone className="mr-1" /> Llamadas
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
