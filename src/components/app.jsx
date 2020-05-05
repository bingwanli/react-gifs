import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';
import Selected_gif from './selected_gif.jsx';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <Searchbar />
        <Selected_gif />
      </div>
      <div className="right-scene"></div>
    </div>
    )
  }

}


export default App;
