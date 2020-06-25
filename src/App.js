import React from 'react';
import AffLinks from './components/AffLinks'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <AffLinks />
      </div>
    );
  }
}

export default App;
