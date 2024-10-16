import React from 'react';
import { Home } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentCourse, setCurrentCourse] = React.useState('');

  const navigateTo = (page: string, course: string = '') => {
    setCurrentPage(page);
    setCurrentCourse(course);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 text-xl">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'course' && <CoursePage course={currentCourse} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;