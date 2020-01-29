import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import * as Font from 'expo-font';

export default class extends React.Component {
  state = {
    loadFont: false
  }
  async componentDidMount() {
    const { loadFont } = this.state;
    if (!loadFont) {
      await Font.loadAsync({
        'SigmarOne': require('../assets/fonts/SigmarOne-Regular.ttf'),
      });
      this.setState({ loadFont: true })
    };
  }

  render() {
    const { loadFont } = this.state;
    return <View style={styles.header}>
      <Text style={styles.title} h2>
        { loadFont ? <Text style={{ fontFamily: 'SigmarOne', fontSize: 56 }}>My todos</Text> : null }
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
  }
});