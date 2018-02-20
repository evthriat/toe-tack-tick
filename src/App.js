import React, { Component } from 'react';
import './App.css';

function Square(props) {
    return (
              <button className="square" onClick={props.onClick}>
                {props.value}
              </button>
      )
}

class App extends Component {

    renderSquare(i) {
  return (
    <Square 
      value={this.props.squares[i]} 
      onClick={()=> this.props.onClick(i)}
    />
    );
  }



  render() {
    return (
      <div>
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}

      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      </div>
    );
  }
}

export default App;
