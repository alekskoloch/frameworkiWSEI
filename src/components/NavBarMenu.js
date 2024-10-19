import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBarMenu = ({ items }) => {
  return (
    <Nav className="nav justify-content-center bg-light py-3">
      {items.map(item => (
        <Nav.Link key={item.id} href={item.url} className="nav-link">
          {item.label}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default NavBarMenu;
