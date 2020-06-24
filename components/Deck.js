import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class Deck extends Component {
  render() {
    return (
      <View>
        <Text>Deck</Text>
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

export default connect(mapPropsToState)(Deck);
