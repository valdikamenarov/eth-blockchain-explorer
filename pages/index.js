import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Button,
  Table } from 'reactstrap'

class Index extends Component {

  render() {
    return (
      <Layout>

        <Table>
          <thead>
            <tr>
              <th>Height</th>
              <th>Gas Used</th>
              <th>Txns</th>
              <th>Miner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><Button>3</Button></th>
              <td>3000000</td>
              <td>17</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row"><Button>2</Button></th>
              <td>3000000</td>
              <td>5</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>

      </Layout>
    )
  }

}

export default Index;
