import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState , useContext } from "react";
import brand from "../../assets/img/brand/brand.png";
import CartWidget from "./CartWidget ";
import "./NavStyles.css";
import { Link, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { cartContext } from "../../storage/cartContext";

function NavbarComp() {
 const context = useContext(cartContext);
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" fixed="top">
      <Container className="nav-container">
        <Navbar.Brand className="brand-container">
          <Link to={"/"}>
            <img src={brand} alt="brand" /> 
            Apachetaoutdoor
          </Link>

        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toogle-ico"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiAlignJustify className="menu-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" in={isOpen}>
          <Nav className="me-auto nav-link">
          </Nav>

          <Nav className="nav-link ">
          <Link to="/">Inicio</Link>
          
          <NavDropdown
              className="drop-Container"
              title="Hombre"
              id="collasible-nav-dropdown"
            >
              <NavLink to="/Category/Indumentaria" className="drop-item">
                Indumentaria
              </NavLink>

              <NavLink to="/Category/Calzado" className="drop-item">
                Calzado
              </NavLink>

              <NavLink to="/Category/Accesorio" className="drop-item">
                Accesorios
              </NavLink>
            </NavDropdown>
            <NavDropdown
              className="drop-Container"
              title="Mujer"
              id="collasible-nav-dropdown"
            >
              <NavLink to="/Category/indumentaria" className="drop-item">
                Indumentaria
              </NavLink>

              <NavLink to="/Category/calzado" className="drop-item">
                Calzado
              </NavLink>

              <NavLink to="/Category/accesorio" className="drop-item">
                Accesorios
              </NavLink>
            </NavDropdown>

            <NavLink to="/Contact">Contacto</NavLink>
          
            <NavLink to={"/cart"} className="nav-ico-actions">
              <CartWidget text={context.cart} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavbarComp;
