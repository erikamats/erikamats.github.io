import React from "react";
import Menu from "../Components/Menu";
import { Row, Col, Card, CardTitle } from "react-materialize";

class Work extends React.Component {
  render() {
    return (
      <div className="work">
        <Menu />
        <div className="app-container">
          <h3> Some of My Work</h3>

          <Row>
            <Col s={12} m={6} l={4}>
              <Card
                onClick={() =>
                  window.open("https://erikamats.github.io/Giphy/", "_blank")
                }
                header={<CardTitle image={require("../images/Giphy.png")} />}
              >
                Giphy API Request
              </Card>
            </Col>
            <Col s={12} m={6} l={4}>
            <Card
                onClick={() =>
                  window.open("https://erikamats.github.io/TrainActivity/", "_blank")
                }
                header={<CardTitle image={require("../images/TrainSchedule.png")} />}
              >
               Train Schedule
              </Card>
            </Col>
            <Col s={12} m={6} l={4}>
            <Card
                onClick={() =>
                  window.open("https://daria-game.now.sh/", "_blank")
                }
                header={<CardTitle image={require("../images/Daria.png")} />}
              >
               Daria Themed - Click Game
              </Card>
            </Col>
          </Row>

          <Row>
            <Col s={12} m={6} l={4}>
              <Card>Card 4</Card>
            </Col>
            <Col s={12} m={6} l={4}>
              <Card>Card 5</Card>
            </Col>
            <Col s={12} m={6} l={4}>
              <Card>Card 6</Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Work;
