import React from "react";
import MainNavigation from "./MainNavigation.tsx";
import Container from "@mui/material/Container";

import styled from "styled-components";

const Header: React.FC = () => {
  const Wrapper = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Btns = styled.div`
    display: flex;
  `;
  const Logo = styled.div`
    border: 5px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  `;

  return (
    <>
      <Container maxWidth="lg">
        <Wrapper>
          <Logo></Logo>
          <Btns>
            <div>
              <MainNavigation />
            </div>
          </Btns>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
