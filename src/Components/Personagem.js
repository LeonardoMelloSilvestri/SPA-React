import React, { Component } from 'react'
import Vaan from '../img/Personagens/Vaan.jpg'
import Penelo from '../img/Personagens/Penelo.jpg'
import Balthier from '../img/Personagens/Balthier.jpg'
import Fran from '../img/Personagens/Fran.jpg'
import Basch from '../img/Personagens/Basch.jpg'
import Ashe from '../img/Personagens/Ashe.jpg'

export default class Personagem extends Component {
  state = {
    characters: [
      {
        name: 'Vaan',
        lore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam tortor id augue feugiat, quis consectetur turpis viverra. Proin tempus velit sit amet diam finibus tincidunt. Suspendisse at pharetra nulla, at finibus odio. Sed vel turpis pharetra, ornare eros elementum, fringilla neque. Integer ipsum sem, ullamcorper ullamcorper erat quis, blandit pellentesque risus. Vestibulum condimentum dui vitae ante scelerisque facilisis. Nam nec elit quis magna mollis mattis. Pellentesque placerat massa at eros dapibus faucibus. Aenean in fringilla lacus. Phasellus mattis ut nibh vel finibus. Donec molestie libero lacus, sed eleifend ante ultrices ac. Nulla quis finibus lectus. Quisque varius risus vehicula augue vestibulum, et suscipit urna viverra. Phasellus venenatis metus augue, nec mollis ipsum pellentesque in. Sed euismod libero et dui aliquam, eget semper mauris pretium. Duis ipsum risus, tempor ac fermentum id, lacinia eu nisl.',
        url: Vaan
      },
      {
        name: 'Penelo',
        lore: 'Ut ornare lobortis hendrerit. Curabitur ut tincidunt nisi, quis faucibus lorem. Duis ac leo eget enim tempus pellentesque sit amet eget ipsum. Ut pellentesque odio vel ligula molestie, faucibus cursus sapien consequat. Maecenas dignissim erat odio, pellentesque congue orci aliquam viverra. Maecenas ut dolor metus. Nulla facilisi. Curabitur blandit sed turpis non auctor.',
        url: Penelo
      },
      {
        name: 'Balthier',
        lore: 'Sed lacus quam, aliquet vel dictum nec, sollicitudin eu augue. Donec eu imperdiet felis. Phasellus non dui sit amet turpis tristique dapibus. Ut tempus, nunc nec tristique venenatis, neque sem bibendum quam, sit amet fringilla elit ipsum in nisi. Vestibulum ac odio libero. Integer pulvinar vitae orci id pulvinar. Aliquam porttitor malesuada sodales. Quisque maximus elit a turpis gravida, eu vulputate diam mattis. Morbi sed quam pulvinar lacus suscipit pharetra nec ut ex.',
        url: Balthier
      },
      {
        name: 'Fran',
        lore: 'Ut malesuada volutpat quam eget vestibulum. Nunc mi ante, placerat quis euismod in, ornare a turpis. Morbi condimentum ex in metus faucibus, vel vestibulum velit pretium. Curabitur feugiat ante ac dolor feugiat ullamcorper vitae vel arcu. Curabitur pulvinar sed eros eget semper. Aliquam erat volutpat. Nulla vel sem ultrices, posuere elit id, semper massa.',
        url: Fran
      },
      {
        name: 'Basch',
        lore: 'Nullam eu dictum velit. Praesent consequat, odio id vehicula malesuada, magna lacus vestibulum eros, et sodales nunc diam eu nunc. Morbi id pharetra erat, eu auctor tortor. Fusce venenatis sollicitudin neque non vehicula. Aliquam in dapibus libero. Curabitur nulla mauris, luctus non sem lacinia, mollis egestas velit. Proin fermentum sagittis ligula, at pretium diam semper quis.',
        url: Basch
      },
      {
        name: 'Ashe',
        lore: 'Suspendisse sit amet tortor eleifend, rutrum ex vel, ultrices nibh. Cras ligula diam, egestas ac tortor quis, dignissim efficitur ante. Nam tincidunt justo vitae urna sagittis ornare. Duis efficitur orci hendrerit vulputate vestibulum. Suspendisse potenti. Integer fringilla nunc egestas ultricies sollicitudin. In sit amet odio nisl. Suspendisse efficitur gravida massa. Nam vitae quam ultrices, venenatis nibh at, malesuada tellus. Cras interdum tortor vitae efficitur pellentesque. Proin odio lacus, elementum vitae mauris et, dignissim imperdiet ligula. Proin dictum pharetra metus, eget laoreet ante semper vel.',
        url: Ashe
      }
    ]
  }

  showCharacter() {
    let name = this.props.match.params.personagem_name;
    const actualCharacter = this.state.characters.find(character => character.name === name);
    return (
      <div className="col-sm-12 text-center">
        <img src={actualCharacter.url} className="rounded-circle mb-3" width="250" height="250"></img>
        <h2>{actualCharacter.name}</h2>
        <p>{actualCharacter.lore}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            {this.showCharacter()}
          </div>
        </div>
      </div>
    )
  }
}