import { useState } from "react";
import Cronometro from "./libs/components/Cronometro";
import HeaderLogos from "./libs/components/HeaderLogos";
import AlumnosImage from "./libs/components/AlumnosImage";
import InstitucionSelector from "./libs/components/InstitucionSelector";
import { getInstitucionById } from "./libs/config/instituciones";

export default function App() {
  const [relojSeleccionado, setRelojSeleccionado] = useState("Reloj 1");
  const [institucionSeleccionada, setInstitucionSeleccionada] = useState(getInstitucionById("institucion1"));
  const key = relojSeleccionado + "-" + Math.random();

  return (
    <div className={`relative h-screen w-full ${institucionSeleccionada.colorFondo} overflow-hidden flex flex-col justify-center`}>

      {/* 🔷 Logos superiores */}
      <HeaderLogos institucion={institucionSeleccionada} />

      {/* 🔹 Contenedor principal (centrado verticalmente) */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full max-w-[1600px] mx-auto px-6 md:px-10 gap-6">

        {/* 📸 Imagen de alumnos + tira */}

        <AlumnosImage institucion={institucionSeleccionada} />


        {/* 🕒 Zona del cronómetro */}
        <div className="flex flex-col items-center flex-1 relative z-50 scale-90">
          {/* Botones */}
          <div className="flex gap-6 mb-8">
            <button
              type="button"
              onClick={() => setRelojSeleccionado("Reloj 1")}
              className={`px-10 py-5 rounded-xl text-3xl font-extrabold shadow-md transition-all ${
                relojSeleccionado === "Reloj 1"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-orange-700 hover:bg-blue-100"
              }`}
            >
              RELOJ 1
            </button>
            <button
              type="button"
              onClick={() => setRelojSeleccionado("Reloj 2")}
              className={`px-10 py-5 rounded-xl text-3xl font-extrabold shadow-md transition-all ${
                relojSeleccionado === "Reloj 2"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-orange-700 hover:bg-blue-100"
              }`}
            >
              RELOJ 2
            </button>
          </div>

          {/* Cronómetro */}
          <div className="flex justify-center items-center">
            {relojSeleccionado === "Reloj 1" && (
              <Cronometro
                key={key}
                nombre="Reloj 1"
                minutosMax={1}
                segundosMax={1}
                alertas={[4]}
              />
            )}

            {relojSeleccionado === "Reloj 2" && (
              <Cronometro
                key={key}
                nombre="Reloj 2"
                minutosMax={0}
                segundosMax={3}
                alertas={[2]}
              />
            )}
          </div>
        </div>
      </div>

      {/* 🏫 Selector de institución - Parte inferior izquierda */}
      <InstitucionSelector 
        institucionSeleccionada={institucionSeleccionada}
        onInstitucionChange={setInstitucionSeleccionada}
      />
    </div>
  );
}
