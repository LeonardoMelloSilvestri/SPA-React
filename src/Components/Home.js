import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  state = {
    infos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          infos: res.data.slice(0, 4)
        })
      })
  }

  render() {
    const infoList = this.state.infos.map(info => {
      return(
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{info.title}</h5>
              <p className="card-text">{info.body}</p>
              <a href="#" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="home">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {infoList}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
