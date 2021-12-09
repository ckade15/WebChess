import React from "react";
import Square from "./Square";
import './CompStyles.css';
import Piece from "./Piece";
const Chess = require('chess.js');

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <div id="board" className=" ">
                    {this.createBoard()}
                </div>
            );
    }

    createBoard() {
        let board = [];

        let verticalAxis = ['1','2','3','4','5','6','7','8'];
        const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let id = 1;

        for (let j = 0; j < verticalAxis.length; j++) {
            for (let i = 0; i < horizontalAxis.length; i++) {
                const num = i + j + 2;
                let square = <Square num={num} id={id} />;
                board.push(square);
                id++;
            }
        }
        this.setUpBoard();
        return board;
    }
    setUpBoard() {
        const game = new Chess();
        let status = game.board();
        let num = 1;
        for (let i = 0; i < status.length; i++) {
            for (let j = 0; j < status[i].length; j++) {
                if (status[i][j] !== null) {
                    let n = "ref"+num;
                    const p = <Piece type={status[i][j].type} color={status[i][j].color} ref={n}/>;
                    
                }
                num++;
            }
        }
        
    }

}