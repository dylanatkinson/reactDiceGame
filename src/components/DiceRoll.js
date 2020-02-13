import React from 'react';
import '../App.css';
import Blank from '../images/dice.png';
import Two from '../images/dice2.png';
import Three from '../images/dice3.png';
import Four from '../images/dice4.png';
import Five from '../images/dice5.png';
import Six from '../images/dice6.png';

const Dice = (props) => {
    switch (props.numberRolled) {
        case 2:
            return (
                <img src={Two} alt="dice two" />
            );
        case 3:
            return (
                <img src={Three} alt="dice three" />
            );
        case 4:
            return (
                <img src={Four} alt="dice four" />
            );
        case 5:
            return (
                <img src={Five} alt="dice five" />
            );
        case 6:
            return (
                <img src={Six} alt="dice Six" />
            );
        default:
            return (
                <img src={Blank} alt="blank dice" />
            );
    };
};

export default Dice;