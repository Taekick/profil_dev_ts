import theme from "styled-theming";

export const backgroundColor: theme.ThemeSet = theme("mode", {
  light: "#fff",
  dark: "#101010",
});

export const textColor: theme.ThemeSet = theme("mode", {
  light: "#262323",
  dark: "#fbf9f9",
});
