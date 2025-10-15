import { useState, useEffect, useRef } from "react";
import alertSound from "../../assets/alert.wav";

export default function Cronometro({ nombre, minutosMax = 0, segundosMax = 0, alertas = [] }) {
  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [mostroMaximo, setMostroMaximo] = useState(false);
  const [pausado, setPausado] = useState(false);

  const intervaloRef = useRef(null);
  const audio = useRef(new Audio(alertSound));

  const tiempoMax = minutosMax * 60 + segundosMax;

  // ⏱ Actualiza el cronómetro
  useEffect(() => {
    if (corriendo) {
      intervaloRef.current = setInterval(() => setTiempo((prev) => prev + 1), 1000);
    } else {
      clearInterval(intervaloRef.current);
    }
    return () => clearInterval(intervaloRef.current);
  }, [corriendo]);

  // 🔔 Reproduce alertas
  useEffect(() => {
    if (alertas.includes(tiempo)) {
      audio.current.play();
    }
  }, [tiempo, alertas]);

  // 🚨 Detecta cuando se supera el tiempo máximo
  useEffect(() => {
    if (tiempo >= tiempoMax && !mostroMaximo) {
      setMostroMaximo(true);
    }
  }, [tiempo, tiempoMax, mostroMaximo]);

  // ⏳ Formatear tiempo HH:MM:SS
  const formatTiempo = (t) => {
    const horas = Math.floor(t / 3600);
    const minutos = Math.floor((t % 3600) / 60);
    const segundos = t % 60;
    return `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  };

  const iniciarPausar = () => {
    if (corriendo) {
      setPausado(true);
    } else {
      setPausado(false);
    }
    setCorriendo((prev) => !prev);
  };

  const reiniciar = () => {
    setTiempo(0);
    setCorriendo(false);
    setMostroMaximo(false);
    setPausado(false);
  };

  const diferencia = tiempo - tiempoMax;
  const diferenciaTexto =
    diferencia > 0
      ? `Se pasó por ${formatTiempo(Math.abs(diferencia))}`
      : `Faltaron ${formatTiempo(Math.abs(diferencia))}`;

  return (
    <div className="relative z-50 flex flex-col items-center justify-center text-center space-y-8 w-full">
      
      {/* 🕒 Contenedor principal del cronómetro con curva inferior derecha */}
      <div
        className="backdrop-blur-md p-10 shadow-2xl w-full max-w-5xl flex flex-col justify-center items-center space-y-4 overflow-hidden"
        style={{
          background: "white",
          borderRadius: "0 0 150px 0",
        }}
      >
        {/* 🔹 Texto superior dentro del cronómetro */}
        <h1 className="text-3xl font-extrabold text-black text-center tracking-widest drop-shadow-lg">
          ZÁRATE VERÁSTEGUI <span className="text-sky-300">| EDUCATION</span>
        </h1>

        {/* ⏱ Tiempo */}
        <div className="text-[10rem] sm:text-[12rem] font-mono font-extrabold text-black drop-shadow-xl tracking-widest">
          {formatTiempo(tiempo)}
        </div>
      </div>

      {/* ⚙️ Contenedor de mensajes y botones con curva superior izquierda */}
      <div
        className="bg-white/10 backdrop-blur-sm p-10 shadow-lg w-full max-w-5xl flex flex-col items-center justify-between space-y-8 overflow-hidden"
        style={{
          background: "white",
          borderRadius: "150px 0 0 0",
          minHeight: "350px", // 🔹 Mantiene el tamaño estable del fondo
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* 🟧 Mensajes individuales */}
        <div className="flex flex-row justify-center items-center gap-8 flex-nowrap min-h-[180px] overflow-x-auto w-full px-4">

          {mostroMaximo && (
            <>
              {/* Tiempo máximo */}
              <div className="bg-gray-300 backdrop-blur-md rounded-xl px-4 py-8 shadow-inner text-black text-4xl font-semibold drop-shadow-md flex flex-col items-center min-w-[220px]">
                <span className="text-black font-extrabold "> TIEMPO MÁXIMO</span>
                <span className="text-5xl" >{formatTiempo(tiempoMax)}</span>
              </div>

              {/* Tiempo total */}
              {pausado && (
                <div className="bg-gray-300 backdrop-blur-md rounded-xl px-4 py-8 shadow-inner text-black text-4xl font-semibold drop-shadow-md flex flex-col items-center min-w-[220px]">
                  <span className="text-black font-extrabold"> TIEMPO TOTAL</span>
                  <span className="text-5xl">{formatTiempo(tiempo)}</span>
                </div>
              )}

              {/* Diferencia */}
              {pausado && (
                <div className="bg-gray-300 backdrop-blur-md rounded-xl px-4 py-8 shadow-inner text-white text-4xl font-semibold drop-shadow-md flex flex-col items-center min-w-[220px]">
                  <span className="text-black font-extrabold"> DIFERENCIA</span>
                  <span 




                    className={`${diferencia > 0 ? "text-black" : "text-green-300"}`} 
                  >
                    {diferenciaTexto}
                  </span>
                </div>
              )}
            </>
          )}
        </div>

        {/* 🔘 Botones */}
        <div className="flex gap-6">
          <button
            type="button"
            onClick={iniciarPausar}
            className={`px-10 py-5 rounded-xl text-3xl font-extrabold transition-all shadow-md ${
              corriendo
                ? "bg-red-700 hover:bg-red-700 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-white"
            }`}
          >
            {corriendo ? "PAUSAR" : "INICIAR"}
          </button>

          <button
            type="button"
            onClick={reiniciar}
            className="px-10 py-5 rounded-xl text-3xl font-extrabold bg-orange-500 hover:bg-orange-600 text-white shadow-md"
          >
            REINICIAR
          </button>
        </div>
      </div>
    </div>
  );
}
