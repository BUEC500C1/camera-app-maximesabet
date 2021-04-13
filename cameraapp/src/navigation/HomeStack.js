import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import UploadScreen from '../screens/UploadScreen';
import StorageScreen from '../screens/StorageScreen';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
      <Stack.Screen name="Storage" component={StorageScreen} />
    </Stack.Navigator>
  );
}
