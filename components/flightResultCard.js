import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Button
} from "native-base";
import LocationPicker, { LocationBar } from "./locationpicker";
export default class flightsCard extends Component {
  render() {
    const { price } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header bordered>
              <LocationBar loc={{ name: "Munich", time: 5 }} />
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Button
            style={{ backgroundColor: "#353B50", width: 300, borderRadius: 5 }}
          >
            <Icon name="wallet" style={{ color: "white" }} />

            <Text
              style={{
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 10
              }}
            >
              Pay Here {price}
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

//http://4d62571d.ngrok.io/api/flights-offers?originLocationCode=MDQ&destinations[]=BKK&destinations[]=LHT&days[]=4&days[]=5&departureDate=2020-01-01&adults=1&children=0
