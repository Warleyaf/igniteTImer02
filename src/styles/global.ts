// dessa forma aqui eu crio meus styles global
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: #333;
      color: #fff;
   }
`

// após definir os temas globais eu posso importar ele em qualquer parte dos meus arquivos, no caso eu vou importar dentro do App.tsx, e lembre-se.... para funcionar eu preciso importar dentro do <ThemeProvider>