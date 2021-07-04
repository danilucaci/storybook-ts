import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  spacing: {
    ui: {
      button: {
        xs: "0.25rem",
        s: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
  },
  colors: {
    grey: {
      grey900: "#1A212B",
      grey800: "#3A424D",
      grey700: "#5F6570",
      grey600: "#81878F",
      grey500: "#A3A8AD",
      grey400: "#BFC3C7",
      grey300: "#D2D5D9",
      grey200: "#E3E6E8",
      grey100: "#EDF0F2",
      grey50: "#F5F6F7",
      grey00: "#FFFFFF",
    },
    primary: {
      primary900: "#021E4F",
      primary800: "#073375",
      primary700: "#123D8C",
      primary600: "#1851BB",
      primary500: "#2E6FD5",
      primary400: "#4F8FE9",
      primary300: "#7CB1F6",
      primary200: "#B1D3FD",
      primary100: "#CDE3FE",
      primary50: "#E8F3FF",
      primary00: "#FFFFFF",
    },
  },
};

export default theme;
