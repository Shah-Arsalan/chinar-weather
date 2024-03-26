import { Col, Container, Row } from "react-bootstrap";

export const WeatherParameters = (element) => {
  console.log(element.element.day.maxtemp_c);
  console.log(element.element.date);
  //temperature , humidity , wind speed , forcast
  return (
    <Container className="mt-5 mb-5 h-100 ">
    <Row>Date : {element.element.date}</Row>
    <Row  className="mt-4">
      <Col>
        <Container className="shadow-lg p-3 h-100 w-80 ">
        <img src={element.element.day.condition.icon} alt="icon" />
        <p>{element.element.day.condition.text}</p>
            
        </Container>
      </Col>
      <Col>
        <Container className="shadow-lg p-3 h-100 w-80 flex-column d-flex align-items-center justify-content-center">
        <h4>{element.element.day.avgtemp_c}° C</h4>
        <p>Avg Temperature</p>
        
            
        </Container>
      </Col>
      <Col>
        <Container className="shadow-lg p-3 h-100 w-80  flex-column d-flex align-items-center justify-content-center">
        <h4>{element.element.day.avghumidity} %</h4>
        <p>Avg Humidity</p>
            
        </Container>
      </Col>
      <Col>
        <Container className="shadow-lg p-3 h-100 w-80 flex-column d-flex align-items-center justify-content-center">
        <h4>{element.element.day.maxwind_kph}° kmph</h4>
        <p>Max Wind Speed</p>
            
        </Container>
      </Col>
      
    </Row>
  </Container>
  );
};
