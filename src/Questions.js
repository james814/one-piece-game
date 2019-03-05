import React, { Component } from 'react';
import App from './App'
import Result from './Result'
import Transitions from './Transitions';
import style from './style/style.module.scss';

class Questions extends Component {
  state = {
    nextStep: null,
    target: null
  }
  nextQues = (target) => {
    this.setState({
      nextStep: "ques",
      target: target
    })
  }
  setResult = (result) => {
    this.setState({
      nextStep: "result",
      target: result
    })
  }
  reset = () => {
    this.setState({
      nextStep: "reset"
    })
  }
  render() {
    const { nextStep, target } = this.state
    const { content, answers, nextQuestions } = this.props

    switch (nextStep) {
      case "ques"://下一個問題
        return (
          <div>
            {
              nextQuestions.map(elm => (
                elm.id === target && <Questions key={elm.id} {...elm} />
              ))
            }
          </div>
        );
      case "result"://做答完成
        return (
          <div>
            <Result {...target} reset={this.reset} />
          </div>
        );
      case "reset"://重置
        return (
          <div>
            <App />
          </div>
        );
      default://顯示問題
        return (
          <div>
            <Transitions />
            <div className={style.lazyShow}>
              <div>{content}</div>
              {
                answers.map((elm) => (
                  <button
                    key={elm.text}
                    onClick={() => {
                      elm.target && this.nextQues(elm.target)
                      elm.result && this.setResult(elm.result)
                    }}
                  >
                    {elm.text}
                  </button>
                ))
              }
            </div>
          </div>
        );
    }
  }
}

export default Questions;