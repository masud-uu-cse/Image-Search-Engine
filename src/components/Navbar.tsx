import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => (
  <AppBar
    variant="outlined"
    position="static"
    sx={{ backgroundColor: "white", color: "black" }}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
        Image Hive Photos
      </Typography>
      <Button color="primary">Home</Button>
      <Button color="inherit">Favourites</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
