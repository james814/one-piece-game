import React, { Component, createRef } from 'react';

import transitions from './style/transitions.module.scss';

class Transitions extends Component {
  umb = createRef();
  state = {
    animate: true
  }
  componentDidMount() {
    this.umb.current.addEventListener('animationend', () => {
      this.setState({
        animate: false
      })
    })
  }
  componentWillUnmount() {
    // this.umb.current.removeEventListener('animationend', () => {
    //   this.setState({
    //     animate: false
    //   })
    // })
  }
  render() {
    return (
      <div>
        {!this.state.animate ? null :
          <div className={transitions.umbrella}>
            <div className={transitions.leftUmb} ref={this.umb}></div>
            <div className={transitions.rightUmb}></div>
          </div>
        }
      </div>
    );
  }
}

export default Transitions;