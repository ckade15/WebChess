import React from "react";
import Square from "./Square";
import './CompStyles.css';

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
        for (let j = 0; j < verticalAxis.length; j++) {
            for (let i = 0; i < horizontalAxis.length; i++) {
                const num = i + j + 2;
                let square = <Square num={num} />;
                board.push(square);
            }
        }
        return board;
    }
}