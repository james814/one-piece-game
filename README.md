# one-piece-game

This is a little game about **ONE PIECE**.<br>
After answer a series of questions, you will get a character in **ONE PIECE** with the same values of these issues.<br>
Please answer it honestly. The more honestly, more truly!

## source of material

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Google](https://www.google.com.tw/imghp?hl=zh-TW&tab=wi&authuser=0) & [陰陽師Onmyoji](https://www.onmyojigame.com/zh/index.html)

## production

This project is made using the React.js framework and the Sass preprocessor, and packaged in webpack.<br>
I use React Component state to control the transition or animation, and the target of the data stream id helps program to achieve the output of each question.

### `data stream`
{<br>
  id: uni-id<br>
  context: 'question text'<br>
  answer:[<br>
    {<br>
      text: 'btn1 text'<br>
      target: next question id<br>
    },<br>
    {<br>
      text: 'btn2 text'<br>
      target: next question id<br>
    }<br>
  ]<br>
  nextQuestions: [<br>
    id: uni-id<br>
    context: 'question text'<br>
    ...<br>
  ]<br>
}<br>

Hope you like this game. :)