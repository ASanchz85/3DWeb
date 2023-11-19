import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 72px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
`;

const Line = styled.img`
  height: 5px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  width: 100px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  animation: animate 2s ease alternate infinite;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think, Make, Solve</Title>
          <WhatWeDo>
            <Line src="/img/line.png" />
            <SubTitle>What I do</SubTitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful experiences for our clients and
            human-centered digitial experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
