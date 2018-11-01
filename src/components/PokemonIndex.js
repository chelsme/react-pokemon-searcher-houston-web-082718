import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: this.props.poke
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pokemon: data
        })
      })
  }

  onSearchChange = (event) => {
    let newPokemon = []
    this.props.poke.map(pokemon => {
      if (pokemon.name.includes(event.target.value)) {
        newPokemon.push(pokemon)
      }
    })
    this.setState({
      pokemon: newPokemon
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection poke={this.state.pokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
