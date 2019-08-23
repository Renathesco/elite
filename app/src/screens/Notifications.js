import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
class Notifications extends React.Component {
  render() {
    return (
      <View style={{marginTop: 100, marginLeft: 100}}>
        <Button onPress={() => this.props.navigation.goBack()}>
          <Text>Go back home</Text>
        </Button>
      </View>
    );
  }
}

export default Notifications;
