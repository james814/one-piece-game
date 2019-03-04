import React, { Component } from 'react';

class Questions extends Component {
  state = {
    nextStep: false,
    target: null
  }
  nextEvent = (target) => {
    if (target) {
      this.setState({
        nextStep: true,
        target: target
      })
    }
  }
  render() {
    const { nextStep, target } = this.state
    const { content, answers, nextQuestions } = this.props
    if (nextStep) {
      return (
        <div>
          {
            nextStep && nextQuestions.map(elm => (
              elm.id === target && <Questions key={elm.id} {...elm} />
            ))
          }
        </div>
      )
    }
    return (
      <div>
        <div>{content}</div>
        {
          answers.map((elm) => (
            <button
              key={elm.text}
              onClick={() => this.nextEvent(elm.target)}
            >
              {elm.text}
            </button>
          ))
        }
      </div>
    );
  }
}

export default Questions;