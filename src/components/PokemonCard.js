import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    image: this.props.pokemon.sprites.front
  }

  flipCard = () => {
    if (this.state.image === this.props.pokemon.sprites.front) {
      this.setState({
        image: this.props.pokemon.sprites.back
      })
    } else {
      this.setState({
        image: this.props.pokemon.sprites.front
      })
    }
  }

  render() {
    let poke = this.props.pokemon
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poke.stats.find((stat => stat.name === "hp")).value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
