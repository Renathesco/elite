import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Container, Header, Left, Right, Icon, Text } from 'native-base';
import wifi from 'react-native-android-wifi';
import {permissionWifi} from '../../../util/Util';
import ModalNetwork from './modal/ModalNetwork';

class Home extends React.Component {
  state = {
    dataNetwork: [],
  };

  componentDidMount() {
    permissionWifi();
    wifi.loadWifiList(
      wifiStringList => {
        var wifiArray = JSON.parse(wifiStringList);
        console.log(wifiArray);
      },
      error => {
        console.log(error);
      },
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row' }}>
            <Icon
              onPress={() => this.props.navigation.openDrawer()}
              name="md-menu"
              style={{ color: 'white', marginRight: 15 }}
            />
          </Left>
          <Right>
            <Icon name="md-cart" style={{ color: 'white' }} />
          </Right>
        </Header>
        <View style={{ marginTop: 100, marginLeft: 100 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Text>Go to notifications</Text>
          </Button>
          <ModalNetwork />
        </View>
      </Container>
    );
  }
}

export default Home;
