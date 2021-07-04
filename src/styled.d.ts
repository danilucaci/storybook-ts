import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: {
      ui: {
        button: {
          xs: string;
          s: string;
          sm: string;
          md: string;
          lg: string;
          xl: string;
        };
      };
    };
    colors: {
      primary: {
        text: string;
      };
    };
  }
}
