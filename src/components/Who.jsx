import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 72px;

  @media only screen and (max-width: 768px) {
    font-size: 54px;
  }
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
  width: 120px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the box</Title>
          <WhatWeDo>
            <Line src="/img/line.png" />
            <SubTitle>Who I am</SubTitle>
          </WhatWeDo>
          <Desc>A creative developer with passion for the web.</Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
