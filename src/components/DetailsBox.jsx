import { Box, Typography, Container, Rating, Tabs, Tab, Chip } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded";
import Divider from "@mui/material/Divider";
import FemaleIcon from "@mui/icons-material/Female"; 
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

function TabPanel({ children, value, index }) {
  return (
    <Box hidden={value !== index} sx={{ mt: 2 }}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function DetailsBox() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ml: 4, mr: -3}}>
      <Container sx={{ mt: 7 }}>
        {/* Name + Location */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 6 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 30, letterSpacing: -1.5, mr: 1 }}>
            DELA TORRE, Andrea Joy
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ borderWidth: 1.5 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <PlaceOutlinedIcon sx={{ color: "grey", fontSize: 20, m: 0.5 }} />
            <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 2, color: "grey" }}>
              BULACAN
            </Typography>
          </Box>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 16,
            color: "grey",
            letterSpacing: -0.5,
            mt: -0.5,
            mb: 1.5,
          }}
        >
          UI/UX Designer & Frontend Developer
        </Typography>

        {/* Rating */}
        <Rating name="customized-10" defaultValue={10} max={10} readOnly sx={{ mb: 2.5 }} />
      </Container>

      {/* Tabs */}
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          textColor="inherit"
          TabIndicatorProps={{
            sx: { backgroundColor: "pink" },
          }}
        >
          <Tab
            icon={<SentimentSatisfiedRoundedIcon />}
            label="ABOUT"
            sx={{
              color: value === 0 ? "pink" : "inherit",
            }}
          />
          <Tab
            icon={<InterestsRoundedIcon />}
            label="SKILLS"
            sx={{
              color: value === 1 ? "pink" : "inherit",
            }}
          />
        </Tabs>

        {/* About Tab */}
        <TabPanel value={value} index={0}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, letterSpacing: -0.5, mt: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <HomeIcon sx={{ color: "pink", mr: 0.5 }} />
              <Typography>Blk 6, Lot 6, St. Emmanuel Homes, Prenza 2, Marilao, Bulacan</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon sx={{ color: "pink", mr: 0.5 }} />
              <Typography>09396203319</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ color: "pink", mr: 0.5 }} />
              <Typography>andreajoyndt@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CakeIcon sx={{ color: "pink", mr: 0.5 }} />
              <Typography>August 22, 2003</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FemaleIcon sx={{ color: "pink", mr: 0.5 }} />
              <Typography>Female</Typography>
            </Box>
          </Box>
        </TabPanel>

        {/* Skills Tab */}
        <TabPanel value={value} index={1}>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 1.2,
      mt: 3,
      maxWidth: 450,
    }}
  >
    {[
      { label: "UI/UX Design", color: "pink" },
      { label: "Material UI", color: "mediumseagreen" },
      { label: "Figma", color: "pink" },
      { label: "JavaScript", color: "mediumseagreen" },
      { label: "React.js", color: "pink" },
      { label: "Responsive Design", color: "mediumseagreen" },
      { label: "Git & GitHub", color: "pink" },
      { label: "Prototyping", color: "mediumseagreen" },
    ].map((skill, index) => (
      <Chip
        key={index}
        label={skill.label}
        variant="outlined"
        sx={{
          borderColor: skill.color,
          color: skill.color,
          fontWeight: 600,
          height: 32, // ✅ fixes uneven height
          px: 1, // ✅ fixes padding
        }}
      />
    ))}
  </Box>
</TabPanel>
      </Container>
    </Box>
  );
}