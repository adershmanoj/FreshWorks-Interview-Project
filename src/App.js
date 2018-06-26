import React, { Component } from 'react';
import Header from './components/Header';
import ListItems from './components/ListItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hacker News"/>
        <ListItems/>
      </div>
    );
  }
}

export default App;
