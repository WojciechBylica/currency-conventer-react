import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

${normalize}

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: #e5e5e3;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Money-2180330_1920.jpg/1024px-Money-2180330_1920.jpg");
  background-repeat: no-repeat;
  background-position: top;
  font-family: 'Libre Franklin', sans-serif;
  padding: 10px;
  font-size: 16px;
}
`;