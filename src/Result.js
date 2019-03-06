import React, { Component } from 'react';
import Transitions from './Transitions';
import style from './style/style.module.scss';
import './style/character.scss';

class Result extends Component {
  render() {
    const { des, imgClass, character, reset } = this.props
    return (
      <div>
        <Transitions />
        <div className={style.contentWrapper}>
          <div className={style.lazyShow}>
            <div className={style.character}>{character}</div>
            <div className={style.des}>{des}</div>
            <div className={`${imgClass} ${style.imageBoard}`}>
              <div className={style.border}></div>
              <div className={`img ${style.img}`}></div>
            </div>
          </div>
        </div>
        <div className={`${style.reset} ${style.lazyShow}`} onClick={reset}></div>
      </div>
    );
  }
}

export default Result;