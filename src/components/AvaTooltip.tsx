import React from "react";

import TooltipCard from "./TooltipCard";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

// import styled from "styled-components";

const AvaTooltip: React.FC = () => {
  return (
    <>
      <Tooltip
        placement="bottom-end"
        title={
          // <p>dd</p>
          <React.Fragment>
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <TooltipCard />
                <TooltipCard />
              </Box>
            </Container>
          </React.Fragment>
        }
      >
        {/* <IconButton> */}
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: { lg: "70%", md: "70%", sm: "80%", xs: "85%" },
            display: "flex",
            width: "20px",
            height: "20px",
            color: "#fff",
            backgroundColor: "transparent",
            borderRadius: "50%"
          }}
        >
          <InfoIcon />
        </Box>
        {/* </IconButton> */}
      </Tooltip>
      {/* </Container> */}
    </>
  );
};

export default AvaTooltip;
