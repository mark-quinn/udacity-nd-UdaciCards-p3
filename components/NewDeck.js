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
import { saveDeckTitle, getDeck } from "../utils/api";

class NewDeck extends Component {
  state = {
    title: "",
  };

  handleTextChange = (title) => {
    this.setState({
      title,
    });
  };

  handleSubmit = () => {
    const { title } = this.state;
    const { navigation } = this.props;

    if (title === "") {
      return;
    }

    getDeck(title).then((deck) => {
      if (deck === undefined) {
        this.props.dispatch(addDeck(title));
        saveDeckTitle(title).then(() =>
          navigation.navigate("Deck", { title })
        );
      }
      this.setState({
        title: "",
      });
    });
  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleTextChange}
          placeholder="Deck Title"
          value={this.state.title}
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
