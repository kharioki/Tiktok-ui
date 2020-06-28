import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './config/router';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <Tabs />
      </View>
    </NavigationContainer>
  );
};

export default App;
