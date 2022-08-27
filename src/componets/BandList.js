import { useEffect, useState } from "react";

export const BandList = ({ data, votar }) => {
  const [bands, setBands] = useState(data);

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

  const onPerdioFoco = (id, name) => {};

  useEffect(() => {
    setBands(data);
  }, [data]);

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
            <button className="btn btn-danger">Borrar</button>
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
