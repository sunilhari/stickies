import React, { Component } from 'react';
import './App.scss';
import Routes from '../Routes/Routes';
import Navbar from '../Navbar/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container-fluid main'>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
