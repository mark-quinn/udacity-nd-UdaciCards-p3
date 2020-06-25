import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    correctAnswers: 0,
    totalQuestions: this.props.questions.length,
    displayAnswer: false,
  };

  handleToggle = () => {
    const { displayAnswer } = this.state;

    this.setState({
      displayAnswer: !displayAnswer,
    });
  };

  handleAnswer = (choice) => {
    console.log(choice);
    // TODO: currentQuestion + 1
    // TODO: answer correct + 1
  };

  render() {
    const { deck, questions } = this.props;
    const { currentQuestion, totalQuestions, displayAnswer } = this.state;

    if (questions === []) {
      return <Text>This Deck has no questions</Text>;
    }

    // TODO: once questions are done show % total of correct

    const question = questions[currentQuestion];

    return (
      <View>
        <Text>
          {currentQuestion + 1} / {totalQuestions}
        </Text>
        <Text>{displayAnswer ? question.answer : question.question}</Text>
        <TouchableOpacity onPress={this.handleToggle}>
          <Text style={styles.btn}>
            {displayAnswer ? "Show Question" : "Show Answer"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleAnswer("Correct")}>
          <Text style={styles.btnCorrect}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleAnswer("Incorrect")}>
          <Text style={styles.btnIncorrect}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    color: "#8B0000",
  },
  btnCorrect: {
    color: "#000",
    backgroundColor: "#008000",
  },
  btnIncorrect: {
    color: "#000",
    backgroundColor: "#8B0000",
  },
});

function mapStateToProps(state, { route }) {
  const deck = state[route.params.title];
  return {
    deck,
    questions: deck.questions,
  };
}

export default connect(mapStateToProps)(Quiz);
