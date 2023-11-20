import styled from "styled-components";
import emailjs from "@emailjs/browser";
import MapChart from "./Map";
import { useRef, useState } from "react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 20px;
  background-color: #da4ea2;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_atv87gw",
        "template_n0paogd",
        ref.current,
        "SfSSg2SIQm3o_nras"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact me!</Title>
            <Input placeholder="Name" name="name" type="text" required />
            <Input placeholder="Email" name="email" type="email" required />
            <TextArea
              placeholder="Type your message"
              name="message"
              rows={10}
              type="text"
              required
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent, I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
