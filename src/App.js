import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase/app';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDzYxTNjB71WsbWHVFTwCb8lEQ8QUx_D8I',
      authDomain: 'reactnativeauth-b7f79.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-b7f79.firebaseio.com',
      projectId: 'reactnativeauth-b7f79',
      storageBucket: 'reactnativeauth-b7f79.appspot.com',
      messagingSenderId: '584776982629',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
