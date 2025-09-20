import { useState, useMemo } from "react";
import { Box, Grid, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBarHeader from "./components/AppBarHeader";
import AvatarBox from "./components/AvatarBox";
import DetailsBox from "./components/DetailsBox";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

export default function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#fefefe",
                  paper: "#fff",
                },
              }
            : {
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }),
        },
        typography: {
          fontFamily: "Inter, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Pass toggle + mode to AppBar */}
      <AppBarHeader mode={mode} setMode={setMode} />

      <Box
        sx={(theme) => ({
          mt: 15,
          mx: "auto",
          width: "90%",
          maxWidth: "1200px",
          bgcolor: theme.palette.background.paper,
          borderRadius: 5,
          boxShadow: "0px 4px 10px rgba(255, 170, 213, 0.4)",
          p: 4,
        })}
      >
        <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} md={4}>
            <AvatarBox />
          </Grid>

          <Grid item xs={12} md={8}>
            <DetailsBox />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
