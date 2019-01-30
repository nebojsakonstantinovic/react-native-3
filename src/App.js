import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import * as firebase from 'firebase/app';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDzYxTNjB71WsbWHVFTwCb8lEQ8QUx_D8I',
      authDomain: 'reactnativeauth-b7f79.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-b7f79.firebaseio.com',
      projectId: 'reactnativeauth-b7f79',
      storageBucket: 'reactnativeauth-b7f79.appspot.com',
      messagingSenderId: '584776982629',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
