// Configuración de instituciones
export const instituciones = [
  {
    id: "institucion1",
    nombre: "Cientifica",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/alumnos.png",
    colorFondo: "bg-sky-800"
  },
  {
    id: "institucion2", 
    nombre: "Institución 2",
    logo: "/src/assets/logo2.png",
    logo2: "/src/assets/logo.png",
    alumnos: "/src/assets/alumnos.png",
    colorFondo: "bg-blue-900"
  },
  {
    id: "institucion3",
    nombre: "Institución 3", 
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/alumnos.png",
    colorFondo: "bg-indigo-900"
  },
  {
    id: "institucion4",
    nombre: "Institución 4",
    logo: "/src/assets/logo2.png",
    logo2: "/src/assets/logo.png",
    alumnos: "/src/assets/alumnos.png",
    colorFondo: "bg-purple-900"
  },
  {
    id: "institucion5",
    nombre: "Institución 5",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/alumnos.png",
    colorFondo: "bg-green-900"
  }
];

export const getInstitucionById = (id) => {
  return instituciones.find(inst => inst.id === id) || instituciones[0];
};

export const getAllInstituciones = () => {
  return instituciones;
};
