import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ChatbotScreen from "../screens/chatbot-screen/chatbotScreen";
import HomeScreen from "../screens/home-screen/HomeScreen";

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
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
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

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ChatbotStack
});

tabNavigator.path = "";

export default tabNavigator;
