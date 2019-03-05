import React, { Component } from 'react';

import data from './data/data.json';
import Questions from './Questions';
import Transitions from './Transitions';

import './style/reset.css';
import style from './style/style.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className={style.wrapper}>
          <Transitions />
          {data.map(elm => (
            <Questions key={elm.content} {...elm} />
          ))}
        </div>
        <div className={style.wrapper_bottom}></div>
      </div>
    );
  }
}

export default App;