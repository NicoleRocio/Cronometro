import { getAllInstituciones } from "../config/instituciones";

const InstitucionSelector = ({ institucionSeleccionada, onInstitucionChange }) => {
  const instituciones = getAllInstituciones();

  return (
    <div className="absolute bottom-6 left-6 z-50">
      <select
        value={institucionSeleccionada.id}
        onChange={(e) => {
          const institucion = instituciones.find(inst => inst.id === e.target.value);
          onInstitucionChange(institucion);
        }}
        className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[200px]"
      >
        {instituciones.map((institucion) => (
          <option key={institucion.id} value={institucion.id}>
            {institucion.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InstitucionSelector;
