import { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import MobileApplication from "./MobileApplication";

const data = [
  "Web Design",
  "Development",
  "Mobile Application",
  "Social Media",
  "SEO",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItems = styled.li`
  font-size: 64px;
  font-family: sans-serif;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  position: relative;
  -webkit-text-stroke: 1px white;
  /*text-shadow: 
        -1px -1px 0 white,
        -1px 1px 0 white,
        1px -1px 0 white,
        1px 1px 0 white;*/
  //!! important: browser support

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
     -webkit-text-stroke: 0px;
  }

  &::after {
    position: absolute;
    content: "${(props) => props.text}";
    font-family: sans-serif;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: fillText 0.5s linear both;

      @keyframes fillText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState(data[0]);

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItems key={item} text={item} onClick={() => setWork(item)} >
                {item}
              </ListItems>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Mobile Application" ? (
            <MobileApplication />
          ) : work === "Social Media" ? (
            <div>Social Media</div>
          ) : (
            <div>SEO</div>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
