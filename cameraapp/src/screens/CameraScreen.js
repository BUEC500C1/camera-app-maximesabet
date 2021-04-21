import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';

export default class CameraView extends React.Component {
  state = {};

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{width: '100%', height: '100%', position: 'absolute'}}
          type={RNCamera.Constants.Type.back}
        />
        <Image
          style={{width: 100, height: 100}}
          source={{uri: this.state.imageUri}}
        />
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: 'blue',
            borderRadius: 100,
          }}
          onPress={async () => {
            // take picture
            const result = await this.camera.takePictureAsync();
            this.setState({imageUri: result.uri});
            this.props.navigation.navigate("Upload", {image:this.state.imageUri})
          }}
        />
      </View>
    );
  }
}
