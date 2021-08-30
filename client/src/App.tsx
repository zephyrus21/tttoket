import React, { useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";

import "./App.css";

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
  return (
    <AppContainer>
      <WelcomText>Tic-Tac-Toe</WelcomText>
      <MainContainer>Hey</MainContainer>
    </AppContainer>
  );
};

export default App;
