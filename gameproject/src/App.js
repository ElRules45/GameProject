import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a className="navbar-item">
                    Examples
                  </a>
                  <a className="navbar-item">
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title is-1">
              Select your GAME
            </p>
            <p className="subtitle is-4">
              ESD GAME
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
