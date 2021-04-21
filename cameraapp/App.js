//Authentification

import React from 'react';
import {AuthProvider} from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}