import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/api";

class NewDeck extends Component {
  state = {
    title: null,
  };

  handleTextChange = (title) => {
    this.setState({
      title,
    });
  };

  handleSubmit = () => {
    const { title } = this.state;

    this.props.dispatch(addDeck(title));

    // TODO: if Deck exists, show warning and do not save.
    saveDeckTitle(title);

    // TODO: Nav to new individual Deck view
  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleTextChange}
          placeholder="Deck Title"
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text style={styles.btn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
  },
  btn: {
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
  },
});

export default connect()(NewDeck);
