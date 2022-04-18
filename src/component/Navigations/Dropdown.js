import React from 'react'
import { NavDropdown } from 'react-bootstrap';

export default function Dropdown() {
  return (
    <div className="griddropdown">
      <div>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Places to stay"
        >
          <NavDropdown.Item href="#action/3.1">Places to Stay</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Experiences</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Online Experiences
          </NavDropdown.Item>
        </NavDropdown>
      </div>

      <div>
        <NavDropdown id="nav-dropdown-dark-example" title="Places to stay">
          <NavDropdown.Item href="#action/3.1">Places to Stay</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Experiences</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Online Experiences
          </NavDropdown.Item>
        </NavDropdown>
      </div>

      <div>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Online Experiences"
          menuVariant="dark"
        >
        </NavDropdown>
      </div>
    </div>
  )
}
