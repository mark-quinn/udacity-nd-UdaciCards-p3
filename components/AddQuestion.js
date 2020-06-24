import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

class AddQuestion extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleTextChange = (name) => {
    return (text) => {
      this.setState({ [name]: text });
    };
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { dispatch } = this.props;

    if (question && answer) {
      // TODO: dispatch new question event
      // TODO: add to local store
      // TODO: nav to Deck
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={this.handleTextChange("question")}
          placeholder="Ask a question"
          value={this.state.question}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleTextChange("answer")}
          placeholder="Answer"
          value={this.state.answer}
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

function mapStateToProps(state, { route }) {
  const deck = state[route.params.title];
  return {
    deck,
  };
}

export default connect(mapStateToProps)(AddQuestion);
