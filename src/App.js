import Board from './components/Board';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      player1: {
        points: 0,
      },
      player2: {
        points: 0,
      }
    }
  }
  render(){
    return(
      <div className="w-full bg-blue-200 min-h-screen pt-3">
        <header className="bg-gray-700 text-blue-200 font-bold text-4xl text-center p-5 font-mono w-4/5 ml-auto mr-auto">
          <h1>Chess with Friends</h1>
        </header>
        <main className="w-full">
          <section>
            <h6>Player 2</h6>
            <p>Points: {this.state.player1.points > this.state.player2.points ? this.state.player2.points-this.state.player1.points : this.state.player1.points-this.state.player2.points}</p>
          </section>
          <Board className="ml-auto mr-auto"/>
          <section>
            <h6>Player 1</h6>
            <p>Points: {this.state.player1.points > this.state.player2.points ? this.state.player1.points-this.state.player2.points : this.state.player2.points-this.state.player1.points}</p>
          </section>
        </main>
      </div>
    );
  }
}

