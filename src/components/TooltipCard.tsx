import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";

// import styled from "styled-components";

const TooltipCard: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flex: "1 auto",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "grey"
        }}
      >
        <CardHeader
          avatar={<Avatar alt="Remy Sharp" src="/assets/ava.jpg" />}
          action={
            <IconButton aria-label="settings">
              <ArrowForwardIosIcon />
            </IconButton>
          }
          title="Establishment"
          subheader="Le Balajo"
        />
      </Card>
    </>
  );
};
export default TooltipCard;
