import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';

export default function SizeAvatars() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mt: 3,
        mb: 4
      }}
    >
      <Avatar
        alt="Andrea Joy Dela Torre"
        src="aeya3.jpg"
        sx={{ width: 350, height: 350 }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: 35,
            color: 111111,
            letterSpacing: -1.5,
            fontWeight: 800,
            marginBottom: -1
          }}
        >
          DELA TORRE, Andrea Joy
        </Typography>
        <Typography
          sx={{
            color: "grey",
            fontSize: 18,
            letterSpacing: -0.5,
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          UI/UX Designer & Frontend Developer
        </Typography>
      </Box>
    </Box>
  );
}
