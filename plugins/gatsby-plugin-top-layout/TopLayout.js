import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Helmet from "react-helmet";
import bg from "./background.svg";
import xkcdFont from "./xkcd-script.woff";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(58,34,73)",
      paper: "rgb(10, 87, 114)",
    },
  },
  typography: {
    fontFamily: "xkcd-script",
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
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const TopLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link
        rel="preload"
        as="font"
        href={xkcdFont}
        type="font/woff"
        crossOrigin="anonymous"
      />
    </Helmet>
    <style>{`@font-face {
	font-family: xkcd-script;
	src: url('${xkcdFont}') format('woff');
}`}</style>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default TopLayout;
