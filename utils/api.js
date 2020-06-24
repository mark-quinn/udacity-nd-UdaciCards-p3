import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "UdaciCards:decks";

const decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export function getDecks() {}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(
    (results) => JSON.parse(results)[id]
  );
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [title]: {} })
  ).catch((err) => console.warn(err));
}

export function addCardToDeck(title, card) {}

export function setInitialData() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
  return decks;
}
