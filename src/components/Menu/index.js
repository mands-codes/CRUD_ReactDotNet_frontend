import React from 'react';
import { Link } from 'react-router-dom';

import {Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Collapse} from 'reactstrap';
function Menu(){
return(
  <div>
    <Navbar color="success" expand="md" dark>
        <NavbarBrand href="/">
           Soluções Express
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                  <Link to="/cadastrar" style={{textDecoration:"none", color:"white"}}>
                    Cadastrar empresa
                  </Link>
              </NavItem>
            </Nav>
          </Collapse>
    </Navbar>
</div>
)
}

export default Menu;