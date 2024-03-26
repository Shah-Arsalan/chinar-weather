import { Col, Container, Row } from "react-bootstrap";

export const WeatherParameters = (element) => {
  console.log(element.element.day.maxtemp_c);
  console.log(element.element.date);
  //temperature , humidity , wind speed , forcast
  return (
    <Container className="mt-5">
    <Row>{element.element.date}</Row>
    <Row  className="mt-4">
      <Col>{element.element.day.maxtemp_c}</Col>
      <Col><img src={element.element.day.condition.icon} alt="icon" /></Col>
    </Row>
  </Container>
  );
};
