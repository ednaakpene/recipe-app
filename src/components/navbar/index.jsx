import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <AppBar color="success" position="static">
      <Toolbar>
        <Typography to="/recipes" variant="h6" component={Link} sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <Button to="/add-recipe" component={Link} variant="contained" color="success"> Add New Recipe</Button>
      </Toolbar>
    </AppBar>
  );
}
