import React, { Component } from 'react';
import Transitions from './Transitions';
import style from './style/style.module.scss';
import ball from './style/ball.module.scss';
import './style/character.scss';

class Result extends Component {
  render() {
    const { des, imgClass, character, reset } = this.props
    return (
      <div>
        <Transitions />
        <div className={style.lazyShow}>
          <div>{des}</div>
          <div>{character}</div>
          <div className={`${imgClass} ${style.imageBoard}`}></div>
          <div onClick={reset}>
            <div className={ball.ball}></div>
            <div className={ball.ball_shadow}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;