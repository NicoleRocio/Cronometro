import tira from "../../assets/tira.png";

const AlumnosImage = ({ institucion }) => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center flex-1 relative scale-125">
      <img
        src={institucion.alumnos}
        alt="Alumnos"
        className="w-[1200px] h-auto object-contain pointer-events-none select-none"
      />
      <img
        src={tira}
        alt="Tira institucional"
        className="w-[1200px] h-auto object-cover pointer-events-none select-none absolute bottom-[0px] left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default AlumnosImage;
