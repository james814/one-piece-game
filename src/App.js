import React, { Component } from 'react';
import Questions from './Questions'
import data from './data.json';
import style from './style.module.scss'

class App extends Component {
  render() {
    return (
      <div>
        {data.map(elm=>(
          <Questions key={elm.content} {...elm}/>
        ))}
      </div>
    );
  }
}

export default App;