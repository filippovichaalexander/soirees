import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const MultiActionAreaCard: React.FC = () => {
  return (
    <Card
      sx={{
        position: "absolute",
        top: { lg: "50vh", md: "40vh", sm: "39vh", xs: "30vh" },
        left: "50%",
        transform: "translate(-50%, 50%)",
        maxWidth: 800,
        width: "60%",
        display: "flex",
        flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
        flex: "1 auto",
        alignItems: "center",
        padding: { lg: "10px", sm: "5px", xs: "5px" },
        backgroundColor: "grey"
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight="bold"
            marginBottom="0"
            textTransform="none"
            color="#fff"
            sx={{
              textAlign: { lg: "start", md: "center", sm: "center" },
              fontSize: { lg: "43px", md: "36px", sm: "29px", xs: "25px" }
            }}
          >
            Find my pictures
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          endIcon={<EastIcon />}
          sx={{
            textTransform: "none",
            padding: { lg: "10px 55px", sm: "10px 20px" }
          }}
        >
          Go
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
