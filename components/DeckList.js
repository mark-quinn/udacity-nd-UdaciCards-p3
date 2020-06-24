import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckList extends Component {
  handlePress = (title) => {
    const { navigation } = this.props;
    navigation.navigate("Deck", { title });
  };

  render() {
    const { decks } = this.props;
    return (
      <View>
        {decks.map((deck) => (
          <TouchableOpacity
            key={deck.title}
            name={deck.title}
            onPress={() => this.handlePress(deck.title)}
          >
            <Text>
              {deck.title}, {deck.questions.length} cards
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: Object.values(state),
  };
}

export default connect(mapStateToProps)(DeckList);
