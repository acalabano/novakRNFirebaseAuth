/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCARqrSLkRKBU9z6YFaDRsHLBLJF1KKkK0',
        authDomain: 'rn-firebase-auth-23e09.firebaseapp.com',
        databaseURL: 'https://rn-firebase-auth-23e09.firebaseio.com',
        projectId: "rn-firebase-auth-23e09",
        storageBucket: "rn-firebase-auth-23e09.appspot.com",
        messagingSenderId: "42980490586"
    });
  }
  render() {
    return (
        <View style={styles.container}>
            <LoginForm />
            <Text style={styles.instructions}>
            To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;