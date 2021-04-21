import React from 'react';
import {ScrollView, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import {Appbar, TextInput, Button} from 'react-native-paper';

export default function Todos() {
  const dataa = firestore().collection('users').get().then((querySnapshot)=>{              
  const objectsArray = [];
  querySnapshot.forEach((user) => {
    objectsArray.push(user.data());
  });
  console.log(objectsArray);
});
  return null;
}
