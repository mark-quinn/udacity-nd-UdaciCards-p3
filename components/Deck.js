import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

class Deck extends Component {
  handleAddCard = () => {
    const { navigation, deck } = this.props;
    navigation.navigate("Add", { title: deck.title });
  };

  handleStart = () => {};

  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>X cards</Text>
        <TouchableOpacity onPress={this.handleAddCard}>
          <Text style={styles.btnAdd}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleStart}>
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
