import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';

export default function HomeScreen({navigation}) {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.email}</Text>
      <FormButton
        buttonTitle="Map"
        onPress={() => navigation.navigate('Map')}
      />
      <FormButton
        buttonTitle="Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      {/* <FormButton
        buttonTitle="Storage"
        onPress={() => navigation.navigate('Storage')}
      /> */}
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
