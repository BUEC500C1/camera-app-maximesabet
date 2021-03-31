// import 'react-native-gesture-handler';
// import React, { Component } from 'react';
// import {Platform, Text, View, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import MapView from "react-native-maps";

// export default class App extends Component{
//   render() {
//     return (
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     );
//   }
// };







//
//
//

import * as React from 'react';
import {Button, View, Text, Platform, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapView from "react-native-maps";

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to something else"
        onPress={() => navigation.navigate('Details2')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }

function DetailsScreen2({navigation}) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}


const Stack = createStackNavigator();

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;