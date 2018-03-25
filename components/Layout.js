import React, { Component } from 'react'
import Head from 'next/head'
import NavigationBar from './NavigationBar'
import { Container } from 'reactstrap'

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Test Title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
        </Head>
        <NavigationBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default Layout
