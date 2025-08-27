import apple_logo from '../../images/icons/logo-sm.png'
import cart_icon from '../../images/icons/cart-sm.png'
import search_icon from "../../images/icons/search-icon-sm.png";
import NavbarList from "../Additional/NavbarList";


import { Link } from "react-router";

import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <Container>
        <Nav>
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Link className="navbar-brand mx-auto" to="/">
              <img src={apple_logo} alt="apple" />
            </Link>

            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavbarList LinkUrl="/mac/" LinkName="Mac" />
                <NavbarList LinkUrl="/iphone/" LinkName="iphone" />
                <NavbarList LinkUrl="/ipad/" LinkName="ipad" />
                <NavbarList LinkUrl="/watch/" LinkName="watch" />
                <NavbarList LinkUrl="/tv/" LinkName="tv" />
                <NavbarList LinkUrl="/Music/" LinkName="Music" />
                <NavbarList LinkUrl="/Support/" LinkName="Support" />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search_icon} alt="search" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart_icon} alt="cart" />
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
