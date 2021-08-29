import React, { useEffect } from "react";
import { io } from "socket.io-client";

const App: React.FC = ({}) => {
  const connect = () => {
    const socket = io("http://localhost:9000");
  };

  useEffect(() => {
    connect();
  }, []);

  return <div>Hey</div>;
};

export default App;
