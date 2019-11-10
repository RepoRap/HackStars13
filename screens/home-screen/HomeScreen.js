import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon,
  Thumbnail
} from "native-base";
import UpcomingTrips from "./components/UpcomingTrips";
import DateInput from "../../components/dateInput";
import LocationPicker from "../../components/locationpicker";
import { loadAsync } from "expo-font";

const locations = [
  { name: "Mogadishu", stayDuration: "5" },
  { name: "Ibiza", stayDuration: "10" },
  { name: "Bali", stayDuration: "20" }
];
const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Tribo</Title>
        </Body>
        <Right />
      </Header>
      <Content
        style={{
          marginLeft: 10,
          flex: 1,
          display: "flex"
        }}
        ScrollView
      >
        <View style={styles.avatar}>
          <Thumbnail
            large
            source={require("../../assets/locations/avatar-1.jpg")}
            style={styles.thumbnail}
          />
          <Text style={styles.welcome}>Welcome Smith Davis</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            paddingVertical: 30,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity style={{ marginHorizontal: 40 }}>
            <Icon
              name="map"
              style={{ fontSize: 40, color: "green", alignSelf: "center" }}
            />
            <Text style={{ alignSelf: "center" }}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 40 }}>
            <Icon
              name="airplane"
              style={{ fontSize: 40, color: "green", alignSelf: "center" }}
            />
            <Text style={{ alignSelf: "center" }}>Plan a Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 40 }}>
            <Icon
              name="settings"
              style={{ fontSize: 40, color: "green", alignSelf: "center" }}
            />
            <Text style={{ alignSelf: "center" }}>Preferences</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.upcoming}>Explore</Text>
        <ScrollView horizontal>
          <UpcomingTrips
            destinations="Paris - Frankuft - Munich"
            dates="10/12/2012 - 15/10/2012"
          />
          <UpcomingTrips
            destinations="London - Lagos"
            dates="10/12/2012 - 15/10/2012"
          />
          <UpcomingTrips
            destinations="France - New York - Washington"
            dates="10/12/2012 - 15/10/2012"
          />
        </ScrollView>
        <DateInput />
        <ScrollView>
          <LocationPicker
            style={{
              alignSelf: "center",
              paddingVertical: 30
            }}
            locations={locations}
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  upcoming: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10
  },
  avatar: {
    alignSelf: "center",
    marginVertical: 15
  },
  thumbnail: {
    alignSelf: "center"
  },
  welcome: {
    fontSize: 20,
    marginVertical: 10
  },
  background: {
    backgroundColor: "#e66465"
  }
});

export default HomeScreen;
