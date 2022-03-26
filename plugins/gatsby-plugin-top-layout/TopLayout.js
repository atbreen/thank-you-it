import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import React from "react";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(60, 15, 60)",
      paper: "rgb(30, 30, 30)",
    },
  },
});

theme = responsiveFontSizes(theme);

const TopLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default TopLayout;
