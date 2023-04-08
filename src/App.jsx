import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(undefined);

  return (
    <div className="w-screen max-w-screen h-screen max-h-screen bg-[#353535] text-white p-12 flex flex-col items-center">
      <h2 className="text-2xl">Exercício 2</h2>
      <h2 className="mb-10 text-center">
        Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center text-lg">
        O número
        <input
          type="number"
          className="bg-[#353535] text-center w-44 border rounded-lg m-3 p-2"
          placeholder="Insira o Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        é {number >= 0 ? "Positivo" : number < 0 ? "Negativo" : ""}
      </div>
    </div>
  );
}
