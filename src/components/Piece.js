import React from 'react';

export default class Piece extends React.Component {
  constructor(type, color) {
      super(type, color);
      this.props = {
          type: type,
          color: color,
          url: ""
      }
      let url = "../assets/";
      switch(this.props.type) {
          case "p":
              url += "pawn";
              break;
          case "n":
              url += "knight";
              break;
          case "b":
                url += "bishop";
                break;
          case "r":
              url += "rook";
              break;
          case "k":
              url += "king";
              break;
      }
      switch(this.props.color) {
          case "w":
              url += "w.png";
              break;
          case "b":
              url += "b.png";
              break;
      }
      this.state.url = url;
  }
  render(){
      return (
          <img src={this.state.url} className="h-4 w-4"/>
      );
  }
}