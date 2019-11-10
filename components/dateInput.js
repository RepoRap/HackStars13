import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet } from "react-native";
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
  Thumbnail,
  DatePicker
} from "native-base";
import Styled from "styled-components";

class DateInput extends React.Component {
  state = {
    /**
     *  types : return , one way
     */

    type: null,
    date: new Date()
  };

  setDate = newDate => {
    this.setState({
      date: newDate
    });
  };
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Icon name="map" style={{ color: "white" }} />
          <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date()}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            style={{ flex: 1, flexDirection: "column" }}
          />
        </Wrapper>
      </Fragment>
    );
  }
}

const Wrapper = Styled.View`
background-color: rgba(255, 255, 255, 0.1078);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 10px;
height: 51px
width: 152px;
padding: 10px;

justify-content: center;




`;

export default DateInput;
