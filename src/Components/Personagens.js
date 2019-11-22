import React from 'react';
import axios from 'axios';

export default class Personagens extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        this.setState({
          characters: res.data.slice(0, 6)
        })
      })
  }

  render() {
    const charactersList = this.state.characters.map(character => {
      return (
        <div className="col-lg-4 text-center" key={character.id}>
          <img className="rounded-circle mb-3" width="140" height="140" src={character.url}></img>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
      )
    })
    return (
      <div className="personagens">
        <div className="container mt-3">
          <div className="row">
            {charactersList}
          </div>
        </div>
      </div>
    )
  }
}
