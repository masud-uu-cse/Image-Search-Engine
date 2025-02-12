import { Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import ImageList from "./ImageList";

const Gallery = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Navbar />
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          Discover High-Quality Image Hive Photos
        </Typography>
      </Box>
      <ImageList />
    </Box>
  );
};

export default Gallery;
