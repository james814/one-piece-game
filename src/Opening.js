import React, { Component, createRef } from 'react';
import style from './style/opening.module.scss';

class Opening extends Component {
  ani = createRef();
  state = {
    aniClass: false
  }
  componentDidMount() {
    this.ani.current.addEventListener('animationend', () => {
      this.props.opening()
    })
  }
  opening_ani = () => {
    this.setState({
      aniClass: true
    })
  }
  render() {
    const { aniClass } = this.state
    return (
      <div className={style.opening}>
        <div className={`${style.wrapper} ${aniClass && style.turn}`} ref={this.ani}></div>
        <div className={`${style.wrapper_bottom} ${aniClass && style.turn}`} onClick={this.opening_ani}>
          <div className={style.title}>來看看你是海賊王中的哪個角色吧!</div>
          <div className={style.title2}>開始測驗</div>
          <div className={style.arrow}></div>
        </div>
      </div>
    );
  }
}

export default Opening;