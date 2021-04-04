import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3DyYF_0ELR_AoNwaA2VWB9lB9bTRNOEo',
  authDomain: 'cameraappmaximeec505.firebaseapp.com',
  databaseURL: 'https://cameraappmaximeec505-default-rtdb.firebaseio.com/',
  projectId: 'cameraappmaximeec505',
  storageBucket: 'cameraappmaximeec505.appspot.com',
  messagingSenderId: '884083471455',
  appId: '1:884083471455:ios:f85037dedf269c67efd7ea',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
