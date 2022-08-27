import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (socketPath) => {
  const [online, setOnline] = useState(false);

  const socket = useMemo(
    () =>
      io.connect(socketPath, {
        transports: ["websocket"],
      }),
    [socketPath]
  );

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};
