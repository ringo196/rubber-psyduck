import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {phrase: 'Psyiyi! Psyduck!'}
  }

  randomPhrase() {
    const phrases = [
    'Have you checked the docs?',
    'What does your code do line by line?',
    'Have you tried console.log to verify your assusmptions?',
    'What does your error message mean?',
    'Have you tried Google?',
    'Have you read Learn line by line?',
    'Have you made a diagram of the flow with a whiteboard?',
    'Have you checked stack overflow?',
    'Where do you think your error is coming from?',
    'Have you simplified your code to isolate the problem?',
    'Have you tried turning it off and then on?',
    'What is the goal of doing this in the big picture?',
    'What justifies my expectation that the code will run as I think?',
    'Have you walked through your diagram with an example?',
    ]

    let rand = Math.floor(Math.random() * phrases.length)
    
    this.setState({phrase: phrases[rand]})
  }
// {this.state.phrase}
  render() {
    return (
      <div className="App">
        <div id='introContainer'>
          <img id='logo' src='https://s3-us-west-1.amazonaws.com/rubber-psyduck/hackreactor.png'></img>
        </div>
        
        <div id='imgContainer' onClick={() => this.randomPhrase()}>
          <img id='psyduck' src='https://s3-us-west-1.amazonaws.com/rubber-psyduck/psyduck.png'></img>
        </div>
        
        <div id='phraseContainer'>
          <img id='bubble' src='https://s3-us-west-1.amazonaws.com/rubber-psyduck/bubble.png'></img>
          <div id='text'>{this.state.phrase}</div>
        </div>
      </div>
    );
  }
}

export default App;
