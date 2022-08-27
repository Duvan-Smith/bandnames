import { useState } from "react";

export const BandAdd = ({ crearBanda }) => {
  const [valor, setValor] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (valor.trim().length > 0) {
      crearBanda(valor);
      setValor("");
    }
  };

  return (
    <>
      <h3>Agregar banda</h3>
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="Nuevo nombre"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
      </form>
    </>
  );
};
