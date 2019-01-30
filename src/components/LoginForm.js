import React, { Component } from 'react';
import { Text } from 'react-native';
import * as firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Auth Failed' });
          });
      });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'email'}
            value={email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder={'password'}
            label={'password'}
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
