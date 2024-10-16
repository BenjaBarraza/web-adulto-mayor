import React from 'react';
import { Smartphone, Heart, Star } from 'lucide-react';

interface HomePageProps {
  navigateTo: (page: string, course?: string) => void;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Bienvenidos a Tecnología para Adultos Mayores</h1>
      <div className="flex justify-center mb-6">
        <Smartphone size={64} className="text-blue-600" />
        <Heart size={64} className="text-red-600 ml-4" />
      </div>
      <p className="mb-10 text-xl max-w-2xl mx-auto">
        Aquí aprenderá a usar su teléfono celular de manera fácil y divertida.
        Nuestros cursos están diseñados especialmente para usted. Explore nuestros
        cursos en el menú superior y comience su viaje tecnológico hoy mismo.
      </p>
      <h2 className="text-3xl font-bold mb-6">Lo que dicen nuestros estudiantes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
            <p className="text-lg mb-4">"{testimonial.comment}"</p>
            <p className="font-semibold">{testimonial.name}, {testimonial.age} años</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "María",
    age: 72,
    comment: "Gracias a estos cursos, ahora puedo hacer videollamadas con mis nietos. ¡Es maravilloso!"
  },
  {
    name: "Carlos",
    age: 68,
    comment: "Nunca pensé que podría usar WhatsApp, pero con este curso lo logré. Ahora charlo con mis amigos todos los días."
  },
  {
    name: "Elena",
    age: 75,
    comment: "Aprendí a tomar fotos y compartirlas. Ahora puedo mostrar mis plantas a mis amigas sin que vengan a casa."
  },
  {
    name: "Roberto",
    age: 70,
    comment: "El curso básico me dio confianza para usar mi celular. Ya no le temo a la tecnología."
  }
];

export default HomePage;