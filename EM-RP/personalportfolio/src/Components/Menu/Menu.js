import React from "react";
import "./Menu.css";
import { Row, Col } from "react-materialize";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  state = {
    clicked: false
  };

  toggle = () => {
    // console.log("click detected");
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className="myNav ">
        <Row className="navRow ">
          <Col  m={3}>
            <div className="initials  hide-on-small-only">
              <Link to="/work">Work</Link>
            </div>
          </Col>
          <Col m={3}>
            <div className="initials hide-on-small-only">
              <Link to="/resume">Resumé</Link>
            </div>
          </Col>

          <Col m={3}>
            <div className="initials  hide-on-small-only">
              <Link to="/contact">Get in touch</Link>
            </div>
          </Col>

          <Col className="menu-img  ">
            <Link to="/">
              <img
                className="menu-img  show-on-small "
                src={require("../../images/erikalogo4.png")}
                alt="logo"
                onClick={this.toggle}
              />
              {this.state.clicked && <MenuList />}
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Menu;

/* <div id="header" >
<a href="/" target=""><h1>Erika Matsumoto</h1></a>
<div id="menu">
<a href="/work">Work</a>
<a href="/resume">Resumé</a>
<a href="contact">Get In Touch</a>

</div>
</div> */
