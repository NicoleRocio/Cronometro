import { useState, useRef, useEffect } from "react";
import { getAllInstituciones } from "../config/instituciones";

const InstitucionSelector = ({ institucionSeleccionada, onInstitucionChange }) => {
  const instituciones = getAllInstituciones();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const maxVisibleItems = 5;

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (institucion) => {
    onInstitucionChange(institucion);
    setIsOpen(false);
  };

  return (
    <div className="absolute bottom-6 left-6 z-50">
      <div className="relative" ref={dropdownRef}>
        {/* Botón del desplegable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-4 pr-12 rounded-2xl shadow-2xl text-lg font-bold border-2 border-white/30 hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-300 min-w-[280px] cursor-pointer hover:bg-white hover:shadow-3xl hover:scale-105 transform flex items-center justify-between"
        >
          <span>{institucionSeleccionada.nombre}</span>
          
          {/* Icono de flecha */}
          <svg 
            className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Lista desplegable */}
        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
            <div 
              className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              style={{ maxHeight: `${maxVisibleItems * 60}px` }}
            >
              {instituciones.map((institucion) => (
                <div
                  key={institucion.id}
                  onClick={() => handleSelect(institucion)}
                  className={`px-6 py-4 cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
                    institucionSeleccionada.id === institucion.id
                      ? 'bg-blue-100 text-blue-800 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span className="text-sm font-medium">{institucion.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstitucionSelector;
