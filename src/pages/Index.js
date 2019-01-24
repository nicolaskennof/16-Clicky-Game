import React, { Component } from 'react';
//import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import Wrapper from "../components/Wrapper"
import './index.css';

class Index extends Component {

  state = {
    score: 0,
    hscore: 0
  }

  scoreChangeHandle = () => {
    let score = this.state.score;
    let hscore = this.state.hscore;
    score++;
    if (hscore < score) hscore = score;
    this.setState({
      score,
      hscore 
    })
  }

  onEndGame = (loose) => {
    if (loose) alert("You loose, try again!")
    if (!loose) alert("You win")
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} hscore={this.state.hscore} />
        <Wrapper>
          <CardContainer onEndGame={this.onEndGame} onScoreChange={this.scoreChangeHandle} />
        </Wrapper>
        <Footer />
      </div>

    );
  }
}

export default Index;