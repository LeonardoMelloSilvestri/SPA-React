import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link to="/" className="navbar-brand">FF12Fan</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <NavLink to='/enredo' className="nav-link">Enredo</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Personagens
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='/personagem/Vaan' className="dropdown-item">Vaan</Link>
                <Link to='/personagem/Penelo' className="dropdown-item">Penelo</Link>
                <Link to='/personagem/Balthier' className="dropdown-item">Balthier</Link>
                <Link to='/personagem/Fran' className="dropdown-item">Fran</Link>
                <Link to='/personagem/Basch' className="dropdown-item">Basch</Link>
                <Link to='/personagem/Ashe' className="dropdown-item">Ashe</Link>
                <div className="dropdown-divider"></div>
                <Link to="/personagens" className="dropdown-item">NPCs importantes</Link>                
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
