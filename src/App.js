import React, { Component } from 'react';

import data from './data/data.json';
import Questions from './Questions';
import Opening from './Opening';
import Author from './Author';

import './style/reset.css';
import style from './style/style.module.scss';

class App extends Component {
  state = {
    start: 'not yet'
  }
  opening = () => {
    this.setState({
      start: 'over'
    })
  }
  render() {
    const { start } = this.state
    if (start === 'not yet') {
      return (
        <div>
          <Opening opening={this.opening} />
        </div>
      );
    }
    return (
      <div>
        <div className={style.wrapper}>
          {data.map(elm => (
            <Questions key={elm.content} {...elm} />
          ))}
        </div>
        <div className={style.wrapper_bottom}></div>
        <Author />
      </div>
    );
  }
}

export default App;