import React, { Component } from 'react'
import { 
  FormGroup,
  Form, 
  Label,
  Input,
  Button } from 'reactstrap'

class SearchBar extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="search" id="searchBar" placeholder="tx hash, address, block..." />
        </FormGroup>
        <Button>Search</Button>
      </Form>
    )
  }
}

export default SearchBar
