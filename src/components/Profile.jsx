import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Switch from "@mui/material/Switch";
import SunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function AppBarHeader({ mode, setMode }) {
  const handleToggleTheme = (event) => {
    setMode(event.target.checked ? "dark" : "light");
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme) => ({
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          bgcolor: theme.palette.background.paper,
          borderRadius: 10,
          boxShadow: "0px 4px 10px rgba(255, 170, 213, 0.4)",
          maxWidth: "1200px", // ✅ same width as Profile container
        })}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Left Side: Logo + Title */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FavoriteRoundedIcon sx={{ color: "pink", mr: 3, ml: 1.5 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontWeight: 800,
                  letterSpacing: ".3rem",
                  color: "text.primary",
                  textDecoration: "none",
                }}
              >
                DELA.TORRE
              </Typography>
            </Box>

            {/* Right Side: Theme Switch */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
              }}
            >
              <SunnyIcon />
              <Switch
                checked={mode === "dark"}
                onChange={handleToggleTheme}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "pink",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "pink",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "pink",
                  },
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "pink",
                  },
                }}
              />
              <DarkModeIcon />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer so Profile starts at same margin (mt:16) */}
      <Box sx={{ mt: 16 }} />
    </>
  );
}

export default AppBarHeader;
