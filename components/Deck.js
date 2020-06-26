import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

class Deck extends Component {
  handleNav = (option) => {
    const { navigation, deck } = this.props;
    navigation.navigate(option, { title: deck.title });
  };

  render() {
    const { deck } = this.props;
    const { title, questions } = deck;

    return (
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <TouchableOpacity onPress={() => this.handleNav("Add")}>
          <Text style={styles.btnAdd}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleNav("Quiz")}>
          <Text style={styles.btnStart}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapPropsToState(state, { route }) {
  const deck = state[route.params.title];
  return {
    deck,
  };
}

const styles = StyleSheet.create({
  btnAdd: {
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
  },
  btnStart: {
    padding: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
});

export default connect(mapPropsToState)(Deck);
