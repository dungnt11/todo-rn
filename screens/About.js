import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class extends React.Component {

  render() {
    return <View>
      <Text>About screen</Text>
      <Button title="Go home screen" onPress={this.handleGoHome.bind(this)}></Button>
    </View>
  }

  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  }
}

const styles = StyleSheet.create({
})