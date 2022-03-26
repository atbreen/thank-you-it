import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import bg from "./background.svg";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(58,34,73)",
      paper: "rgb(10, 87, 114)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overscrollBehaviorY: "none",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "top center",
          backgroundRepeat: "repeat",
          backgroundSize: "40%",
        },
      },
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
