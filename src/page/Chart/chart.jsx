import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  useMap,
} from "react-leaflet";
import "./chart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  Container,
  Form,
  Nav,
  Navbar,
  ProgressBar,
  Stack,
} from "react-bootstrap";

export const data = {
  Hamilton: {
    coords: { lat: -37.788576, lng: 175.309979 },
    radius: 400,
    liveValue: 45,
    information: "Hospital: 15",
    additional: "This is Hamilton",
  },
  Auckland: {
    coords: { lat: -36.853275, lng: 174.753739 },
    radius: 400,
    liveValue: 5, // hospital*0.2+school*0.7+aqi*0.1 = livability score
    information: "Hospital: 15",
    additional: "This is Auckland",
  },
  Wellington: {
    coords: { lat: -41.338683, lng: 174.75899 },
    radius: 400,
    liveValue: 95,
    information: "Hospital: 15",
    additional: "This is Wellington",
  },
};

const FlyTo = ({ city }) => {
  const map = useMap();

  useEffect(() => {
    if (city) map.flyTo(city.coords);
    console.log(city);
  }, [city]);

  return null;
};

const Chart = () => {
  const [city, setCity] = useState(data["Hamilton"]);

  //   let liveValue = hospital*0.2+school*0.7+aqi*0.1;

  return (
    <div>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Livability</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      {city ? (
        <div id="main-container">
          <MapContainer
            center={city.coords}
            zoom={13}
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <FlyTo city={city} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {city.liveValue > 50 ? (
              <CircleMarker
                center={city.coords}
                pathOptions={{ color: "green" }}
                radius={city.radius}
              >
                <Popup>Data about the place.</Popup>
              </CircleMarker>
            ) : (
              <CircleMarker
                center={city.coords}
                pathOptions={{ color: "red" }}
                radius={city.radius}
              >
                <Popup>Data about the place.</Popup>
              </CircleMarker>
            )}
          </MapContainer>
          <div id="rhs-main-container">
            <Stack gap={4}>
              <Form.Select
                onChange={(e) => {
                  setCity(data[e.target.value]);
                }}
              >
                <option>Hamilton</option>
                <option>Auckland</option>
                <option>Wellington</option>
              </Form.Select>

              <div id="live-value">{city.liveValue}</div>
              {city.liveValue > 50 ? (
                <ProgressBar variant="success" animated now={city.liveValue} />
              ) : (
                <ProgressBar variant="danger" animated now={city.liveValue} />
              )}

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Information</Accordion.Header>
                  <Accordion.Body>{city.information}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Additional factors</Accordion.Header>
                  <Accordion.Body>{city.additional}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Chart;
