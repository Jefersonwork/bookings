import React, { Component } from 'react'
import axios from 'axios'

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
    return (
      <div>
        <h1>teste 2</h1>
      </div>
    )
  }
  
}

export default App;
