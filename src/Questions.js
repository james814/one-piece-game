import React, { Component } from 'react';

class Questions extends Component {
  state = {
    nextStep: false,
    path: null
  }
  leftEvent = (q) => {
    if (q) {
      this.setState({
        nextStep: true,
        path: 'left'
      })
    }
  }
  rightEvent = (q) => {
    if (q) {
      this.setState({
        nextStep: true,
        path: 'right'
      })
    }
  }
  render() {
    const { nextStep, path } = this.state
    const { content, answers, nextQuestions } = this.props
    return (
      <div>
        <div>{content}</div>
        <button onClick={() => this.leftEvent(nextQuestions)}>{answers.left}</button>
        <button onClick={() => this.rightEvent(nextQuestions)}>{answers.right}</button>
        {
          nextStep && nextQuestions.map(elm => (
            <Questions key={elm.left.content} {...elm.left} />
          ))
        }
      </div>
    );
  }
}

export default Questions;