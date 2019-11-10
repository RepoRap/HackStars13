import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ChatbotScreen from "../screens/chatbot-screen/chatbotScreen";
import HomeScreen from "../screens/home-screen/HomeScreen";
import CardScreen from "../screens/cards-screen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = "";

const ChatbotStack = createStackNavigator(
  {
    Chatbot: ChatbotScreen
  },
  config
);

ChatbotStack.navigationOptions = {
  tabBarLabel: "Chatbot",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-mic" : "md-mic"}
    />
  )
};

ChatbotStack.path = "";
const CardStack = createStackNavigator(
  {
    CardScreen: CardScreen
  },
  config
);

CardStack.navigationOptions = {
  tabBarLabel: "cardScreen",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-mic" : "md-mic"}
    />
  )
};

CardStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ChatbotStack,
  CardStack
});

tabNavigator.path = "";

export default tabNavigator;
