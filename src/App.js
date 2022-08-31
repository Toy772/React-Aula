import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
constructor(props){
  super(props);
  this.handlePclick = this.handlePclick.bind(this);
  this.state = {
    name: 'Vagner Roxo.',
    counter: 0
  };
}

  handlePclick(){
    this.setState({name: 'Junior'})
  }

  handleAclick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render(){

    const {name, counter} = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className= 'App-logo' alt='logo' ></img>
          <p onClick={this.handlePclick}>
            {name} {counter}
          </p>
          <a onClick={this.handleAclick} className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Este é o Link
          </a>
        </header>

      </div>
    )
  }
}

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
