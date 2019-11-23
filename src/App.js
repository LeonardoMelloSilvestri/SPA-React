import React from 'react'
import Navbar from './Components/Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home.js'
import Enredo from './Components/Enredo.js'
import Personagens from './Components/Personagens.js'
import Personagem from './Components/Personagem.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container px-0">
          <Route exact path="/" component={Home} />
          <Route path="/enredo" component={Enredo} />
          <Route path="/personagens" component={Personagens} />
          <Route path="/personagem/:personagem_name" component={Personagem} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
