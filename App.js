import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import {Container} from 'native-base';
import Notifications from './app/src/screens/Notifications';
import Home from './app/src/screens/Home';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Notifications: {
    screen: Notifications,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  render() {
    return (
      <Container>
        <MyApp />
      </Container>
    );
  }
}

export default App;
