import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from './components/nav';
import BidTable from './components/bidTable';
import RandomMatrix from './components/randomMatrix'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Nav} />
        <Route path='/random/bid' component={BidTable} />
        <Route path='/random/matrix' component={RandomMatrix} />
      </div>
    );
  }
}

export default App;
