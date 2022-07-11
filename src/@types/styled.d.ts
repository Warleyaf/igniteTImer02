/* styled.d.ts = esse d.ts me diz que eu vou ter código apenas de definição de typescript, ou seja, dentro desse arquivo vou ter código totalmente só typescript */

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';



// em ThemeType eu posso dar o nome que eu quiser
// esse typeof é uma função específica do typescript
type ThemeType = typeof defaultTheme;

//esse declare module está fazendo o seguinte, meio que ele está criando uma tipagem pro módulo styled-components do npm, ou seja meio que sobre escrevendo uma tipagem aqui dentro
declare module 'styled-components' {
   export interface DefaultTheme extends ThemeType {}
}