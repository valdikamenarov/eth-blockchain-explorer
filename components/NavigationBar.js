import React, { Component } from 'react'
import SearchBar from './SearchBar'
import { Navbar, 
  NavbarBrand,
  } from 'reactstrap'

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="bg-primary navbar-dark">
          <NavbarBrand href="/">Eth Explorer</NavbarBrand>
          <SearchBar/>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
