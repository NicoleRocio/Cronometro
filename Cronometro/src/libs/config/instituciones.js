// Configuración de instituciones
export const instituciones = [
  {
    id: "institucion1",
    nombre: "ZÁRATE",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/logo.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion2", 
    nombre: "HEROINAS TOLEDO",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/Heroinas.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion3",
    nombre: "EL TRIUNFO", 
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/triunfo.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion4",
    nombre: "ALBERTH EINSTEIN",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/alberth.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion5",
    nombre: "GELICICH",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/GELICICH.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "Ninstitucion6",
    nombre: "NUESTRA SEÑORA DEL PILAR",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/NUESTRA SEÑORA DEL PILAR.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion7", 
    nombre: "UNI",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/UNI.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion8",
    nombre: "ROSA DE LIMA", 
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/ROSA DE LIMA.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion9",
    nombre: "LOS ALAMOS",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/LOS ALAMOS.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion10",
    nombre: "SAN GABRIEL",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/SAN GABRIEL.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion11",
    nombre: "SANTA ANA",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/SANTA ANA.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion12", 
    nombre: "EXCELENTI",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/EXCELENTI.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion13",
    nombre: "NUESTRA SEÑORA DE LOURDES", 
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/NUESTRA SEÑORA DE LOURDES.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion14",
    nombre: "J. ALARCO DE DAMMERT",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/unnamed.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion15",
    nombre: "VIRGEN DE FATIMA",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/VIRGEN DE FATIMA.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion16",
    nombre: "VICTOR PORCEL ESQUIVEL",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/VICTOR PORCEL ESQUIVEL.png",
    colorFondo: "bg-sky-900"
  },
  {
    id: "institucion17", 
    nombre: "SAN JOSE LA ESPERANZA",
    logo: "/src/assets/logo.png",
    logo2: "/src/assets/logo2.png",
    alumnos: "/src/assets/SAN JOSE LA ESPERANZA.png",
    colorFondo: "bg-sky-900"
  },
  
];

export const getInstitucionById = (id) => {
  return instituciones.find(inst => inst.id === id) || instituciones[0];
};

export const getAllInstituciones = () => {
  return instituciones;
};
