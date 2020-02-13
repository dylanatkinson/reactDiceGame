import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';
import Dice from './components/DiceRoll';
import One from './images/dice1.png';

class App extends Component {

  state = {
    numberRolled: 0,
    rolls: 0,
  };

  rollDice = () => {
    let numberRolled = Math.ceil(Math.random() * 6);

    this.setState({
      numberRolled,
      rolls: this.state.rolls + numberRolled
    });

  };

  resetGame = () => {
    this.setState({
      numberRolled: 0,
      rolls: 0
    });
  };

  render() {

    if (this.state.numberRolled === 1) {
      return (
        <div id="gameContent">
          <img src={One} alt="dice one" />
          <p id="Lose">Game Over. Play again?</p>
          <p>Number Rolled: {this.state.numberRolled}</p>
          <button onClick={this.resetGame}>Reset</button>
        </div>
      );
    }
    else if (this.state.rolls > 20) {
      return (
        <div id="gameContent">
          <Dice />
          <p id="Win">You Won! Play again?</p>
          <p>Number Rolled: {this.state.numberRolled}</p>
          <button onClick={this.resetGame}>Reset</button>
          <p>Score: {this.state.rolls}</p>
        </div>
      );
    };

    return (
      <div id="gameContent">
        <Dice numberRolled={this.state.numberRolled} rolls={this.state.rolls} />
        <Game numberRolled={this.state.numberRolled} rollDice={this.rollDice} rolls={this.state.rolls} />
      </div>
    );
  };

};

export default App;
