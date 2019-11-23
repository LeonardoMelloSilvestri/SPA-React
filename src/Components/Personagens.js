import React, { Component } from 'react'
import axios from 'axios'

export default class Personagens extends Component {
  state = {
    npcs: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        this.setState({
          npcs: res.data.slice(0, 6)
        })
      })
  }

  render() {
    const npcsList = this.state.npcs.map(npc => {
      return (
        <div className="col-lg-4 text-center" key={npc.id}>
          <img className="rounded-circle mb-3" width="140" height="140" src={npc.url}></img>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
        </div>
      )
    })
    return (
      <div className="personagens">
        <div className="container mt-3">
          <div className="row">
            {npcsList}
          </div>
        </div>
      </div>
    )
  }
}
