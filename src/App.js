import React, { Component } from 'react'
import axios from 'axios'

import {
  Container,
  Header,
  Title } from './components/style/content'

import Card from './components/function/contet'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  UNSAFE_componentWillMount() {
    this.request()
  }

  request = async () => {
    const resp = await axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
    
    this.setState({ ...this.state, data: resp.data })
  }

  render() {
    let { data } = this.state
    console.log(data)
    return (
      <Container>
        <Header>
          <Title>My bookings</Title>
        </Header>
        <div>
          {
            data.map(item => {
            return( 
              <Card 
                bg={item.thumb}
                place={item.destination}
                dateIn={item.outboundDate}
                dateOut={item.inboundDate}
              />
              )
            })
          }
        </div>
      </Container>
    )
  }
  
}

export default App;
