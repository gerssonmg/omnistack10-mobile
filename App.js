import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barstyle="ligth-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  }
});
