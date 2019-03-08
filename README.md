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
```
{
  id: uni-id,
  context: 'question text',
  answer:[
    {
      text: 'btn1 text',
      target: next question id
    },
    {
      text: 'btn2 text',
      target: next question id
    }
  ],
  nextQuestions: [
    id: uni-id,
    context: 'question text',
    ...
  ]
}
```

Hope you like this game. :)