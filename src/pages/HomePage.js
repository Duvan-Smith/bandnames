import { useContext } from "react";
import { BandAdd } from "../componets/BandAdd";
import { BandList } from "../componets/BandList";
import { SocketContext } from "../context/SocketContext";

function HomePage() {
  // const [bands, setBands] = useState([]);

  const { online } = useContext(SocketContext);

  // useEffect(() => {
  //   socket.on("current-bands", (bands) => {
  //     setBands(bands);
  //   });
  // }, [socket]);

  // const votar = (id) => {
  //   socket.emit("votar-banda", id);
  // };

  // const borrar = (id) => {
  //   socket.emit("borrar-banda", id);
  // };

  // const cambiarNombre = (id, nombre) => {
  //   socket.emit("cambiar-nombre-banda", { id, nombre });
  // };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </p>
      </div>
      <h1>BandNames</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          {/* <BandList
            data={bands}
            votar={votar}
            borrar={borrar}
            cambiarNombre={cambiarNombre}
          /> */}
        </div>
        <div className="col-4">{/* <BandAdd /> */}</div>
      </div>
    </div>
  );
}

export default HomePage;