import React from 'react';
import Navbar from './Components/Navbar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Enredo from './Components/Enredo.js';
import Personagens from './Components/Personagens.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/enredo" component={Enredo} />
        <Route path="/personagens" component={Personagens} />
      </div>
    </BrowserRouter>
  );
}

export default App;
