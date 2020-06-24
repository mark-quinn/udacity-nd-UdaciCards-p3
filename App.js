import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewDeck from "./components/NewDeck";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import Deck from "./components/Deck";
import { setInitialData } from "./utils/api";

const Stack = createStackNavigator();

export default function App() {
  setInitialData();
  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="New">
          <Stack.Screen name="New" component={NewDeck} />
          <Stack.Screen name="Deck" component={Deck} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
