import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ color: "#2E3B55", textDecoration: "none" }}>
          Dashboard
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link
              to="employee-app-frontend/"
              style={{ color: "#2E3B55", textDecoration: "none" }}
            >
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link
              to="/employee"
              style={{ color: "#2E3B55", textDecoration: "none" }}
            >
              <ListItemText primary="Employee Form" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to="employee-app-frontend/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button key={1} sx={{ color: "#fff" }}>
              <Link
                to="employee-app-frontend/"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </Link>
            </Button>
            <Button key={1} sx={{ color: "#fff" }}>
              <Link
                to="/employee"
                style={{ color: "white", textDecoration: "none" }}
              >
                Employee Form
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
