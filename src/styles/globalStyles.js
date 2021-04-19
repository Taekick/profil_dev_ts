import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300&family=PT+Sans+Narrow:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
 
}
html {
  font-size: 62.5%; // "reset" de la taille par défaut de la typo, 10px = 1rem
}
body {
  font-size: 1.6rem; // <=>16px
  font-family: 'Open Sans', sans-serif;
}
`;

export default GlobalStyle;
