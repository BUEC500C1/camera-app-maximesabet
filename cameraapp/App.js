import React, { Component } from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';
import MapView from "react-native-maps";


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class App extends Component{
  render() {
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
}

