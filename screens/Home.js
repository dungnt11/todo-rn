import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class extends React.Component {
  render() {
    return <View>
      <Text>Home screen</Text>
      <Button title="Go About" onPress={this.handleGoAbout.bind(this)}></Button>
    </View>
  }

  handleGoAbout = () => {
    this.props.navigation.goBack();
  }
}

const styles = StyleSheet.create({
 
})