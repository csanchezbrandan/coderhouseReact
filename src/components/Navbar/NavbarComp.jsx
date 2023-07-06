import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState , useContext } from "react";
import brand from "../../assets/img/brand/brand.png";
import CartWidget from "./CartWidget ";
import "./NavStyles.css";
import { Link } from "react-router-dom";
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
              <Link to="/Category/indumentaria" className="drop-item">
                Indumentaria
              </Link>

              <Link to="/Category/calzado" className="drop-item">
                Calzado
              </Link>

              <Link to="/Category/accesorio" className="drop-item">
                Accesorios
              </Link>
            </NavDropdown>
            <NavDropdown
              className="drop-Container"
              title="Mujer"
              id="collasible-nav-dropdown"
            >
              <Link to="/Category/indumentaria" className="drop-item">
                Indumentaria
              </Link>

              <Link to="/Category/calzado" className="drop-item">
                Calzado
              </Link>

              <Link to="/Category/accesorio" className="drop-item">
                Accesorios
              </Link>
            </NavDropdown>

            <Link to="/Contact">Contacto</Link>
          
            <Link to={"/cart"} className="nav-ico-actions">
              <CartWidget text={context.cart} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
