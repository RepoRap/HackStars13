import React, {Component} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import { Image } from 'react-native';
import {
  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body
} from 'native-base';

const UpcomingTrips = ({destinations, dates}) => {
  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <CardItem>
          <Body>
          <View style={styles.container}>
            <Image
              source={require('../../../assets/locations/image-1.jpg')}
              style={styles.image}/>

              <Text style={styles.title}>
              {destinations}
              </Text>

              <View style={styles.content}>
              <Text>{dates}</Text>
              </View>
          </View>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignSelf: 'center'
  },
  image: {
    marginLeft: -18,
    marginTop: -14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 200,
    width: 301,
    flex: 1
  },
  container: {
    width: 299,
  },
  title: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    paddingRight: 20,
    fontSize: 11
  }
});

export default UpcomingTrips;
