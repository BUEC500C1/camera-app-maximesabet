<<<<<<< Updated upstream
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
=======
//MAP:

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


//Camera:


// import React from 'react';
// import {View, TouchableOpacity, Image} from 'react-native';
// import {RNCamera} from 'react-native-camera';
// export default class CameraView extends React.Component {
//   state = {};
//   render() {
//     return (
//       <View
//         style={{
//           width: '100%',
//           height: '100%',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//         }}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={{width: '100%', height: '100%', position: 'absolute'}}
//           type={RNCamera.Constants.Type.back}
//         />
//         <Image
//           style={{width: 100, height: 100}}
//           source={{uri: this.state.imageUri}}
//         />
//         <TouchableOpacity
//           style={{
//             width: 80,
//             height: 80,
//             backgroundColor: 'blue',
//             borderRadius: 100,
//           }}
//           onPress={async () => {
//             // take picture
//             const result = await this.camera.takePictureAsync();
//             this.setState({imageUri: result.uri});
//           }}
//         />
//       </View>
//     );
//   }
// }





// MAP with camera navigation:

// **********



// import * as React from 'react';
// import {Button, View, Text, Platform, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import MapView from "react-native-maps";
// import {RNCamera} from 'react-native-camera';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Map"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title="Go to camera"
//         onPress={() => navigation.navigate('Details2')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
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

// function DetailsScreen2({navigation}) {
//   state = {};
//     return (
//       <View
//         style={{
//           width: '100%',
//           height: '100%',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//         }}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={{width: '100%', height: '100%', position: 'absolute'}}
//           type={RNCamera.Constants.Type.back}
//         />
//         <Image
//           style={{width: 100, height: 100}}
//           source={{uri: this.state.imageUri}}
//         />
//         <TouchableOpacity
//           style={{
//             width: 80,
//             height: 80,
//             backgroundColor: 'blue',
//             borderRadius: 100,
//           }}
//           onPress={async () => {
//             // take picture
//             const result = await this.camera.takePictureAsync();
//             this.setState({imageUri: result.uri});
//           }}
//         />
//       </View>
//     );
//   }



// const Stack = createStackNavigator();

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Overview'}}
//         />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Details2" component={DetailsScreen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




//
//
//
//
//
//










//  map with multiple navigation:



// import * as React from 'react';
// import {Button, View, Text, Platform, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import MapView from "react-native-maps";

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Map"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title="Go to something else"
//         onPress={() => navigation.navigate('Details2')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
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

// function DetailsScreen2({navigation}) {
//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     />
//   );
// }


// const Stack = createStackNavigator();

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Overview'}}
//         />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Details2" component={DetailsScreen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


///////
//////
//////
//////
// 



// Setting up firebase


// import 'react-native-gesture-handler';
// import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {LoginScreen, HomeScreen, RegistrationScreen} from './src/screens';
// import {decode, encode} from 'base-64';
// if (!global.btoa) {
//   global.btoa = encode;
// }
// if (!global.atob) {
//   global.atob = decode;
// }

// const Stack = createStackNavigator();

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           <Stack.Screen name="Home">
//             {props => <HomeScreen {...props} extraData={user} />}
//           </Stack.Screen>
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Registration" component={RegistrationScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
>>>>>>> Stashed changes
