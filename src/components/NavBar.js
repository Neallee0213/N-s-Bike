import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";


const NavWrapper = styled.nav`
.nav-link-active{
  text-decoration: underline;
}
a.current{
  text-decoration: underline;
}
h4{
  color: var(--lightDark) !important; 
  text-decoration: underline;
  text-decoration-color: red;
}
.navbar {
  background: rgba(225, 223, 224, 0.5);
    list-style-type: none;
  }
  
  .nav-link {
    color: var(--lightDark) !important;
    font-size: 1.3rem;
    text-transform : capitalize;
    float: left;
    margin-right: 10px
  }
`;

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <Navbar fixed="top" expand="lg" className="navbar-dark">
          <Navbar.Brand href="/" className="nav-link">N's Bike</Navbar.Brand>
          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse className="collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink
                exact
                to="/"
                className="nav-item nav-link"
                activeClassName="nav-item nav-link-active"
              >
                home
            </NavLink>
              <NavLink
                exact
                to="/products"
                className="nav-item nav-link"
                activeClassName="nav-item nav-link-active"
              >
                products
            </NavLink>
              <NavLink
                exact
                to="/contact"
                className="nav-item nav-link"
                activeClassName="nav-item nav-link-active"
              >
                contact
            </NavLink>
              <NavLink
                exact
                to="/cart"
                className="nav-item nav-link"
                activeClassName="nav-item nav-link-active"
              >
                <span className="mr-2">
                  <i className="fas fa-cart-plus"></i>
                </span>
                cart
            </NavLink>

            </div>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}
