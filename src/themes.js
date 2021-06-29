import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
  body: "#EBECF1",
  fontColor: "#373737",
  shadow: "4.5px 4.5px 9px #CBCBCB, -4.5px -4.5px 9px #FFFFFF",
  transition: "background-color .5s ease-out, box-shadow .5s ease-out",
};

export const darkTheme = {
  body: "#191A1E",
  fontColor: "#EBECF1",
  shadow: "6px 6px 12px #0E0E0E, -4px -4px 10px rgba(95, 94, 94, 0.25)",
  transition: "background-color .5s ease-out, box-shadow .5s ease-out",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${props => props.theme.body};
  transition: ${(props => props.theme.transition)};
}
.outputScreen {
  box-shadow: ${(props) => props.theme.shadow};
}
.calculator {
  box-shadow: ${(props) => props.theme.shadow};
}
button {
  color: ${(props) => props.theme.fontColor};
  background-color: ${props => props.theme.body};
  box-shadow: ${(props) => props.theme.shadow};
}
.toggleslot {
    box-shadow: ${(props) => props.theme.shadow};
}
.togglebutton {
  box-shadow: ${(props) => props.theme.shadow};
}
`
