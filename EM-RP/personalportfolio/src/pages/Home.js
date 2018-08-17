import React from "react";
import { Row, Col } from "react-materialize";
import Menu from "../Components/Menu";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Menu />
        <div className="app-container">
          <Row>
        
            <Col s={12} className="quicksand intro">
              Hi, I am &nbsp;
              <span className=" link link--erika" data-letters="erika">
                erika
              </span> 
              &nbsp; thanks for visiting!
            </Col>
          </Row>

          <Row className="home-body">
            <Col s={12} m={4} className=" s2 quicksand">
              <div className="Home-profile">
                <img
                  src={require("../images/portrait.jpg")}
                  className="Profile"
                  alt="Profile"
                />
              </div>
            </Col>

            <Col s={12} m={2}>
              {/* <div className="vl"/>  */}
            </Col>

            <Col s={12} m={6} className="quicksand home-right">
              <p>
                Web developer driven to further develop creative programmng skills. 
                {/* I recently completed the Full Stack Developer Coding Program at
                The University of Texas at Austin [Hook 'Em \m/]. WHERE I
                "LEARNED" _____ SKILLS. As a newcomer, I am looking for
                opportunities that will help me further develop my creative,
                programming and of course, debugging skills. */}
              </p>

              <p>
                {/* My previous experience in Client Services has helped me learn
                and understand how to problem-solve and cater to customers'
                needs. With the use of KPI's, time-management skills, as well as
                being goal-driven, I have been able to successfully manage teams
                of up to 40 while providing a welcoming environement and
                supportive morale. */}
              </p>
            </Col>
          </Row>

          <Row>
            <Col s={12} className="apple part1">
           
              <span className=" erika link link--erika" data-letters="a little about me">
              a little about me</span>
            </Col>
          </Row>

          <Row className="home-body">
          
            <Col s={12} m={6} className="quicksand home-right">
          
              <p>
                {/* Recently, I have been dedicating most of my free time to
                learning code. However, when I am not coding, I enjoy to
                medicate and practice yoga (a super amateur here!). Some may
                know me as a fashionista and a makeup afficionado. I love being
                able to express myself and using fashion as a venture similarly
                to how I believe that makeup can be super fun as you can use
                your own body as a canvas!*/}
              </p> 
            </Col>
            <Col s={12} m={2}>
              {/* <div className="vl"/>  */}
            </Col>

            <Col s={12} m={4} className=" s2 quicksand">
              <div className="Home-profile">
                <img
                  src={require("../images/logoblue.png")}
                  className="Profile"
                  alt="Profile"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
