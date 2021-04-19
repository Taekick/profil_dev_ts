import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./ThemeManager";
import * as themeConf from "./styles/theme";
import Picture from "./Picture/Picture";
import Profil from "./Profil/Profil";
import GlobalStyle from "./styles/globalStyles";
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  transition: all 0.2s ease;
  background: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
`;
const WrapperContain = styled.div`
  display: flex;
  align-items: center;
  width: 980px;
  position: relative;
  @media screen and (max-width: 846px) {
    flex-direction: column;
  }
`;

const App: FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <GlobalStyle />
      <Wrapper>
        <WrapperContain>
          <Picture />
          <Profil theme={theme} />
        </WrapperContain>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
