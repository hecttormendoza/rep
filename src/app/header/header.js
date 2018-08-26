import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <img src="../app/assets/image/logo-nav.svg" alt=""/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Ana Paula
              </NavItem>
              <NavItem eventKey={2} href="#">
                Preventa
              </NavItem>
              <NavItem eventKey={3} href="#">
                Venta
              </NavItem>
              <NavItem eventKey={4} href="#">
                Renta
              </NavItem>
              <NavItem eventKey={5} href="#">
                Contacto
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
