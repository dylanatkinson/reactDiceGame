import React from 'react';

const Game = (props) => {
  return (
    <div>
      <p>Number rolled: {props.numberRolled}</p>
      <button onClick={props.rollDice}>Roll Dice</button>
      <p>Current Score: {props.rolls}</p>
    </div>
  );
}

export default Game;