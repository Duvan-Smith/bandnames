import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const BandList = () => {
  const { socket } = useContext(SocketContext);

  const [bands, setBands] = useState([]);

  const changeName = (e, id) => {
    const newName = e.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };

  const votar = (id) => {
    socket.emit("votar-banda", id);
  };

  const borrar = (id) => {
    socket.emit("borrar-banda", id);
  };

  const onPerdioFoco = (id, nombre) => {
    socket.emit("cambiar-nombre-banda", { id, nombre });
  };

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });

    return () => socket.off("current-bands");
  }, [socket]);

  const creatRows = () => {
    return bands.map((band) => {
      return (
        <tr key={band.id}>
          <td>
            <button className="btn btn-primary" onClick={() => votar(band.id)}>
              +1
            </button>
          </td>
          <td>
            <input
              className="form-control"
              value={band.name}
              onChange={(e) => changeName(e, band.id)}
              onBlur={(e) => onPerdioFoco(band.id, band.name)}
            />
          </td>
          <td>
            <h3> {band.votes} </h3>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => borrar(band.id)}>
              Borrar
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{creatRows()}</tbody>
      </table>
    </>
  );
};
