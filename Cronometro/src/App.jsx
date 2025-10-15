import { useState } from "react";
import Cronometro from "./libs/components/Cronometro";
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import alumnos from "./assets/alumnos.png";
import tira from "./assets/tira.png";

export default function App() {
  const [relojSeleccionado, setRelojSeleccionado] = useState("Reloj 1");
  const key = relojSeleccionado + "-" + Math.random();

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-sky-800 overflow-hidden">

      {/* 🔷 Logos superiores grandes y alineados — no capturan eventos */}
      <div className="absolute top-2 w-full flex justify-between px-12 pointer-events-none">
        <img
          src={logo}
          alt="Logo Institución"
          className="w-64 h-64 sm:w-72 sm:h-72 object-contain"
        />
        <img
          src={logo2}
          alt="Logo Derecho"
          className="w-64 h-64 sm:w-72 sm:h-72 object-contain"
        />
      </div>

      {/* 🔹 Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1800px] p-10">
        {/* 📸 Imagen de alumnos y tira institucional (no capturan eventos) */}
        <div className="hidden md:flex flex-col justify-start items-center flex-1 mt-20 relative">
          <img
            src={alumnos}
            alt="Alumnos"
            className="w-[850px] h-[850px] object-contain pointer-events-none select-none block"
          />
          <img
            src={tira}
            alt="Tira institucional"
            className="w-[850px] h-auto object-cover pointer-events-none select-none absolute bottom-[-10px] left-1/2 -translate-x-1/2"
          />
        </div>

        {/* 🕒 Zona del cronómetro — aseguramos que esté por encima (z-index) */}
        <div className="flex flex-col items-center flex-1 md:ml-32 relative z-50">
          {/* Botones para cambiar de reloj */}
          <div className="flex gap-6 mb-10">
            <button
              type="button"
              onClick={() => setRelojSeleccionado("Reloj 1")}
              className={`px-8 py-3 rounded-xl text-2xl font-extrabold shadow-md transition-all ${
                relojSeleccionado === "Reloj 1"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-orange-700 hover:bg-blue-100"
              }`}
            >
              RELOJ 11
            </button>
            <button
              type="button"
              onClick={() => setRelojSeleccionado("Reloj 2")}
              className={`px-8 py-3 rounded-xl text-2xl font-extrabold shadow-md transition-all ${
                relojSeleccionado === "Reloj 2"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-orange-700 hover:bg-blue-100"
              }`}
            >
              RELOJ 2
            </button>
          </div>

          {/* Mostrar el cronómetro correspondiente */}
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
  );
}
