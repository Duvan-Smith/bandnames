import { useEffect, useState } from "react";

export const BandList = ({ data }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const creatRows = () => {
    return bands.map((band) => {
      return (
        <tr key={band.id}>
          <td>
            <button className="btn btn-primary">+1</button>
          </td>
          <td>
            <input className="form-control" value={band.name} />
          </td>
          <td>
            <h3> 0 </h3>
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
