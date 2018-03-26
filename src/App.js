import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Instrument from './components/Instrument';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import instruments from './instruments.json';
import logo from './logo.svg';
import './App.css';

// const test = function() {
//   console.log('test');
// }

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// let bestScore = 0;
class App extends Component {

componentDidMount() {
  this.setState({
    // message: "Click an Instrument to Begin!"
  })
}
  state = {
    instruments,
    clickedCards: [],
    score: 0,
    bestScore: 0,
    message: "Click an Instrument to Begin!",
    animateClass: "wrapper"
  };
// check match runs on click of instrument, if instrument was clicked already score and clickedCards are reset, else score +1
  checkMatch = id => {
    if (this.state.clickedCards.includes(id)) {
      this.setState({ score: 0, clickedCards: [], message: "You guessed incorrectly!", animateClass: "animate"})
    } else {
      this.state.clickedCards.push(id);
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!",
        animateClass: "wrapper"
      })
      if (this.state.bestScore <= this.state.score) {
        this.setState({
          bestScore: this.state.score + 1
        })
      }
    }
  };
// shuffle cards after change of state.score
  componentWillUpdate() {
    // this.setState({ animateClass: "wrapper"})
    shuffle(this.state.instruments)
  }

  render() {
    return (
      <div>
      <Wrapper animateClass={this.state.animateClass}>
        <Header
          score={this.state.score}
          bestScore={this.state.bestScore}
          message={this.state.message}
         />
         <Jumbotron />
        {this.state.instruments.map(instrument => (
          <Instrument
            checkMatch={this.checkMatch}
            id={instrument.id}
            key={instrument.id}
            name={instrument.name}
            image={instrument.img}
          />
        ))}
      </Wrapper>
      <Footer
        logo={logo}
      />
    </div>
    );
  }
}

export default App;
