import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ImageSearchPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "300px",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('./assets/search-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(128,0,128,0.6), rgba(255,20,147,0.6))",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, fontStyle: "italic" }} fontWeight="bold">
          Image Hive
        </Typography>
        <Typography variant="h4">
          Discover stunning free stock photos, shared to worldwide.
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: 2,
            width: "100%",
            maxWidth: "60vw",
            minWidth: "300px",
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            placeholder="Search for free photos"
            InputProps={{ disableUnderline: true, sx: { px: 2, py: 1 } }}
          />
          <Button sx={{ px: 3, color: "gray" }}>
            <SearchIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSearchPage;