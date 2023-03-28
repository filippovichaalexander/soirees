import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import twitterIcon from "../assets/twitter.png";
import githubIcon from "../assets/github.png";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import heartIcon from "../assets/heart-i.png";
import ukFlag from "../assets/uk-flag.png";

import styled from "styled-components";

const Footer: React.FC = () => {
  const Btns = styled.div`
    display: flex;
    @media (max-width: 899px) {
      margin: 0 auto;
    }
  `;
  const Logo = styled.div`
    border: 5px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  `;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          left: "0",
          margin: "30px auto 30px auto",
          width: "100%"
          // height: "300px"
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "rgba(255,255,255,0.5)"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Logo></Logo>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  textAlign: "start",
                  marginLeft: "40px",
                  alignItems: "start"
                }}
              >
                <Typography paragraph={true} lineHeight="0.2" marginBottom="0">
                  Soirées
                </Typography>
                <Typography
                  paragraph={true}
                  lineHeight="0.6"
                  marginBottom="0"
                  display="flex"
                  alignItems="center"
                >
                  From Paris with{" "}
                  <span>
                    <Box
                      component="img"
                      sx={{
                        height: 15,
                        width: 15,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        marginLeft: "5px"
                      }}
                      src={heartIcon}
                      alt=""
                    ></Box>
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box sx={{}}>
              <Stack spacing={3} direction="row" alignItems="center">
                <Typography paragraph={true} marginBottom="0">
                  Partner login
                </Typography>
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
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: {
                lg: "space-between",
                md: "space-between",
                sm: "center"
              },
              alignItems: "center",
              color: "rgba(255,255,255,0.5)",
              flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" }

              // flexWrap: "wrap"
            }}
            marginTop="10px"
          >
            <Typography
              paragraph={true}
              lineHeight="0.2"
              marginBottom="0"
              whiteSpace="nowrap"
              sx={{
                width: { lg: "32%", md: "32%", sm: "100%", xs: "100%" }
              }}
            >
              &#169; Soir.es All rights reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                color: "rgba(255,255,255,0.5)",
                width: { lg: "30%", md: "100%", sm: "100%", xs: "100%" },
                marginTop: { lg: "0", sm: "20px", xs: "20px" }
              }}
            >
              <Link href="#" color="inherit" underline="none">
                <Typography paragraph={true} lineHeight="0.2" marginBottom="0">
                  Terms
                </Typography>
              </Link>
              <Link href="#" color="inherit" underline="none">
                <Typography paragraph={true} lineHeight="0.2" marginBottom="0">
                  Privacy Policy
                </Typography>
              </Link>
            </Box>
            <Btns>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  width: { md: "100%", sm: "100%", xs: "100%" },
                  marginTop: { lg: "0", sm: "20px", xs: "20px" },
                  margin: {md:"0 auto", sm:"20px auto 0 auto"}
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    transition: "all .8s ease",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#fff"
                    }
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 15,
                      width: 15,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      filter:
                        "invert(80%) sepia(30%) saturate(6875%) hue-rotate(198deg) brightness(88%) contrast(69%)"
                    }}
                    src={twitterIcon}
                    alt=""
                  ></Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    transition: "all .8s ease",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#fff"
                    }
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 15,
                      width: 15,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      filter:
                        "invert(80%) sepia(30%) saturate(6875%) hue-rotate(198deg) brightness(88%) contrast(69%)"
                    }}
                    src={githubIcon}
                    alt=""
                  ></Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    transition: "all .8s ease",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#fff"
                    }
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 15,
                      width: 15,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      filter:
                        "invert(80%) sepia(30%) saturate(6875%) hue-rotate(198deg) brightness(88%) contrast(69%)"
                    }}
                    src={facebookIcon}
                    alt=""
                  ></Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    transition: "all .8s ease",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#fff"
                    }
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 15,
                      width: 15,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      filter:
                        "invert(80%) sepia(30%) saturate(6875%) hue-rotate(198deg) brightness(88%) contrast(69%)"
                    }}
                    src={instaIcon}
                    alt=""
                  ></Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    transition: "all .8s ease",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#fff"
                    }
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 15,
                      width: 15,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      filter:
                        "invert(80%) sepia(30%) saturate(6875%) hue-rotate(198deg) brightness(88%) contrast(69%)"
                    }}
                    src={linkedinIcon}
                    alt=""
                  ></Box>
                </Box>
              </Stack>
            </Btns>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
