import styled from "styled-components";

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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItems key={item} text={item}>
                {item}
              </ListItems>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Works;
