import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poke: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          poke: data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <PokemonIndex poke={this.state.poke} />
      </div>
    )
  }
}

export default App
