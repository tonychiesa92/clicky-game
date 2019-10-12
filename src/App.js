import React, { Component } from "react";
import BallCard from "./components/BallCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import sportsBalls from "./sportsBalls.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    sportsBalls,
    score: 0,
    highscore: 0
  };


  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.sportsBalls.forEach(sportsBall => {
      sportsBall.count = 0;
    });
    alert(`Game Over! Click to play again :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.sportsBalls.find((o, i) => {
      if (o.id === id) {
        if(sportsBalls[i].count === 0){
          sportsBalls[i].count = sportsBalls[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.sportsBalls.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <>
      <Title score={this.state.score} highscore={this.state.highscore}>Sports Ball Clicky Game</Title>
      <Wrapper>
        {this.state.sportsBalls.map(sportsBall => (
          <BallCard
            clickCount={this.clickCount}
            id={sportsBall.id}
            key={sportsBall.id}
            image={sportsBall.image}
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;