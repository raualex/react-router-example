import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Unicorns from './Unicorns.js';
import Puppies from './Puppies.js';
import Sharks from './Sharks.js';
import CreatureDetails from './CreatureDetails.js';
import unicornData from './data/unicorn-data.js';
import puppyData from './data/puppy-data.js';
import sharkData from './data/shark-data.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header-section">
          <header>
            <NavLink to='/unicorns' className='nav'>Unicorns</NavLink>
            <NavLink to='/puppies' className='nav'>Puppies</NavLink>
            <NavLink to='/sharks' className='nav'>Sharks</NavLink>
          </header>
        </div>
        <Route exact path='/' component={Home} />
        <Route exact path='/unicorns' component={Unicorns} />
        <Route exact path='/unicorns/:id' render={({ match }) => { 
          const foundUnicorn = unicornData.find((unicorn) => {
            const {id} = match.params
            if (unicorn) {
              return parseInt(id) === unicorn.id
            }
          }) 
          return <CreatureDetails {...foundUnicorn} />}} />
        <Route exact path='/puppies' component={Puppies} />
        <Route exact path='/puppies/:id' render={({ match }) => { 
          debugger
          const foundPuppy = puppyData.find((puppy) => {
            const {id} = match.params
            if (puppy) {
              return parseInt(id) === puppy.id
            }
          }) 
          return <CreatureDetails {...foundPuppy} />}} />
        <Route exact path='/sharks' component={Sharks} />
        <Route exact path='/sharks/:id' render={({ match }) => { 
          const foundShark = sharkData.find((shark) => {
            const {id} = match.params
            if (shark) {
              return parseInt(id) === shark.id
            }
          }) 
          return <CreatureDetails {...foundShark} />}} />
      </div>
    );
  }
}
