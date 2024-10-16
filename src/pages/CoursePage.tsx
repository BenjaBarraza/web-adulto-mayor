import React, { useState } from 'react';
import { Smartphone, MessageCircle, Camera, Phone, AlertCircle } from 'lucide-react';

interface CoursePageProps {
  course: string;
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
  const courseData = getCourseData(course);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{courseData.title}</h1>
      <div className="flex justify-center mb-6">
        {courseData.icon}
      </div>
      <div className="space-y-6 text-xl">
        {courseData.steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-3">Paso {index + 1}</h2>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
        {videoError ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <div className="flex items-center">
              <AlertCircle className="mr-2" />
              <p>Lo sentimos, el video no se pudo cargar. Por favor, intente más tarde o contacte con soporte.</p>
            </div>
          </div>
        ) : (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={courseData.videoUrl}
              title={`Tutorial de ${courseData.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-96 rounded-lg"
              onError={handleVideoError}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

function getCourseData(course: string) {
  switch (course) {
    case 'basic':
      return {
        title: 'Curso Básico de Uso del Celular',
        icon: <Smartphone size={64} className="text-blue-600" />,
        steps: [
          'Encienda su teléfono presionando el botón de encendido.',
          'Deslice el dedo por la pantalla para desbloquear.',
          'Toque los iconos para abrir aplicaciones.',
          'Use el botón de inicio para volver a la pantalla principal.',
          'Ajuste el volumen con los botones laterales.'
        ],
        videoUrl: 'https://www.youtube.com/embed/WO-hpL6U_rw'
      };
    case 'whatsapp':
      return {
        title: 'Uso de WhatsApp para Hablar Con Seres Queridos',
        icon: <MessageCircle size={64} className="text-green-600" />,
        steps: [
          'Abra la aplicación de WhatsApp tocando su icono.',
          'Seleccione un contacto de su lista.',
          'Para enviar un mensaje, toque el campo de texto y escriba.',
          'Para hacer una llamada de voz, toque el icono de teléfono.',
          'Para una videollamada, toque el icono de cámara.'
        ],
        videoUrl: 'https://www.youtube.com/embed/HPyYFsZVFts'
      };
    case 'photos':
      return {
        title: 'Curso de Cómo Sacar Fotos',
        icon: <Camera size={64} className="text-red-600" />,
        steps: [
          'Abra la aplicación de la cámara en su teléfono.',
          'Apunte la cámara hacia lo que desea fotografiar.',
          'Toque el botón grande en la pantalla para tomar la foto.',
          'Para ver sus fotos, abra la galería o aplicación de fotos.',
          'Puede compartir sus fotos tocando el icono de compartir.'
        ],
        videoUrl: 'https://www.youtube.com/embed/idbQMrxEfqQ' // Video de "Cómo Sacar Fotos"
      };
    case 'calls':
      return {
        title: 'Curso de Cómo Llamar por Teléfono',
        icon: <Phone size={64} className="text-purple-600" />,
        steps: [
          'Abra la aplicación de teléfono en su celular.',
          'Toque el icono de teclado para marcar un número.',
          'Ingrese el número que desea llamar.',
          'Presione el botón verde de llamada para iniciar la llamada.',
          'Para finalizar, toque el botón rojo de colgar.',
          'Para aprender mas Vea el Video Tutorial que esta a continuación.'
        ],
        videoUrl: 'https://www.youtube.com/embed/mPop36FWCCM' // Video de "Cómo Llamar por Teléfono"
      };
    default:
      return {
        title: 'Curso no encontrado',
        icon: <Smartphone size={64} className="text-gray-600" />,
        steps: ['Lo sentimos, el curso que busca no está disponible.'],
        videoUrl: ''
      };
  }
}

export default CoursePage;
