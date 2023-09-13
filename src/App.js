
import React from "react";
import { Container, MainBody,FadeImage } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";

//import components
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import NavBar from "./components/NavBar";
import topFadeImage from './assets/top.png';
import leftFadeImage from './assets/left.png';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
      <MainBody>
      <Container>
          <NavBar/>
          <Showcase/>
          <MySkills/>
          <MyProjects/>
      </Container>
      <FadeImage src={topFadeImage} top='0'></FadeImage>
      <FadeImage src={leftFadeImage} top='30vh'></FadeImage>

      </MainBody>
     </ThemeProvider>
    </div>
  );
}

export default App;
