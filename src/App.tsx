// import "./styles.css";
import Header from "./components/Header";
import FindPics from "./components/FindPics";
import Footer from "./components/Footer";
import AvaTooltip from "./components/AvaTooltip";

import mainImg from "./assets/main.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styled from "styled-components";

export default function App() {
  const Main = styled.div`
    height: 75vh;
    background: center / cover no-repeat url(${mainImg});
    position: "relative";
    box-shadow: inset 0 0 90px 60px #000;
    position: relative;
    z-index: 1;
    display: "flex";
    flex-direction: "column";
    align-items: "center";
    flex: 1 0 auto;

    &:after {
      content: "";
      display: block;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 1400px) {
      height: 72vh;
    }
  `;
  const ContentText = styled.div`
    display: block;
    color: #fff;
  `;
  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: "#233142",
          height: "100vh",
          width: "100vw"
        }}
      >
        <Main>
          <AvaTooltip />
          <ContentText>
            <Box
              sx={{
                position: "absolute",
                top: { lg: "50%", md: "50%", sm: "40%", xs: "35%" },
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "4"
              }}
            >
              <Typography variant="h2">Soirées</Typography>
              <Typography paragraph={true}>
                We capture the fun and protect your privacy
              </Typography>
            </Box>
          </ContentText>
          <Header />
          <FindPics />
          <Footer />
        </Main>
      </Box>
    </div>
  );
}
