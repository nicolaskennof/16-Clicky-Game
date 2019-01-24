import React, { Component } from 'react'
import SimpleCard from './SimpleCard.js'
import characters from "../characters.json";

class CardContainer extends Component {

    state = {
        characters: characters,
        selected: []
    }

    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    characterClickHandle = (id) => {
        let selectedCharacters = this.state.selected;
        if (!selectedCharacters.includes(id)) {
            selectedCharacters.push(id);
            if (selectedCharacters.length===12) {
                this.setState({
                    selected: []
                })
                this.props.onScoreChange();
                this.props.onEndGame(false);
                return;
            }
        } else {
            this.setState({
                selected: []
            })
            this.props.onEndGame(true);
            return;
        }

        this.setState({
            characters: this.shuffle(this.state.characters),
            selected: selectedCharacters
        })
        this.props.onScoreChange();
    }

    render() {
        return (
            <div className="row">
                {
                    this.shuffle(this.state.characters).map(character => {
                        return <SimpleCard
                            onClickImage={this.characterClickHandle}
                            key={character.id}
                            id={character.id}
                            image={character.image} />
                    })
                }
            </div>
        )
    }
}
export default CardContainer