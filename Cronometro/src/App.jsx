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
    <div className="relative h-screen w-full bg-sky-800 overflow-hidden flex flex-col justify-center">

      {/* 🔷 Logos superiores */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-8 py-4 z-50">
        <img
          src={logo}
          alt="Logo Institución"
          className="w-[200px] sm:w-[280px] object-contain"
        />
        <img
          src={logo2}
          alt="Logo Derecho"
          className="w-[220px] sm:w-[320px] object-contain"
        />
      </div>

      {/* 🔹 Contenedor principal (centrado verticalmente) */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full max-w-[1600px] mx-auto px-6 md:px-10 gap-6">

        {/* 📸 Imagen de alumnos + tira */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 relative scale-90">
          <img
            src={alumnos}
            alt="Alumnos"
            className="w-[600px] h-auto object-contain pointer-events-none select-none"
          />
          <img
            src={tira}
            alt="Tira institucional"
            className="w-[600px] h-auto object-cover pointer-events-none select-none absolute bottom-[40px] left-1/2 -translate-x-1/2"
          />
        </div>

        {/* 🕒 Zona del cronómetro */}
        <div className="flex flex-col items-center flex-1 relative z-50 scale-90">
          {/* Botones */}
          <div className="flex gap-6 mb-8">
            <button
              type="button"
              onClick={() => setRelojSeleccionado("Reloj 1")}
              className={`px-6 py-3 rounded-xl text-xl font-extrabold shadow-md transition-all ${
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
              className={`px-6 py-3 rounded-xl text-xl font-extrabold shadow-md transition-all ${
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
    </div>
  );
}
