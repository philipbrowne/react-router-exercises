import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './TopNav.css';
import { dogs } from './App';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="TopNav">
      <Navbar color="dark" light expand="md">
        <span className="TopNav-link navbar-brand">
          <Link
            to="/"
            onClick={() => {
              if (isOpen) toggle();
            }}
          >
            Dog Finder!
          </Link>
        </span>
        <NavbarToggler onClick={toggle} style={{ color: 'white' }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {dogs.map((dog) => (
              <NavItem key={dog.name}>
                <NavLink
                  to={`/dogs/${dog.name.toLowerCase()}`}
                  onClick={() => {
                    if (isOpen) toggle();
                  }}
                >
                  {dog.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
