import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

    &::-webkit-scrollbar {
      width: 1.2rem;
    }
  
    &::-webkit-scrollbar-track {
      background: ${ ({ theme }) => theme.COLORS.DARK_SECUNDARIA}; 
    }
  
    &::-webkit-scrollbar-thumb {
      background: ${ ({ theme }) => theme.COLORS.PRINCIPAL}; 
      border-radius: 6px;
      border: 3px solid ${ ({ theme }) => theme.COLORS.DARK_PRINCIPAL};
    }
  }

  ul {
    list-style: none;
  }
`