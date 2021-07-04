import "styled-components";

declare module "styled-components" {
  export type BaseColorValues =
    | "00"
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";

  export type GreyColor = "grey";
  export type GreyColors = `${GreyColor}${BaseColorValues}`;
  export type GreyColorsMap = { [color in GreyColors]: string };

  export type PrimaryColor = "primary";
  export type PrimaryColors = `${PrimaryColor}${BaseColorValues}`;
  export type PrimaryColorsMap = { [color in PrimaryColors]: string };

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
      grey: GreyColorsMap;
      primary: PrimaryColorsMap;
    };
  }
}
