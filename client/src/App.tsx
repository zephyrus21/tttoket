import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "./App.css";
import Game from "./components/Game";
import JoinRoom from "./components/JoinRoom";
import GameContext, { IGameContextProps } from "./context/store";
import socketService from "./services/socketService";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const WelcomText = styled.h1`
  color: #8e44ad;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = ({}) => {
  const [isInRoom, setIsInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");

  const connectSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:9000")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setIsInRoom,
    playerSymbol,
    setPlayerSymbol,
    // isPlayerTurn,
    // setPlayerTurn,
    // isGameStarted,
    // setGameStarted,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <WelcomText>Tic-Tac-Toe</WelcomText>
        <MainContainer>
          {!isInRoom && <JoinRoom />}
          {isInRoom && <Game />}
        </MainContainer>
      </AppContainer>
    </GameContext.Provider>
  );
};

export default App;
