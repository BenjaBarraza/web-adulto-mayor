import React from 'react';
import { Smartphone, MessageCircle, Camera, Phone } from 'lucide-react';

interface HeaderProps {
  navigateTo: (page: string, course?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <button onClick={() => navigateTo('home')} className="text-2xl font-bold flex items-center">
          <Smartphone className="mr-2" />
          Tecnología Adultos Mayores
        </button>
        <div className="flex flex-wrap mt-4 md:mt-0">
          <button onClick={() => navigateTo('course', 'basic')} className="btn-nav">
            <Smartphone className="mr-1" /> Curso Básico
          </button>
          <button onClick={() => navigateTo('course', 'whatsapp')} className="btn-nav">
            <MessageCircle className="mr-1" /> WhatsApp
          </button>
          <button onClick={() => navigateTo('course', 'photos')} className="btn-nav">
            <Camera className="mr-1" /> Fotos
          </button>
          <button onClick={() => navigateTo('course', 'calls')} className="btn-nav">
            <Phone className="mr-1" /> Llamadas
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;