import React from "react";
import { Link } from "react-router-dom";
import "../Menu/Menu.css"

class MenuList extends React.Component {
  render() {
    return (
      <div className="menu-items">
        <div className="panels">
          <div className="panel panel1">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <div className="panel panel2">
            <Link to="/work">
              <p>My Work</p>
            </Link>
          </div>
          <div className="panel panel3">
            <Link to="/contact">
              <p>Get in touch</p>
            </Link>
          </div>
          <div className="panel panel4">
            <Link to="#">
              <p>Resumé</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuList;
