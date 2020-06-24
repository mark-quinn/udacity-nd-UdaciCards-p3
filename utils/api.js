import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "UdaciCards:decks";

export function getDecks() {}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(
    (results) => JSON.parse(results)[id]
  );
}

export function saveDeckTitle(title) {
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [title]: {} })
  ).catch((err) => console.warn(err));
}

export function addCardToDeck(title, card) {}
