import { Col, Container, Row } from "react-bootstrap";
export const CurrentForcast = (today) => {
  return (
    <Container className="mt-5 mb-5 h-100 ">
      <div className=" fs-3 text-primary text-center">Current Weather</div>
      <Row className="mt-5">
        <Col>
          <Container className="shadow-lg p-3 h-100 w-80 ">
            <img src={today.ele.day.condition.icon} alt="icon" />
            <p>{today.ele.day.condition.text}</p>
          </Container>
        </Col>
        <Col>
          <Container className="shadow-lg p-3 h-100 w-80 flex-column d-flex align-items-center justify-content-center">
            <h4>{today.ele.day.avgtemp_c}° C</h4>
            <p>Avg Temperature</p>
          </Container>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Container className="shadow-lg p-3 h-100 w-80  flex-column d-flex align-items-center justify-content-center">
            <h4>{today.ele.day.avghumidity} %</h4>
            <p>Avg Humidity</p>
          </Container>
        </Col>
        <Col>
          <Container className="shadow-lg p-3 h-100 w-80 flex-column d-flex align-items-center justify-content-center">
            <h4>{today.ele.day.maxwind_kph} kmph</h4>
            <p>Max Wind Speed</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
