import React, { Component } from 'react';
import './App.scss';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container-fluid main'>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
