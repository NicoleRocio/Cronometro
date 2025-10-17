const HeaderLogos = ({ institucion }) => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between px-8 py-4 z-50">
      <img
        src={institucion.logo}
        alt="Logo Institución"
        className="w-[200px] sm:w-[280px] object-contain"
      />
      <img
        src={institucion.logo2}
        alt="Logo Derecho"
        className="w-[300px] sm:w-[400px] object-contain"
      />
    </div>
  );
};

export default HeaderLogos;
