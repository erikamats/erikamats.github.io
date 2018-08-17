import React from "react";
import { Navbar, NavItem, Button, Dropdown } from "react-materialize";

class Nav extends React.Component {
  render() {
    return (
      <Navbar
        brand="em"
        className="navbar poppins right z-depth-.5 transparent"
      >
        <Dropdown
          trigger={
            <Button
              floating
              large
              className="transparent"
              waves="light"
              icon="widgets"
            />
          }
        >
          <NavItem href="/">home</NavItem>
          <NavItem divider />
          <NavItem href="/work">my work</NavItem>
          <NavItem divider />
          <NavItem href="/contact">get in touch</NavItem>
        </Dropdown>
      </Navbar>
    );
  }
}
export default Nav;
