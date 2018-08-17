import React from "react";
import Menu from "../../Components/Menu";
import { Row, Input, Icon, Col, Button } from "react-materialize";
import "./Contact.css"



class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Menu />
        <div className="app-container">
          <Row>
            <Col s={1} />
            <Col className="contact-text poppins " s={4}>
              <div className="touch">Get in Touch!</div>
              <span className="touch2"> I'd love to hear from you!</span>
              <hr />

              <div className="contact-info quicksand">
                <span className="contact-first apple"> erika matsumoto </span>
                <span> Austin,Texas </span>
                <br />
                <span>(512) 813-0589</span>
              </div>
            </Col>

            <Col s={1} />

            <Col className="contact-form" s={5}>
              <form
                action="https://formspree.io/erikacodes@gmail.com"
                method="POST"
              >
                <Input s={6} 
                label="First Name" 
                name="first-name"
                 validate>
                  <Icon>streetview</Icon>
                </Input>

                <Input s={6}
                label="Last Name" 
                name="last-name" 
                validate>
                  <Icon>streetview</Icon>
                </Input>

                <Input
                  type="email"
                  name="email"
                  icon="contact_mail"
                  label="Your Email Address"
                  s={6}
                  validate
                />

                <Input
                  s={6}
                  label="Telephone"
                  name="phoneNumber"
                  validate
                  type="tel"
                >
                  <Icon>phone_in_talk</Icon>
                </Input>

                <Input
                  s={12}
                  type="textarea"
                  name="message"
                  label="Shoot me a message!"
                 
                >
                  <Icon>mode_edit</Icon>
                </Input>

                <Row>
                  <Col s={3} />
                  <Col s={6}>
                    <Button
                      type="submit"
                      value="Send"
                      className="form-btn poppins"
                    
                    > Send me an Email! </Button>
                  </Col>
                  <Col s={3} />
                </Row>

              </form>

            </Col>
            {/* <Col s={1} /> */}
          </Row>
        </div>
      </div>
    );
  }
}
export default Contact;
