import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ukFlag from "../assets/uk-flag.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const MainNavigation: React.FC = () => {
  const [open, setState] = useState(false);

  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#1976d2"
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#1976d2"
            }
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.2,
            backgroundColor: "#fff",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor: "#fff"
            }
          }
        }
      }
    }
  });

  return (
    
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="lg" >
      {/* disableGutters="true" */}
        <Toolbar>
          <ThemeProvider theme={theme}>
            <FormGroup
              sx={{
                display: {
                  xs: "none",
                  sm: "block"
                }
              }}
            >
              <FormControlLabel control={<Switch name="checkedA" />} label="Custom color"/>
            </FormGroup>
          </ThemeProvider>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "none"
              }}
            >
              I'm a photographer
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none"
              }}
            >
              I'm a partner
            </Button>
          </Stack>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none"
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "start"
              }}
            >
              {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
              <IconButton sx={{ mb: 2, color: "#fff" }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2, width: "95vw" }}>
                <Stack spacing={2} direction="column">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#fff",
                      color: "#000"
                    }}
                  >
                    I'm a photographer
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#fff",
                      color: "#000"
                    }}
                  >
                    I'm a partner
                  </Button>
                </Stack>
              </Box>

              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "0 60px"
                }}
              >
                <ThemeProvider theme={theme}>
                  <FormGroup
                    sx={{
                      display: {
                        xs: "block",
                        sm: "none"
                      }
                    }}
                  >
                    <FormControlLabel control={<Switch name="checkedA" />} label="Custom color" />
                  </FormGroup>
                </ThemeProvider>

                <Box
                  component="img"
                  sx={{
                    height: 15,
                    width: 15,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    marginLeft: "5px"
                  }}
                  src={ukFlag}
                  alt=""
                ></Box>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavigation;
