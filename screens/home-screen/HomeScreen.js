import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {Container, Content, Header, Left, Body, Right, Title,
  Footer, FooterTab, Button, Icon, Thumbnail} from "native-base";
import UpcomingTrips from "./components/UpcomingTrips";

const HomeScreen = () => {
  return (
    <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{marginLeft: 10}}>
        <View style={styles.avatar}>
          <Thumbnail large source={require('../../assets/locations/avatar-1.jpg')} style={styles.thumbnail}/>
          <Text style={styles.welcome}>Welcome Smith Davis</Text>
        </View>
        <View style={{alignSelf:'center', paddingVertical: 30, flexDirection: 'row'}}>
          <TouchableOpacity style={{marginHorizontal:40}}>
            <Icon name="map" style={{fontSize: 40, color: 'green', alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center'}}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:40}}>
            <Icon name="airplane" style={{fontSize: 40, color: 'green', alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center'}}>Plan a Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:40}}>
            <Icon name="settings" style={{fontSize: 40, color: 'green', alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center'}}>Preferences</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.upcoming}>Upcoming Trips</Text>
        <ScrollView horizontal>
          <UpcomingTrips destinations="Paris - Frankuft - Munich" dates="10/12/2012 - 15/10/2012"/>
          <UpcomingTrips destinations="London - Lagos" dates="10/12/2012 - 15/10/2012"/>
          <UpcomingTrips destinations="France - New York - Washington" dates="10/12/2012 - 15/10/2012"/>
        </ScrollView>

        <View style={{alignSelf:'center', paddingVertical: 30, flexDirection: 'row'}}>
          <TouchableOpacity style={{marginHorizontal:40}}>
            <Icon name="mic" style={{fontSize: 60, color: 'green', alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center'}}></Text>
          </TouchableOpacity>
        </View>
        </Content>
      </Container>
  );
};

const styles = StyleSheet.create({
  upcoming: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10
  },
  avatar: {
    alignSelf: 'center',
    marginVertical: 15
  },
  thumbnail: {
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default HomeScreen;
