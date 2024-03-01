import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyleApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Row>
          <Row type="horizontal">
            <Heading as={"h1"}>The Wild Oasic</Heading>

            <div>
              <Heading as={"h2"}>The Wild Oasic</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("Check in")}
              >
                Check in
              </Button>
              <Button onClick={() => alert("Check 0ut")}>Check out</Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as={"h3"}>The Wild Oasic</Heading>
            <form>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
