import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 1200px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 72px;

  @media only screen and (max-width: 768px) {
    text-align: center;
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

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
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
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  animation: animate 2s ease alternate infinite;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

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
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.8}>
              <MeshDistortMaterial
                color="#6c299f"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
