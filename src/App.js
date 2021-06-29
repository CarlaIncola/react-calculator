import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import HelloWorld from './HelloWorld'
import Calculator from './Calculator'
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { CgSun } from "react-icons/hi";

const StyledApp = styled.div`
 color: ${(props) => props.theme.fontColor};
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 width: 100%;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <div className="App">
     <GlobalStyles />
      <StyledApp>

        <head>
          <script src="https://code.iconify.design/1/1.0.4/iconify.min.js">   </script>
        </head>
        <label>
          <input onClick={() => themeToggler()} class='togglecheckbox' type='checkbox'></input>
          <div class='toggleslot'>
            <div class='suniconwrapper'>
              <i class="gg-sun"></i>
            </div>
            <div class='togglebutton'></div>
            <div class='mooniconwrapper'>
              <i class="gg-moon"></i>
            </div>
          </div>
        </label>

    <HelloWorld />
      <Calculator />
      </StyledApp>
    </div>
    </ThemeProvider>
  );
}

export default App;
