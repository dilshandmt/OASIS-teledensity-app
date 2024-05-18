
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SigninScreen from './src/screens/SigninScreen';

export default function App() {
  return (
    <View style={styles.root}>
      <SigninScreen/>
    </View>
     );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
