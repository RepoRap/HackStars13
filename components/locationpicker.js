import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import {
  Form,
  Icon,
  InputGroup,
  Input,
  Button,
  Item,
  Label,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
import Styled from "styled-components";
import KeyboardShift from "../constants/Keyboard";

const LocationPicker = ({ locations }) => {
  return (
    <Fragment>
      <Wrapper>
        <Form>
          {locations.map(loc => (
            <LocationBar loc={loc} />
          ))}
          <Button
            onPress={this.onPress}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: 10
            }}
          >
            <Icon name="add" />
            <Text>More locations</Text>
          </Button>
        </Form>
      </Wrapper>
    </Fragment>
  );
};

const LocationBar = ({ loc }) => {
  return (
    <Card
      style={{
        width: 350,
        borderRadius: 20,
        borderColor: "black",
        shadowColor: "white"
      }}
      transparent
    >
      <CardItem bordered style={{ borderRadius: 5 }}>
        <Body style={{ display: "flex", flexDirection: "row" }}>
          <Item style={styles.location}>
            <Icon
              name="pin"
              style={{ color: "#353B50", alignSelf: "flex-start" }}
            />
            <Input value={loc.name} style={{ fontSize: 18 }} />
          </Item>
          <Item style={styles.time}>
            <Icon
              name="calender"
              style={{ color: "#353B50", alignSelf: "flex-start" }}
            />
            <Input value={loc.stayDuration} style={{ fontSize: 18 }} />
          </Item>
        </Body>
      </CardItem>
    </Card>
  );
};

const BarWrapper = Styled.View`
background-color: lightgrey;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 10px;
height: 51px;
width:  350px;
padding: 20px;
margin-bottom: 10px;

`;
const Wrapper = Styled.View`
background-color: rgba(255, 255, 255, 0.1078);
display: flex;
align-items: center;
border-radius: 10px;
padding: 10px;
justify-content: center;

`;

const styles = StyleSheet.create({
  location: {
    width: 200,
    borderBottomColor: "white",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10
  },
  time: {
    width: 100,
    borderBottomColor: "white",
    padding: 10
  }
});

export default LocationPicker;

export { LocationBar };
